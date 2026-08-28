export default defineEventHandler(async (event) => {
  const auth = requireAdminAuth(event)
  const body = await readBody(event)

  const res = await fetch(`${auth.supabaseUrl}/rest/v1/donation_projects`, {
    method: 'POST',
    headers: { ...auth.headers, 'Prefer': 'return=representation' },
    body: JSON.stringify(body),
  })

  const data = await res.json()
  if (!res.ok) {
    throw createError({ statusCode: res.status, statusMessage: data?.message || 'Insert failed' })
  }
  return data
})
