import type { H3Event } from 'h3'

// Verifies the admin password sent by the client and returns Supabase
// service-role headers for the actual database write. The service role
// key never leaves the server — the client only ever sees the password
// it typed in, which is checked here against a server-only env var.
export function requireAdminAuth(event: H3Event) {
  const config = useRuntimeConfig()
  const provided = getHeader(event, 'x-admin-password') || ''

  if (!config.adminPassword) {
    throw createError({ statusCode: 500, statusMessage: 'ADMIN_PASSWORD not configured on the server' })
  }
  if (provided !== config.adminPassword) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  if (!config.supabaseServiceRoleKey) {
    throw createError({ statusCode: 500, statusMessage: 'SUPABASE_SERVICE_ROLE_KEY not configured on the server' })
  }

  return {
    supabaseUrl: config.public.supabaseUrl as string,
    serviceKey: config.supabaseServiceRoleKey as string,
    headers: {
      'apikey': config.supabaseServiceRoleKey as string,
      'Authorization': `Bearer ${config.supabaseServiceRoleKey}`,
      'Content-Type': 'application/json',
    },
  }
}
