'use client';

import { ArrowUpRight, Layers3 } from 'lucide-react';
import SiteChrome from './site-chrome';
import { assetPath, sitePath } from './site-paths';

const responsible = {
  name: 'Jeanfranco Martín Vargas Luque',
  role: 'Contador Público · Responsable del estudio contable',
  status: 'Responsable del estudio',
  initials: 'JV',
  image: 'team-jeanfranco.webp',
  focus: ['Dirección contable', 'Tributación', 'Contabilidad gubernamental'],
  description:
    'Responsable del estudio contable. Dirige la atención e integra el trabajo contable con una lectura clara de obligaciones, resultados y decisiones empresariales.',
};

export default function TeamPage() {
  return <SiteChrome active="Equipo">
    <section className="inner-hero">
      <div className="inner-hero-grid" aria-hidden="true" />
      <div className="inner-hero-copy inner-shell">
        <div className="page-kicker"><span>03</span>Sobre el estudio</div>
        <h1>Dirección contable.<br /><span>Criterio para cada decisión.</span></h1>
        <p>Conoce al responsable del estudio contable y el enfoque con el que ALTUM integra contabilidad, tributación, finanzas y gestión empresarial.</p>
        <a className="inner-primary-link" href="#responsable">Conocer al responsable <ArrowUpRight aria-hidden="true" /></a>
      </div>
      <div className="inner-hero-aside" aria-hidden="true">
        <Layers3 />
        <span>DIRECCIÓN DEL ESTUDIO</span>
      </div>
    </section>

    <section className="profiles-section inner-shell" id="responsable">
      <div className="page-section-heading">
        <div className="section-kicker"><span>01</span><p>Responsable</p></div>
        <h2>Responsable del estudio contable.</h2>
        <p>La dirección del estudio centraliza el contexto de cada cliente y articula las especialidades que intervienen según sus necesidades.</p>
      </div>

      <div className="profiles-grid">
        <article className="profile-card featured">
          <div className="profile-portrait has-photo">
            <img
              src={assetPath(responsible.image)}
              alt={`Retrato de ${responsible.name}`}
              width={880}
              height={1100}
            />
            <span>{responsible.initials}</span>
          </div>
          <div className="profile-status">{responsible.status}</div>
          <h3>{responsible.name}</h3>
          <p className="profile-role">{responsible.role}</p>
          <p className="profile-description">{responsible.description}</p>
          <ul>
            {responsible.focus.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
      </div>
    </section>

    <section className="team-model">
      <div className="inner-shell team-model-grid">
        <div>
          <Layers3 aria-hidden="true" />
          <span>Enfoque del estudio</span>
          <h2>Una dirección clara y especialistas según cada necesidad.</h2>
        </div>
        <div>
          <p>El responsable del estudio centraliza el contexto y coordina los frentes contables, tributarios, financieros o laborales que correspondan. Así se conserva una lectura común de la empresa y de cada decisión.</p>
          <div className="team-flow">
            <span>Contexto</span>
            <span>Especialidades</span>
            <span>Decisión</span>
          </div>
        </div>
      </div>
    </section>

    <section className="inner-cta inner-shell">
      <div>
        <span>Atención directa desde el estudio</span>
        <h2>Cuéntanos qué necesita resolver tu empresa.</h2>
      </div>
      <a href={sitePath('contacto/')}>Preparar mi consulta <ArrowUpRight aria-hidden="true" /></a>
    </section>
  </SiteChrome>;
}
