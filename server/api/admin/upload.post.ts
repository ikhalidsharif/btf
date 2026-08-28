export default defineEventHandler(async (event) => {
  const auth = requireAdminAuth(event)

  const form = await readMultipartFormData(event)
  const file = form?.find((f) => f.name === 'file')
  const folder = form?.find((f) => f.name === 'folder')?.data?.toString() || 'donations'

  if (!file || !file.data) {
    throw createError({ statusCode: 400, statusMessage: 'No file provided' })
  }

  const BUCKET = 'donation-images'
  const safeName = (file.filename || 'upload').replace(/[^a-zA-Z0-9.\-_]/g, '-')
  const path = `${folder}/${Date.now()}-${safeName}`

  const res = await fetch(`${auth.supabaseUrl}/storage/v1/object/${BUCKET}/${path}`, {
    method: 'POST',
    headers: {
      'apikey': auth.serviceKey,
      'Authorization': `Bearer ${auth.serviceKey}`,
      'Content-Type': file.type || 'application/octet-stream',
    },
    body: file.data,
  })

  if (!res.ok) {
    const text = await res.text()
    throw createError({ statusCode: res.status, statusMessage: text || 'Upload failed' })
  }

  return { url: `${auth.supabaseUrl}/storage/v1/object/public/${BUCKET}/${path}` }
})
