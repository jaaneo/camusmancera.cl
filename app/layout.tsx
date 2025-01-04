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
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Merriweather:wght@400;700&display=swap" rel="stylesheet" />
      </head>

      <body>{children}</body>
    </html>
  );
}
