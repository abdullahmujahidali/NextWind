import { LearnPage, PageHeader } from '../ui'
import { wordBank } from '../phases'

export const metadata = {
  title: 'Word bank — Learn to Code',
  description: 'Plain-English meanings for the jargon you’ll meet.',
}

export default function GlossaryPage() {
  return (
    <LearnPage>
      <PageHeader
        title="Word bank"
        intro="Forgot what something means? It’s probably here. Come back any time."
      />
      <dl className="mt-8 space-y-3">
        {wordBank.map(([word, meaning]) => (
          <div key={word} className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
            <dt className="w-36 flex-none font-medium text-zinc-900">{word}</dt>
            <dd className="text-[15px] text-zinc-600">{meaning}</dd>
          </div>
        ))}
      </dl>
    </LearnPage>
  )
}
