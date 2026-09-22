import type { Metadata } from 'next';
import StandaloneAppPage from '../../standalone-app-page';
import VariationCalculator from '../../variation-calculator';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Variación porcentual | Altum Contadores y Asociados',
  description: 'Compara dos periodos y calcula el aumento o disminución porcentual.',
};

export default function Page() {
  return (
    <StandaloneAppPage
      number="05"
      eyebrow="Análisis"
      title="Variación porcentual"
      description="Compara dos valores o periodos y observa rápidamente cuánto cambió el indicador."
    >
      <VariationCalculator />
    </StandaloneAppPage>
  );
}
