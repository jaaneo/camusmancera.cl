import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Configura tu Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req: Request) {
  try {
    // Obtener la IP del encabezado "x-forwarded-for" o una IP desconocida como fallback
    const ip = req.headers.get('x-forwarded-for') || 'Unknown IP';

    // Inserta la visita en la tabla
    const { error } = await supabase.from('visits').insert({ ip_address: ip });

    if (error) {
      console.error('Error inserting visit:', error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ success: false, error: 'Unexpected error' }, { status: 500 });
  }
}
