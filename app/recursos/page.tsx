import type { Metadata } from 'next';
import ResourcesPage from '../resources-page';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Calculadora de IGV y recursos | Altum Contadores y Asociados',
  description: 'Calculadora rápida de IGV, guías y herramientas para reconocer qué frente de tu gestión necesita atención.',
};

export default function Page() {
  return <ResourcesPage />;
}
