import type { Metadata } from 'next';
import ServiceDetailPage from '../../service-detail-page';
import { services } from '../../site-content';
export const dynamic = 'force-static';
export const metadata: Metadata = { title: 'Asesoría empresarial | Altum', description: services[6].summary, alternates: { canonical: 'https://altumlumen-design.github.io/altum-contadores/servicios/asesoria-empresarial/' } };
export default function Page() { return <ServiceDetailPage service={services[6]} />; }
