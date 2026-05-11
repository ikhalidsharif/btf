export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { amount, currency, project, customer, redirect, donationType } = body

  const secretKey = process.env.TAP_SECRET_KEY

  if (!secretKey) {
    return { error: 'Payment not configured' }
  }

  try {
    const response = await fetch('https://api.tap.company/v2/charges', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${secretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        currency: currency || 'BHD',
        threeDSecure: true,
        save_card: false,
        description: `Donation to Bahrain Trust Foundation - ${project}`,
        statement_descriptor: 'BTF Donation',
        metadata: {
          project,
          donationType,
        },
        reference: {
          transaction: `BTF-${Date.now()}`,
          order: `BTF-${Date.now()}`,
        },
        receipt: {
          email: true,
          sms: true,
        },
        customer: {
          first_name: customer.name.split(' ')[0] || customer.name,
          last_name: customer.name.split(' ').slice(1).join(' ') || '',
          email: customer.email,
          phone: {
            country_code: '973',
            number: customer.phone?.replace(/\D/g, '').replace(/^973/, '') || '00000000',
          },
        },
        source: { id: 'src_all' },
        post: { url: redirect },
        redirect: { url: redirect },
      })
    })

    const data = await response.json()
    return data
  } catch (e) {
    return { error: String(e) }
  }
})
