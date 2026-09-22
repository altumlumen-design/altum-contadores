'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  ArrowRight,
  Calculator,
  CalendarDays,
  ChartNoAxesCombined,
  Percent,
  Scale,
  Sparkles,
} from 'lucide-react';
import { sitePath } from './site-paths';

const homeApps = [
  ['Calculadora de IGV', 'Separa base, IGV y total.', 'igv', Calculator],
  ['Días hábiles', 'Suma plazos y compara fechas.', 'dias', CalendarDays],
  ['Margen y utilidad', 'Compara ingresos y costos.', 'margen', Percent],
  ['Punto de equilibrio', 'Estima ventas mínimas.', 'equilibrio', Scale],
  ['Variación porcentual', 'Compara dos periodos.', 'variacion', ChartNoAxesCombined],
] as const;

export default function SiteEnhancements() {
  const [serviceList, setServiceList] = useState<HTMLElement | null>(null);
  const [servicesSection, setServicesSection] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const applyEnhancements = () => {
      const list = document.querySelector<HTMLElement>('.services-section .service-list');
      const section = document.querySelector<HTMLElement>('.services-section');

      if (list) setServiceList((current) => current === list ? current : list);
      if (section) setServicesSection((current) => current === section ? current : section);

      const heading = document.querySelector<HTMLElement>('.services-section .services-heading h2');
      if (heading?.textContent?.includes('Siete frentes')) {
        heading.textContent = 'Una visión completa. Ocho frentes que trabajan juntos.';
      }

      document.querySelectorAll<HTMLSelectElement>('select').forEach((select) => {
        const hasAccountingServices = Array.from(select.options).some(
          (option) => option.textContent?.trim() === 'Outsourcing contable',
        );
        const hasMarketing = Array.from(select.options).some(
          (option) => option.textContent?.trim() === 'Marketing y construcción de marca',
        );

        if (hasAccountingServices && !hasMarketing) {
          const option = document.createElement('option');
          option.textContent = 'Marketing y construcción de marca';
          option.value = 'Marketing y construcción de marca';
          select.appendChild(option);
        }
      });
    };

    applyEnhancements();

    const observer = new MutationObserver(() => applyEnhancements());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .home-marketing-service {
          text-decoration: none;
        }
        .home-apps-showcase {
          margin-top: clamp(44px, 6vw, 84px);
          border-top: 1px solid #cbd7e7;
          padding-top: 28px;
        }
        .home-apps-head {
          display: flex;
          justify-content: space-between;
          gap: 32px;
          align-items: end;
          margin-bottom: 28px;
        }
        .home-apps-head span {
          display: block;
          color: #55718d;
          font-family: var(--font-geist-mono), monospace;
          font-size: .72rem;
          letter-spacing: .08em;
          text-transform: uppercase;
        }
        .home-apps-head h3 {
          margin: 11px 0 0;
          max-width: 740px;
          font-size: clamp(2rem, 4vw, 3.8rem);
          letter-spacing: -.055em;
          line-height: .98;
        }
        .home-apps-head > a {
          flex: 0 0 auto;
          display: inline-flex;
          gap: 8px;
          align-items: center;
          color: #0d5ea8;
          text-decoration: none;
          font-weight: 650;
        }
        .home-apps-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          border-top: 1px solid #d3deea;
          border-left: 1px solid #d3deea;
        }
        .home-app-card {
          min-height: 176px;
          padding: 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #19324d;
          text-decoration: none;
          border-right: 1px solid #d3deea;
          border-bottom: 1px solid #d3deea;
          background: white;
          transition: background 180ms ease, transform 180ms ease;
        }
        .home-app-card:hover {
          background: #f2f7fd;
          transform: translateY(-3px);
        }
        .home-app-card svg {
          width: 22px;
          height: 22px;
          color: #2876bb;
        }
        .home-app-card h4 {
          margin: 16px 0 8px;
          font-size: .98rem;
          line-height: 1.1;
          letter-spacing: -.025em;
        }
        .home-app-card p {
          margin: 0;
          color: #6b7d91;
          font-size: .82rem;
          line-height: 1.55;
        }
        .home-app-card span {
          margin-top: 22px;
          display: inline-flex;
          gap: 6px;
          align-items: center;
          color: #0d5ea8;
          font-size: .76rem;
          font-weight: 650;
        }
        @media (max-width: 1050px) {
          .home-apps-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        @media (max-width: 700px) {
          .home-apps-head { display: block; margin-bottom: 18px; }
          .home-apps-head > a { margin-top: 14px; }
          .home-apps-head h3 { font-size: clamp(1.6rem, 8vw, 2.15rem); }
          .home-apps-grid { grid-template-columns: 1fr 1fr; }
          .home-app-card { min-height: 132px; padding: 14px; }
          .home-app-card svg { width: 18px; height: 18px; }
          .home-app-card h4 { margin: 10px 0 6px; font-size: .9rem; }
          .home-app-card p { font-size: .74rem; line-height: 1.45; }
          .home-app-card span { margin-top: 14px; font-size: .72rem; }
        }
        @media (max-width: 520px) {
          .home-apps-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {serviceList && createPortal(
        <a
          className="service-tab home-marketing-service"
          href={sitePath('servicios/marketing-construccion-marca/')}
          role="tab"
          aria-selected="false"
        >
          <span className="service-tab-number">08</span>
          <Sparkles aria-hidden="true" />
          <span>Marketing y construcción de marca</span>
          <ArrowRight className="service-arrow" aria-hidden="true" />
        </a>,
        serviceList,
      )}

      {servicesSection && createPortal(
        <section className="home-apps-showcase" aria-label="Apps empresariales">
          <div className="home-apps-head">
            <div>
              <span>Apps · Herramientas gratuitas</span>
              <h3>Calcula rápido. Decide con más contexto.</h3>
            </div>
            <a href={sitePath('apps/')}>Ver todas las apps <ArrowRight size={17} aria-hidden="true" /></a>
          </div>

          <div className="home-apps-grid">
            {homeApps.map(([title, description, anchor, Icon]) => (
              <a className="home-app-card" href={sitePath(`apps/#${anchor}`)} key={anchor}>
                <Icon aria-hidden="true" />
                <div>
                  <h4>{title}</h4>
                  <p>{description}</p>
                  <span>Abrir <ArrowRight size={14} aria-hidden="true" /></span>
                </div>
              </a>
            ))}
          </div>
        </section>,
        servicesSection,
      )}
    </>
  );
}
