import type { Metadata } from 'next';
import './globals.css';
import SiteTextOverrides from './site-text-overrides';
import SiteEnhancements from './site-enhancements';

export const metadata: Metadata = {
  title: 'Altum Contadores y Asociados | Asesoría empresarial y contable',
  description:
    'Contabilidad, tributación, gestión laboral, finanzas, auditoría, asesoría empresarial y construcción de marca para tomar mejores decisiones.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <SiteTextOverrides />
        <SiteEnhancements />
        {children}
      </body>
    </html>
  );
}
