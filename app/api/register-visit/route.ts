import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req: Request) {
  try {
    // Obtiene la IP real o usa un fallback
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : req.socket?.remoteAddress || "::1";

    console.log("IP detectada:", ip); // Log para verificar

    // Inserta la IP en la tabla 'visits'
    const { error } = await supabase.from("visits").insert({ ip_address: ip });

    if (error) {
      console.error("Error inserting visit:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json({ success: false, error: "Unexpected error" }, { status: 500 });
  }
}
