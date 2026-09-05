'use client';

import { ArrowUpRight, Check, Eye, MessagesSquare, Route, ShieldCheck } from 'lucide-react';
import SiteChrome from './site-chrome';
import { sitePath } from './site-paths';

const phases = [
  ['01', 'Escuchamos', 'Entendemos la operación, la decisión pendiente y aquello que hoy genera fricción.'],
  ['02', 'Diagnosticamos', 'Contrastamos información, obligaciones, procesos y nivel de exposición.'],
  ['03', 'Ordenamos', 'Definimos prioridades, responsables, entregables y un calendario visible.'],
  ['04', 'Interpretamos', 'Convertimos resultados en alertas, alternativas y próximos pasos.'],
];

export default function MethodPage() {
  return <SiteChrome active="Método">
    <section className="inner-hero"><div className="inner-hero-grid" aria-hidden="true" /><div className="inner-hero-copy inner-shell"><div className="page-kicker"><span>02</span>Método Altum</div><h1>Primero entendemos.<br /><span>Después elevamos.</span></h1><p>Una forma de trabajo que hace visible qué se está haciendo, por qué importa y cuál es el siguiente paso.</p><a className="inner-primary-link" href="#ruta">Ver la ruta <ArrowUpRight aria-hidden="true" /></a></div><div className="inner-hero-aside" aria-hidden="true"><Route /><span>DE LA DUDA A LA DIRECCIÓN</span></div></section>
    <section className="method-page-track inner-shell" id="ruta"><div className="page-section-heading compact"><div className="section-kicker"><span>01</span><p>La ruta</p></div><h2>Cuatro momentos. Una dirección compartida.</h2><p>El método se adapta al servicio, pero conserva la misma disciplina de principio a fin.</p></div><div className="phase-grid">{phases.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
    <section className="first-month"><div className="inner-shell"><div className="page-kicker light"><span>02</span>Primer ciclo de trabajo</div><h2>Qué ocurre al comenzar.</h2><div className="month-grid"><article><span>Inicio</span><h3>Alineamos expectativas</h3><p>Objetivos, alcance, responsables, canales y accesos.</p></article><article><span>Lectura</span><h3>Mapeamos la situación</h3><p>Información disponible, brechas, obligaciones y urgencias.</p></article><article><span>Prioridad</span><h3>Construimos la ruta</h3><p>Acciones inmediatas, calendario y decisiones que requieren atención.</p></article><article><span>Ritmo</span><h3>Instalamos seguimiento</h3><p>Entregables, alertas y espacios de lectura gerencial.</p></article></div></div></section>
    <section className="governance inner-shell"><div className="governance-intro"><MessagesSquare aria-hidden="true" /><span>Comunicación y gobierno</span><h2>Una relación de trabajo sin zonas grises.</h2></div><div className="governance-grid"><article><Eye aria-hidden="true" /><h3>Visibilidad</h3><p>Pendientes, responsables y fechas permanecen a la vista.</p></article><article><MessagesSquare aria-hidden="true" /><h3>Lenguaje claro</h3><p>Explicamos el impacto antes de hablar de tecnicismos.</p></article><article><ShieldCheck aria-hidden="true" /><h3>Confidencialidad</h3><p>La información se comparte mediante canales y responsables acordados.</p></article><article><Check aria-hidden="true" /><h3>Trazabilidad</h3><p>Criterios, sustentos y acuerdos quedan documentados.</p></article></div></section>
    <section className="inner-cta inner-shell"><div><span>Un mejor punto de partida</span><h2>Conversemos sobre la decisión que necesita claridad.</h2></div><a href={sitePath('contacto/')}>Preparar mi consulta <ArrowUpRight aria-hidden="true" /></a></section>
  </SiteChrome>;
}
