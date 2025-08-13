
export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }
  // In production: integrate with an email provider (e.g., Resend, SendGrid) or Netlify Forms.
  try {
    const data = JSON.parse(event.body || '{}')
    console.log('Contact submission', data)
    return { statusCode: 200, body: JSON.stringify({ ok: true }) }
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: true }) }
  }
}
