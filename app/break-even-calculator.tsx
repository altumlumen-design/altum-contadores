'use client';

import { useMemo, useState } from 'react';
import { Scale } from 'lucide-react';

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

export default function BreakEvenCalculator() {
  const [fixed, setFixed] = useState('5000');
  const [price, setPrice] = useState('50');
  const [variable, setVariable] = useState('30');

  const result = useMemo(() => {
    const fixedCost = n(fixed);
    const unitPrice = n(price);
    const variableCost = n(variable);
    const contribution = unitPrice - variableCost;
    const valid = contribution > 0;
    const rawUnits = valid ? fixedCost / contribution : 0;
    const units = valid ? Math.ceil(rawUnits) : 0;
    const sales = units * unitPrice;
    return { fixedCost, unitPrice, variableCost, contribution, units, sales, valid };
  }, [fixed, price, variable]);

  return (
    <div className="altum-app-tool">
      <div className="altum-app-tool-head">
        <div>
          <span>App 04</span>
          <h3>Punto de equilibrio</h3>
          <p>Estima cuántas unidades necesitas vender para cubrir tus costos fijos sin generar pérdida.</p>
        </div>
        <Scale aria-hidden="true" />
      </div>

      <div className="altum-app-tool-body">
        <div className="altum-app-input-grid three">
          <label>
            Costos fijos
            <div><span>S/</span><input inputMode="decimal" value={fixed} onChange={(e) => setFixed(e.target.value)} /></div>
          </label>
          <label>
            Precio por unidad
            <div><span>S/</span><input inputMode="decimal" value={price} onChange={(e) => setPrice(e.target.value)} /></div>
          </label>
          <label>
            Costo variable por unidad
            <div><span>S/</span><input inputMode="decimal" value={variable} onChange={(e) => setVariable(e.target.value)} /></div>
          </label>
        </div>

        {result.valid ? (
          <div className="altum-app-results">
            <article><span>Margen de contribución</span><strong>{money.format(result.contribution)}</strong></article>
            <article><span>Punto de equilibrio</span><strong>{result.units.toLocaleString('es-PE')} unid.</strong></article>
            <article><span>Ventas aproximadas</span><strong>{money.format(result.sales)}</strong></article>
          </div>
        ) : (
          <div className="altum-app-warning">
            El precio de venta debe ser mayor que el costo variable unitario para calcular un punto de equilibrio.
          </div>
        )}

        <p className="altum-app-note">
          Fórmula en unidades: costos fijos ÷ (precio de venta unitario − costo variable unitario).
        </p>
      </div>
    </div>
  );
}
