import type { Metadata } from 'next';
import AltumSite from './altum-site';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://altumlumen-design.github.io/altum-contadores/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    siteName: 'Altum Contadores y Asociados',
    title: 'Altum Contadores y Asociados | Asesoría empresarial y contable',
    description:
      'Contabilidad, tributación, gestión laboral, finanzas, auditoría y asesoría empresarial en Perú.',
    url: 'https://altumlumen-design.github.io/altum-contadores/',
    images: [
      {
        url: 'https://altumlumen-design.github.io/altum-contadores/altum-logo.png',
        alt: 'Altum Contadores y Asociados',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Altum Contadores y Asociados',
    description: 'Asesoría empresarial y contable en Perú.',
    images: ['https://altumlumen-design.github.io/altum-contadores/altum-logo.png'],
  },
};

export default function Home() {
  return <AltumSite />;
}
