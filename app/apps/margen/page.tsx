import type { Metadata } from 'next';
import StandaloneAppPage from '../../standalone-app-page';
import MarginCalculator from '../../margin-calculator';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Margen y utilidad | Altum Contadores y Asociados',
  description: 'Calcula utilidad, margen sobre ventas y rendimiento sobre costo.',
};

export default function Page() {
  return (
    <StandaloneAppPage
      number="03"
      eyebrow="Finanzas"
      title="Margen y utilidad"
      description="Compara ingresos y costos para obtener una lectura rápida de utilidad y margen."
    >
      <MarginCalculator />
    </StandaloneAppPage>
  );
}
