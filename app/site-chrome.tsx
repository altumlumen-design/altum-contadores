'use client';

/* oxlint-disable next/no-img-element -- Pre-optimized assets keep static hosting paths portable. */

import { type ReactNode, useState } from 'react';
import { ArrowUpRight, Menu, MessageSquareText } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { corporatePortalUrl, navItems } from './site-content';
import { assetPath, sitePath } from './site-paths';

type SiteChromeProps = {
  children: ReactNode;
  active?: string;
};

export default function SiteChrome({ children, active }: SiteChromeProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <header className="site-header">
        <a className="brand-lockup brand-desktop" href={sitePath()} aria-label="Altum Contadores y Asociados — inicio">
          <img src={assetPath('altum-logo.png')} alt="Altum Contadores y Asociados" width={1200} height={360} />
        </a>
        <a className="brand-mobile" href={sitePath()} aria-label="Altum Contadores y Asociados — inicio">
          <img src={assetPath('altum-logo.png')} alt="Altum Contadores y Asociados" width={1200} height={360} />
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navItems.map(([label, path]) => (
            <a
              href={sitePath(path)}
              key={path}
              className={active === label ? 'active' : undefined}
              aria-current={active === label ? 'page' : undefined}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-portal" href={corporatePortalUrl} target="_blank" rel="noreferrer">
            Portal corporativo <ArrowUpRight aria-hidden="true" />
          </a>
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
                <a href={sitePath()} onClick={() => setMobileOpen(false)}>
                  <span>01</span>Inicio<ArrowUpRight aria-hidden="true" />
                </a>
                {navItems.map(([label, path], index) => (
                  <a href={sitePath(path)} key={path} onClick={() => setMobileOpen(false)} aria-current={active === label ? 'page' : undefined}>
                    <span>0{index + 2}</span>{label}<ArrowUpRight aria-hidden="true" />
                  </a>
                ))}
                <a href={sitePath('contacto/')} onClick={() => setMobileOpen(false)}>
                  <span>07</span>Contacto<ArrowUpRight aria-hidden="true" />
                </a>
                <a className="mobile-portal-link" href={corporatePortalUrl} target="_blank" rel="noreferrer" onClick={() => setMobileOpen(false)}>
                  <span>08</span>Portal corporativo<ArrowUpRight aria-hidden="true" />
                </a>
              </nav>
              <div className="mobile-sheet-mark" aria-hidden="true">
                <img src={assetPath('altum-symbol.png')} alt="" width={1024} height={808} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>{children}</main>

      <footer>
        <div className="footer-main">
          <div className="footer-brand">
            <img src={assetPath('altum-symbol.png')} alt="" width={1024} height={808} loading="lazy" />
            <div><strong>ALTUM</strong><span>Contadores y Asociados</span></div>
          </div>
          <div className="footer-nav">
            <span>Explora</span>
            <a href={sitePath()}>Inicio</a>
            {navItems.map(([label, path]) => <a href={sitePath(path)} key={path}>{label}</a>)}
          </div>
          <div className="footer-services">
            <span>Áreas</span>
            <p>Contabilidad · Tributación · Gestión laboral · Finanzas · Auditoría · Asesoría empresarial</p>
          </div>
          <div className="footer-action">
            <span>¿Empezamos?</span>
            <a href={sitePath('contacto/')}>Preparar mi consulta <ArrowUpRight aria-hidden="true" /></a>
            <a href={corporatePortalUrl} target="_blank" rel="noreferrer">Portal corporativo <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Altum Contadores y Asociados</span>
          <span>Asesoría empresarial y contable</span>
        </div>
      </footer>

      <a className="floating-contact" href={sitePath('contacto/')} aria-label="Ir a contacto">
        <MessageSquareText aria-hidden="true" /><span>Contacto</span>
      </a>
    </>
  );
}
