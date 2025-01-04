import "./globals.css";

export const metadata = {
  title: "Campamento Musical Marqués de Mancera",
  description: "Sitio en construcción",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
