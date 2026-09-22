import type { Metadata } from 'next';
import StandaloneAppPage from '../../standalone-app-page';
import IgvCalculator from '../../igv-calculator';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Calculadora de IGV | Altum Contadores y Asociados',
  description: 'Calcula base imponible, IGV y total a partir de un monto con o sin impuesto.',
};

export default function Page() {
  return (
    <StandaloneAppPage
      number="01"
      eyebrow="Tributación"
      title="Calculadora de IGV"
      description="Separa rápidamente la base imponible, el IGV y el total de una operación."
    >
      <IgvCalculator />
    </StandaloneAppPage>
  );
}
