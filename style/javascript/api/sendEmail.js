export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { firstName, lastName, email, contact, message } = req.body;

    if (!firstName || !lastName || !email || !contact || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            from: "https://homboiphotography.vercel.app",
            to: "bobevallejos478@gmail.com",
            subject: `New Inquiry from ${firstName} ${lastName}`,
            text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nContact: ${contact}\nMessage: ${message}`
        })
    });

    const data = await response.json();
    if (data.error) {
        return res.status(500).json({ error: 'Email sending failed' });
    }

    res.status(200).json({ success: 'Email sent successfully!' });
}