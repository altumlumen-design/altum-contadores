'use client';

import type { ReactNode } from 'react';
import { ArrowLeft, MessageSquareText } from 'lucide-react';
import SiteChrome from './site-chrome';
import { sitePath } from './site-paths';

type StandaloneAppPageProps = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export default function StandaloneAppPage({
  number,
  eyebrow,
  title,
  description,
  children,
}: StandaloneAppPageProps) {
  return (
    <SiteChrome active="Apps">
      <style>{`
        .single-app-main {
          padding-block: 46px 96px;
        }

        .single-app-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          margin-bottom: 24px;
        }

        .single-app-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #315c83;
          text-decoration: none;
          font-size: .84rem;
          font-weight: 650;
        }

        .single-app-number {
          font-family: var(--font-geist-mono), monospace;
          font-size: .72rem;
          color: #71879d;
          letter-spacing: .08em;
        }

        .single-app-intro {
          max-width: 800px;
          margin-bottom: 28px;
        }

        .single-app-intro span {
          display: block;
          color: #3a78b3;
          font-family: var(--font-geist-mono), monospace;
          font-size: .72rem;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .single-app-intro h1 {
          margin: 12px 0 12px;
          color: #152d46;
          font-size: clamp(2.15rem, 5vw, 4.2rem);
          line-height: .96;
          letter-spacing: -.055em;
        }

        .single-app-intro p {
          margin: 0;
          max-width: 700px;
          color: #6b7f94;
          font-size: .95rem;
          line-height: 1.6;
        }

        .single-app-tool-wrap {
          max-width: 1040px;
        }

        .single-app-footer {
          max-width: 1040px;
          margin-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          padding: 18px 20px;
          border: 1px solid #d8e2ed;
          border-radius: 15px;
          background: #f7faff;
        }

        .single-app-footer p {
          margin: 0;
          color: #687d94;
          font-size: .8rem;
          line-height: 1.5;
        }

        .single-app-footer a {
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 42px;
          padding: 0 14px;
          border-radius: 999px;
          background: #07182c;
          color: white;
          text-decoration: none;
          font-size: .78rem;
          font-weight: 650;
        }

        @media (max-width: 760px) {
          .single-app-main {
            padding-block: 26px 72px;
          }

          .single-app-topbar {
            margin-bottom: 16px;
          }

          .single-app-intro {
            margin-bottom: 18px;
          }

          .single-app-intro h1 {
            margin-top: 8px;
            font-size: clamp(1.75rem, 9vw, 2.4rem);
          }

          .single-app-intro p {
            font-size: .84rem;
            line-height: 1.5;
          }

          .single-app-footer {
            display: block;
            padding: 14px;
          }

          .single-app-footer a {
            margin-top: 12px;
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <main className="single-app-main inner-shell">
        <div className="single-app-topbar">
          <a className="single-app-back" href={sitePath('apps/')}>
            <ArrowLeft size={16} aria-hidden="true" /> Todas las apps
          </a>
          <span className="single-app-number">{number}</span>
        </div>

        <header className="single-app-intro">
          <span>{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </header>

        <div className="single-app-tool-wrap">
          {children}
        </div>

        <div className="single-app-footer">
          <p>
            ¿El resultado necesita interpretación o depende de un caso específico?
            Puedes convertir el cálculo en una consulta.
          </p>
          <a href={sitePath('contacto/')}>
            <MessageSquareText size={16} aria-hidden="true" /> Consultar
          </a>
        </div>
      </main>
    </SiteChrome>
  );
}
