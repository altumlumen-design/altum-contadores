'use client';

import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Calculator,
  FileSearch,
  Landmark,
  LineChart,
  Network,
  ShieldCheck,
  Users,
} from 'lucide-react';
import SiteChrome from './site-chrome';
import { services, type ServiceIconKey } from './site-content';
import { sitePath } from './site-paths';

const iconMap = {
  calculator: Calculator,
  landmark: Landmark,
  users: Users,
  chart: LineChart,
  audit: FileSearch,
  briefcase: BriefcaseBusiness,
} satisfies Record<ServiceIconKey, typeof Calculator>;

export default function ServicesOverviewPage() {
  return (
    <SiteChrome active="Servicios">
      <section className="inner-hero services-hero">
        <div className="inner-hero-grid" aria-hidden="true" />
        <div className="inner-hero-copy inner-shell">
          <div className="page-kicker"><span>01</span>Servicios</div>
          <h1>Una firma.<br /><span>Seis perspectivas.</span></h1>
          <p>Integramos contabilidad, tributación, personas y finanzas para que cada frente de la empresa avance con la misma información.</p>
          <a className="inner-primary-link" href={sitePath('contacto/')}>Encontrar el servicio adecuado <ArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="inner-hero-aside" aria-hidden="true">
          <Network />
          <span>VISIÓN INTEGRADA</span>
        </div>
      </section>

      <section className="service-catalog inner-shell">
        <div className="page-section-heading">
          <div className="section-kicker"><span>02</span><p>Áreas de práctica</p></div>
          <h2>Elige el punto de entrada.<br />Nosotros conectamos el resto.</h2>
          <p>Cada servicio puede trabajar de forma independiente o combinarse según el momento, el volumen y la complejidad de tu operación.</p>
        </div>
        <div className="catalog-grid">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <a className="catalog-card" href={sitePath(`servicios/${service.slug}/`)} key={service.slug}>
                <div className="catalog-card-top"><span>{service.number}</span><Icon aria-hidden="true" /></div>
                <div>
                  <p>{service.short}</p>
                  <h3>{service.title}</h3>
                  <span className="catalog-summary">{service.summary}</span>
                </div>
                <div className="catalog-link">Ver servicio <ArrowRight aria-hidden="true" /></div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="engagement-section">
        <div className="inner-shell">
          <div className="page-kicker light"><span>03</span>Formas de trabajo</div>
          <div className="engagement-grid">
            <article><span>01</span><h3>Operación continua</h3><p>Un servicio recurrente, con calendario, responsables, entregables y reuniones periódicas.</p></article>
            <article><span>02</span><h3>Proyecto definido</h3><p>Una necesidad concreta con alcance, información requerida, hitos y un resultado acordado.</p></article>
            <article><span>03</span><h3>Revisión especializada</h3><p>Una segunda mirada para identificar riesgos, ordenar hallazgos y establecer prioridades.</p></article>
          </div>
          <div className="engagement-note"><ShieldCheck aria-hidden="true" /><p>Antes de proponer, revisamos el contexto. El alcance responde al trabajo real, no a un paquete genérico.</p></div>
        </div>
      </section>

      <section className="inner-cta inner-shell">
        <div><span>¿No sabes por dónde empezar?</span><h2>Empecemos por la decisión que hoy necesita claridad.</h2></div>
        <a href={sitePath('contacto/')}>Preparar una consulta <ArrowUpRight aria-hidden="true" /></a>
      </section>
    </SiteChrome>
  );
}
