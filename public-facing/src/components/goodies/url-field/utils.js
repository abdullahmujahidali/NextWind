/**
 * URL parsing utilities
 * Adopted from the codebase of dub.co
 */

export const SECOND_LEVEL_DOMAINS = new Set(['com', 'co', 'net', 'org', 'edu', 'gov', 'in'])

export const SPECIAL_APEX_DOMAINS = new Set([
  'my.id',
  'github.io',
  'vercel.app',
  'now.sh',
  'pages.dev',
  'webflow.io',
  'netlify.app',
  'fly.dev',
  'web.app',
])

const ccTLDs = new Set([
  'af', 'ax', 'al', 'dz', 'as', 'ad', 'ao', 'ai', 'aq', 'ag', 'ar', 'am', 'aw', 'ac', 'au', 'at', 'az',
  'bs', 'bh', 'bd', 'bb', 'eus', 'by', 'be', 'bz', 'bj', 'bm', 'bt', 'bo', 'bq', 'an', 'nl', 'ba', 'bw',
  'bv', 'br', 'io', 'vg', 'bn', 'bg', 'bf', 'mm', 'bi', 'kh', 'cm', 'ca', 'cv', 'cat', 'ky', 'cf', 'td',
  'cl', 'cn', 'cx', 'cc', 'co', 'km', 'cd', 'cg', 'ck', 'cr', 'ci', 'hr', 'cu', 'cw', 'cy', 'cz', 'dk',
  'dj', 'dm', 'do', 'tl', 'tp', 'ec', 'eg', 'sv', 'gq', 'er', 'ee', 'et', 'eu', 'fk', 'fo', 'fm', 'fj',
  'fi', 'fr', 'gf', 'pf', 'tf', 'ga', 'gal', 'gm', 'ps', 'ge', 'de', 'gh', 'gi', 'gr', 'gl', 'gd', 'gp',
  'gu', 'gt', 'gg', 'gn', 'gw', 'gy', 'ht', 'hm', 'hn', 'hk', 'hu', 'is', 'in', 'id', 'ir', 'iq', 'ie',
  'im', 'il', 'it', 'jm', 'jp', 'je', 'jo', 'kz', 'ke', 'ki', 'kw', 'kg', 'la', 'lv', 'lb', 'ls', 'lr',
  'ly', 'li', 'lt', 'lu', 'mo', 'mk', 'mg', 'mw', 'my', 'mv', 'ml', 'mt', 'mh', 'mq', 'mr', 'mu', 'yt',
  'mx', 'md', 'mc', 'mn', 'me', 'ms', 'ma', 'mz', 'na', 'nr', 'np', 'nc', 'nz', 'ni', 'ne', 'ng', 'nu',
  'nf', 'tr', 'kp', 'mp', 'no', 'om', 'pk', 'pw', 'pa', 'pg', 'py', 'pe', 'ph', 'pn', 'pl', 'pt', 'pr',
  'qa', 'ro', 'ru', 'rw', 're', 'bl', 'sh', 'kn', 'lc', 'mf', 'pm', 'vc', 'ws', 'sm', 'st', 'sa', 'sn',
  'rs', 'sc', 'sl', 'sg', 'sx', 'sk', 'si', 'sb', 'so', 'za', 'gs', 'kr', 'ss', 'es', 'lk', 'sd', 'sr',
  'sj', 'sz', 'se', 'ch', 'sy', 'tw', 'tj', 'tz', 'th', 'tg', 'tk', 'to', 'tt', 'tn', 'tm', 'tc', 'tv',
  'ug', 'ua', 'ae', 'uk', 'us', 'vi', 'uy', 'uz', 'vu', 'va', 've', 'vn', 'wf', 'eh', 'ye', 'zm', 'zw',
])

export function getApexDomain(domain) {
  const parts = domain.split('.')
  if (parts.length > 2) {
    if (
      (SECOND_LEVEL_DOMAINS.has(parts[parts.length - 2]) && ccTLDs.has(parts[parts.length - 1])) ||
      SPECIAL_APEX_DOMAINS.has(parts.slice(-2).join('.'))
    ) {
      return parts.slice(-3).join('.')
    }
    return parts.slice(-2).join('.')
  }
  return domain
}

export function tryParseUrlDomain(url) {
  let domain

  // Normalize the URL - add https:// if no protocol exists
  let normalizedUrl = url.trim()
  if (!/^[a-zA-Z]+:\/\//.test(normalizedUrl)) {
    normalizedUrl = 'https://' + normalizedUrl
  }

  try {
    domain = new URL(normalizedUrl).hostname
  } catch (e) {
    // parsing failed
  }

  if (!domain) return undefined

  if (domain === 'youtu.be') return 'youtube.com'
  if (domain === 'raw.githubusercontent.com') return 'github.com'
  return getApexDomain(domain)
}
