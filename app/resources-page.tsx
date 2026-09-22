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

        .apps-quick-nav-wrap {
          position: relative;
          z-index: 4;
          margin-top: -26px;
        }
        .apps-quick-nav {
          padding-inline: clamp(16px, 4vw, 26px);
        }
        .apps-quick-scroll {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding: 0 0 6px;
          scrollbar-width: none;
        }
        .apps-quick-scroll::-webkit-scrollbar { display: none; }
        .apps-chip {
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          min-height: 42px;
          padding: 0 14px;
          border: 1px solid #d3dfea;
          border-radius: 999px;
          background: rgba(255,255,255,.96);
          color: #17304b;
          text-decoration: none;
          box-shadow: 0 16px 36px rgba(17, 44, 78, .08);
          white-space: nowrap;
          font-size: .82rem;
          font-weight: 600;
        }
        .apps-chip svg {
          width: 16px;
          height: 16px;
          color: #2673b9;
        }

        .apps-index {
          padding-block: 66px 56px;
        }
        .apps-index-grid {
          margin-top: 36px;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          border-top: 1px solid #cfdae7;
          border-left: 1px solid #cfdae7;
        }
        .apps-index-card {
          min-height: 178px;
          padding: 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #17304b;
          text-decoration: none;
          border-right: 1px solid #cfdae7;
          border-bottom: 1px solid #cfdae7;
          background: white;
          transition: transform 180ms ease, background 180ms ease, box-shadow 180ms ease;
        }
        .apps-index-card:hover {
          background: #f3f8ff;
          transform: translateY(-3px);
          box-shadow: 0 20px 48px rgba(17, 52, 91, .08);
        }
        .apps-index-card > div:first-child {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          color: #658098;
          font-family: var(--font-geist-mono), monospace;
          font-size: .72rem;
        }
        .apps-index-card svg { width: 19px; color: #2673b9; }
        .apps-index-card h3 {
          margin: 18px 0 9px;
          font-size: 1rem;
          line-height: 1.08;
          letter-spacing: -.03em;
        }
        .apps-index-card p {
          margin: 0;
          color: #677b91;
          font-size: .8rem;
          line-height: 1.5;
        }
        .apps-index-card .apps-open {
          margin-top: 16px;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #0c5da8;
          font-size: .75rem;
          font-weight: 650;
        }

        .apps-tools-shell {
          padding-block: 24px 110px;
          display: grid;
          gap: 28px;
        }
        .app-anchor {
          scroll-margin-top: 116px;
        }

        .altum-app-tool {
          border: 1px solid #cbd7e7;
          background: white;
          box-shadow: 0 24px 70px rgba(15,46,90,.07);
          overflow: hidden;
          border-radius: 18px;
        }
        .altum-app-tool-head {
          min-height: 154px;
          display: flex;
          justify-content: space-between;
          gap: 24px;
          align-items: flex-start;
          padding: clamp(22px, 4vw, 38px);
          background:
            radial-gradient(circle at top right, rgba(67, 146, 219, .18), transparent 32%),
            linear-gradient(180deg, #0a1a31 0%, #0f213b 100%);
          color: white;
        }
        .altum-app-tool-head > svg {
          flex: 0 0 auto;
          width: clamp(30px, 6vw, 56px);
          height: auto;
          color: #82bff5;
          opacity: .9;
        }
        .altum-app-tool-head span {
          display: block;
          color: #83bdf1;
          font-family: var(--font-geist-mono), monospace;
          font-size: .7rem;
          letter-spacing: .09em;
          text-transform: uppercase;
        }
        .altum-app-tool-head h3 {
          margin: 12px 0 10px;
          font-size: clamp(1.52rem, 4vw, 2.55rem);
          line-height: .98;
          letter-spacing: -.05em;
        }
        .altum-app-tool-head p {
          margin: 0;
          max-width: 640px;
          color: #b9c9db;
          line-height: 1.55;
          font-size: .9rem;
        }
        .altum-app-tool-body {
          padding: clamp(18px, 4vw, 30px);
        }

        .altum-app-input-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }
        .altum-app-input-grid.three {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        .altum-app-input-grid label {
          color: #687d94;
          font-size: .78rem;
        }
        .altum-app-input-grid label > div {
          margin-top: 8px;
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: center;
          border: 1px solid #bdccdc;
          border-radius: 14px;
          background: white;
        }
        .altum-app-input-grid label > div > span {
          padding-left: 12px;
          color: #6f8298;
          font-size: .92rem;
        }
        .altum-app-input-grid input {
          width: 100%;
          min-width: 0;
          min-height: 50px;
          border: 0;
          outline: 0;
          background: transparent;
          padding: 10px 12px;
          color: #152f49;
          font: inherit;
          font-size: 1.04rem;
          font-weight: 650;
        }

        .altum-app-results {
          margin-top: 18px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid #d7e1ec;
          border-left: 1px solid #d7e1ec;
          border-radius: 14px;
          overflow: hidden;
        }
        .altum-app-results article {
          min-height: 120px;
          padding: 18px;
          border-right: 1px solid #d7e1ec;
          border-bottom: 1px solid #d7e1ec;
          background: #fbfdff;
        }
        .altum-app-results span {
          display: block;
          color: #70849a;
          font-size: .68rem;
          text-transform: uppercase;
          letter-spacing: .07em;
        }
        .altum-app-results strong {
          display: block;
          margin-top: 16px;
          color: #142c46;
          font-size: clamp(1.2rem, 3.5vw, 2rem);
          letter-spacing: -.04em;
          line-height: 1.08;
        }
        .altum-app-note {
          margin: 14px 0 0;
          color: #74869a;
          font-size: .76rem;
          line-height: 1.55;
        }
        .altum-app-warning {
          margin-top: 18px;
          padding: 15px;
          border: 1px solid #e4b9b9;
          border-radius: 14px;
          background: #fff6f6;
          color: #8a3434;
          line-height: 1.5;
          font-size: .85rem;
        }

        @media (max-width: 1050px) {
          .apps-index-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .altum-app-input-grid.three { grid-template-columns: 1fr; }
        }

        @media (max-width: 760px) {
          .apps-quick-nav-wrap {
            margin-top: -12px;
          }
          .apps-quick-nav {
            padding-inline: 16px;
          }
          .apps-chip {
            min-height: 39px;
            padding-inline: 12px;
            font-size: .76rem;
          }
          .apps-index {
            padding-block: 34px 26px;
          }
          .apps-index-grid {
            margin-top: 22px;
            grid-template-columns: 1fr 1fr;
          }
          .apps-index-card {
            min-height: 148px;
            padding: 14px;
          }
          .apps-index-card h3 {
            margin-top: 10px;
            font-size: .92rem;
          }
          .apps-index-card p {
            font-size: .74rem;
          }
          .apps-tools-shell {
            padding-block: 12px 88px;
            gap: 18px;
          }
          .app-anchor {
            scroll-margin-top: 92px;
          }
          .altum-app-tool {
            border-radius: 16px;
          }
          .altum-app-tool-head {
            min-height: 0;
            gap: 14px;
            padding: 18px 16px;
          }
          .altum-app-tool-head h3 {
            font-size: 1.3rem;
            margin-top: 8px;
          }
          .altum-app-tool-head p {
            font-size: .82rem;
            line-height: 1.45;
          }
          .altum-app-tool-body {
            padding: 14px;
          }
          .altum-app-input-grid,
          .altum-app-results {
            grid-template-columns: 1fr;
          }
          .altum-app-results article {
            min-height: 0;
            padding: 15px;
          }
        }

        @media (max-width: 520px) {
          .apps-index-grid {
            grid-template-columns: 1fr;
          }
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

      <div className="apps-quick-nav-wrap">
        <div className="apps-quick-nav inner-shell">
          <div className="apps-quick-scroll" aria-label="Navegación rápida de apps">
            {apps.map((app) => {
              const Icon = app.icon;
              return (
                <a className="apps-chip" href={`#${app.anchor}`} key={app.anchor}>
                  <Icon aria-hidden="true" />
                  <span>{app.title}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <section className="apps-index inner-shell" id="apps-index">
        <div className="page-section-heading">
          <div className="section-kicker"><span>01</span><p>Centro de herramientas</p></div>
          <h2>Elige una app y calcula.</h2>
          <p>
            Todo está en una sola página, pero ahora con accesos directos y una interfaz más compacta
            para que en celular no tengas que desplazarte tanto.
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
