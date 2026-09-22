'use client';

import { useMemo, useState } from 'react';
import { ArrowUpRight, CalendarDays, RotateCcw } from 'lucide-react';

type DayKind = 'calendar' | 'business';
type CalculationMode = 'deadline' | 'between';
type BusinessContext = 'general' | 'tax';

const holidays2026 = new Set([
  '2026-01-01',
  '2026-04-02',
  '2026-04-03',
  '2026-05-01',
  '2026-06-07',
  '2026-06-29',
  '2026-07-23',
  '2026-07-28',
  '2026-07-29',
  '2026-08-06',
  '2026-08-30',
  '2026-10-08',
  '2026-11-01',
  '2026-12-08',
  '2026-12-09',
  '2026-12-25',
]);

const publicNonWorking2026 = new Set([
  '2026-01-02',
  '2026-07-27',
]);

function parseDate(value: string) {
  if (!value) return null;
  const [year, month, day] = value.split('-').map(Number);
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day, 12, 0, 0);
}

function dateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function addOneDay(date: Date) {
  const next = new Date(date);
  next.setDate(next.getDate() + 1);
  return next;
}

function isBusinessDay(date: Date, context: BusinessContext) {
  const weekday = date.getDay();
  if (weekday === 0 || weekday === 6) return false;

  const key = dateKey(date);
  if (holidays2026.has(key)) return false;

  if (context === 'general' && publicNonWorking2026.has(key)) return false;

  return true;
}

function formatDate(date: Date | null) {
  if (!date) return '—';
  return new Intl.DateTimeFormat('es-PE', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

function countBetween(
  start: Date,
  end: Date,
  kind: DayKind,
  context: BusinessContext,
) {
  if (end < start) return 0;

  let count = 0;
  let cursor = new Date(start);

  while (cursor < end) {
    cursor = addOneDay(cursor);
    if (kind === 'calendar' || isBusinessDay(cursor, context)) {
      count += 1;
    }
  }

  return count;
}

function addDays(
  start: Date,
  amount: number,
  kind: DayKind,
  context: BusinessContext,
) {
  if (amount <= 0) return start;

  let cursor = new Date(start);
  let counted = 0;

  while (counted < amount) {
    cursor = addOneDay(cursor);
    if (kind === 'calendar' || isBusinessDay(cursor, context)) {
      counted += 1;
    }
  }

  return cursor;
}

export default function DaysCalculator() {
  const [mode, setMode] = useState<CalculationMode>('deadline');
  const [kind, setKind] = useState<DayKind>('business');
  const [context, setContext] = useState<BusinessContext>('general');
  const [start, setStart] = useState('2026-09-21');
  const [end, setEnd] = useState('2026-10-08');
  const [days, setDays] = useState('10');

  const result = useMemo(() => {
    const startDate = parseDate(start);
    const endDate = parseDate(end);

    if (!startDate) {
      return { date: null as Date | null, count: 0, outside2026: false };
    }

    if (mode === 'deadline') {
      const amount = Math.max(0, Math.floor(Number(days) || 0));
      const date = addDays(startDate, amount, kind, context);
      return {
        date,
        count: amount,
        outside2026: startDate.getFullYear() !== 2026 || date.getFullYear() !== 2026,
      };
    }

    if (!endDate) {
      return { date: null, count: 0, outside2026: false };
    }

    return {
      date: endDate,
      count: countBetween(startDate, endDate, kind, context),
      outside2026: startDate.getFullYear() !== 2026 || endDate.getFullYear() !== 2026,
    };
  }, [start, end, days, kind, mode, context]);

  return (
    <div className="altum-app-tool">
      <style>{`
        .days-mode-grid, .days-kind-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 8px;
        }
        .days-tool-button {
          min-height: 50px;
          border: 1px solid #c8d5e4;
          background: white;
          color: #27425e;
          padding: 10px 12px;
          cursor: pointer;
          font: inherit;
        }
        .days-tool-button.active {
          border-color: #337cc0;
          background: #edf6ff;
          color: #0c5da8;
          font-weight: 650;
        }
        .days-form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
          gap: 18px;
          margin-top: 18px;
        }
        .days-label {
          display: block;
          color: #687d94;
          font-size: .8rem;
          line-height: 1.4;
        }
        .days-label input, .days-label select {
          width: 100%;
          margin-top: 8px;
          min-height: 50px;
          padding: 10px 12px;
          border: 1px solid #bdccdc;
          background: white;
          color: #172f49;
          font: inherit;
          outline: none;
        }
        .days-result {
          margin-top: 18px;
          padding: clamp(24px, 4vw, 38px);
          background: #07182c;
          color: white;
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 24px;
          align-items: center;
        }
        .days-result span {
          display: block;
          color: #94b9dd;
          font-size: .74rem;
          letter-spacing: .08em;
          text-transform: uppercase;
        }
        .days-result strong {
          display: block;
          margin-top: 10px;
          font-size: clamp(1.7rem, 4vw, 2.8rem);
          line-height: 1.05;
          text-transform: capitalize;
        }
        .days-result-number {
          min-width: 120px;
          text-align: right;
          font-size: clamp(2.8rem, 7vw, 5.2rem);
          font-weight: 700;
          letter-spacing: -.06em;
        }
        .days-official {
          margin-top: 18px;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          justify-content: space-between;
          align-items: center;
          padding: 13px 14px;
          border: 1px solid #d8e2ed;
          background: #f7faff;
          color: #61758c;
          font-size: .82rem;
          line-height: 1.55;
        }
        .days-official a {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #0c5da8;
          font-weight: 650;
          text-decoration: none;
          white-space: nowrap;
        }
        @media (max-width: 620px) {
          .days-mode-grid, .days-kind-grid {
            grid-template-columns: 1fr;
          }
          .days-tool-button {
            min-height: 46px;
            font-size: .84rem;
          }
          .days-form-grid {
            grid-template-columns: 1fr;
            gap: 12px;
            margin-top: 18px;
          }
          .days-label input, .days-label select {
            min-height: 46px;
          }
          .days-result { 
            grid-template-columns: 1fr;
            margin-top: 18px;
            padding: 16px;
            gap: 10px;
          }
          .days-result strong {
            font-size: 1.45rem;
          }
          .days-result-number { text-align: left; font-size: 2.2rem; }
          .days-official {
            margin-top: 12px;
            padding: 12px;
            font-size: .76rem;
          }
        }
      `}</style>

      <div className="altum-app-tool-head">
        <div>
          <span>App 02</span>
          <h3>Días hábiles y calendario</h3>
          <p>Calcula una fecha de vencimiento o cuenta los días transcurridos entre dos fechas.</p>
        </div>
        <CalendarDays aria-hidden="true" />
      </div>

      <div className="altum-app-tool-body">
        <div className="days-mode-grid">
          <button
            className={mode === 'deadline' ? 'days-tool-button active' : 'days-tool-button'}
            type="button"
            onClick={() => setMode('deadline')}
          >
            Sumar un plazo
          </button>
          <button
            className={mode === 'between' ? 'days-tool-button active' : 'days-tool-button'}
            type="button"
            onClick={() => setMode('between')}
          >
            Entre dos fechas
          </button>
        </div>

        <div style={{ marginTop: 18 }} className="days-kind-grid">
          <button
            className={kind === 'business' ? 'days-tool-button active' : 'days-tool-button'}
            type="button"
            onClick={() => setKind('business')}
          >
            Días hábiles
          </button>
          <button
            className={kind === 'calendar' ? 'days-tool-button active' : 'days-tool-button'}
            type="button"
            onClick={() => setKind('calendar')}
          >
            Días calendario
          </button>
        </div>

        <div className="days-form-grid">
          <label className="days-label">
            Fecha de inicio
            <input type="date" value={start} onChange={(event) => setStart(event.target.value)} />
          </label>

          {mode === 'deadline' ? (
            <label className="days-label">
              Días a contar
              <input
                type="number"
                min="0"
                max="699"
                value={days}
                onChange={(event) => setDays(event.target.value)}
              />
            </label>
          ) : (
            <label className="days-label">
              Fecha final
              <input type="date" value={end} onChange={(event) => setEnd(event.target.value)} />
            </label>
          )}

          {kind === 'business' && (
            <label className="days-label">
              Contexto del cómputo
              <select value={context} onChange={(event) => setContext(event.target.value as BusinessContext)}>
                <option value="general">Trámite general</option>
                <option value="tax">Tributario</option>
              </select>
            </label>
          )}
        </div>

        <div className="days-result">
          <div>
            <span>{mode === 'deadline' ? 'Fecha resultante' : 'Resultado del intervalo'}</span>
            <strong>
              {mode === 'deadline'
                ? formatDate(result.date)
                : `${result.count} ${kind === 'business' ? 'días hábiles' : 'días calendario'}`}
            </strong>
          </div>
          <div className="days-result-number">
            {mode === 'deadline' ? result.count : result.count}
          </div>
        </div>

        {result.outside2026 && kind === 'business' && (
          <div className="days-official">
            <span>
              Fuera de 2026 esta herramienta excluye fines de semana, pero no puede garantizar
              el calendario oficial de feriados y días no laborables del año consultado.
            </span>
          </div>
        )}

        <div className="days-official">
          <span>
            Referencia orientativa. Para un plazo administrativo formal, confirma el cómputo en la
            herramienta oficial del Estado. Para temas tributarios, los días no laborables del sector
            público tienen un tratamiento distinto a los feriados.
          </span>
          <a
            href="https://www.gob.pe/8283-calcular-dias-habiles-o-calendario"
            target="_blank"
            rel="noreferrer"
          >
            Calculadora oficial Gob.pe <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => {
            setMode('deadline');
            setKind('business');
            setContext('general');
            setStart('2026-09-21');
            setEnd('2026-10-08');
            setDays('10');
          }}
          style={{
            marginTop: 15,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 7,
            border: 0,
            background: 'transparent',
            color: '#6a7d92',
            cursor: 'pointer',
            font: 'inherit',
            fontSize: 13,
          }}
        >
          <RotateCcw size={14} aria-hidden="true" /> Reiniciar
        </button>
      </div>
    </div>
  );
}
