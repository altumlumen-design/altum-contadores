'use client';

/* oxlint-disable next/no-img-element -- Pre-optimized assets keep GitHub Pages paths portable. */

import { type CSSProperties, type KeyboardEvent, useEffect, useMemo, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Calculator,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Copy,
  FileSearch,
  Landmark,
  LineChart,
  Menu,
  MessageSquareText,
  Scale,
  Share2,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { assetPath, sitePath } from './site-paths';

const services = [
  {
    number: '01',
    short: 'Contabilidad',
    title: 'Outsourcing contable',
    summary:
      'Una operación contable ordenada, puntual y conectada con las decisiones de tu empresa.',
    icon: Calculator,
    deliverables: [
      'Registro y revisión de operaciones',
      'Conciliaciones y cierres mensuales',
      'Libros electrónicos y estados financieros',
      'Reportes gerenciales con lectura ejecutiva',
    ],
    result: 'Información confiable para gestionar el presente y proyectar el siguiente paso.',
  },
  {
    number: '02',
    short: 'Tributación',
    title: 'Asesoría tributaria',
    summary:
      'Cumplimiento con criterio, anticipación de contingencias y acompañamiento frente a SUNAT.',
    icon: Landmark,
    deliverables: [
      'Determinación y declaración de obligaciones',
      'Revisión preventiva de riesgos tributarios',
      'Atención de fiscalizaciones y requerimientos',
      'Planeamiento tributario responsable',
    ],
    result: 'Menos incertidumbre y una posición tributaria que se puede explicar y sostener.',
  },
  {
    number: '03',
    short: 'Laboral',
    title: 'Gestión laboral y planillas',
    summary:
      'Procesos laborales consistentes para cuidar a tu equipo y cumplir cada obligación.',
    icon: Users,
    deliverables: [
      'Cálculo y procesamiento de planillas',
      'T-Registro, PLAME y AFP',
      'Contratos, liquidaciones y beneficios sociales',
      'Revisión de contingencias laborales',
    ],
    result: 'Una gestión laboral precisa, trazable y alineada con el ritmo de tu organización.',
  },
  {
    number: '04',
    short: 'Finanzas',
    title: 'Finanzas y control de gestión',
    summary:
      'Los números dejan de ser un reporte histórico y se convierten en una herramienta de dirección.',
    icon: LineChart,
    deliverables: [
      'Flujo de caja y capital de trabajo',
      'Presupuestos y proyecciones',
      'Estructura de costos y rentabilidad',
      'Indicadores y tableros de gestión',
    ],
    result: 'Una vista clara de liquidez, desempeño y escenarios antes de tomar decisiones.',
  },
  {
    number: '05',
    short: 'Auditoría',
    title: 'Auditoría y cumplimiento',
    summary:
      'Una mirada independiente para detectar brechas, fortalecer controles y reducir exposición.',
    icon: FileSearch,
    deliverables: [
      'Auditoría contable y financiera',
      'Auditoría tributaria y laboral',
      'Evaluación de control interno',
      'Revisión especial y debida diligencia',
    ],
    result: 'Hallazgos accionables y prioridades claras para corregir antes de que el riesgo crezca.',
  },
  {
    number: '06',
    short: 'Empresa',
    title: 'Asesoría empresarial',
    summary:
      'Acompañamiento para formalizar, ordenar procesos y convertir objetivos en una ruta ejecutable.',
    icon: BriefcaseBusiness,
    deliverables: [
      'Constitución y formalización empresarial',
      'Diseño de procesos administrativos',
      'Estructura y lectura del modelo de negocio',
      'Coordinación de soporte societario especializado',
    ],
    result: 'Una empresa mejor estructurada, con responsabilidades y prioridades visibles.',
  },
];

const disciplines = [
  {
    code: 'DC',
    title: 'Dirección contable',
    description: 'Integra cierres, estados financieros y control operativo en una sola lectura.',
  },
  {
    code: 'ET',
    title: 'Estrategia tributaria',
    description: 'Evalúa obligaciones, contingencias y alternativas con sustento técnico.',
  },
  {
    code: 'GL',
    title: 'Gestión laboral',
    description: 'Ordena planillas, contratos y cumplimiento durante todo el ciclo laboral.',
  },
  {
    code: 'FC',
    title: 'Finanzas y control',
    description: 'Traduce resultados, caja, costos y proyecciones en decisiones concretas.',
  },
];

const faqs = [
  {
    question: '¿Cómo comienza el trabajo con Altum?',
    answer:
      'Empezamos con un diagnóstico breve del estado contable, tributario, laboral y financiero. A partir de esa lectura definimos prioridades, alcance, responsables y un calendario de trabajo claro.',
  },
  {
    question: '¿Pueden asumir toda la operación contable de mi empresa?',
    answer:
      'Sí. El alcance puede cubrir desde el registro y el cierre mensual hasta declaraciones, libros electrónicos, estados financieros y reportes de gestión. También podemos intervenir solo en un frente específico.',
  },
  {
    question: '¿Atienden requerimientos o fiscalizaciones de SUNAT?',
    answer:
      'Podemos revisar el requerimiento, organizar el sustento, evaluar contingencias y acompañar la atención del procedimiento. Cada caso se revisa antes de confirmar el alcance y la estrategia.',
  },
  {
    question: '¿El servicio se adapta a empresas pequeñas o en crecimiento?',
    answer:
      'El trabajo se dimensiona según el volumen de operaciones, número de colaboradores, complejidad tributaria y nivel de acompañamiento que necesita cada empresa.',
  },
  {
    question: '¿Cómo se define la propuesta económica?',
    answer:
      'Después del diagnóstico estimamos la carga operativa y el nivel de especialización requerido. Así la propuesta responde al trabajo real y no a un paquete genérico.',
  },
];

const navItems = [
  ['Servicios', 'servicios/'],
  ['Método', 'metodo/'],
  ['Equipo', 'equipo/'],
  ['Nosotros', 'nosotros/'],
  ['Recursos', 'recursos/'],
] as const;

const serviceSlugs = [
  'outsourcing-contable',
  'asesoria-tributaria',
  'gestion-laboral-planillas',
  'finanzas-control-gestion',
  'auditoria-cumplimiento',
  'asesoria-empresarial',
] as const;

export default function AltumSite() {
  const [activeService, setActiveService] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [shareStatus, setShareStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Outsourcing contable',
    stage: 'Necesito ordenar la operación actual',
    message: '',
  });

  useEffect(() => {
    document.documentElement.classList.add('reveal-ready');
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const selectedService = services[activeService];
  const consultationSummary = useMemo(
    () =>
      [
        'CONSULTA INICIAL — ALTUM CONTADORES Y ASOCIADOS',
        `Nombre: ${formData.name}`,
        `Empresa: ${formData.company}`,
        `Correo: ${formData.email}`,
        `Teléfono: ${formData.phone || 'No indicado'}`,
        `Servicio de interés: ${formData.service}`,
        `Situación actual: ${formData.stage}`,
        `Contexto: ${formData.message || 'Sin comentario adicional'}`,
      ].join('\n'),
    [formData],
  );

  function updateField(field: keyof typeof formData, value: string) {
    setFormData((current) => ({ ...current, [field]: value }));
  }

  function selectService(index: number) {
    setActiveService(index);
    if (window.matchMedia('(max-width: 760px)').matches) {
      window.requestAnimationFrame(() => {
        const detail = document.getElementById('service-detail');
        if (!detail) return;
        window.scrollTo({
          top: detail.getBoundingClientRect().top + window.scrollY - 82,
          left: 0,
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        });
      });
    }
  }

  function handleServiceKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number | null = null;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (index + 1) % services.length;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (index - 1 + services.length) % services.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = services.length - 1;
    if (nextIndex === null) return;

    event.preventDefault();
    setActiveService(nextIndex);
    window.requestAnimationFrame(() => {
      document.getElementById(`service-tab-${nextIndex}`)?.focus({ preventScroll: true });
    });
  }

  function handleSubmit(event: { preventDefault(): void }) {
    event.preventDefault();
    setSubmitted(true);
    setShareStatus('');
    resetDialogScroll();
  }

  function resetDialogScroll() {
    window.requestAnimationFrame(() => {
      document.getElementById('consultation-dialog')?.scrollTo({ top: 0 });
    });
  }

  function handleDialogOpenChange(open: boolean) {
    setDialogOpen(open);
    if (open) {
      setSubmitted(false);
      setShareStatus('');
      resetDialogScroll();
    }
  }

  async function writeSummaryToClipboard() {
    if (!navigator.clipboard?.writeText) return false;
    try {
      await navigator.clipboard.writeText(consultationSummary);
      return true;
    } catch {
      return false;
    }
  }

  async function shareConsultation() {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Consulta inicial — Altum',
          text: consultationSummary,
        });
        setShareStatus('Consulta compartida.');
      } else {
        const copied = await writeSummaryToClipboard();
        setShareStatus(copied ? 'Consulta copiada al portapapeles.' : 'No se pudo copiar. Selecciona el resumen y cópialo manualmente.');
      }
    } catch (error) {
      setShareStatus(error instanceof DOMException && error.name === 'AbortError'
        ? 'Compartir cancelado.'
        : 'No se pudo abrir el menú de compartir. Usa «Copiar» para guardar el resumen.');
    }
  }

  async function copyConsultation() {
    const copied = await writeSummaryToClipboard();
    setShareStatus(copied ? 'Consulta copiada al portapapeles.' : 'No se pudo copiar. Selecciona el resumen y cópialo manualmente.');
  }

  function resetConsultation() {
    setSubmitted(false);
    setShareStatus('');
    resetDialogScroll();
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={handleDialogOpenChange}>
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <header className="site-header">
          <a className="brand-lockup brand-desktop" href={sitePath()} aria-label="Altum Contadores y Asociados — inicio">
            <img src={assetPath('altum-logo.png')} alt="Altum Contadores y Asociados" width={1200} height={360} />
          </a>
          <a className="brand-mobile" href={sitePath()} aria-label="Altum Contadores y Asociados — inicio">
            <img src={assetPath('altum-symbol.png')} alt="" width={1024} height={808} />
            <span>ALTUM</span>
          </a>

          <nav className="desktop-nav" aria-label="Navegación principal">
            {navItems.map(([label, path]) => (
              <a href={sitePath(path)} key={path}>{label}</a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="header-cta" href={sitePath('contacto/')}>
              Hablemos <ArrowUpRight aria-hidden="true" />
            </a>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger className="menu-trigger" aria-label="Abrir menú">
                <Menu aria-hidden="true" />
              </SheetTrigger>
              <SheetContent className="mobile-sheet">
                <SheetHeader>
                  <SheetTitle className="mobile-sheet-title">ALTUM</SheetTitle>
                  <SheetDescription>Asesoría empresarial y contable</SheetDescription>
                </SheetHeader>
                <nav className="mobile-nav" aria-label="Navegación móvil">
                  {navItems.map(([label, path], index) => (
                    <a href={sitePath(path)} key={path} onClick={() => setMobileOpen(false)}>
                      <span>0{index + 1}</span>{label}<ArrowUpRight aria-hidden="true" />
                    </a>
                  ))}
                  <a href={sitePath('contacto/')} onClick={() => setMobileOpen(false)}>
                    <span>07</span>Contacto<ArrowUpRight aria-hidden="true" />
                  </a>
                </nav>
                <div className="mobile-sheet-mark" aria-hidden="true">
                  <img src={assetPath('altum-symbol.png')} alt="" width={1024} height={808} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="hero" id="inicio">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-watermark" aria-hidden="true">ALTUM</div>
          <div className="hero-copy">
            <div className="eyebrow">
              <span>Asesoría empresarial y contable</span>
              <span className="eyebrow-line" />
              <span>Perú</span>
            </div>
            <h1>
              Claridad para decidir.
              <span>Rigor para crecer.</span>
            </h1>
            <p className="hero-lead">
              Convertimos la contabilidad, los impuestos y la gestión financiera en
              información útil para dirigir tu empresa con confianza.
            </p>
            <div className="hero-actions">
              <DialogTrigger className="primary-cta">
                Preparar mi consulta <ArrowUpRight aria-hidden="true" />
              </DialogTrigger>
              <a className="text-link" href={sitePath('servicios/')}>
                Explorar servicios <ArrowDown aria-hidden="true" />
              </a>
            </div>
            <div className="hero-assurance">
              <ShieldCheck aria-hidden="true" />
              <span>Comunicación clara · Criterio técnico · Información confidencial</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Composición artística que representa crecimiento y claridad">
            <div className="hero-art-frame">
              <img className="ascent-art" src={assetPath('altum-ascent.webp')} alt="Escultura abstracta ascendente en tonos azules y blancos" width={1122} height={1402} fetchPriority="high" decoding="async" />
              <div className="art-corner art-corner-top" aria-hidden="true" />
              <div className="art-corner art-corner-bottom" aria-hidden="true" />
              <div className="art-mark" aria-hidden="true">
                <img src={assetPath('altum-symbol.png')} alt="" width={1024} height={808} />
              </div>
              <div className="art-caption">
                <span>Precisión</span><span>Perspectiva</span><span>Progreso</span>
              </div>
            </div>
            <div className="hero-index" aria-hidden="true">
              <span>01</span><span>ALTUM / CRECER CON ORDEN</span>
            </div>
          </div>

          <div className="hero-footer">
            {services.map((service) => <span key={service.short}>{service.short}</span>)}
          </div>
        </section>

        <section className="manifesto section-shell">
          <div className="section-kicker" data-reveal>
            <span>01</span><p>Nuestra mirada</p>
          </div>
          <div className="manifesto-grid">
            <h2 data-reveal>
              Más que solo contabilidad,
              <span>llevamos tu crecimiento<br />hacia lo más alto.</span>
            </h2>
            <div className="manifesto-copy" data-reveal>
              <p>
                Una contabilidad valiosa no termina en el cumplimiento. Explica qué está
                pasando, revela dónde actuar y ayuda a construir una empresa más sólida.
              </p>
              <a href={sitePath('metodo/')}>Así trabaja Altum <ArrowRight aria-hidden="true" /></a>
            </div>
          </div>
          <div className="principle-grid">
            <article data-reveal>
              <span>01 / ORDEN</span>
              <h3>La información correcta, en el momento correcto.</h3>
              <p>Procesos, responsables y fechas visibles para que la operación no dependa de la urgencia.</p>
            </article>
            <article data-reveal>
              <span>02 / CRITERIO</span>
              <h3>Cada cifra necesita contexto.</h3>
              <p>No entregamos datos aislados: explicamos implicancias, riesgos y alternativas.</p>
            </article>
            <article data-reveal>
              <span>03 / CERCANÍA</span>
              <h3>Un equipo que responde y acompaña.</h3>
              <p>Comunicación clara y seguimiento continuo para que siempre sepas qué sigue.</p>
            </article>
          </div>
        </section>

        <section className="pressure-section">
          <span className="pressure-watermark" aria-hidden="true">A</span>
          <div className="pressure-intro section-shell">
            <div className="section-kicker light" data-reveal>
              <span>02</span><p>El problema real</p>
            </div>
            <div className="pressure-heading" data-reveal>
              <h2>La incertidumbre también tiene un costo.</h2>
              <p>
                Cuando la información llega tarde o sin interpretación, la empresa decide
                con menos margen. Altum convierte esas señales en una ruta concreta.
              </p>
            </div>
          </div>
          <div className="pressure-cards section-shell">
            <article data-reveal>
              <span className="pressure-number">01</span>
              <div><h3>Información que llega tarde</h3><p>Cierres pendientes, registros dispersos y poca visibilidad sobre el resultado real.</p></div>
              <ArrowUpRight aria-hidden="true" />
            </article>
            <article data-reveal>
              <span className="pressure-number">02</span>
              <div><h3>Riesgos que no se ven</h3><p>Obligaciones tributarias o laborales que aparecen cuando el plazo ya está encima.</p></div>
              <ArrowUpRight aria-hidden="true" />
            </article>
            <article data-reveal>
              <span className="pressure-number">03</span>
              <div><h3>Decisiones sin contexto</h3><p>Ventas que crecen sin una lectura clara de caja, costos, margen o capacidad.</p></div>
              <ArrowUpRight aria-hidden="true" />
            </article>
          </div>
        </section>

        <section className="services-section section-shell" id="servicios">
          <div className="section-kicker" data-reveal>
            <span>03</span><p>Servicios</p>
          </div>
          <div className="section-heading services-heading" data-reveal>
            <h2>Una visión completa. Seis frentes que trabajan juntos.</h2>
            <p>
              Elige un servicio para conocer el alcance. Podemos integrar varias áreas o
              concentrarnos en la necesidad que hoy requiere atención.
            </p>
          </div>

          <div className="services-explorer" data-reveal>
            <div className="service-list" role="tablist" aria-label="Servicios de Altum" aria-orientation="vertical">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isActive = activeService === index;
                return (
                  <button
                    type="button"
                    key={service.title}
                    id={`service-tab-${index}`}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="service-detail"
                    tabIndex={isActive ? 0 : -1}
                    className={isActive ? 'service-tab active' : 'service-tab'}
                    onClick={() => selectService(index)}
                    onKeyDown={(event) => handleServiceKeyDown(event, index)}
                  >
                    <span className="service-tab-number">{service.number}</span>
                    <Icon aria-hidden="true" />
                    <span>{service.title}</span>
                    <ArrowRight className="service-arrow" aria-hidden="true" />
                  </button>
                );
              })}
            </div>

            <article
              className="service-detail"
              id="service-detail"
              role="tabpanel"
              aria-labelledby={`service-tab-${activeService}`}
              key={selectedService.title}
            >
              <div className="service-detail-top">
                <span>{selectedService.number} / {selectedService.short}</span>
                <selectedService.icon aria-hidden="true" />
              </div>
              <h3>{selectedService.title}</h3>
              <p className="service-summary">{selectedService.summary}</p>
              <div className="deliverables">
                <p>Qué podemos cubrir</p>
                <ul>
                  {selectedService.deliverables.map((item) => (
                    <li key={item}><Check aria-hidden="true" />{item}</li>
                  ))}
                </ul>
              </div>
              <div className="service-result">
                <Target aria-hidden="true" />
                <div><span>Resultado buscado</span><p>{selectedService.result}</p></div>
              </div>
              <DialogTrigger
                className="service-cta"
                onClick={() => updateField('service', selectedService.title)}
              >
                Conversar sobre este servicio <ArrowUpRight aria-hidden="true" />
              </DialogTrigger>
              <a className="service-page-link" href={sitePath(`servicios/${serviceSlugs[activeService]}/`)}>
                Ver alcance completo <ArrowRight aria-hidden="true" />
              </a>
            </article>
          </div>
        </section>

        <section className="method-section" id="metodo">
          <div className="section-shell">
            <div className="section-kicker light" data-reveal>
              <span>04</span><p>Método Altum</p>
            </div>
            <div className="method-heading" data-reveal>
              <h2>Primero entendemos.<br />Después elevamos.</h2>
              <p>
                Un proceso sencillo para pasar del desorden o la duda a una gestión con
                prioridades, responsables e información legible.
              </p>
            </div>
            <div className="method-track">
              {[
                ['01', 'Escuchamos', 'Conocemos la operación, los objetivos y lo que hoy genera fricción.'],
                ['02', 'Diagnosticamos', 'Revisamos información, obligaciones, procesos y nivel de exposición.'],
                ['03', 'Ordenamos', 'Definimos una ruta de trabajo, calendario, responsables y entregables.'],
                ['04', 'Interpretamos', 'Convertimos los resultados en alertas, alternativas y próximos pasos.'],
              ].map(([number, title, copy]) => (
                <article key={number} data-reveal>
                  <div className="method-node"><span>{number}</span></div>
                  <h3>{title}</h3><p>{copy}</p>
                </article>
              ))}
            </div>
            <div className="method-note" data-reveal>
              <Sparkles aria-hidden="true" />
              <p><strong>Trabajo visible de principio a fin.</strong> Sabes qué estamos haciendo, por qué importa y cuál es el siguiente paso.</p>
            </div>
          </div>
        </section>

        <section className="team-section section-shell" id="equipo">
          <div className="section-kicker" data-reveal>
            <span>05</span><p>Equipo</p>
          </div>
          <div className="team-layout">
            <div className="team-intro" data-reveal>
              <h2>Especialidades coordinadas. Una sola lectura de tu empresa.</h2>
              <p>
                La contabilidad no vive aislada de los impuestos, las personas o la caja.
                Por eso trabajamos de manera coordinada y explicamos cada tema en lenguaje claro.
              </p>
              <div className="team-promise">
                <CheckCircle2 aria-hidden="true" />
                <span>Cada caso se aborda desde las disciplinas que realmente necesita.</span>
              </div>
            </div>
            <div className="discipline-grid">
              {disciplines.map((discipline, index) => (
                <article key={discipline.code} data-reveal style={{ '--delay': `${index * 70}ms` } as CSSProperties}>
                  <div className="discipline-code">{discipline.code}</div>
                  <span>Área de práctica</span>
                  <h3>{discipline.title}</h3>
                  <p>{discipline.description}</p>
                  <div className="discipline-line" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section" id="nosotros">
          <div className="about-visual" data-reveal>
            <img src={assetPath('altum-ascent.webp')} alt="Composición abstracta azul que representa una trayectoria ascendente" width={1122} height={1402} loading="lazy" decoding="async" />
            <div className="about-visual-label"><span>ALTUM</span><p>Orden que impulsa.</p></div>
          </div>
          <div className="about-copy" data-reveal>
            <div className="section-kicker light">
              <span>06</span><p>Quiénes somos</p>
            </div>
            <h2>Una firma que convierte complejidad en dirección.</h2>
            <p>
              Integramos disciplina contable, criterio tributario y lectura financiera
              para que cada decisión parta de información ordenada. Damos estructura al
              presente y perspectiva al siguiente paso.
            </p>
            <blockquote>
              “Precisión técnica para cumplir. Perspectiva empresarial para avanzar.”
            </blockquote>
            <a href={sitePath('nosotros/')}>Conocer la firma <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </section>

        <section className="fit-section section-shell">
          <div className="section-kicker" data-reveal>
            <span>07</span><p>Cuándo podemos ayudarte</p>
          </div>
          <div className="section-heading fit-heading" data-reveal>
            <h2>El servicio se adapta a tu operación, no al revés.</h2>
            <p>Diseñamos el alcance según el momento, el volumen y la complejidad de cada negocio.</p>
          </div>
          <div className="fit-grid">
            {[
              [Building2, 'Empresas en crecimiento', 'Que necesitan orden antes de escalar operaciones, equipo o ventas.'],
              [ClipboardCheck, 'Negocios que buscan control', 'Que quieren cierres oportunos, reportes y responsabilidades claras.'],
              [Scale, 'Operaciones con mayor complejidad', 'Que enfrentan fiscalización, nuevos contratos o cambios societarios.'],
              [LineChart, 'Direcciones que quieren decidir mejor', 'Que necesitan entender caja, rentabilidad, costos y escenarios.'],
            ].map(([Icon, title, copy], index) => {
              const FitIcon = Icon as typeof Building2;
              return (
                <article key={title as string} data-reveal style={{ '--delay': `${index * 65}ms` } as CSSProperties}>
                  <FitIcon aria-hidden="true" />
                  <h3>{title as string}</h3><p>{copy as string}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="faq-section section-shell">
          <div className="faq-intro" data-reveal>
            <div className="section-kicker"><span>08</span><p>Preguntas frecuentes</p></div>
            <h2>Antes de empezar, resolvamos lo esencial.</h2>
            <p>Si tu caso requiere mayor detalle, el diagnóstico inicial nos permite aterrizarlo.</p>
          </div>
          <Accordion className="faq-accordion" defaultValue={['faq-0']}>
            {faqs.map((faq, index) => (
              <AccordionItem value={`faq-${index}`} key={faq.question} className="faq-item" data-reveal>
                <AccordionTrigger className="faq-trigger">
                  <span className="faq-index">0{index + 1}</span>{faq.question}
                </AccordionTrigger>
                <AccordionContent className="faq-content"><p>{faq.answer}</p></AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="contact-section" id="contacto">
          <div className="contact-grid" aria-hidden="true" />
          <img className="contact-symbol" src={assetPath('altum-symbol.png')} alt="" aria-hidden="true" width={1024} height={808} loading="lazy" />
          <div className="contact-inner" data-reveal>
            <div className="section-kicker light"><span>09</span><p>Conversemos</p></div>
            <h2>Tu empresa ya tiene números.<br /><span>Hagamos que hablen.</span></h2>
            <p>
              Cuéntanos qué quieres ordenar, resolver o proyectar. La herramienta convertirá
              esa información en un resumen claro para iniciar la conversación.
            </p>
            <DialogTrigger className="contact-cta">
              Preparar mi consulta <ArrowUpRight aria-hidden="true" />
            </DialogTrigger>
            <span className="contact-note"><ShieldCheck aria-hidden="true" />El sitio no envía ni almacena tus datos. Tú eliges cómo compartir el resumen.</span>
          </div>
        </section>

      </main>

      <footer>
        <div className="footer-main">
          <div className="footer-brand">
            <img src={assetPath('altum-symbol.png')} alt="" width={1024} height={808} loading="lazy" />
            <div><strong>ALTUM</strong><span>Contadores y Asociados</span></div>
          </div>
          <div className="footer-nav">
            <span>Explora</span>
            {navItems.map(([label, path]) => <a href={sitePath(path)} key={path}>{label}</a>)}
          </div>
          <div className="footer-services">
            <span>Áreas</span>
            <p>Contabilidad · Tributación · Gestión laboral · Finanzas · Auditoría · Asesoría empresarial</p>
          </div>
          <div className="footer-action">
            <span>¿Empezamos?</span>
            <DialogTrigger>Preparar mi consulta <ArrowUpRight aria-hidden="true" /></DialogTrigger>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Altum Contadores y Asociados</span>
          <span>Asesoría empresarial y contable</span>
        </div>
      </footer>

      <DialogTrigger className="floating-contact" aria-label="Preparar una consulta inicial">
        <MessageSquareText aria-hidden="true" /><span>Consulta</span>
      </DialogTrigger>

      <DialogContent id="consultation-dialog" className="consult-dialog" showCloseButton>
        {!submitted ? (
          <>
            <DialogHeader className="consult-header">
              <span className="dialog-kicker">Consulta inicial</span>
              <DialogTitle>Cuéntanos qué necesita tu empresa.</DialogTitle>
              <DialogDescription>
                Convertiremos la información en un resumen claro para compartir por el canal que prefieras.
              </DialogDescription>
            </DialogHeader>
            <form className="consult-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>Nombre y apellido<input required value={formData.name} onChange={(e) => updateField('name', e.target.value)} autoComplete="name" placeholder="Tu nombre" /></label>
                <label>Empresa<input required value={formData.company} onChange={(e) => updateField('company', e.target.value)} autoComplete="organization" placeholder="Nombre de tu empresa" /></label>
              </div>
              <div className="form-row">
                <label>Correo<input required type="email" value={formData.email} onChange={(e) => updateField('email', e.target.value)} autoComplete="email" placeholder="nombre@empresa.com" /></label>
                <label>Teléfono <span>(opcional)</span><input value={formData.phone} onChange={(e) => updateField('phone', e.target.value)} autoComplete="tel" inputMode="tel" placeholder="Número de contacto" /></label>
              </div>
              <label>Servicio de interés
                <select value={formData.service} onChange={(e) => updateField('service', e.target.value)}>
                  {services.map((service) => <option key={service.title}>{service.title}</option>)}
                </select>
              </label>
              <label>¿Qué describe mejor tu situación?
                <select value={formData.stage} onChange={(e) => updateField('stage', e.target.value)}>
                  <option>Necesito ordenar la operación actual</option>
                  <option>Estoy por iniciar o formalizar una empresa</option>
                  <option>Tengo una contingencia o requerimiento</option>
                  <option>Quiero crecer con mayor control financiero</option>
                  <option>Busco una segunda opinión especializada</option>
                </select>
              </label>
              <label>Contexto adicional <span>(opcional)</span>
                <textarea value={formData.message} onChange={(e) => updateField('message', e.target.value)} placeholder="Cuéntanos brevemente qué está pasando y qué resultado buscas." rows={4} />
              </label>
              <div className="privacy-note"><ShieldCheck aria-hidden="true" /><p>Este formulario prepara un resumen local. No envía ni almacena información por sí solo.</p></div>
              <Button type="submit" className="form-submit">Preparar mi consulta <ArrowRight aria-hidden="true" /></Button>
            </form>
          </>
        ) : (
          <div className="consult-success">
            <div className="success-icon"><CheckCircle2 aria-hidden="true" /></div>
            <DialogHeader>
              <span className="dialog-kicker">Resumen listo</span>
              <DialogTitle>Ya tienes una consulta clara para compartir.</DialogTitle>
              <DialogDescription>
                Revisa el resumen y compártelo por el canal que prefieras.
              </DialogDescription>
            </DialogHeader>
            <pre>{consultationSummary}</pre>
            <div className="success-actions">
              <Button type="button" className="share-button" onClick={shareConsultation}><Share2 aria-hidden="true" />Compartir</Button>
              <Button type="button" variant="outline" className="copy-button" onClick={copyConsultation}><Copy aria-hidden="true" />Copiar</Button>
            </div>
            <p className="share-status" aria-live="polite">{shareStatus}</p>
            <button type="button" className="edit-request" onClick={resetConsultation}>Editar la información</button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
