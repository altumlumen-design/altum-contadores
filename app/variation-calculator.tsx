'use client';

import { useMemo, useState } from 'react';
import { ChartNoAxesCombined } from 'lucide-react';

function n(value: string) {
  const parsed = Number(value.replace(',', '.').replace(/[^\d.-]/g, ''));
  return Number.isFinite(parsed) ? parsed : 0;
}

export default function VariationCalculator() {
  const [previous, setPrevious] = useState('1000');
  const [current, setCurrent] = useState('1250');

  const result = useMemo(() => {
    const before = n(previous);
    const now = n(current);
    const difference = now - before;
    const change = before !== 0 ? (difference / Math.abs(before)) * 100 : 0;
    return { before, now, difference, change };
  }, [previous, current]);

  const format = new Intl.NumberFormat('es-PE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="altum-app-tool">
      <div className="altum-app-tool-head">
        <div>
          <span>App 05</span>
          <h3>Variación porcentual</h3>
          <p>Compara dos periodos para ver cuánto aumentaron o disminuyeron ventas, gastos, costos o cualquier indicador.</p>
        </div>
        <ChartNoAxesCombined aria-hidden="true" />
      </div>

      <div className="altum-app-tool-body">
        <div className="altum-app-input-grid">
          <label>
            Valor anterior
            <div><input inputMode="decimal" value={previous} onChange={(e) => setPrevious(e.target.value)} /></div>
          </label>
          <label>
            Valor actual
            <div><input inputMode="decimal" value={current} onChange={(e) => setCurrent(e.target.value)} /></div>
          </label>
        </div>

        <div className="altum-app-results">
          <article><span>Diferencia</span><strong>{format.format(result.difference)}</strong></article>
          <article><span>Variación</span><strong>{format.format(result.change)}%</strong></article>
          <article><span>Lectura</span><strong>{result.change > 0 ? 'Aumento' : result.change < 0 ? 'Disminución' : 'Sin cambio'}</strong></article>
        </div>

        <p className="altum-app-note">
          La variación porcentual se calcula respecto del valor anterior.
        </p>
      </div>
    </div>
  );
}
