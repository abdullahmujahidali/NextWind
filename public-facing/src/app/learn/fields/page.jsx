import { LearnPage, PageHeader, FieldCard } from '../ui'
import { FIELDS } from '../content'

export const metadata = {
  title: 'Kinds of work in tech — Learn to Code',
  description: 'The main paths in tech and how AI is changing each one.',
}

export default function FieldsPage() {
  return (
    <LearnPage>
      <PageHeader
        title="What kind of work is out there?"
        intro="“Tech” isn’t one job. Here are the main paths people take, what each really involves, and how AI is changing it. This roadmap points mostly at the first one, but it’s worth knowing the whole map."
      />
      <p className="mt-5 text-[15px] leading-relaxed text-zinc-700">
        The honest theme across all of them: AI now does the easy, repetitive
        parts, so the people who understand <i>how things actually work</i> stay
        valuable.
      </p>
      <div className="mt-6 space-y-4">
        {FIELDS.map((f) => (
          <FieldCard key={f.name} {...f} />
        ))}
      </div>
    </LearnPage>
  )
}
