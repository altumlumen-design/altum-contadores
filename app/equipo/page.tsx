import type { Metadata } from 'next';
import TeamPage from '../team-page';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Sobre el estudio | Altum Contadores y Asociados',
  description:
    'Conoce al responsable del estudio contable y el enfoque con el que Altum integra contabilidad, tributación, finanzas y gestión empresarial.',
  alternates: {
    canonical: 'https://altumlumen-design.github.io/altum-contadores/equipo/',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://altumlumen-design.github.io/altum-contadores/equipo/#jeanfranco-martin-vargas-luque',
  name: 'Jeanfranco Martín Vargas Luque',
  image: 'https://altumlumen-design.github.io/altum-contadores/team-jeanfranco.webp',
  jobTitle: 'Contador Público y responsable del estudio contable',
  description:
    'Responsable de Altum Contadores y Asociados, con enfoque en dirección contable, tributación y contabilidad gubernamental.',
  worksFor: {
    '@id': 'https://altumlumen-design.github.io/altum-contadores/#organization',
  },
  url: 'https://altumlumen-design.github.io/altum-contadores/equipo/',
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <TeamPage />
    </>
  );
}
