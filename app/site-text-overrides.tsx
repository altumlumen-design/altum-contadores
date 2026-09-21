'use client';

import { useEffect } from 'react';
import { sitePath } from './site-paths';

export default function SiteTextOverrides() {
  useEffect(() => {
    const applyTextOverrides = () => {
      document
        .querySelectorAll<HTMLAnchorElement>('a[href$="equipo/"], a[href*="/equipo/"]')
        .forEach((link) => {
          if (link.textContent?.trim() === 'Equipo') {
            link.textContent = 'Sobre el estudio';
          }
        });

      document
        .querySelectorAll<HTMLAnchorElement>('a[href*="/recursos/"]')
        .forEach((link) => {
          const current = new URL(link.href, window.location.href);
          link.href = `${sitePath('apps/')}${current.hash}`;
          if (link.textContent?.trim() === 'Recursos') {
            link.textContent = 'Apps';
          }
        });

      const homeStudySection = document.querySelector<HTMLElement>('#equipo');
      if (homeStudySection) {
        const kicker = homeStudySection.querySelector<HTMLElement>('.section-kicker p');
        if (kicker && kicker.textContent?.trim() !== 'Sobre el estudio') {
          kicker.textContent = 'Sobre el estudio';
        }

        const title = homeStudySection.querySelector<HTMLElement>('.team-intro h2');
        if (title && title.textContent?.trim() !== 'Dirección contable con una lectura integral de tu empresa.') {
          title.textContent = 'Dirección contable con una lectura integral de tu empresa.';
        }

        const copyText =
          'Jeanfranco Martín Vargas Luque, Contador Público y responsable del estudio contable, dirige la atención y articula contabilidad, tributación, finanzas y gestión empresarial según las necesidades de cada cliente.';
        const copy = homeStudySection.querySelector<HTMLElement>('.team-intro > p');
        if (copy && copy.textContent?.trim() !== copyText) {
          copy.textContent = copyText;
        }

        const promiseText =
          'Un responsable centraliza el contexto y coordina las especialidades que cada caso necesita.';
        const promise = homeStudySection.querySelector<HTMLElement>('.team-promise span');
        if (promise && promise.textContent?.trim() !== promiseText) {
          promise.textContent = promiseText;
        }
      }
    };

    applyTextOverrides();

    let frame = 0;
    const observer = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(applyTextOverrides);
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return null;
}
