'use client';

import { useMemo, useState } from 'react';
import { Calculator, RotateCcw } from 'lucide-react';

type Mode = 'without' | 'with';

const RATE = 0.18;

function parseAmount(value: string) {
  const clean = value.trim().replace(/\s/g, '');
  if (!clean) return 0;

  let normalized = clean;
  if (clean.includes(',') && clean.includes('.')) {
    normalized = clean.lastIndexOf(',') > clean.lastIndexOf('.')
      ? clean.replace(/\./g, '').replace(',', '.')
      : clean.replace(/,/g, '');
  } else if (clean.includes(',')) {
    normalized = clean.replace(',', '.');
  }

  const number = Number(normalized.replace(/[^\d.-]/g, ''));
  return Number.isFinite(number) && number >= 0 ? number : 0;
}

const money = new Intl.NumberFormat('es-PE', {
  style: 'currency',
  currency: 'PEN',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export default function IgvCalculator() {
  const [mode, setMode] = useState<Mode>('without');
  const [amount, setAmount] = useState('1000');

  const values = useMemo(() => {
    const entered = parseAmount(amount);

    if (mode === 'without') {
      const base = entered;
      const igv = base * RATE;
      return { base, igv, total: base + igv };
    }

    const total = entered;
    const base = total / (1 + RATE);
    return { base, igv: total - base, total };
  }, [amount, mode]);

  return (
    <>
      <style>{`
        @media (max-width: 760px) {
          .altum-igv-card .igv-top-grid { grid-template-columns: 1fr !important; }
          .altum-igv-card .igv-panel,
          .altum-igv-card .igv-entry-panel { padding: 16px !important; }
          .altum-igv-card .igv-kicker { margin-bottom: 14px !important; font-size: 11px !important; }
          .altum-igv-card h3 { font-size: 1.3rem !important; }
          .altum-igv-card p { margin-top: 10px !important; font-size: .82rem !important; line-height: 1.45 !important; }
          .altum-igv-card .igv-mode-grid { grid-template-columns: 1fr 1fr !important; margin-bottom: 16px !important; }
          .altum-igv-card .igv-mode-grid button { min-height: 44px !important; font-size: .76rem !important; }
          .altum-igv-card .igv-input-currency { font-size: 18px !important; }
          .altum-igv-card .igv-input-field { font-size: 1.55rem !important; }
          .altum-igv-card .igv-results { grid-template-columns: 1fr !important; }
          .altum-igv-card .igv-result-card { min-height: 0 !important; padding: 15px !important; border-right: 0 !important; border-bottom: 1px solid #dce4ef !important; }
          .altum-igv-card .igv-result-card:last-child { border-bottom: 0 !important; }
          .altum-igv-card .igv-result-card strong { margin-top: 12px !important; font-size: 1.45rem !important; }
          .altum-igv-card .igv-helper { padding: 14px 16px !important; font-size: 11px !important; }
        }
      `}</style>
      <div className="altum-igv-card"
      style={{
        marginTop: 0,
        border: '1px solid #cbd7e7',
        background: '#ffffff',
        boxShadow: '0 30px 80px rgb(15 46 90 / 8%)',
        overflow: 'hidden',
      }}
    >
      <div className="igv-top-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          background: '#07162a',
          color: 'white',
        }}
      >
        <div className="igv-panel" style={{ padding: 'clamp(24px, 4vw, 42px)' }}>
          <div className="igv-kicker"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 22,
              color: '#8dc6ff',
              fontSize: 13,
              letterSpacing: '.09em',
              textTransform: 'uppercase',
            }}
          >
            <Calculator size={20} aria-hidden="true" />
            Calculadora rápida
          </div>
          <h3
            style={{
              margin: 0,
              maxWidth: 560,
              fontSize: 'clamp(2rem, 4vw, 3.8rem)',
              lineHeight: .98,
              letterSpacing: '-.055em',
            }}
          >
            Calcula el IGV sin perder tiempo.
          </h3>
          <p
            style={{
              margin: '24px 0 0',
              maxWidth: 620,
              color: '#b7c8dc',
              lineHeight: 1.7,
            }}
          >
            Ingresa un importe y elige si ya incluye IGV. Obtendrás la base imponible,
            el impuesto y el total de manera inmediata.
          </p>
        </div>

        <div className="igv-entry-panel" style={{ padding: 'clamp(24px, 4vw, 42px)', background: '#0d2340' }}>
          <div className="igv-mode-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: 8,
              marginBottom: 28,
            }}
          >
            <button
              type="button"
              onClick={() => setMode('without')}
              aria-pressed={mode === 'without'}
              style={{
                minHeight: 52,
                border: mode === 'without' ? '1px solid #8dc6ff' : '1px solid #36506e',
                background: mode === 'without' ? '#eaf5ff' : 'transparent',
                color: mode === 'without' ? '#0b335d' : '#d7e4f2',
                padding: '10px 12px',
                cursor: 'pointer',
                font: 'inherit',
              }}
            >
              Monto sin IGV
            </button>
            <button
              type="button"
              onClick={() => setMode('with')}
              aria-pressed={mode === 'with'}
              style={{
                minHeight: 52,
                border: mode === 'with' ? '1px solid #8dc6ff' : '1px solid #36506e',
                background: mode === 'with' ? '#eaf5ff' : 'transparent',
                color: mode === 'with' ? '#0b335d' : '#d7e4f2',
                padding: '10px 12px',
                cursor: 'pointer',
                font: 'inherit',
              }}
            >
              Monto con IGV
            </button>
          </div>

          <label style={{ display: 'block', color: '#aebfd2', fontSize: 13 }}>
            Importe en soles
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                alignItems: 'center',
                marginTop: 9,
                borderBottom: '1px solid #6f86a1',
              }}
            >
              <span className="igv-input-currency" style={{ padding: '10px 10px 10px 0', fontSize: 24, color: '#8dc6ff' }}>S/</span>
              <input
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                inputMode="decimal"
                aria-label="Importe en soles"
                className="igv-input-field"
                style={{
                  width: '100%',
                  minWidth: 0,
                  border: 0,
                  outline: 0,
                  background: 'transparent',
                  color: 'white',
                  padding: '10px 0',
                  fontSize: 'clamp(1.8rem, 5vw, 3rem)',
                  fontWeight: 650,
                  fontFamily: 'inherit',
                }}
              />
            </div>
          </label>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 18 }}>
            {[100, 500, 1000, 5000].map((value) => (
              <button
                type="button"
                key={value}
                onClick={() => setAmount(String(value))}
                style={{
                  border: '1px solid #36506e',
                  background: 'transparent',
                  color: '#c8d7e7',
                  padding: '7px 11px',
                  cursor: 'pointer',
                  font: 'inherit',
                  fontSize: 13,
                }}
              >
                S/ {value.toLocaleString('es-PE')}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setAmount('')}
              aria-label="Limpiar importe"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                border: '1px solid #36506e',
                background: 'transparent',
                color: '#c8d7e7',
                padding: '7px 11px',
                cursor: 'pointer',
                font: 'inherit',
                fontSize: 13,
              }}
            >
              <RotateCcw size={14} aria-hidden="true" /> Limpiar
            </button>
          </div>
        </div>
      </div>

      <div className="igv-top-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
          borderTop: '1px solid #cbd7e7',
        }}
      >
        {[
          ['Base imponible', values.base],
          ['IGV (18%)', values.igv],
          ['Total', values.total],
        ].map(([label, value], index) => (
          <div className="igv-result-card"
            key={label as string}
            style={{
              minHeight: 160,
              padding: '28px',
              borderRight: index < 2 ? '1px solid #dce4ef' : 0,
            }}
          >
            <span
              style={{
                color: '#6d8199',
                fontSize: 12,
                letterSpacing: '.08em',
                textTransform: 'uppercase',
              }}
            >
              {label as string}
            </span>
            <strong
              style={{
                display: 'block',
                marginTop: 24,
                color: '#14252e',
                fontSize: 'clamp(1.7rem, 4vw, 2.7rem)',
                letterSpacing: '-.04em',
              }}
            >
              {money.format(value as number)}
            </strong>
          </div>
        ))}
      </div>

      <div className="igv-helper"
        style={{
          padding: '16px 22px 18px',
          borderTop: '1px solid #dce4ef',
          color: '#718298',
          fontSize: 12,
          lineHeight: 1.6,
          background: '#f8fbff',
        }}
      >
        Cálculo referencial con la tasa general de 18%. No contempla exoneraciones,
        inafectaciones, percepciones, retenciones, detracciones ni tratamientos especiales.
      </div>
    </div>
    </>
  );
}
