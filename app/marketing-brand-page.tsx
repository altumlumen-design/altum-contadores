'use client';

import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Compass, FileCheck2, Target } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SiteChrome from './site-chrome';
import { sitePath } from './site-paths';

const service = {
  number: '08',
  title: 'Marketing y construcción de marca',
  eyebrow: 'Identidad y comunicación con dirección',
  summary:
    'Acompañamos la construcción y fortalecimiento de marcas para que la identidad, los mensajes y la presencia comercial respondan a una estrategia clara del negocio.',
  promise:
    'Una marca coherente, reconocible y preparada para comunicar mejor su propuesta de valor.',
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
    'Sistema visual y lineamientos de marca',
    'Mensajes y propuesta de valor',
    'Kit inicial de piezas comerciales',
  ],
  idealFor: [
    'Empresas que necesitan profesionalizar su imagen',
    'Negocios que han crecido sin una identidad consistente',
    'Nuevas unidades o marcas que requieren salir al mercado con claridad',
  ],
  process: [
    {
      title: 'Diagnóstico',
      description: 'Revisamos negocio, públicos, competencia, activos actuales y percepción de la marca.',
    },
    {
      title: 'Estrategia',
      description: 'Definimos posicionamiento, propuesta de valor, personalidad y mensajes prioritarios.',
    },
    {
      title: 'Sistema de marca',
      description: 'Construimos una identidad visual y verbal coherente, aplicable y reconocible.',
    },
    {
      title: 'Implementación',
      description: 'Llevamos el sistema a las piezas y canales prioritarios para iniciar su aplicación.',
    },
  ],
  faq: [
    {
      question: '¿Incluye diseño o rediseño de logotipo?',
      answer:
        'Puede incorporarse cuando el diagnóstico demuestra que la identidad necesita crearse, ajustarse o rediseñarse. El alcance se define antes de iniciar.',
    },
    {
      question: '¿Pueden trabajar sobre una marca existente?',
      answer:
        'Sí. Podemos ordenar, actualizar o fortalecer una marca ya reconocida procurando conservar los activos que todavía generan valor.',
    },
    {
      question: '¿Incluye gestión mensual de redes sociales?',
      answer:
        'La gestión continua de canales puede plantearse como un alcance adicional. El servicio base se concentra en estrategia, identidad, mensajes y piezas prioritarias.',
    },
  ],
};

export default function MarketingBrandPage() {
  return (
    <SiteChrome active="Servicios">
      <section className="detail-hero">
        <div className="inner-hero-grid" aria-hidden="true" />
        <div className="inner-shell detail-hero-inner">
          <a className="detail-back" href={sitePath('servicios/')}>
            <ArrowLeft aria-hidden="true" /> Todos los servicios
          </a>

          <div className="detail-heading">
            <div>
              <span className="detail-number">{service.number}</span>
              <p>{service.eyebrow}</p>
            </div>
            <h1>{service.title}</h1>
          </div>

          <div className="detail-promise">
            <Target aria-hidden="true" />
            <p>{service.promise}</p>
          </div>
        </div>
      </section>

      <section className="detail-intro inner-shell">
        <div className="detail-intro-copy">
          <span>El punto de partida</span>
          <h2>Orden estratégico para una marca que debe crecer.</h2>
        </div>
        <div>
          <p>{service.summary}</p>
          <a href={sitePath('contacto/')}>
            Conversar sobre este servicio <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="detail-coverage">
        <div className="inner-shell">
          <div className="page-section-heading compact">
            <div className="section-kicker">
              <span>01</span><p>Alcance</p>
            </div>
            <h2>Qué podemos cubrir.</h2>
            <p>
              El alcance final se ajusta al punto de madurez de la marca, sus públicos,
              los canales prioritarios y los objetivos comerciales de la empresa.
            </p>
          </div>

          <div className="coverage-grid">
            {service.coverage.map((item, itemIndex) => (
              <article key={item}>
                <span>0{itemIndex + 1}</span>
                <p>{item}</p>
                <Check aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-deliverables inner-shell">
        <div className="detail-block-heading">
          <FileCheck2 aria-hidden="true" />
          <span>Entregables visibles</span>
          <h2>No solo proponemos. Dejamos un sistema aplicable.</h2>
        </div>

        <div className="deliverable-grid">
          {service.deliverables.map((item, itemIndex) => (
            <article key={item}>
              <span>{String(itemIndex + 1).padStart(2, '0')}</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="ideal-section">
        <div className="inner-shell ideal-grid">
          <div>
            <Compass aria-hidden="true" />
            <span>Este servicio es especialmente útil para</span>
            <h2>Situaciones que necesitan una marca más clara y consistente.</h2>
          </div>

          <ul>
            {service.idealFor.map((item) => (
              <li key={item}><Check aria-hidden="true" />{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="detail-process inner-shell">
        <div className="page-kicker"><span>02</span>Cómo avanzamos</div>
        <div className="detail-process-grid">
          {service.process.map((step, stepIndex) => (
            <article key={step.title}>
              <span>0{stepIndex + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-faq inner-shell">
        <div>
          <div className="page-kicker"><span>03</span>Preguntas frecuentes</div>
          <h2>Antes de comenzar.</h2>
        </div>

        <Accordion className="faq-list" defaultValue={['item-0']} multiple>
          {service.faq.map((item, faqIndex) => (
            <AccordionItem value={`item-${faqIndex}`} key={item.question}>
              <AccordionTrigger className="faq-trigger">
                <span className="faq-index">0{faqIndex + 1}</span>{item.question}
              </AccordionTrigger>
              <AccordionContent className="faq-content">
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <nav className="service-pagination inner-shell" aria-label="Otros servicios">
        <a href={sitePath('servicios/asesoria-empresarial/')}>
          <ArrowLeft aria-hidden="true" />
          <span>Anterior<small>Asesoría empresarial</small></span>
        </a>
        <a href={sitePath('servicios/outsourcing-contable/')}>
          <span>Siguiente<small>Outsourcing contable</small></span>
          <ArrowRight aria-hidden="true" />
        </a>
      </nav>

      <section className="inner-cta inner-shell">
        <div>
          <span>Convirtamos la necesidad en una ruta</span>
          <h2>Cuéntanos qué necesita proyectar tu empresa.</h2>
        </div>
        <a href={sitePath('contacto/')}>
          Preparar mi consulta <ArrowUpRight aria-hidden="true" />
        </a>
      </section>
    </SiteChrome>
  );
}
