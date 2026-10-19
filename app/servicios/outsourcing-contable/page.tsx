import type { Metadata } from 'next';
import ServiceDetailPage from '../../service-detail-page';
import { services } from '../../site-content';
export const dynamic = 'force-static';
export const metadata: Metadata = { title: 'Outsourcing contable | Altum', description: services[0].summary, alternates: { canonical: 'https://altumlumen-design.github.io/altum-contadores/servicios/outsourcing-contable/' } };
export default function Page() { return <ServiceDetailPage service={services[0]} />; }
