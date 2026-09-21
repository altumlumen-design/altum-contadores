import type { Metadata } from 'next';
import TeamPage from '../team-page';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Sobre el estudio | Altum Contadores y Asociados',
  description:
    'Conoce al responsable del estudio contable y el enfoque con el que Altum integra contabilidad, tributación, finanzas y gestión empresarial.',
};

export default function Page() {
  return <TeamPage />;
}
