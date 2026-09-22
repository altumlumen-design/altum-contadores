'use client';

import {
  ArrowRight,
  ArrowUpRight,
  Calculator,
  CalendarDays,
  ChartNoAxesCombined,
  Percent,
  Scale,
} from 'lucide-react';
import SiteChrome from './site-chrome';
import { sitePath } from './site-paths';

const apps = [
  {
    slug: 'igv',
    number: '01',
    title: 'Calculadora de IGV',
    description: 'Separa base imponible, IGV y total a partir de un monto con o sin impuesto.',
    icon: Calculator,
  },
  {
    slug: 'dias',
    number: '02',
    title: 'Días hábiles y calendario',
    description: 'Suma un plazo o calcula la diferencia entre dos fechas.',
    icon: CalendarDays,
  },
  {
    slug: 'margen',
    number: '03',
    title: 'Margen y utilidad',
    description: 'Calcula utilidad, margen sobre ventas y rendimiento sobre costo.',
    icon: Percent,
  },
  {
    slug: 'equilibrio',
    number: '04',
    title: 'Punto de equilibrio',
    description: 'Estima cuántas unidades necesitas vender para cubrir tus costos.',
    icon: Scale,
  },
  {
    slug: 'variacion',
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
        .apps-hub-hero .inner-hero-copy p {
          max-width: 690px;
        }

        .apps-hub {
          padding-block: 64px 104px;
        }

        .apps-hub-grid {
          margin-top: 38px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .apps-hub-card {
          min-height: 220px;
          padding: 22px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid #d5e0eb;
          border-radius: 18px;
          background:
            radial-gradient(circle at top right, rgba(46, 123, 191, .08), transparent 38%),
            #fff;
          color: #17304b;
          text-decoration: none;
          box-shadow: 0 18px 48px rgba(17, 44, 78, .055);
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            box-shadow 180ms ease,
            background 180ms ease;
        }

        .apps-hub-card:hover {
          transform: translateY(-4px);
          border-color: #a9c7e3;
          box-shadow: 0 24px 58px rgba(17, 44, 78, .10);
          background:
            radial-gradient(circle at top right, rgba(46, 123, 191, .13), transparent 42%),
            #fbfdff;
        }

        .apps-hub-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
        }

        .apps-hub-card-top span {
          font-family: var(--font-geist-mono), monospace;
          font-size: .72rem;
          letter-spacing: .08em;
          color: #66819b;
        }

        .apps-hub-card-top svg {
          width: 24px;
          height: 24px;
          color: #2673b9;
        }

        .apps-hub-card h3 {
          margin: 28px 0 10px;
          font-size: 1.28rem;
          line-height: 1.02;
          letter-spacing: -.035em;
        }

        .apps-hub-card p {
          margin: 0;
          color: #6a7d92;
          font-size: .86rem;
          line-height: 1.55;
        }

        .apps-hub-card-open {
          margin-top: 24px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #0c5da8;
          font-size: .8rem;
          font-weight: 650;
        }

        .apps-hub-note {
          margin-top: 22px;
          display: flex;
          gap: 10px;
          align-items: flex-start;
          padding: 14px 16px;
          border-radius: 14px;
          background: #f4f8fc;
          color: #687d94;
          font-size: .78rem;
          line-height: 1.55;
        }

        @media (max-width: 980px) {
          .apps-hub-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .apps-hub {
            padding-block: 34px 72px;
          }

          .apps-hub-grid {
            margin-top: 22px;
            gap: 10px;
          }

          .apps-hub-card {
            min-height: 162px;
            padding: 15px;
            border-radius: 15px;
          }

          .apps-hub-card-top svg {
            width: 19px;
            height: 19px;
          }

          .apps-hub-card h3 {
            margin: 16px 0 7px;
            font-size: .98rem;
          }

          .apps-hub-card p {
            font-size: .75rem;
            line-height: 1.45;
          }

          .apps-hub-card-open {
            margin-top: 14px;
            font-size: .72rem;
          }
        }

        @media (max-width: 520px) {
          .apps-hub-grid {
            grid-template-columns: 1fr;
          }

          .apps-hub-card {
            min-height: 145px;
          }
        }
      `}</style>

      <section className="inner-hero apps-hub-hero">
        <div className="inner-hero-grid" aria-hidden="true" />
        <div className="inner-hero-copy inner-shell">
          <div className="page-kicker"><span>05</span>Apps</div>
          <h1>Una herramienta.<br /><span>Una tarea concreta.</span></h1>
          <p>
            Elige la calculadora que necesitas. Cada app se abre de manera independiente
            en esta misma pestaña para que puedas concentrarte solo en el cálculo.
          </p>
          <a className="inner-primary-link" href="#apps">
            Ver apps <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="inner-hero-aside" aria-hidden="true">
          <Calculator />
          <span>HERRAMIENTAS ALTUM</span>
        </div>
      </section>

      <section className="apps-hub inner-shell" id="apps">
        <div className="page-section-heading">
          <div className="section-kicker"><span>01</span><p>Centro de herramientas</p></div>
          <h2>¿Qué necesitas calcular?</h2>
          <p>
            Selecciona una app. Al abrirla no aparecerán las demás calculadoras debajo:
            cada herramienta tiene su propia pantalla.
          </p>
        </div>

        <div className="apps-hub-grid">
          {apps.map((item) => {
            const Icon = item.icon;
            return (
              <a className="apps-hub-card" href={sitePath(`apps/${item.slug}/`)} key={item.slug}>
                <div className="apps-hub-card-top">
                  <span>{item.number}</span>
                  <Icon aria-hidden="true" />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="apps-hub-card-open">
                    Abrir app <ArrowRight size={15} aria-hidden="true" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        <div className="apps-hub-note">
          Los cálculos son referenciales y se realizan en tu navegador. Para decisiones tributarias,
          administrativas o financieras específicas, corresponde revisar el caso concreto.
        </div>
      </section>
    </SiteChrome>
  );
}
