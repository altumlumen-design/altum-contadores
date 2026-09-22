import type { Metadata } from 'next';
import StandaloneAppPage from '../../standalone-app-page';
import DaysCalculator from '../../days-calculator';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Días hábiles y calendario | Altum Contadores y Asociados',
  description: 'Suma plazos o calcula la diferencia entre fechas con una herramienta orientativa.',
};

export default function Page() {
  return (
    <StandaloneAppPage
      number="02"
      eyebrow="Plazos"
      title="Días hábiles y calendario"
      description="Suma un plazo o compara dos fechas sin mezclar esta herramienta con las demás apps."
    >
      <DaysCalculator />
    </StandaloneAppPage>
  );
}
