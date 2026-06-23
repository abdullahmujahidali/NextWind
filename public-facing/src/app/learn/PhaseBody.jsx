import { RichText } from './RichText'
import { YouTubeIcon } from './icons'

const calloutStyles = {
  lowspec: 'border-primary/40 bg-primary-100/50',
  note: 'border-amber-300/70 bg-amber-50',
}

function Callout({ kind, html }) {
  return (
    <div
      className={`my-4 rounded-xl border border-l-4 p-4 text-sm leading-relaxed text-zinc-700 ${calloutStyles[kind] || calloutStyles.note}`}
    >
      <RichText html={html} />
    </div>
  )
}

function Block({ label, children }) {
  return (
    <div className="mt-7">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500">
        {label}
      </h3>
      {children}
    </div>
  )
}

function SetupLinks({ groups }) {
  return (
    <Block label="Step-by-step setup guides">
      <p className="mb-3 text-sm text-zinc-500">
        Installing things is the most annoying part, and Windows trips people up
        more than Mac. These walk you through it.
      </p>
      <div className="space-y-4">
        {groups.map((g) => (
          <div key={g.title}>
            <p className="mb-1.5 text-sm font-medium text-zinc-700">{g.title}</p>
            <div className="flex flex-col gap-2">
              {g.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-zinc-200 px-3 py-2 text-sm text-zinc-700 no-underline transition-colors hover:border-primary/50 hover:bg-primary-100/30"
                >
                  <span className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs font-medium text-zinc-500">
                    {l.tag}
                  </span>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Block>
  )
}

// Renders one phase's full content (used by each phase page).
export function PhaseBody({ p }) {
  return (
    <div>
      <p className="text-lg leading-relaxed text-zinc-600">{p.why}</p>

      <Block label="What to learn">
        <ul className="ml-5 list-disc space-y-2 text-[15px] leading-relaxed text-zinc-700">
          {p.learn.map((li, i) => (
            <li key={i}>
              <RichText html={li} />
            </li>
          ))}
        </ul>
      </Block>

      {p.setup && <SetupLinks groups={p.setup} />}

      {p.callout && <Callout kind={p.callout.kind} html={p.callout.html} />}

      <Block label="Videos to watch">
        <div className="flex flex-col gap-2">
          {p.videos.map((v, i) => (
            <a
              key={i}
              href={v.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2.5 rounded-lg border px-3.5 py-2.5 text-sm font-medium no-underline transition-colors ${
                v.main
                  ? 'border-primary/50 bg-primary-100/50 text-primary-800 hover:bg-primary-100'
                  : 'border-zinc-200 text-zinc-700 hover:border-primary/50 hover:bg-primary-100/30'
              }`}
            >
              <YouTubeIcon className="h-4 w-4 flex-none text-red-500" />
              <span className="flex-1">{v.label}</span>
              {v.main && (
                <span className="rounded bg-primary px-1.5 py-0.5 text-[11px] font-semibold text-white">
                  Start here
                </span>
              )}
            </a>
          ))}
        </div>
      </Block>

      <Block label="Practice on your own">
        <ul className="ml-5 list-disc space-y-2 text-[15px] leading-relaxed text-zinc-700">
          {p.practice.map((li, i) => (
            <li key={i}>
              <RichText html={li} />
            </li>
          ))}
        </ul>
      </Block>

      <Block label="Build this">
        <div className="rounded-xl border border-primary/30 bg-primary-100/50 p-4 text-[15px] leading-relaxed text-zinc-800">
          <RichText html={p.project} />
        </div>
      </Block>

      <div className="mt-6 rounded-xl bg-zinc-100 px-4 py-3 text-[15px] text-zinc-700">
        <b className="text-zinc-900">Move on when:</b> {p.ready}
      </div>
    </div>
  )
}
