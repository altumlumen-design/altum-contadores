import type { Metadata } from 'next';
import ServicesOverviewPage from '../services-overview-page';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Servicios | Altum Contadores y Asociados',
  description: 'Servicios contables, tributarios, laborales, financieros, de auditoría y asesoría empresarial.',
};

export default function Page() {
  return <ServicesOverviewPage />;
}
