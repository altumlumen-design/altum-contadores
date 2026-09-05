'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, ClipboardCheck, Gauge, RotateCcw } from 'lucide-react';
import SiteChrome from './site-chrome';
import { decisionGuides } from './site-content';
import { sitePath } from './site-paths';

const questions = [
  'El cierre mensual tiene una fecha estable.',
  'Los pendientes tienen responsable y plazo.',
  'La gerencia conoce su posición de caja proyectada.',
  'Las obligaciones tributarias se revisan antes del vencimiento.',
  'Las incidencias laborales llegan mediante un flujo definido.',
  'Los resultados se explican y no solo se entregan.',
];

export default function ResourcesPage() {
  const [answers, setAnswers] = useState<boolean[]>(Array(questions.length).fill(false));
  const score = useMemo(() => answers.filter(Boolean).length, [answers]);
  const result = score <= 2 ? ['Prioridad alta', 'Conviene estabilizar procesos, responsables y calendario antes de sumar complejidad.'] : score <= 4 ? ['Base en desarrollo', 'Ya existen controles útiles; el siguiente paso es conectarlos y hacerlos constantes.'] : ['Base sólida', 'El reto es convertir el orden operativo en una lectura más estratégica y anticipada.'];
  return <SiteChrome active="Recursos">
    <section className="inner-hero"><div className="inner-hero-grid" aria-hidden="true" /><div className="inner-hero-copy inner-shell"><div className="page-kicker"><span>05</span>Recursos</div><h1>Ideas para mirar mejor.<br /><span>Herramientas para decidir.</span></h1><p>Guías breves y un radar inicial para reconocer qué frente de la gestión necesita atención.</p><a className="inner-primary-link" href="#radar">Evaluar mi situación <ArrowUpRight aria-hidden="true" /></a></div><div className="inner-hero-aside" aria-hidden="true"><Gauge /><span>CRITERIO APLICADO</span></div></section>
    <section className="guides inner-shell"><div className="page-section-heading"><div className="section-kicker"><span>01</span><p>Guías de decisión</p></div><h2>Preguntas útiles antes de actuar.</h2><p>Contenido práctico para ordenar una conversación interna o preparar una consulta especializada.</p></div><div className="guide-grid">{decisionGuides.map((guide, index) => <article key={guide.title}><div><span>0{index + 1} / {guide.category}</span><ClipboardCheck aria-hidden="true" /></div><h3>{guide.title}</h3><p>{guide.summary}</p><ul>{guide.points.map((point) => <li key={point}><Check aria-hidden="true" />{point}</li>)}</ul></article>)}</div></section>
    <section className="radar-section" id="radar"><div className="inner-shell radar-grid"><div className="radar-intro"><div className="page-kicker light"><span>02</span>Radar de control</div><h2>¿Qué tan visible está hoy tu operación?</h2><p>Marca cada afirmación que ya ocurre de forma constante. El resultado es orientativo y permanece únicamente en tu navegador.</p></div><div className="radar-tool"><div className="radar-questions">{questions.map((question, index) => <label key={question}><input type="checkbox" checked={answers[index]} onChange={() => setAnswers((current) => current.map((value, itemIndex) => itemIndex === index ? !value : value))} /><span className="custom-check"><Check aria-hidden="true" /></span><span>{question}</span></label>)}</div><div className="radar-result"><div><strong>{score}/{questions.length}</strong><span>controles visibles</span></div><div><h3>{result[0]}</h3><p>{result[1]}</p></div><button type="button" onClick={() => setAnswers(Array(questions.length).fill(false))}><RotateCcw aria-hidden="true" /> Reiniciar</button></div></div></div></section>
    <section className="inner-cta inner-shell"><div><span>Del diagnóstico a la acción</span><h2>Si algo no está claro, empecemos por ahí.</h2></div><a href={sitePath('contacto/')}>Preparar mi consulta <ArrowRight aria-hidden="true" /></a></section>
  </SiteChrome>;
}
