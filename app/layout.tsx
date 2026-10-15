import type { Metadata } from 'next';
import './globals.css';
import SiteTextOverrides from './site-text-overrides';
import SiteEnhancements from './site-enhancements';
import AppsMenu from './apps-menu';
import MobileUxTweaks from './mobile-ux-tweaks';
import BrandToneTweak from './brand-tone-tweak';
import FooterIconFix from './footer-icon-fix';
import { sitePath } from './site-paths';

export const metadata: Metadata = {
  metadataBase: new URL('https://altumlumen-design.github.io/altum-contadores/'),
  title: 'Altum Contadores y Asociados | Asesoría empresarial y contable',
  description:
    'Contabilidad, tributación, gestión laboral, finanzas, auditoría, asesoría empresarial, construcción de marca y herramientas empresariales.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AccountingService',
      '@id': 'https://altumlumen-design.github.io/altum-contadores/#organization',
      name: 'Altum Contadores y Asociados',
      url: 'https://altumlumen-design.github.io/altum-contadores/',
      logo: 'https://altumlumen-design.github.io/altum-contadores/altum-logo.png',
      image: 'https://altumlumen-design.github.io/altum-contadores/altum-logo.png',
      description:
        'Estudio de asesoría empresarial y contable especializado en contabilidad, tributación, gestión laboral, finanzas, auditoría y control de gestión.',
      areaServed: { '@type': 'Country', name: 'Perú' },
      parentOrganization: {
        '@type': 'Organization',
        name: 'ALTUM LUMEN S.A.C.',
        url: 'https://altumlumen-design.github.io/Altum-Lumen-S.A.C./',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://altumlumen-design.github.io/altum-contadores/#website',
      name: 'Altum Contadores y Asociados',
      url: 'https://altumlumen-design.github.io/altum-contadores/',
      inLanguage: 'es-PE',
      publisher: { '@id': 'https://altumlumen-design.github.io/altum-contadores/#organization' },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/png" href={sitePath('altum-favicon.png?v=20260922-3')} />
        <link rel="shortcut icon" type="image/png" href={sitePath('altum-favicon.png?v=20260922-3')} />
        <link rel="apple-touch-icon" href={sitePath('apple-icon.png?v=20260922-3')} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        <SiteTextOverrides />
        <AppsMenu />
        <SiteEnhancements />
        <MobileUxTweaks />
        <BrandToneTweak />
        <FooterIconFix />
        {children}
      </body>
    </html>
  );
}
