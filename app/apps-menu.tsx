'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  ArrowRight,
  Calculator,
  CalendarDays,
  ChartNoAxesCombined,
  Percent,
  Scale,
} from 'lucide-react';
import { sitePath } from './site-paths';

const appLinks = [
  ['Calculadora de IGV', 'igv', Calculator],
  ['Días hábiles y calendario', 'dias', CalendarDays],
  ['Margen y utilidad', 'margen', Percent],
  ['Punto de equilibrio', 'equilibrio', Scale],
] as const;

export default function AppsMenu() {
  const [desktopNav, setDesktopNav] = useState<HTMLElement | null>(null);
  const [isAppsRoute, setIsAppsRoute] = useState(false);

  useEffect(() => {
    const sync = () => {
      const nav = document.querySelector<HTMLElement>('nav.desktop-nav');
      if (nav) setDesktopNav((current) => current === nav ? current : nav);

      const pathname = window.location.pathname;
      setIsAppsRoute(pathname.includes('/apps') || pathname.includes('/recursos'));

      document
        .querySelectorAll<HTMLAnchorElement>('a[href*="/recursos/"]')
        .forEach((link) => {
          const url = new URL(link.href, window.location.href);
          const hash = url.hash;
          link.href = `${sitePath('apps/')}${hash}`;
          if (link.textContent?.trim() === 'Recursos') {
            link.textContent = 'Apps';
          }
        });

      const originalDesktopAppsLink = nav?.querySelector<HTMLAnchorElement>(
        'a[href*="/apps/"], a[href*="/recursos/"]',
      );
      if (originalDesktopAppsLink && !originalDesktopAppsLink.closest('.apps-nav-menu')) {
        originalDesktopAppsLink.style.display = 'none';
        originalDesktopAppsLink.setAttribute('aria-hidden', 'true');
        originalDesktopAppsLink.tabIndex = -1;
      }

      document
        .querySelectorAll<HTMLElement>('.mobile-nav a, .footer-nav a')
        .forEach((element) => {
          const anchor = element as HTMLAnchorElement;
          const isAppsLink =
            anchor.href.includes('/apps/') ||
            anchor.href.includes('/recursos/') ||
            anchor.textContent?.trim() === 'Recursos';

          if (!isAppsLink || anchor.dataset.altumAppsLink === '1') return;

          anchor.dataset.altumAppsLink = '1';
          anchor.href = sitePath('apps/');

          if (anchor.closest('.mobile-nav')) {
            const number = anchor.querySelector('span')?.textContent ?? '';
            anchor.innerHTML = `<span>${number}</span>Apps`;
          } else {
            anchor.textContent = 'Apps';
          }
        });
    };

    sync();

    let frame = 0;
    const observer = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(sync);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  if (!desktopNav) return null;

  return createPortal(
    <>
      <style>{`
        .apps-nav-menu {
          position: relative;
          display: flex;
          align-items: center;
          height: 100%;
        }
        .apps-nav-menu summary {
          list-style: none;
          cursor: pointer;
          user-select: none;
          white-space: nowrap;
          color: inherit;
          font: inherit;
          padding: 7px 0;
          transition: color 180ms ease;
        }
        .apps-nav-menu summary::-webkit-details-marker { display: none; }
        .apps-nav-menu summary::after {
          content: "⌄";
          display: inline-block;
          margin-left: 6px;
          font-size: 12px;
          transform: translateY(-1px);
        }
        .apps-nav-menu[open] summary,
        .apps-nav-menu summary:hover,
        .apps-nav-menu summary.apps-active {
          color: var(--cobalt, #145ca8);
        }
        .apps-nav-popover {
          position: absolute;
          z-index: 90;
          top: calc(100% + 12px);
          right: -18px;
          width: min(340px, 88vw);
          padding: 10px;
          border: 1px solid #d6e0ed;
          background: rgba(255,255,255,.98);
          box-shadow: 0 24px 70px rgba(11, 38, 72, .17);
          backdrop-filter: blur(14px);
        }
        .apps-nav-popover::before {
          content: "";
          position: absolute;
          top: -17px;
          left: 0;
          right: 0;
          height: 17px;
        }
        .apps-nav-popover a {
          display: grid !important;
          grid-template-columns: 34px 1fr 18px;
          gap: 12px;
          align-items: center;
          min-height: 50px;
          padding: 10px 11px !important;
          color: #17304b !important;
          text-decoration: none;
          border-bottom: 1px solid #e6ecf4;
          background: transparent;
        }
        .apps-nav-popover a:last-child { border-bottom: 0; }
        .apps-nav-popover a:hover { background: #f3f8ff; color: #0e5aa8 !important; }
        .apps-nav-popover a svg:first-child {
          width: 19px; height: 19px; color: #3479bd;
        }
        .apps-nav-popover a svg:last-child {
          width: 15px; height: 15px; color: #7890a9;
        }
        .apps-nav-popover strong {
          display: block;
          font-size: .88rem;
          font-weight: 650;
          line-height: 1.25;
        }
        .apps-nav-all {
          margin-top: 6px;
          background: #07182c !important;
          color: white !important;
          border-bottom: 0 !important;
        }
        .apps-nav-all strong,
        .apps-nav-all svg { color: white !important; }
      `}</style>

      <details className="apps-nav-menu">
        <summary className={isAppsRoute ? 'apps-active' : undefined}>Apps</summary>
        <div className="apps-nav-popover">
          {appLinks.map(([label, anchor, Icon]) => (
            <a href={sitePath(`apps/#${anchor}`)} key={anchor}>
              <Icon aria-hidden="true" />
              <strong>{label}</strong>
              <ArrowRight aria-hidden="true" />
            </a>
          ))}
          <a className="apps-nav-all" href={sitePath('apps/')}>
            <ChartNoAxesCombined aria-hidden="true" />
            <strong>Ver todas las apps</strong>
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </details>
    </>,
    desktopNav,
  );
}
