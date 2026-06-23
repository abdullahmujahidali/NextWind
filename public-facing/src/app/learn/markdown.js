import { phases, phaseShortTitle, habits, wordBank } from './phases'

// Strip the inline HTML tags the content uses (<b>, <i>, <code>) back to plain
// text / Markdown so the export reads cleanly in Notion or any editor.
function clean(html) {
  return html
    .replace(/<\/?b>/g, '**')
    .replace(/<\/?i>/g, '_')
    .replace(/<\/?code>/g, '`')
    .replace(/<[^>]+>/g, '')
}

export function buildMarkdown() {
  const out = []
  const push = (s = '') => out.push(s)

  push('# Learn to build software, from scratch')
  push()
  push(
    'A step-by-step plan for anyone who wants to become a developer. The order I’d learn things in today — one step at a time, with a video for each. Nothing here costs money.',
  )
  push()
  push('> Roughly a 1.5–3 year journey. First website online in ~6 months, first full app in ~1 year. Consistency beats speed.')
  push()

  push('## What you’ll be able to build')
  push()
  push('This isn’t just watching tutorials. By the end you’ll have real things online that you made yourself — and the skills people actually get paid for.')
  push()
  push('- **~6 months in:** your first website online, with a link you can share.')
  push('- **~1 year in:** a full app — login, database, the works — live on the internet.')
  push('- **By the end:** a portfolio of real projects, ready for freelance work or a junior dev job.')
  push('- **The whole time:** you learn by building, not just watching. Every phase ends with something real.')
  push()

  push('## How this works')
  push()
  push('Do the steps in order — each builds on the last. For every phase: watch the main video first, type the code yourself, then build the small project at the end. That last part is where the learning happens. You’ll feel lost sometimes; that’s normal.')
  push()
  push('**You don’t need a powerful computer.** An old laptop is fine. Phone-only? Use Replit (https://replit.com) or Google Colab (https://colab.research.google.com).')
  push()

  push('## Two accounts to set up early')
  push()
  push('- **GitHub** — https://github.com/signup — where your code lives online and your proof that you can build. People look here before anything else.')
  push('- **LinkedIn** — https://www.linkedin.com/signup — where recruiters and clients find you. Post the small things you build.')
  push()

  push('## Tools that help you code')
  push()
  push('Ask them to explain errors or quiz you — not to do your work. For coding, start with **Claude**.')
  push()
  push('- **Claude** (recommended) — https://claude.ai — clearest explanations and most reliable code.')
  push('- **ChatGPT** — https://chatgpt.com — solid all-rounder.')
  push('- **Gemini** — https://gemini.google.com — generous free tier, good second opinion.')
  push('- **Cursor / GitHub Copilot** (later) — https://cursor.com — AI in your editor; wait until the basics are solid.')
  push()

  push('## The phases')
  push()
  for (const p of phases) {
    const num = p.n.replace('Phase ', '')
    push(`### ${num}. ${phaseShortTitle(p)}  _(${p.time})_`)
    push()
    push(clean(p.why))
    push()

    push('**What to learn**')
    push()
    for (const li of p.learn) push(`- ${clean(li)}`)
    push()

    if (p.setup) {
      push('**Setup guides**')
      push()
      for (const g of p.setup) {
        push(`- ${g.title}`)
        for (const l of g.links) push(`  - ${l.tag}: ${l.label} — ${l.href}`)
      }
      push()
    }

    if (p.callout) {
      push(`> ${clean(p.callout.html)}`)
      push()
    }

    push('**Videos to watch**')
    push()
    for (const v of p.videos) {
      push(`- ${v.main ? '⭐ ' : ''}${v.label} — ${v.href}`)
    }
    push()

    push('**Practice on your own**')
    push()
    for (const li of p.practice) push(`- ${clean(li)}`)
    push()

    push(`**Build this:** ${clean(p.project)}`)
    push()
    push(`**Move on when:** ${clean(p.ready)}`)
    push()
    push('---')
    push()
  }

  push('## Habits that pay off')
  push()
  for (const [h, why] of habits) push(`- **${h}.** ${why}`)
  push()

  push('## Word bank')
  push()
  for (const [word, meaning] of wordBank) push(`- **${word}** — ${meaning}`)
  push()

  push('## A few honest things')
  push()
  push('- You’ll often feel like you’re not smart enough. It isn’t true. Keep going.')
  push('- Don’t chase every new tool. Get the basics solid.')
  push('- Use AI to go faster *after* you understand, not instead of understanding.')
  push('- Some weeks click, some don’t. Just keep showing up.')
  push()
  push('_Put together by Abdullah Mujahid Ali — abdullahmujahidali1@gmail.com_')
  push()

  return out.join('\n')
}

// Trigger a download of the Markdown file in the browser.
export function downloadMarkdown() {
  const md = buildMarkdown()
  const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'learn-to-code-roadmap.md'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
