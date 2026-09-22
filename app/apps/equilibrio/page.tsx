import type { Metadata } from 'next';
import StandaloneAppPage from '../../standalone-app-page';
import BreakEvenCalculator from '../../break-even-calculator';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Punto de equilibrio | Altum Contadores y Asociados',
  description: 'Estima cuántas unidades necesitas vender para cubrir los costos fijos.',
};

export default function Page() {
  return (
    <StandaloneAppPage
      number="04"
      eyebrow="Gestión"
      title="Punto de equilibrio"
      description="Estima el nivel mínimo de ventas necesario para cubrir tus costos."
    >
      <BreakEvenCalculator />
    </StandaloneAppPage>
  );
}
