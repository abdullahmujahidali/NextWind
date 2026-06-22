// Single source of truth for facts that would otherwise drift out of sync
// across the site (years of experience, project count, etc.).
//
// Edit the inputs here ONCE — every page derives from these.

// The year the career started. Years of experience is computed from this,
// so it never goes stale.
export const CAREER_START_YEAR = 2016

// Total projects shipped. Derived from the projects list so it stays in
// sync when a project is added — see src/app/projects/page.jsx, which builds
// this from featuredProjects + otherProjects.
export const PROJECTS_SHIPPED = 19

// Research citations (Google Scholar). Update manually when it moves.
export const RESEARCH_CITATIONS = 389

// Computed at build/render time — always current, never hardcoded.
export const yearsOfExperience = new Date().getFullYear() - CAREER_START_YEAR
