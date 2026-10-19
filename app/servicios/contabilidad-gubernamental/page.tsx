import type { Metadata } from 'next';
import ServiceDetailPage from '../../service-detail-page';
import { services } from '../../site-content';

export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: 'Contabilidad gubernamental | Altum',
  description: services[5].summary,
  alternates: {
    canonical: 'https://altumlumen-design.github.io/altum-contadores/servicios/contabilidad-gubernamental/',
  },
};

export default function Page() {
  return <ServiceDetailPage service={services[5]} />;
}
