import type { Metadata } from 'next';
import ResourcesPage from '../resources-page';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Apps empresariales | Altum Contadores y Asociados',
  description: 'Centro de calculadoras empresariales de Altum Contadores y Asociados.',
  alternates: {
    canonical: 'https://altumlumen-design.github.io/altum-contadores/apps/',
  },
};

export default function Page() {
  return <ResourcesPage />;
}
