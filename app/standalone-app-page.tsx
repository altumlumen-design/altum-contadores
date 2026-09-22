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


        /* Shared visual language for standalone calculators.
           These styles are intentionally here so each app keeps its
           complete interactive appearance when opened on its own page. */
        .altum-app-tool {
          overflow: hidden;
          border: 1px solid #cfdbe7;
          border-radius: 20px;
          background: #fff;
          box-shadow: 0 28px 78px rgba(12, 42, 76, .08);
        }

        .altum-app-tool-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 28px;
          padding: clamp(24px, 4vw, 42px);
          color: #fff;
          background:
            radial-gradient(circle at 88% 8%, rgba(92, 168, 238, .22), transparent 28%),
            linear-gradient(145deg, #07182c 0%, #102c4c 100%);
        }

        .altum-app-tool-head > svg {
          flex: 0 0 auto;
          width: clamp(40px, 6vw, 64px);
          height: auto;
          padding: 11px;
          border: 1px solid rgba(153, 204, 247, .25);
          border-radius: 16px;
          background: rgba(255,255,255,.06);
          color: #91caff;
        }

        .altum-app-tool-head span {
          display: block;
          color: #8fc5f4;
          font-family: var(--font-geist-mono), monospace;
          font-size: .72rem;
          letter-spacing: .09em;
          text-transform: uppercase;
        }

        .altum-app-tool-head h3 {
          margin: 12px 0 10px;
          max-width: 720px;
          font-size: clamp(1.8rem, 4vw, 3rem);
          line-height: .98;
          letter-spacing: -.05em;
        }

        .altum-app-tool-head p {
          margin: 0;
          max-width: 700px;
          color: #c0d0e0;
          line-height: 1.6;
          font-size: .92rem;
        }

        .altum-app-tool-body {
          padding: clamp(20px, 4vw, 34px);
        }

        .altum-app-explainer {
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) minmax(230px, .75fr);
          gap: 16px;
          margin-bottom: 22px;
        }

        .altum-app-explainer-main,
        .altum-app-explainer-side {
          border-radius: 16px;
          padding: 17px 18px;
        }

        .altum-app-explainer-main {
          border: 1px solid #d7e2ed;
          background: #f7faff;
        }

        .altum-app-explainer-side {
          background: #eef6ff;
          border: 1px solid #cfe2f6;
        }

        .altum-app-explainer strong {
          display: block;
          margin-bottom: 7px;
          color: #15334f;
          font-size: .88rem;
        }

        .altum-app-explainer p {
          margin: 0;
          color: #667c92;
          font-size: .8rem;
          line-height: 1.55;
        }

        .altum-app-step {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          color: #0d66ad;
          font-size: .72rem;
          font-weight: 700;
          letter-spacing: .04em;
          text-transform: uppercase;
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
          display: block;
          padding: 15px;
          border: 1px solid #d5e0eb;
          border-radius: 16px;
          background: #fff;
          color: #5e748b;
          font-size: .78rem;
          line-height: 1.4;
          transition: border-color 160ms ease, box-shadow 160ms ease;
        }

        .altum-app-input-grid label:focus-within {
          border-color: #76aee0;
          box-shadow: 0 0 0 3px rgba(71, 143, 204, .09);
        }

        .altum-app-input-grid label > small {
          display: block;
          margin-top: 5px;
          color: #8a9caf;
          font-size: .69rem;
          line-height: 1.4;
        }

        .altum-app-input-grid label > div {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: center;
          gap: 8px;
          margin-top: 10px;
          min-height: 50px;
          border-top: 1px solid #e6edf4;
        }

        .altum-app-input-grid label > div > span {
          color: #3377b5;
          font-size: .9rem;
          font-weight: 700;
        }

        .altum-app-input-grid input {
          width: 100%;
          min-width: 0;
          border: 0;
          outline: 0;
          background: transparent;
          color: #102f4b;
          padding: 10px 0;
          font: inherit;
          font-size: clamp(1.15rem, 3vw, 1.55rem);
          font-weight: 700;
          letter-spacing: -.025em;
        }

        .altum-app-results {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 18px;
          overflow: hidden;
          border: 1px solid #d5e0eb;
          border-radius: 16px;
          background: #fbfdff;
        }

        .altum-app-results article {
          min-height: 126px;
          padding: 18px;
          border-right: 1px solid #d5e0eb;
        }

        .altum-app-results article:last-child {
          border-right: 0;
        }

        .altum-app-results span {
          display: block;
          color: #74889c;
          font-size: .68rem;
          letter-spacing: .07em;
          text-transform: uppercase;
        }

        .altum-app-results strong {
          display: block;
          margin-top: 17px;
          color: #102f4b;
          font-size: clamp(1.45rem, 3vw, 2.2rem);
          line-height: 1.05;
          letter-spacing: -.045em;
        }

        .altum-app-results .is-primary {
          background: #0d2743;
        }

        .altum-app-results .is-primary span {
          color: #9ac7ed;
        }

        .altum-app-results .is-primary strong {
          color: #fff;
        }

        .altum-app-interpretation {
          margin-top: 16px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 15px 16px;
          border-radius: 14px;
          background: #f2f7fc;
          color: #5f758b;
          font-size: .79rem;
          line-height: 1.55;
        }

        .altum-app-interpretation strong {
          color: #173a5a;
        }

        .altum-app-presets {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 14px;
        }

        .altum-app-presets button {
          min-height: 36px;
          padding: 0 11px;
          border: 1px solid #cad8e5;
          border-radius: 999px;
          background: #fff;
          color: #48647f;
          cursor: pointer;
          font: inherit;
          font-size: .72rem;
          font-weight: 650;
        }

        .altum-app-presets button:hover {
          border-color: #8eb6d9;
          background: #f3f8fd;
          color: #0d66ad;
        }

        .altum-app-note {
          margin: 13px 0 0;
          color: #7a8da0;
          font-size: .73rem;
          line-height: 1.55;
        }

        .altum-app-warning {
          margin-top: 16px;
          padding: 15px 16px;
          border: 1px solid #e9bcbc;
          border-radius: 14px;
          background: #fff6f6;
          color: #8c3c3c;
          font-size: .82rem;
          line-height: 1.5;
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

          .altum-app-tool {
            border-radius: 16px;
          }

          .altum-app-tool-head {
            gap: 14px;
            padding: 17px 15px;
          }

          .altum-app-tool-head > svg {
            width: 42px;
            padding: 8px;
            border-radius: 13px;
          }

          .altum-app-tool-head h3 {
            margin-top: 8px;
            font-size: 1.28rem;
          }

          .altum-app-tool-head p {
            font-size: .8rem;
            line-height: 1.45;
          }

          .altum-app-tool-body {
            padding: 14px;
          }

          .altum-app-explainer {
            grid-template-columns: 1fr;
            gap: 8px;
            margin-bottom: 14px;
          }

          .altum-app-explainer-main,
          .altum-app-explainer-side {
            padding: 13px 14px;
            border-radius: 13px;
          }

          .altum-app-input-grid,
          .altum-app-input-grid.three {
            grid-template-columns: 1fr;
            gap: 9px;
          }

          .altum-app-input-grid label {
            padding: 12px 13px;
            border-radius: 13px;
          }

          .altum-app-input-grid label > div {
            min-height: 45px;
            margin-top: 7px;
          }

          .altum-app-input-grid input {
            font-size: 1.16rem;
          }

          .altum-app-results {
            grid-template-columns: 1fr;
            margin-top: 12px;
          }

          .altum-app-results article {
            min-height: 0;
            padding: 13px 14px;
            border-right: 0;
            border-bottom: 1px solid #d5e0eb;
          }

          .altum-app-results article:last-child {
            border-bottom: 0;
          }

          .altum-app-results strong {
            margin-top: 8px;
            font-size: 1.45rem;
          }

          .altum-app-interpretation {
            margin-top: 12px;
            padding: 12px 13px;
            font-size: .75rem;
          }

          .altum-app-presets {
            margin-top: 10px;
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
