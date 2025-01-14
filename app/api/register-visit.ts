import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../lib/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'Unknown IP';

      const { error } = await supabase.from('visits').insert({ ip_address: ip });

      if (error) {
        console.error('Error inserting visit:', error);
        return res.status(500).json({ success: false, error: error.message });
      }

      return res.status(200).json({ success: true });
    } catch (err) {
      console.error('Unexpected error:', err);
      return res.status(500).json({ success: false, error: 'Unexpected error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
