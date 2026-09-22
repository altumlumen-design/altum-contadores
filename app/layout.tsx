import type { Metadata } from 'next';
import './globals.css';
import SiteTextOverrides from './site-text-overrides';
import SiteEnhancements from './site-enhancements';
import AppsMenu from './apps-menu';
import MobileUxTweaks from './mobile-ux-tweaks';
import BrandThemeRefresh from './brand-theme-refresh';
import { sitePath } from './site-paths';

export const metadata: Metadata = {
  title: 'Altum Contadores y Asociados | Asesoría empresarial y contable',
  description:
    'Contabilidad, tributación, gestión laboral, finanzas, auditoría, asesoría empresarial, construcción de marca y herramientas empresariales.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/png" href={sitePath('altum-favicon.png?v=20260922-2')} />
        <link rel="shortcut icon" type="image/png" href={sitePath('altum-favicon.png?v=20260922-2')} />
        <link rel="apple-touch-icon" href={sitePath('apple-icon.png?v=20260922-2')} />
      </head>
      <body>
        <SiteTextOverrides />
        <AppsMenu />
        <SiteEnhancements />
        <MobileUxTweaks />
        <BrandThemeRefresh />
        {children}
      </body>
    </html>
  );
}
