import '../app/ui/global.css'
import { monstserrat } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* El Layout envuelve toda la pagina */}
      {/* antialiased => mejora un poquito como se renderiza la fuente en algunos navegadores y monitores */}
      <body className={`${monstserrat.className} antialiased`}>
        {children}
        <footer className='py-10 flex justify-center items-center'>Hecho por Rodrigo Zurita</footer>
      </body>
    </html>
  );
}
