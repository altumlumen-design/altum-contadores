import type { Metadata } from 'next';
import ServiceDetailPage from '../../service-detail-page';
import { services } from '../../site-content';
export const dynamic = 'force-static';
export const metadata: Metadata = { title: 'Asesoría empresarial | Altum', description: services[5].summary };
export default function Page() { return <ServiceDetailPage service={services[5]} />; }
