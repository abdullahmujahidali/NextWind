import { LearnPage, PageHeader, ToolCard, Note } from '../ui'
import { TOOLS } from '../content'

export const metadata = {
  title: 'AI tools for coding — Learn to Code',
  description: 'ChatGPT, Claude, Gemini and friends, and which to start with.',
}

export default function ToolsPage() {
  return (
    <LearnPage>
      <PageHeader
        title="Tools that help you code"
        intro="Used the right way, AI tools make you learn faster — ask them to explain an error or quiz you, not to do your work."
      />
      <p className="mt-5 text-[15px] leading-relaxed text-zinc-700">
        Here are the ones worth knowing. For coding specifically,{' '}
        <b>I’d start with Claude</b>; it tends to give the clearest explanations
        and the most reliable code.
      </p>
      <div className="mt-6 space-y-3">
        {TOOLS.map((t) => (
          <ToolCard key={t.name} {...t} />
        ))}
      </div>
      <Note className="mt-6">
        <b>The rule, again:</b> understand it first, then use these to go faster.
        They’re brilliant assistants and terrible substitutes for actually
        knowing your craft.
      </Note>
    </LearnPage>
  )
}
