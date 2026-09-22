'use client';

import { useMemo, useState } from 'react';
import { CircleDollarSign, Lightbulb, Scale } from 'lucide-react';

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
    const contributionRate = unitPrice > 0 ? (contribution / unitPrice) * 100 : 0;
    return {
      fixedCost,
      unitPrice,
      variableCost,
      contribution,
      contributionRate,
      units,
      sales,
      valid,
    };
  }, [fixed, price, variable]);

  return (
    <div className="altum-app-tool">
      <div className="altum-app-tool-head">
        <div>
          <span>App 04 · Gestión</span>
          <h3>Punto de equilibrio</h3>
          <p>
            Calcula cuánto necesitas vender para cubrir tus costos sin perder dinero
            y sin considerar todavía una utilidad objetivo.
          </p>
        </div>
        <Scale aria-hidden="true" />
      </div>

      <div className="altum-app-tool-body">
        <div className="altum-app-explainer">
          <div className="altum-app-explainer-main">
            <span className="altum-app-step"><CircleDollarSign size={15} /> ¿Para qué sirve?</span>
            <strong>Para convertir tus costos en una meta mínima de ventas.</strong>
            <p>
              Ayuda a responder una pregunta muy concreta: ¿cuántas unidades debo vender
              antes de empezar a generar utilidad? Es útil para fijar precios, validar un
              producto, presupuestar y evaluar promociones.
            </p>
          </div>
          <div className="altum-app-explainer-side">
            <span className="altum-app-step"><Lightbulb size={15} /> Idea clave</span>
            <strong>Cada venta debe dejar una contribución positiva.</strong>
            <p>
              Si el costo variable por unidad es igual o mayor al precio, vender más no
              alcanza para cubrir los costos fijos.
            </p>
          </div>
        </div>

        <div className="altum-app-input-grid three">
          <label>
            Costos fijos
            <small>Alquiler, planilla fija, servicios y otros costos que existen aunque no vendas.</small>
            <div>
              <span>S/</span>
              <input
                aria-label="Costos fijos"
                inputMode="decimal"
                value={fixed}
                onChange={(e) => setFixed(e.target.value)}
              />
            </div>
          </label>

          <label>
            Precio por unidad
            <small>El precio al que vendes cada producto o servicio.</small>
            <div>
              <span>S/</span>
              <input
                aria-label="Precio por unidad"
                inputMode="decimal"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </label>

          <label>
            Costo variable por unidad
            <small>Lo que aumenta directamente por cada unidad vendida.</small>
            <div>
              <span>S/</span>
              <input
                aria-label="Costo variable por unidad"
                inputMode="decimal"
                value={variable}
                onChange={(e) => setVariable(e.target.value)}
              />
            </div>
          </label>
        </div>

        <div className="altum-app-presets" aria-label="Ejemplos rápidos">
          <button type="button" onClick={() => { setFixed('5000'); setPrice('50'); setVariable('30'); }}>
            Negocio pequeño
          </button>
          <button type="button" onClick={() => { setFixed('12000'); setPrice('80'); setVariable('46'); }}>
            Operación media
          </button>
          <button type="button" onClick={() => { setFixed('30000'); setPrice('150'); setVariable('85'); }}>
            Operación mayor
          </button>
        </div>

        {result.valid ? (
          <>
            <div className="altum-app-results">
              <article>
                <span>Margen de contribución</span>
                <strong>{money.format(result.contribution)}</strong>
              </article>
              <article className="is-primary">
                <span>Debes vender al menos</span>
                <strong>{result.units.toLocaleString('es-PE')} unid.</strong>
              </article>
              <article>
                <span>Ventas aproximadas</span>
                <strong>{money.format(result.sales)}</strong>
              </article>
            </div>

            <div className="altum-app-interpretation">
              <Lightbulb size={18} aria-hidden="true" />
              <div>
                <strong>¿Cómo leerlo?</strong> Cada unidad aporta {money.format(result.contribution)}
                {' '}para cubrir costos fijos ({result.contributionRate.toFixed(2)}% del precio).
                Cuando alcanzas aproximadamente {result.units.toLocaleString('es-PE')} unidades,
                los ingresos cubren los costos considerados; desde la siguiente unidad comienza,
                en términos simplificados, la utilidad.
              </div>
            </div>
          </>
        ) : (
          <div className="altum-app-warning">
            El precio de venta debe ser mayor que el costo variable unitario. Con los valores
            actuales no existe un punto de equilibrio alcanzable.
          </div>
        )}

        <p className="altum-app-note">
          Cálculo simplificado en unidades: costos fijos ÷ (precio unitario − costo variable unitario).
          No incorpora impuestos, mezcla de productos ni cambios de costos por volumen.
        </p>
      </div>
    </div>
  );
}
