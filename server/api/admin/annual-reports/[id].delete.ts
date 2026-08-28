export default defineEventHandler(async (event) => {
  const auth = requireAdminAuth(event)
  const id = getRouterParam(event, 'id')

  const res = await fetch(`${auth.supabaseUrl}/rest/v1/annual_reports?id=eq.${id}`, {
    method: 'DELETE',
    headers: auth.headers,
  })

  if (!res.ok) {
    const data = await res.json().catch(() => ({}))
    throw createError({ statusCode: res.status, statusMessage: data?.message || 'Delete failed' })
  }
  return { ok: true }
})
