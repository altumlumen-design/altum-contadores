'use client';

import { useMemo, useState } from 'react';
import { Percent } from 'lucide-react';

function n(value: string) {
  const parsed = Number(value.replace(',', '.').replace(/[^\d.-]/g, ''));
  return Number.isFinite(parsed) ? Math.max(0, parsed) : 0;
}

const money = new Intl.NumberFormat('es-PE', {
  style: 'currency',
  currency: 'PEN',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export default function MarginCalculator() {
  const [sales, setSales] = useState('10000');
  const [costs, setCosts] = useState('7000');

  const result = useMemo(() => {
    const sale = n(sales);
    const cost = n(costs);
    const profit = sale - cost;
    const margin = sale > 0 ? (profit / sale) * 100 : 0;
    const markup = cost > 0 ? (profit / cost) * 100 : 0;
    return { sale, cost, profit, margin, markup };
  }, [sales, costs]);

  return (
    <div className="altum-app-tool">
      <div className="altum-app-tool-head">
        <div>
          <span>App 03</span>
          <h3>Margen y utilidad</h3>
          <p>Compara ventas y costos para conocer la utilidad, el margen sobre ventas y el rendimiento sobre el costo.</p>
        </div>
        <Percent aria-hidden="true" />
      </div>

      <div className="altum-app-tool-body">
        <div className="altum-app-input-grid">
          <label>
            Ventas / ingresos
            <div><span>S/</span><input inputMode="decimal" value={sales} onChange={(e) => setSales(e.target.value)} /></div>
          </label>
          <label>
            Costos y gastos asociados
            <div><span>S/</span><input inputMode="decimal" value={costs} onChange={(e) => setCosts(e.target.value)} /></div>
          </label>
        </div>

        <div className="altum-app-results">
          <article><span>Utilidad</span><strong>{money.format(result.profit)}</strong></article>
          <article><span>Margen sobre ventas</span><strong>{result.margin.toFixed(2)}%</strong></article>
          <article><span>Rendimiento sobre costo</span><strong>{result.markup.toFixed(2)}%</strong></article>
        </div>

        <p className="altum-app-note">
          Resultado referencial. El margen sobre ventas se calcula como utilidad ÷ ventas × 100.
        </p>
      </div>
    </div>
  );
}
