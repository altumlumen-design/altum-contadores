import type { Metadata } from 'next';
import './globals.css';
import SiteTextOverrides from './site-text-overrides';
import SiteEnhancements from './site-enhancements';
import AppsMenu from './apps-menu';

export const metadata: Metadata = {
  title: 'Altum Contadores y Asociados | Asesoría empresarial y contable',
  description:
    'Contabilidad, tributación, gestión laboral, finanzas, auditoría, asesoría empresarial, construcción de marca y herramientas empresariales.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <SiteTextOverrides />
        <AppsMenu />
        <SiteEnhancements />
        {children}
      </body>
    </html>
  );
}
