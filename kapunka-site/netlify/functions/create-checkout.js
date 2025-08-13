
export async function handler(event) {
  try {
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method Not Allowed' }
    }
    const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY
    if (!STRIPE_SECRET_KEY) {
      return { statusCode: 501, body: 'Stripe is not configured. Set STRIPE_SECRET_KEY in Netlify env.' }
    }
    const { cart } = JSON.parse(event.body || '{}')
    if (!Array.isArray(cart) || cart.length === 0) {
      return { statusCode: 400, body: 'Cart is empty.' }
    }
    const stripe = await import('stripe').then(m => new m.default(STRIPE_SECRET_KEY))
    const line_items = cart.map(i => ({
      price_data: {
        currency: 'eur',
        product_data: { name: i.name },
        unit_amount: Math.round(i.price * 100),
      },
      quantity: i.qty,
    }))
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items,
      success_url: process.env.SUCCESS_URL || 'https://example.com/success',
      cancel_url: process.env.CANCEL_URL || 'https://example.com/cancel',
    })
    return { statusCode: 200, body: JSON.stringify({ url: session.url }) }
  } catch (err) {
    return { statusCode: 500, body: 'Checkout error.' }
  }
}
