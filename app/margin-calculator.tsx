'use client';

import { useMemo, useState } from 'react';
import { BadgeDollarSign, Lightbulb, Percent } from 'lucide-react';

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

  const reading =
    result.profit > 0
      ? `De cada S/ 100 vendidos, quedan aproximadamente S/ ${result.margin.toFixed(2)} después de cubrir los costos ingresados.`
      : result.profit < 0
        ? 'Con estos valores los costos superan a las ventas. Conviene revisar precio, volumen o estructura de costos.'
        : 'Con estos valores las ventas cubren exactamente los costos ingresados, sin generar utilidad.';

  return (
    <div className="altum-app-tool">
      <div className="altum-app-tool-head">
        <div>
          <span>App 03 · Rentabilidad</span>
          <h3>Margen y utilidad</h3>
          <p>
            Descubre cuánto de tus ventas realmente queda después de cubrir los costos
            que estás considerando.
          </p>
        </div>
        <Percent aria-hidden="true" />
      </div>

      <div className="altum-app-tool-body">
        <div className="altum-app-explainer">
          <div className="altum-app-explainer-main">
            <span className="altum-app-step"><BadgeDollarSign size={15} /> ¿Para qué sirve?</span>
            <strong>Para saber si vender más también significa ganar más.</strong>
            <p>
              Ingresar ventas y costos te permite estimar la utilidad y qué porcentaje de
              cada sol vendido queda como margen. Es útil para revisar precios, promociones,
              costos y decisiones de crecimiento.
            </p>
          </div>
          <div className="altum-app-explainer-side">
            <span className="altum-app-step"><Lightbulb size={15} /> Idea clave</span>
            <strong>Facturar no es lo mismo que ganar.</strong>
            <p>
              Dos negocios pueden vender lo mismo y tener márgenes muy distintos si sus
              costos son diferentes.
            </p>
          </div>
        </div>

        <div className="altum-app-input-grid">
          <label>
            Ventas / ingresos
            <small>Todo lo que facturaste o esperas vender en el periodo.</small>
            <div>
              <span>S/</span>
              <input
                aria-label="Ventas o ingresos"
                inputMode="decimal"
                value={sales}
                onChange={(e) => setSales(e.target.value)}
              />
            </div>
          </label>

          <label>
            Costos y gastos asociados
            <small>Lo que necesitas cubrir para generar esas ventas.</small>
            <div>
              <span>S/</span>
              <input
                aria-label="Costos y gastos asociados"
                inputMode="decimal"
                value={costs}
                onChange={(e) => setCosts(e.target.value)}
              />
            </div>
          </label>
        </div>

        <div className="altum-app-presets" aria-label="Ejemplos rápidos">
          <button type="button" onClick={() => { setSales('10000'); setCosts('7000'); }}>
            Ejemplo S/ 10,000
          </button>
          <button type="button" onClick={() => { setSales('25000'); setCosts('18000'); }}>
            Ejemplo S/ 25,000
          </button>
          <button type="button" onClick={() => { setSales('50000'); setCosts('35000'); }}>
            Ejemplo S/ 50,000
          </button>
        </div>

        <div className="altum-app-results">
          <article className="is-primary">
            <span>Utilidad estimada</span>
            <strong>{money.format(result.profit)}</strong>
          </article>
          <article>
            <span>Margen sobre ventas</span>
            <strong>{result.margin.toFixed(2)}%</strong>
          </article>
          <article>
            <span>Rendimiento sobre costo</span>
            <strong>{result.markup.toFixed(2)}%</strong>
          </article>
        </div>

        <div className="altum-app-interpretation">
          <Lightbulb size={18} aria-hidden="true" />
          <div>
            <strong>¿Cómo leerlo?</strong> {reading}
          </div>
        </div>

        <p className="altum-app-note">
          Resultado referencial. Aquí “costos y gastos asociados” son los que tú decidas incluir;
          para medir rentabilidad contable o financiera real se requiere clasificar correctamente
          costos, gastos e impuestos.
        </p>
      </div>
    </div>
  );
}
