'use client';

import { ArrowRight, ArrowUpRight, Calculator, CalendarDays, ChartNoAxesCombined, Percent, Scale } from 'lucide-react';
import SiteChrome from './site-chrome';
import IgvCalculator from './igv-calculator';
import DaysCalculator from './days-calculator';
import MarginCalculator from './margin-calculator';
import BreakEvenCalculator from './break-even-calculator';
import VariationCalculator from './variation-calculator';
import { sitePath } from './site-paths';

const apps = [
  {
    anchor: 'igv',
    number: '01',
    title: 'Calculadora de IGV',
    description: 'Separa base imponible, IGV y total a partir de un monto con o sin impuesto.',
    icon: Calculator,
  },
  {
    anchor: 'dias',
    number: '02',
    title: 'Días hábiles y calendario',
    description: 'Suma plazos o calcula la diferencia entre fechas con una lectura orientativa del cómputo hábil.',
    icon: CalendarDays,
  },
  {
    anchor: 'margen',
    number: '03',
    title: 'Margen y utilidad',
    description: 'Calcula utilidad y margen sobre ventas a partir de ingresos y costos.',
    icon: Percent,
  },
  {
    anchor: 'equilibrio',
    number: '04',
    title: 'Punto de equilibrio',
    description: 'Estima las unidades mínimas que necesitas vender para cubrir tus costos.',
    icon: Scale,
  },
  {
    anchor: 'variacion',
    number: '05',
    title: 'Variación porcentual',
    description: 'Compara dos periodos y detecta rápidamente aumentos o disminuciones.',
    icon: ChartNoAxesCombined,
  },
];

export default function ResourcesPage() {
  return (
    <SiteChrome active="Apps">
      <style>{`
        .apps-hero .inner-hero-copy p { max-width: 730px; }
        .apps-index { padding-block: 110px 80px; }
        .apps-index-grid {
          margin-top: 54px;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          border-top: 1px solid #cfdae7;
          border-left: 1px solid #cfdae7;
        }
        .apps-index-card {
          min-height: 230px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #17304b;
          text-decoration: none;
          border-right: 1px solid #cfdae7;
          border-bottom: 1px solid #cfdae7;
          background: white;
          transition: transform 180ms ease, background 180ms ease;
        }
        .apps-index-card:hover {
          background: #f3f8ff;
          transform: translateY(-3px);
        }
        .apps-index-card > div:first-child {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          color: #658098;
          font-family: var(--font-geist-mono), monospace;
          font-size: .76rem;
        }
        .apps-index-card svg { width: 21px; color: #2673b9; }
        .apps-index-card h3 {
          margin: 32px 0 12px;
          font-size: 1.25rem;
          letter-spacing: -.03em;
        }
        .apps-index-card p {
          margin: 0;
          color: #677b91;
          font-size: .88rem;
          line-height: 1.58;
        }
        .apps-index-card .apps-open {
          margin-top: 24px;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #0c5da8;
          font-size: .78rem;
          font-weight: 650;
        }
        .apps-tools-shell {
          padding-block: 70px 150px;
          display: grid;
          gap: 50px;
        }
        .app-anchor {
          scroll-margin-top: 110px;
        }
        .altum-app-tool {
          border: 1px solid #cbd7e7;
          background: white;
          box-shadow: 0 28px 85px rgba(15,46,90,.07);
          overflow: hidden;
        }
        .altum-app-tool-head {
          min-height: 190px;
          display: flex;
          justify-content: space-between;
          gap: 30px;
          align-items: flex-start;
          padding: clamp(28px, 5vw, 52px);
          background: #07182c;
          color: white;
        }
        .altum-app-tool-head > svg {
          flex: 0 0 auto;
          width: clamp(38px, 7vw, 68px);
          height: auto;
          color: #82bff5;
          opacity: .9;
        }
        .altum-app-tool-head span {
          display: block;
          color: #83bdf1;
          font-family: var(--font-geist-mono), monospace;
          font-size: .72rem;
          letter-spacing: .09em;
          text-transform: uppercase;
        }
        .altum-app-tool-head h3 {
          margin: 17px 0 12px;
          font-size: clamp(2rem, 4vw, 3.5rem);
          line-height: .98;
          letter-spacing: -.055em;
        }
        .altum-app-tool-head p {
          margin: 0;
          max-width: 720px;
          color: #b9c9db;
          line-height: 1.65;
        }
        .altum-app-tool-body {
          padding: clamp(26px, 5vw, 50px);
        }
        .altum-app-input-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }
        .altum-app-input-grid.three {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        .altum-app-input-grid label {
          color: #687d94;
          font-size: .8rem;
        }
        .altum-app-input-grid label > div {
          margin-top: 9px;
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: center;
          border: 1px solid #bdccdc;
          background: white;
        }
        .altum-app-input-grid label > div > span {
          padding-left: 14px;
          color: #6f8298;
        }
        .altum-app-input-grid input {
          width: 100%;
          min-width: 0;
          min-height: 56px;
          border: 0;
          outline: 0;
          background: transparent;
          padding: 11px 14px;
          color: #152f49;
          font: inherit;
          font-size: 1.2rem;
          font-weight: 650;
        }
        .altum-app-results {
          margin-top: 28px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid #d7e1ec;
          border-left: 1px solid #d7e1ec;
        }
        .altum-app-results article {
          min-height: 150px;
          padding: 24px;
          border-right: 1px solid #d7e1ec;
          border-bottom: 1px solid #d7e1ec;
        }
        .altum-app-results span {
          display: block;
          color: #70849a;
          font-size: .72rem;
          text-transform: uppercase;
          letter-spacing: .07em;
        }
        .altum-app-results strong {
          display: block;
          margin-top: 24px;
          color: #142c46;
          font-size: clamp(1.5rem, 3.5vw, 2.5rem);
          letter-spacing: -.045em;
          line-height: 1.08;
        }
        .altum-app-note {
          margin: 18px 0 0;
          color: #74869a;
          font-size: .78rem;
          line-height: 1.6;
        }
        .altum-app-warning {
          margin-top: 26px;
          padding: 18px;
          border: 1px solid #e4b9b9;
          background: #fff6f6;
          color: #8a3434;
          line-height: 1.55;
        }
        @media (max-width: 1050px) {
          .apps-index-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .altum-app-input-grid.three { grid-template-columns: 1fr; }
        }
        @media (max-width: 760px) {
          .apps-index { padding-block: 80px 55px; }
          .apps-index-grid { grid-template-columns: 1fr; }
          .apps-index-card { min-height: 190px; }
          .apps-tools-shell { padding-block: 40px 100px; gap: 36px; }
          .altum-app-input-grid, .altum-app-results { grid-template-columns: 1fr; }
          .altum-app-tool-head { min-height: 0; }
        }
      `}</style>

      <section className="inner-hero apps-hero">
        <div className="inner-hero-grid" aria-hidden="true" />
        <div className="inner-hero-copy inner-shell">
          <div className="page-kicker"><span>05</span>Apps</div>
          <h1>Herramientas simples.<br /><span>Decisiones más rápidas.</span></h1>
          <p>
            Calculadoras empresariales gratuitas para resolver operaciones frecuentes:
            IGV, plazos, margen, punto de equilibrio y variación porcentual.
          </p>
          <a className="inner-primary-link" href="#apps-index">
            Ver herramientas <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="inner-hero-aside" aria-hidden="true">
          <Calculator />
          <span>UTILIDAD INMEDIATA</span>
        </div>
      </section>

      <section className="apps-index inner-shell" id="apps-index">
        <div className="page-section-heading">
          <div className="section-kicker"><span>01</span><p>Centro de herramientas</p></div>
          <h2>Elige una app y calcula.</h2>
          <p>
            No necesitas registrarte. Los cálculos se realizan en tu navegador y sirven como
            referencia inicial para ordenar una decisión o preparar una consulta.
          </p>
        </div>

        <div className="apps-index-grid">
          {apps.map((app) => {
            const Icon = app.icon;
            return (
              <a className="apps-index-card" href={`#${app.anchor}`} key={app.anchor}>
                <div><span>{app.number}</span><Icon aria-hidden="true" /></div>
                <div>
                  <h3>{app.title}</h3>
                  <p>{app.description}</p>
                  <span className="apps-open">Abrir app <ArrowRight size={15} aria-hidden="true" /></span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="apps-tools-shell inner-shell">
        <div className="app-anchor" id="igv"><IgvCalculator /></div>
        <div className="app-anchor" id="dias"><DaysCalculator /></div>
        <div className="app-anchor" id="margen"><MarginCalculator /></div>
        <div className="app-anchor" id="equilibrio"><BreakEvenCalculator /></div>
        <div className="app-anchor" id="variacion"><VariationCalculator /></div>
      </section>

      <section className="inner-cta inner-shell">
        <div><span>¿El cálculo abre una pregunta?</span><h2>Convirtamos el número en una decisión.</h2></div>
        <a href={sitePath('contacto/')}>Preparar mi consulta <ArrowRight aria-hidden="true" /></a>
      </section>
    </SiteChrome>
  );
}
