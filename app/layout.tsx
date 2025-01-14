import "./globals.css";
import "./fontawesome";

export const metadata = {
  title: "Campamento Musical Marqués de Mancera",
  description: "Sitio oficial del XXX Campamento Musical Marqués de Mancera",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&family=Roboto:wght@400;700&family=Caveat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
