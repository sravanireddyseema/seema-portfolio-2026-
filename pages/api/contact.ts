import type { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, message, website } = req.body || {};

  // Honeypot spam protection: if website field is filled, likely a bot
  if (website) {
    return res.status(400).json({ success: false, message: 'Spam blocked.' });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please complete all required fields.' });
  }

  const emailTo = process.env.EMAIL_TO;

  if (!emailTo) {
    // Development/testing mode: acknowledge receipt but do not attempt delivery
    return res.status(200).json({
      success: true,
      message:
        'Your message was received. Set EMAIL_TO in your Vercel environment variables to enable email delivery.',
    });
  }

  // TODO: Add transactional email sending (SendGrid/Mailgun/Postmark) when EMAIL_TO and provider API keys are configured.

  return res.status(200).json({
    success: true,
    message: 'Thanks for reaching out. Your message was received successfully.',
  });
}
