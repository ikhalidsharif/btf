export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { amount, currency, project, customer, redirect, donationType } = body

  const secretKey = process.env.TAP_SECRET_KEY

  if (!secretKey) {
    return { error: 'Payment not configured - missing TAP_SECRET_KEY' }
  }

  const payload = {
    amount: Number(amount),
    currency: currency || 'BHD',
    threeDSecure: true,
    save_card: false,
    description: `Donation - ${project}`,
    statement_descriptor: 'BTF',
    metadata: { project, donationType },
    reference: {
      transaction: `BTF-${Date.now()}`,
      order: `BTF-${Date.now()}`,
    },
    receipt: { email: true, sms: false },
    customer: {
      first_name: customer?.name?.split(' ')[0] || 'Donor',
      last_name: customer?.name?.split(' ').slice(1).join(' ') || '',
      email: customer?.email || '',
      phone: {
        country_code: '973',
        number: customer?.phone?.replace(/\D/g, '').replace(/^973/, '') || '00000000',
      },
    },
    source: { id: 'src_all' },
    post: { url: redirect || '' },
    redirect: { url: redirect || '' },
  }

  try {
    const response = await fetch('https://api.tap.company/v2/charges', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${secretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const data = await response.json()
    
    // Log for debugging
    console.log('TAP Response:', JSON.stringify(data))
    
    if (data.errors) {
      return { error: data.errors[0]?.description || 'TAP error', details: data }
    }

    return data
  } catch (e: any) {
    console.error('TAP Error:', e)
    return { error: e.message || 'Connection error' }
  }
})
