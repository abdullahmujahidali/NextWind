// Render the small inline HTML (<b>, <code>, <i>) that the roadmap content uses.
export function RichText({ html, className = '' }) {
  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />
}
