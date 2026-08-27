export const useSupabase = () => {
  const config = useRuntimeConfig()
  const SUPABASE_URL = config.public.supabaseUrl
  const SUPABASE_KEY = config.public.supabaseAnonKey

  const query = async (table: string, params = '') => {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}${params}`, {
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
      }
    })
    return res.json()
  }

  const insert = async (table: string, data: any) => {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation',
      },
      body: JSON.stringify(data)
    })
    return res.json()
  }

  const update = async (table: string, id: string, data: any) => {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?id=eq.${id}`, {
      method: 'PATCH',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation',
      },
      body: JSON.stringify(data)
    })
    return res.json()
  }

  const remove = async (table: string, id: string) => {
    await fetch(`${SUPABASE_URL}/rest/v1/${table}?id=eq.${id}`, {
      method: 'DELETE',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
      }
    })
  }

  // Uploads a file to Supabase Storage and returns its public URL.
  // Requires a public bucket named "donation-images" (see admin setup notes).
  const uploadFile = async (file: File, folder = 'donations'): Promise<string | null> => {
    const BUCKET = 'donation-images'
    const safeName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, '-')
    const path = `${folder}/${Date.now()}-${safeName}`

    const res = await fetch(`${SUPABASE_URL}/storage/v1/object/${BUCKET}/${path}`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': file.type || 'application/octet-stream',
      },
      body: file,
    })

    if (!res.ok) {
      console.error('Upload failed', await res.text())
      return null
    }

    return `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${path}`
  }

  return { query, insert, update, remove, uploadFile }
}
