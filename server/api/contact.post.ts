type ContactBody = {
  name?: string
  email?: string
  message?: string
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const DEFAULT_CONTACT_TO_EMAIL = 'samuelnegalign2@gmail.com'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const body = await readBody<ContactBody>(event)

  const name = (body?.name || '').trim()
  const email = (body?.email || '').trim()
  const message = (body?.message || '').trim()

  if (!name || !email || !message) {
    throw createError({ statusCode: 400, statusMessage: 'Name, email and message are required.' })
  }

  if (!emailRegex.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Please provide a valid email address.' })
  }

  if (message.length > 4000) {
    throw createError({ statusCode: 400, statusMessage: 'Message is too long.' })
  }

  if (!config.mailjetApiKey || !config.mailjetSecretKey || !config.mailjetFromEmail) {
    throw createError({ statusCode: 500, statusMessage: 'Email service is not configured.' })
  }

  const recipientEmail = config.contactToEmail || DEFAULT_CONTACT_TO_EMAIL

  try {
    const { default: Mailjet } = await import('node-mailjet')
    const mailjet = new Mailjet({
      apiKey: config.mailjetApiKey,
      apiSecret: config.mailjetSecretKey,
    })

    const htmlPart = `
      <h2>New Contact Request from BryteArk Website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `

    const textPart = [
      'New Contact Request from BryteArk Website',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      'Message:',
      message,
    ].join('\n')

    await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: config.mailjetFromEmail,
            Name: config.mailjetFromName,
          },
          To: [
            {
              Email: recipientEmail,
              Name: 'BryteArk Contact',
            },
          ],
          ReplyTo: {
            Email: email,
            Name: name,
          },
          Subject: `BryteArk Contact Form: ${name}`,
          TextPart: textPart,
          HTMLPart: htmlPart,
        },
      ],
    })

    return { ok: true }
  } catch (error: any) {
    console.error('Failed to send contact email:', error?.statusCode || error?.message)
    throw createError({ statusCode: 500, statusMessage: 'Failed to send message. Please try again.' })
  }
})
