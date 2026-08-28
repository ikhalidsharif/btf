export default defineEventHandler(async (event) => {
  const auth = requireAdminAuth(event)
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)

  const res = await fetch(`${auth.supabaseUrl}/rest/v1/stories?id=eq.${id}`, {
    method: 'PATCH',
    headers: { ...auth.headers, 'Prefer': 'return=representation' },
    body: JSON.stringify(body),
  })

  const data = await res.json()
  if (!res.ok) {
    throw createError({ statusCode: res.status, statusMessage: data?.message || 'Update failed' })
  }
  return data
})
