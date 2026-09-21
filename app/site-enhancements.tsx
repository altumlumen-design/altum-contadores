'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowRight, Calculator, Sparkles } from 'lucide-react';
import { sitePath } from './site-paths';

export default function SiteEnhancements() {
  const [serviceList, setServiceList] = useState<HTMLElement | null>(null);
  const [servicesSection, setServicesSection] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const applyEnhancements = () => {
      const list = document.querySelector<HTMLElement>('.services-section .service-list');
      const section = document.querySelector<HTMLElement>('.services-section');

      if (list && list !== serviceList) setServiceList(list);
      if (section && section !== servicesSection) setServicesSection(section);

      const heading = document.querySelector<HTMLElement>('.services-section .services-heading h2');
      if (heading?.textContent?.includes('Siete frentes')) {
        heading.textContent = 'Una visión completa. Ocho frentes que trabajan juntos.';
      }

      document.querySelectorAll<HTMLSelectElement>('select').forEach((select) => {
        const hasAccountingServices = Array.from(select.options).some(
          (option) => option.textContent?.trim() === 'Outsourcing contable',
        );
        const hasMarketing = Array.from(select.options).some(
          (option) => option.textContent?.trim() === 'Marketing y construcción de marca',
        );

        if (hasAccountingServices && !hasMarketing) {
          const option = document.createElement('option');
          option.textContent = 'Marketing y construcción de marca';
          option.value = 'Marketing y construcción de marca';
          select.appendChild(option);
        }
      });
    };

    applyEnhancements();

    const observer = new MutationObserver(() => applyEnhancements());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [serviceList, servicesSection]);

  return (
    <>
      {serviceList && createPortal(
        <a
          className="service-tab home-marketing-service"
          href={sitePath('servicios/marketing-construccion-marca/')}
          role="tab"
          aria-selected="false"
        >
          <span className="service-tab-number">08</span>
          <Sparkles aria-hidden="true" />
          <span>Marketing y construcción de marca</span>
          <ArrowRight className="service-arrow" aria-hidden="true" />
        </a>,
        serviceList,
      )}

      {servicesSection && createPortal(
        <section className="inner-cta home-tool-promo">
          <div>
            <span>Herramienta gratuita · IGV 18%</span>
            <h2>Calcula base imponible, IGV y precio total en segundos.</h2>
          </div>
          <a href={sitePath('recursos/#calculadora-igv')}>
            Abrir calculadora de IGV <Calculator aria-hidden="true" />
          </a>
        </section>,
        servicesSection,
      )}
    </>
  );
}
