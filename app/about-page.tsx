'use client';

/* oxlint-disable next/no-img-element -- Pre-optimized artwork is served unchanged. */

import { ArrowUpRight, Check, Eye, Scale, Target, X } from 'lucide-react';
import SiteChrome from './site-chrome';
import { assetPath, sitePath } from './site-paths';

export default function AboutPage() {
  return <SiteChrome active="Nosotros">
    <section className="about-hero-page"><div className="inner-shell about-hero-grid"><div><div className="page-kicker light"><span>04</span>Nosotros</div><h1>Más que solo contabilidad, llevamos tu crecimiento <span>hacia lo más alto.</span></h1><p>Integramos rigor técnico y perspectiva empresarial para convertir información compleja en una dirección comprensible.</p></div><div className="about-art"><img src={assetPath('altum-ascent.webp')} alt="Composición abstracta ascendente en tonos azules" width={1122} height={1402} /></div></div></section>
    <section className="purpose inner-shell"><div className="page-kicker"><span>01</span>Propósito</div><div className="purpose-grid"><h2>Dar estructura al presente y perspectiva al siguiente paso.</h2><div><p>La contabilidad cobra valor cuando permite entender qué ocurre, dónde está el riesgo y qué decisión necesita atención. Nuestra función es ordenar esa lectura y acompañar su ejecución.</p><blockquote>“Precisión técnica para cumplir. Perspectiva empresarial para avanzar.”</blockquote></div></div></section>
    <section className="principles-page"><div className="inner-shell"><div className="page-section-heading compact"><div className="section-kicker light"><span>02</span><p>Principios</p></div><h2>Cómo queremos trabajar contigo.</h2></div><div className="principles-page-grid"><article><Target aria-hidden="true" /><span>01</span><h3>Orden</h3><p>La información correcta, con responsables y fechas visibles.</p></article><article><Scale aria-hidden="true" /><span>02</span><h3>Criterio</h3><p>Datos explicados dentro del contexto y la decisión.</p></article><article><Eye aria-hidden="true" /><span>03</span><h3>Transparencia</h3><p>Alcance, pendientes y limitaciones comunicados con claridad.</p></article></div></div></section>
    <section className="boundaries inner-shell"><div><span>Lo que hacemos</span><h2>Una relación profesional clara desde el inicio.</h2></div><div className="boundary-columns"><article><h3><Check aria-hidden="true" />Puedes esperar</h3><ul><li>Diagnóstico antes de proponer</li><li>Alcance y responsabilidades definidos</li><li>Alertas explicadas a tiempo</li><li>Entregables que dejan trazabilidad</li></ul></article><article><h3><X aria-hidden="true" />No prometemos</h3><ul><li>Resultados sin revisar el contexto</li><li>Atajos que comprometan el sustento</li><li>Respuestas genéricas para casos distintos</li><li>Complejidad innecesaria en la comunicación</li></ul></article></div></section>
    <section className="inner-cta inner-shell"><div><span>Una conversación con propósito</span><h2>Empecemos por entender qué quieres lograr.</h2></div><a href={sitePath('contacto/')}>Preparar mi consulta <ArrowUpRight aria-hidden="true" /></a></section>
  </SiteChrome>;
}
