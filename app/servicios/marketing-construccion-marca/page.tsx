import type { Metadata } from 'next';
import MarketingBrandPage from '../../marketing-brand-page';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Marketing y construcción de marca | Altum Contadores y Asociados',
  description: 'Estrategia, identidad y comunicación para construir una marca coherente, reconocible y preparada para crecer.',
  alternates: {
    canonical: 'https://altumlumen-design.github.io/altum-contadores/servicios/marketing-construccion-marca/',
  },
};

export default function Page() {
  return <MarketingBrandPage />;
}
