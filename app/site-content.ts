export type ServiceIconKey = 'calculator' | 'landmark' | 'users' | 'chart' | 'audit' | 'building' | 'briefcase';

export type Service = {
  slug: string;
  number: string;
  short: string;
  title: string;
  eyebrow: string;
  summary: string;
  promise: string;
  icon: ServiceIconKey;
  coverage: string[];
  deliverables: string[];
  idealFor: string[];
  process: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
};

export const navItems = [
  ['Servicios', 'servicios/'],
  ['Método', 'metodo/'],
  ['Equipo', 'equipo/'],
  ['Nosotros', 'nosotros/'],
  ['Recursos', 'recursos/'],
] as const;

export const corporatePortalUrl = 'https://altumlumen-design.github.io/Altum-Lumen-S.A.C./';

export const services: Service[] = [
  {
    slug: 'outsourcing-contable',
    number: '01',
    short: 'Contabilidad',
    title: 'Outsourcing contable',
    eyebrow: 'Información confiable, todos los meses',
    summary: 'Asumimos y ordenamos el ciclo contable para que cierres, reportes y obligaciones avancen con un calendario visible.',
    promise: 'Una contabilidad puntual, sustentada y útil para dirigir la empresa.',
    icon: 'calculator',
    coverage: [
      'Registro y revisión de operaciones',
      'Conciliaciones bancarias y análisis de cuentas',
      'Libros y registros electrónicos',
      'Cierres contables mensuales',
      'Estados financieros y anexos de soporte',
      'Reportes ejecutivos de resultados y pendientes',
    ],
    deliverables: ['Calendario mensual de obligaciones', 'Reporte de pendientes y observaciones', 'Cierre y estados financieros', 'Reunión de lectura gerencial'],
    idealFor: ['Empresas que necesitan ordenar información dispersa', 'Operaciones que crecieron más rápido que sus procesos', 'Direcciones que requieren cierres y reportes oportunos'],
    process: [
      { title: 'Levantamiento', description: 'Revisamos fuentes de información, responsables, documentos y fechas críticas.' },
      { title: 'Estabilización', description: 'Ordenamos registros, conciliaciones, pendientes y criterios de cierre.' },
      { title: 'Cierre', description: 'Preparamos información financiera con trazabilidad y alertas visibles.' },
      { title: 'Lectura', description: 'Traducimos el cierre en hallazgos y próximos pasos para la gerencia.' },
    ],
    faq: [
      { question: '¿Pueden asumir toda la contabilidad?', answer: 'El alcance puede cubrir el ciclo completo o una parte específica. Se define después de revisar volumen, sistemas, responsables y estado de la información.' },
      { question: '¿Cómo se recibe la documentación?', answer: 'Se acuerda un flujo digital, responsables y fechas de corte para evitar entregas tardías y mantener trazabilidad.' },
      { question: '¿Qué ocurre si existen periodos atrasados?', answer: 'Primero se dimensiona el atraso y se plantea una ruta de regularización separada del trabajo mensual.' },
    ],
  },
  {
    slug: 'asesoria-tributaria',
    number: '02',
    short: 'Tributación',
    title: 'Asesoría tributaria',
    eyebrow: 'Cumplimiento con criterio y anticipación',
    summary: 'Acompañamos la determinación de obligaciones, la revisión preventiva y la atención de comunicaciones de SUNAT.',
    promise: 'Menos incertidumbre y una posición tributaria que puede explicarse y sostenerse.',
    icon: 'landmark',
    coverage: [
      'Revisión de determinaciones mensuales y anuales',
      'Matriz de obligaciones y vencimientos',
      'Evaluación preventiva de contingencias',
      'Atención de cartas, esquelas y requerimientos',
      'Revisión de sustento documentario',
      'Planeamiento tributario responsable',
    ],
    deliverables: ['Calendario tributario', 'Matriz de riesgos y sustentos', 'Informe de observaciones', 'Ruta de respuesta ante SUNAT'],
    idealFor: ['Empresas con operaciones nuevas o poco habituales', 'Negocios que recibieron una comunicación de SUNAT', 'Direcciones que necesitan anticipar impacto tributario'],
    process: [
      { title: 'Contexto', description: 'Entendemos la operación y el hecho que necesita análisis.' },
      { title: 'Sustento', description: 'Revisamos documentos, registros y criterio aplicable.' },
      { title: 'Alternativas', description: 'Explicamos riesgos, posiciones y efectos de cada decisión.' },
      { title: 'Acompañamiento', description: 'Ordenamos responsables, respuesta y seguimiento.' },
    ],
    faq: [
      { question: '¿Atienden fiscalizaciones o requerimientos?', answer: 'Sí, el servicio puede incluir revisión del requerimiento, organización del sustento y acompañamiento durante la respuesta.' },
      { question: '¿La asesoría puede ser preventiva?', answer: 'Sí. Una revisión periódica permite detectar diferencias antes de que se conviertan en contingencias.' },
      { question: '¿Emiten una recomendación por escrito?', answer: 'Según el caso, el alcance puede incorporar un informe, matriz de riesgos o memorando de conclusiones.' },
    ],
  },
  {
    slug: 'gestion-laboral-planillas',
    number: '03',
    short: 'Laboral',
    title: 'Gestión laboral y planillas',
    eyebrow: 'Orden durante todo el ciclo laboral',
    summary: 'Centralizamos planillas, movimientos, contratos y obligaciones para reducir errores y dar claridad a la gestión de personas.',
    promise: 'Procesos laborales puntuales, documentados y comprensibles para la empresa y su equipo.',
    icon: 'users',
    coverage: [
      'Cálculo y revisión de planillas',
      'Altas, bajas y actualización de información laboral',
      'PLAME, T-Registro y coordinación previsional',
      'Beneficios sociales, vacaciones y liquidaciones',
      'Contratos, legajos y control documentario',
      'Alertas sobre vencimientos y obligaciones',
    ],
    deliverables: ['Calendario laboral', 'Planilla y archivos de pago', 'Reporte de movimientos', 'Control de vacaciones y obligaciones'],
    idealFor: ['Empresas que incorporan personal', 'Equipos con incidencias variables cada mes', 'Operaciones que necesitan centralizar documentación laboral'],
    process: [
      { title: 'Datos maestros', description: 'Validamos colaboradores, condiciones, conceptos y documentos vigentes.' },
      { title: 'Incidencias', description: 'Ordenamos novedades del periodo con una fecha de corte definida.' },
      { title: 'Procesamiento', description: 'Calculamos, revisamos y documentamos la planilla.' },
      { title: 'Cierre laboral', description: 'Entregamos archivos, alertas y pendientes del mes.' },
    ],
    faq: [
      { question: '¿Pueden trabajar con nuestro responsable interno?', answer: 'Sí. Definimos un flujo compartido para incidencias, aprobaciones, documentos y consultas.' },
      { question: '¿Incluye contratos y liquidaciones?', answer: 'Pueden incorporarse al alcance según la cantidad de movimientos y necesidades de la empresa.' },
      { question: '¿Cómo se protege la información?', answer: 'El flujo se diseña con responsables definidos, accesos limitados y canales acordados para datos sensibles.' },
    ],
  },
  {
    slug: 'finanzas-control-gestion',
    number: '04',
    short: 'Finanzas',
    title: 'Finanzas y control de gestión',
    eyebrow: 'De los resultados a las decisiones',
    summary: 'Construimos una lectura ejecutiva de caja, costos, margen y escenarios para que la gerencia decida con perspectiva.',
    promise: 'Una visión financiera que conecta la operación diaria con las prioridades del negocio.',
    icon: 'chart',
    coverage: [
      'Flujo de caja y proyecciones',
      'Presupuesto y seguimiento de desviaciones',
      'Estructura de costos y análisis de margen',
      'Indicadores clave de gestión',
      'Escenarios para inversión o crecimiento',
      'Reportes ejecutivos para la dirección',
    ],
    deliverables: ['Modelo de caja', 'Tablero de indicadores', 'Análisis de costos y margen', 'Escenarios y recomendaciones'],
    idealFor: ['Empresas que venden más pero no ven liquidez', 'Gerencias que necesitan priorizar inversiones', 'Negocios que quieren medir rentabilidad por línea o unidad'],
    process: [
      { title: 'Preguntas de gestión', description: 'Definimos qué decisiones debe ayudar a responder la información.' },
      { title: 'Modelo', description: 'Organizamos datos, supuestos e indicadores relevantes.' },
      { title: 'Escenarios', description: 'Evaluamos sensibilidad, brechas y puntos de control.' },
      { title: 'Ritmo de gestión', description: 'Instalamos una revisión periódica orientada a decisiones.' },
    ],
    faq: [
      { question: '¿Necesito tener toda la información ordenada?', answer: 'No necesariamente. El diagnóstico identifica qué datos existen, cuáles faltan y cómo construir una primera versión útil.' },
      { question: '¿Pueden analizar rentabilidad por producto?', answer: 'Sí, siempre que el alcance permita identificar ingresos, costos directos y criterios razonables de asignación.' },
      { question: '¿El tablero se actualiza periódicamente?', answer: 'La frecuencia se define según el ritmo de decisión: mensual, quincenal o por proyecto.' },
    ],
  },
  {
    slug: 'auditoria-cumplimiento',
    number: '05',
    short: 'Auditoría',
    title: 'Auditoría y cumplimiento',
    eyebrow: 'Revisar antes de que el riesgo crezca',
    summary: 'Evaluamos información, procesos y controles para detectar diferencias, documentar hallazgos y priorizar correcciones.',
    promise: 'Una revisión independiente y accionable, con hallazgos claros y responsables definidos.',
    icon: 'audit',
    coverage: [
      'Diagnóstico contable y tributario',
      'Revisión de cuentas y sustentos',
      'Evaluación de procesos y controles internos',
      'Reconstrucción y regularización contable',
      'Revisión para transacciones o due diligence',
      'Seguimiento de planes de acción',
    ],
    deliverables: ['Plan de revisión', 'Matriz de hallazgos', 'Clasificación por impacto y urgencia', 'Plan de acción y seguimiento'],
    idealFor: ['Empresas con diferencias acumuladas', 'Direcciones que requieren una segunda opinión', 'Negocios próximos a una inversión, venta o fiscalización'],
    process: [
      { title: 'Alcance', description: 'Definimos objetivo, periodos, materialidad y documentación necesaria.' },
      { title: 'Pruebas', description: 'Contrastamos registros, sustentos, procesos y controles.' },
      { title: 'Hallazgos', description: 'Explicamos la causa, el efecto y el nivel de prioridad.' },
      { title: 'Corrección', description: 'Acordamos acciones, responsables y fechas de seguimiento.' },
    ],
    faq: [
      { question: '¿Una revisión es lo mismo que una auditoría financiera?', answer: 'No siempre. El tipo de trabajo, profundidad y entregable se definen según el objetivo y el nivel de aseguramiento requerido.' },
      { question: '¿Pueden revisar solo un proceso?', answer: 'Sí. El alcance puede concentrarse en una cuenta, ciclo, periodo o riesgo específico.' },
      { question: '¿Incluyen seguimiento de hallazgos?', answer: 'Puede incorporarse una etapa de seguimiento para verificar avances y pendientes.' },
    ],
  },
  {
    slug: 'contabilidad-gubernamental',
    number: '06',
    short: 'Sector público',
    title: 'Contabilidad gubernamental',
    eyebrow: 'Información pública con orden y trazabilidad',
    summary: 'Brindamos asistencia técnica para ordenar procesos contables, cierres y rendición de información en entidades y proyectos vinculados al sector público.',
    promise: 'Procesos contables públicos documentados, consistentes y alineados con sus obligaciones de información.',
    icon: 'building',
    coverage: [
      'Diagnóstico de procesos y saldos contables',
      'Asistencia en cierres contables y conciliaciones',
      'Revisión de información financiera y presupuestaria',
      'Ordenamiento de sustentos y expedientes',
      'Acompañamiento en rendición de cuentas',
      'Capacitación y asistencia técnica al equipo responsable',
    ],
    deliverables: ['Diagnóstico y matriz de brechas', 'Cronograma de cierre', 'Reporte de observaciones', 'Plan de regularización y seguimiento'],
    idealFor: ['Entidades que necesitan ordenar un cierre contable', 'Equipos con saldos u observaciones pendientes', 'Proyectos que requieren asistencia técnica especializada'],
    process: [
      { title: 'Marco y alcance', description: 'Identificamos entidad, periodo, sistemas, responsables y entregables requeridos.' },
      { title: 'Revisión', description: 'Contrastamos saldos, conciliaciones, documentos e información financiera y presupuestaria.' },
      { title: 'Regularización', description: 'Priorizamos brechas y organizamos una ruta de corrección documentada.' },
      { title: 'Cierre y transferencia', description: 'Acompañamos los hitos y dejamos criterios, pendientes y responsabilidades visibles.' },
    ],
    faq: [
      { question: '¿El servicio se adapta a cada entidad?', answer: 'Sí. El alcance depende del marco aplicable, los sistemas utilizados, el periodo y el estado de la información.' },
      { question: '¿Pueden apoyar un cierre con observaciones pendientes?', answer: 'Sí. Primero se dimensionan las brechas y luego se propone una ruta de regularización con prioridades y responsables.' },
      { question: '¿Incluye capacitación?', answer: 'Puede incorporarse asistencia técnica para que el equipo responsable comprenda criterios, controles y entregables.' },
    ],
  },
  {
    slug: 'asesoria-empresarial',
    number: '07',
    short: 'Empresa',
    title: 'Asesoría empresarial',
    eyebrow: 'Estructura para la siguiente etapa',
    summary: 'Acompañamos decisiones de formalización, organización y crecimiento conectando la mirada contable, tributaria y financiera.',
    promise: 'Decisiones empresariales con una ruta, responsables e implicancias visibles.',
    icon: 'briefcase',
    coverage: [
      'Constitución y formalización empresarial',
      'Diseño de procesos administrativos',
      'Políticas y responsabilidades internas',
      'Evaluación económica de decisiones',
      'Preparación para nuevas operaciones o contratos',
      'Coordinación de especialidades complementarias',
    ],
    deliverables: ['Mapa de situación', 'Ruta de implementación', 'Matriz de decisiones y responsables', 'Seguimiento de hitos'],
    idealFor: ['Emprendimientos que necesitan formalizarse', 'Empresas que abren una nueva unidad', 'Direcciones que necesitan ordenar antes de crecer'],
    process: [
      { title: 'Objetivo', description: 'Aterrizamos la decisión y el resultado que la empresa busca.' },
      { title: 'Implicancias', description: 'Conectamos efectos contables, tributarios, laborales y financieros.' },
      { title: 'Ruta', description: 'Definimos alternativas, secuencia, responsables y dependencias.' },
      { title: 'Ejecución', description: 'Acompañamos hitos y ajustamos la ruta cuando cambia el contexto.' },
    ],
    faq: [
      { question: '¿Ayudan a constituir una empresa?', answer: 'El servicio puede organizar la ruta de formalización, las decisiones iniciales y la coordinación de los trámites correspondientes.' },
      { question: '¿Pueden acompañar una nueva unidad de negocio?', answer: 'Sí. Se revisan supuestos, estructura, obligaciones, caja y controles necesarios para iniciar con orden.' },
      { question: '¿La asesoría incluye seguimiento?', answer: 'El alcance puede ser puntual o continuo, según la complejidad y duración de la decisión.' },
    ],
  },
];

export const teamProfiles = [
  {
    name: 'Jeanfranco Martín Vargas Luque',
    role: 'Contador público · Responsable del estudio contable',
    status: 'Dirección del estudio',
    initials: 'JV',
    image: 'team-jeanfranco.webp',
    focus: ['Dirección contable', 'Tributación', 'Contabilidad gubernamental'],
    description: 'Dirige la atención del estudio e integra el trabajo contable con una lectura clara de obligaciones, resultados y decisiones.',
  },
  {
    name: 'Especialista por confirmar',
    role: 'Consultoría tributaria',
    status: 'Perfil editable',
    initials: 'TR',
    focus: ['Cumplimiento', 'Prevención de riesgos', 'Atención SUNAT'],
    description: 'Perfil destinado a presentar a quien evalúe obligaciones, contingencias y alternativas tributarias.',
  },
  {
    name: 'Especialista por confirmar',
    role: 'Gestión laboral',
    status: 'Perfil editable',
    initials: 'GL',
    focus: ['Planillas', 'Contratos y legajos', 'Obligaciones laborales'],
    description: 'Perfil destinado a mostrar la experiencia responsable del ciclo laboral y la atención de incidencias.',
  },
  {
    name: 'Especialista por confirmar',
    role: 'Finanzas y control',
    status: 'Perfil editable',
    initials: 'FC',
    focus: ['Caja y presupuesto', 'Costos y margen', 'Indicadores'],
    description: 'Perfil destinado a traducir información financiera en escenarios, prioridades y próximos pasos.',
  },
  {
    name: 'Especialista por confirmar',
    role: 'Estrategia y marketing',
    status: 'Perfil editable',
    initials: 'EM',
    focus: ['Posicionamiento', 'Crecimiento comercial', 'Experiencia del cliente'],
    description: 'Perfil complementario para acompañar decisiones de mercado y crecimiento cuando el proyecto lo requiere.',
  },
];

export const decisionGuides = [
  {
    category: 'Contabilidad',
    title: '¿Tu cierre mensual realmente está bajo control?',
    summary: 'Cinco señales para reconocer si la información llega a tiempo, tiene sustento y permite decidir.',
    points: ['Conciliaciones terminadas', 'Pendientes con responsable', 'Cuentas explicadas', 'Reporte gerencial', 'Fecha de cierre estable'],
  },
  {
    category: 'Tributación',
    title: 'Cómo prepararte antes de responder a SUNAT',
    summary: 'Una ruta práctica para leer el requerimiento, ordenar evidencias y proteger la trazabilidad de la respuesta.',
    points: ['Identificar plazo', 'Delimitar periodos', 'Reunir sustentos', 'Validar consistencia', 'Documentar la respuesta'],
  },
  {
    category: 'Finanzas',
    title: 'Ventas, caja y margen: tres lecturas diferentes',
    summary: 'Por qué vender más no siempre significa tener más liquidez o generar una mejor rentabilidad.',
    points: ['Ciclo de cobro', 'Costo variable', 'Gastos fijos', 'Capital de trabajo', 'Margen por línea'],
  },
  {
    category: 'Laboral',
    title: 'Checklist para un ciclo de planillas ordenado',
    summary: 'Los controles mínimos para recibir incidencias, procesar, revisar y cerrar cada periodo.',
    points: ['Fecha de corte', 'Novedades aprobadas', 'Datos maestros', 'Revisión cruzada', 'Archivo documentario'],
  },
];
