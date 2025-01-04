import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const maintenanceMode = false; // Cambia a `false` para desactivar la página de mantenimiento

  if (maintenanceMode && !req.nextUrl.pathname.startsWith("/maintenance")) {
    return NextResponse.redirect(new URL("/maintenance", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next|maintenance).*)", // Excluye las rutas estáticas y la página de mantenimiento
};
