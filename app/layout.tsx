import "./globals.css";
import "./fontawesome"; // Importar configuración de FontAwesome

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
        {/* Meta tags para SEO y compartir en redes sociales */}
        <meta name="description" content="Sitio oficial del XXX Campamento Musical Marqués de Mancera" />
        <meta property="og:title" content="Campamento Musical Marqués de Mancera" />
        <meta property="og:description" content="Descubre la XXX edición del Campamento Musical Marqués de Mancera y únete a esta inolvidable experiencia musical en Valdivia, Chile." />
        <meta property="og:image" content="https://camusmancera.cl/logo_camusmancera.png" />
        <meta property="og:url" content="https://camusmancera.cl" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Campamento Musical Marqués de Mancera" />
        <meta name="twitter:description" content="Descubre la XXX edición del Campamento Musical Marqués de Mancera y únete a esta inolvidable experiencia musical en Valdivia, Chile." />
        <meta name="twitter:image" content="https://camusmancera.cl/logo_camusmancera.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
