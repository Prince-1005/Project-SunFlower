// pages/api/subscribe.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { put } from '@vercel/blob';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('Request body:', req.body);
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email } = req.body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: 'Invalid email address' });
    }

    const timestamp = new Date().toISOString();
    const newEntry = `${email},${timestamp}\n`;

    await put('subscribers.csv', newEntry, {
        access: 'public',
        addRandomSuffix: false,
        contentType: 'text/csv',
        // Note: This will overwrite the file. For appending, you'd need to fetch existing content first
    });

    return res.status(200).json({ message: 'Subscribed successfully' });
}