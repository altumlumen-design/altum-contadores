import type { Metadata } from 'next';
import ResourcesPage from '../resources-page';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Apps empresariales | Altum Contadores y Asociados',
  description: 'Calculadoras gratuitas de IGV, días hábiles y calendario, margen, punto de equilibrio y variación porcentual.',
};

export default function Page() {
  return <ResourcesPage />;
}
