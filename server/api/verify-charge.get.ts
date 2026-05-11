export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const tapId = query.tap_id as string

  if (!tapId) return { status: 'UNKNOWN' }

  const secretKey = process.env.TAP_SECRET_KEY
  if (!secretKey) return { status: 'ERROR' }

  try {
    const response = await fetch(`https://api.tap.company/v2/charges/${tapId}`, {
      headers: {
        'Authorization': `Bearer ${secretKey}`,
      }
    })
    const data = await response.json()
    return { status: data.status, amount: data.amount, currency: data.currency }
  } catch (e) {
    return { status: 'ERROR' }
  }
})
