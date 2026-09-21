'use client';

import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Compass, FileCheck2, Sparkles, Target } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SiteChrome from './site-chrome';
import { sitePath } from './site-paths';

const service = {
  number: '08',
  title: 'Marketing y construcción de marca',
  eyebrow: 'Una identidad que acompaña el crecimiento',
  summary: 'Estrategia, identidad y comunicación para que tu empresa proyecte con claridad lo que es, lo que ofrece y por qué elegirla.',
  promise: 'Una marca coherente, reconocible y preparada para crecer junto con el negocio.',
  coverage: [
    'Diagnóstico de marca y posicionamiento',
    'Propuesta de valor y arquitectura de mensajes',
    'Identidad visual y lineamientos de uso',
    'Tono de comunicación y narrativa comercial',
    'Piezas institucionales y comerciales',
    'Presencia digital y criterios de implementación',
  ],
  deliverables: [
    'Diagnóstico y mapa de posicionamiento',
    'Sistema visual y guía de uso',
    'Mensajes y propuesta de valor',
    'Kit inicial de piezas comerciales',
  ],
  idealFor: [
    'Empresas que necesitan profesionalizar su imagen',
    'Negocios que han crecido sin una identidad consistente',
    'Nuevas unidades o marcas que requieren salir al mercado con claridad',
  ],
  process: [
    { title: 'Diagnóstico', description: 'Revisamos el negocio, público, competencia, materiales y percepción actual de la marca.' },
    { title: 'Estrategia', description: 'Definimos posicionamiento, propuesta de valor, personalidad y mensajes prioritarios.' },
    { title: 'Sistema de marca', description: 'Construimos una identidad visual y verbal coherente, usable y reconocible.' },
    { title: 'Implementación', description: 'Llevamos el sistema a las piezas y canales prioritarios para iniciar su aplicación.' },
  ],
  faq: [
    { question: '¿Incluye diseño de logotipo?', answer: 'Puede incluirlo cuando el diagnóstico demuestra que la identidad necesita crearse o rediseñarse. No todos los proyectos deben comenzar por un logotipo.' },
    { question: '¿Pueden trabajar sobre una marca existente?', answer: 'Sí. Podemos ordenar, actualizar o fortalecer una marca ya reconocida sin perder innecesariamente sus activos de identidad.' },
    { question: '¿Incluye gestión mensual de redes sociales?', answer: 'La gestión continua de canales puede cotizarse como un alcance adicional. El servicio base se concentra en estrategia, sistema de marca y piezas prioritarias.' },
  ],
};

export default function MarketingBrandPage() {
  return (
    <SiteChrome active="Servicios">
      <section className="detail-hero">
        <div className="inner-hero-grid" aria-hidden="true" />
        <div className="inner-shell detail-hero-inner">
          <a className="detail-back" href={sitePath('servicios/')}><ArrowLeft aria-hidden="true" /> Todos los servicios</a>
          <div className="detail-heading">
            <div><span className="detail-number">{service.number}</span><p>{service.eyebrow}</p></div>
            <h1>{service.title}</h1>
          </div>
          <div className="detail-promise"><Target aria-hidden="true" /><p>{service.promise}</p></div>
        </div>
      </section>

      <section className="detail-intro inner-shell">
        <div className="detail-intro-copy"><span>El punto de partida</span><h2>La marca también es una decisión empresarial.</h2></div>
        <div><p>{service.summary}</p><a href={sitePath('contacto/')}>Conversar sobre este servicio <ArrowUpRight aria-hidden="true" /></a></div>
      </section>

      <section className="detail-coverage">
        <div className="inner-shell">
          <div className="page-section-heading compact">
            <div className="section-kicker"><span>01</span><p>Alcance</p></div>
            <h2>Qué podemos construir.</h2>
            <p>El alcance se ajusta al punto en el que se encuentra la empresa, a sus públicos y a los canales que realmente necesita activar.</p>
          </div>
          <div className="coverage-grid">
            {service.coverage.map((item, itemIndex) => (
              <article key={item}><span>0{itemIndex + 1}</span><p>{item}</p><Check aria-hidden="true" /></article>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-deliverables inner-shell">
        <div className="detail-block-heading"><FileCheck2 aria-hidden="true" /><span>Entregables visibles</span><h2>Una marca que se puede aplicar, no solo presentar.</h2></div>
        <div className="deliverable-grid">
          {service.deliverables.map((item, itemIndex) => (
            <article key={item}><span>{String(itemIndex + 1).padStart(2, '0')}</span><h3>{item}</h3></article>
          ))}
        </div>
      </section>

      <section className="ideal-section">
        <div className="inner-shell ideal-grid">
          <div><Sparkles aria-hidden="true" /><span>Este servicio es especialmente útil para</span><h2>Empresas que necesitan que su imagen esté a la altura de su negocio.</h2></div>
          <ul>{service.idealFor.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
        </div>
      </section>

      <section className="detail-process inner-shell">
        <div className="page-kicker"><span>02</span>Cómo avanzamos</div>
        <div className="detail-process-grid">
          {service.process.map((step, stepIndex) => (
            <article key={step.title}><span>0{stepIndex + 1}</span><h3>{step.title}</h3><p>{step.description}</p></article>
          ))}
        </div>
      </section>

      <section className="detail-faq inner-shell">
        <div><div className="page-kicker"><span>03</span>Preguntas frecuentes</div><h2>Antes de comenzar.</h2></div>
        <Accordion className="faq-list" defaultValue={['item-0']} multiple>
          {service.faq.map((item, faqIndex) => (
            <AccordionItem value={`item-${faqIndex}`} key={item.question}>
              <AccordionTrigger className="faq-trigger"><span className="faq-index">0{faqIndex + 1}</span>{item.question}</AccordionTrigger>
              <AccordionContent className="faq-content"><p>{item.answer}</p></AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <nav className="service-pagination inner-shell" aria-label="Otros servicios">
        <a href={sitePath('servicios/asesoria-empresarial/')}><ArrowLeft aria-hidden="true" /><span>Anterior<small>Asesoría empresarial</small></span></a>
        <a href={sitePath('servicios/outsourcing-contable/')}><span>Siguiente<small>Outsourcing contable</small></span><ArrowRight aria-hidden="true" /></a>
      </nav>

      <section className="inner-cta inner-shell">
        <div><span>Construyamos una marca con dirección</span><h2>Cuéntanos qué necesita proyectar tu empresa.</h2></div>
        <a href={sitePath('contacto/')}>Preparar mi consulta <ArrowUpRight aria-hidden="true" /></a>
      </section>
    </SiteChrome>
  );
}
