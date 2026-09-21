import type { Metadata } from 'next';
import ServicesOverviewPage from '../services-overview-page';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Servicios | Altum Contadores y Asociados',
  description: 'Servicios contables, tributarios, laborales, financieros, de auditoría, asesoría empresarial y marketing y construcción de marca.',
};

export default function Page() {
  return <ServicesOverviewPage />;
}
