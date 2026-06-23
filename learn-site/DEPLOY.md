# Deploying `learn.abdullahmujahidali.com`

This folder is a self-contained **Cloudflare Pages** site:

```
learn-site/
├── index.html              ← the roadmap page + chatbot UI
└── functions/
    └── api/
        └── ask.js          ← server-side Gemini proxy (keeps the API key secret)
```

The page is plain static HTML. The chatbot calls `/api/ask`, which Cloudflare runs as a
serverless function. The Gemini API key lives only on Cloudflare as a secret — it is never
sent to the browser.

---

## 1. Get a free Gemini API key (2 min)

1. Go to **https://aistudio.google.com/apikey**
2. Sign in with a Google account.
3. Click **Create API key** → copy it. (Free tier is plenty for a study helper.)

Keep this key private. If it ever leaks, delete it on that page and make a new one.

---

## 2. Create the Cloudflare Pages project

### Option A — Dashboard (no terminal)

1. Push `learn-site/` to a GitHub repo (or use Direct Upload, below).
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Pick the repo. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/` (or `learn-site` if the repo root is one level up)
4. Deploy. You'll get a `*.pages.dev` URL.

### Option B — Direct upload via Wrangler (fastest, no Git needed)

```bash
cd learn-site
npx wrangler pages deploy . --project-name learn-abdullah
```

(First run will prompt you to log in to Cloudflare.)

---

## 3. Add the secret key

**Dashboard:** Pages project → **Settings** → **Variables and Secrets** →
**Add** → type `GEMINI_API_KEY`, paste the key, choose **Encrypt/Secret** → Save →
**redeploy** so it takes effect.

**Wrangler:**
```bash
npx wrangler pages secret put GEMINI_API_KEY --project-name learn-abdullah
# paste the key when prompted
```

Without this secret the page still loads fine; the chatbot just shows
"The AI helper isn't configured yet."

---

## 4. Point the subdomain at it (Cloudflare DNS)

Since the domain is already on Cloudflare:

1. Pages project → **Custom domains** → **Set up a custom domain**.
2. Enter `learn.abdullahmujahidali.com`.
3. Cloudflare auto-creates the CNAME and provisions HTTPS. Done in a minute or two.

Visit **https://learn.abdullahmujahidali.com** — page loads, chatbot works.

---

## 5. Test the chatbot locally before deploying (optional)

```bash
cd learn-site
echo "GEMINI_API_KEY=your-key-here" > .dev.vars   # do NOT commit this file
npx wrangler pages dev .
```

Open the local URL it prints. The `/api/ask` function runs for real with your key.
`.dev.vars` is local-only; add it to `.gitignore`.

---

## Things to set before sharing widely

- **LinkedIn URL** in `index.html` (contact box near the bottom) — confirm it's correct.
- **Discord invite** in the contact box — currently a placeholder `https://discord.gg/`.
  Replace with a real invite or remove that link.
- **Rate limit** in `ask.js` (`RATE`) is per-instance and in-memory — fine for a personal
  share. If this ever gets heavy traffic, move to Cloudflare KV / Turnstile.
