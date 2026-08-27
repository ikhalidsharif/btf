// Restricts /admin and /api/admin/* to requests Vercel's edge network
// identifies as coming from Bahrain. This is an extra layer on top of the
// server-side password check — not a replacement for it. VPNs can present
// as any country, so this mainly filters opportunistic/automated traffic,
// not a targeted attacker.
//
// Vercel sets x-vercel-ip-country automatically in production; it's absent
// locally, so we fail-open (allow) only when the header is missing
// entirely — never when it's present and doesn't match Bahrain.
export default defineEventHandler((event) => {
  const path = event.node.req.url || ''
  const isAdminRoute = /^\/(ar|en)\/admin(\/|$|\?)/.test(path) || path.startsWith('/api/admin')
  if (!isAdminRoute) return

  const country = getHeader(event, 'x-vercel-ip-country')
  if (!country) return // local dev / not on Vercel — allow through

  if (country !== 'BH') {
    throw createError({ statusCode: 403, statusMessage: 'This page is only accessible from Bahrain.' })
  }
})
