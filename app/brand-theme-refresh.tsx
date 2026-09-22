'use client';

export default function BrandThemeRefresh() {
  return (
    <style>{`
      :root {
        --altum-logo-navy: #063f6d;
        --altum-logo-blue: #005f90;
        --altum-logo-blue-2: #0a6faa;
        --altum-logo-soft: #edf5fb;
        --altum-logo-line: #d2e1ee;
        --altum-logo-text: #173450;
      }

      body {
        color: var(--altum-logo-text);
        background:
          radial-gradient(circle at top right, rgba(10, 111, 170, .06), transparent 20%),
          linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
      }

      .site-header {
        background: rgba(255, 255, 255, .92) !important;
        backdrop-filter: blur(12px);
        border-bottom: 1px solid rgba(210, 225, 238, .9);
        box-shadow: 0 14px 34px rgba(8, 36, 68, .05);
      }

      .desktop-nav a,
      .mobile-nav a,
      .footer-nav a,
      .footer-action a,
      .header-portal {
        color: #274764 !important;
      }

      .desktop-nav a.active,
      .desktop-nav a:hover,
      .mobile-nav a:hover,
      .footer-nav a:hover,
      .footer-action a:hover,
      .header-portal:hover {
        color: var(--altum-logo-blue) !important;
      }

      .header-cta,
      .inner-primary-link,
      .inner-cta a,
      .floating-contact,
      .single-app-footer a {
        background: linear-gradient(135deg, var(--altum-logo-navy) 0%, var(--altum-logo-blue) 56%, var(--altum-logo-blue-2) 100%) !important;
        color: #fff !important;
        border: 1px solid rgba(5, 95, 144, .55) !important;
        box-shadow: 0 16px 32px rgba(6, 63, 109, .16);
      }

      .header-cta:hover,
      .inner-primary-link:hover,
      .inner-cta a:hover,
      .floating-contact:hover,
      .single-app-footer a:hover {
        filter: brightness(1.03);
        transform: translateY(-1px);
      }

      .page-kicker span,
      .section-kicker span,
      .page-section-heading .section-kicker span,
      .detail-number,
      .single-app-intro span,
      .single-app-number {
        color: var(--altum-logo-blue) !important;
      }

      .inner-hero,
      .detail-hero {
        background:
          radial-gradient(circle at top right, rgba(10, 111, 170, .09), transparent 26%),
          linear-gradient(180deg, #ffffff 0%, #f7fbff 100%);
      }

      .inner-hero-grid,
      .detail-hero .inner-hero-grid {
        opacity: .78;
      }

      .inner-hero-aside,
      .detail-promise,
      .single-app-footer,
      .apps-hub-note,
      .altum-app-explainer-main,
      .altum-app-explainer-side,
      .altum-app-interpretation,
      .inner-cta,
      .team-model,
      .detail-coverage,
      .ideal-section {
        background-color: var(--altum-logo-soft) !important;
      }

      .home-app-card:hover,
      .apps-hub-card:hover,
      .service-tab:hover,
      .coverage-grid article:hover,
      .deliverable-grid article:hover {
        border-color: #9fc2df !important;
        background: #f5faff !important;
      }

      .service-tab svg,
      .home-app-card svg,
      .apps-hub-card-top svg,
      .inner-hero-aside svg,
      .detail-promise svg,
      .footer-brand img + div strong,
      .team-model svg {
        color: var(--altum-logo-blue) !important;
      }

      .footer-main,
      .footer-bottom {
        border-color: var(--altum-logo-line) !important;
      }

      .footer-brand strong,
      .detail-heading h1,
      .page-section-heading h2,
      .inner-hero-copy h1,
      .single-app-intro h1 {
        color: #12314e !important;
      }

      .profile-card.featured {
        border: 1px solid #cfe0ee !important;
        background:
          linear-gradient(180deg, rgba(255,255,255,.96), rgba(245,250,255,.96)) !important;
        box-shadow: 0 24px 58px rgba(7, 49, 86, .08);
      }

      .profile-card.featured .profile-status {
        color: var(--altum-logo-blue) !important;
        background: #eaf4fc !important;
        border: 1px solid #cfe0ee;
      }

      .profile-portrait.has-photo {
        position: relative !important;
        overflow: hidden !important;
        border: 1px solid rgba(206, 223, 236, .95) !important;
        box-shadow: 0 22px 54px rgba(8, 44, 80, .10);
        background:
          radial-gradient(circle at top, rgba(10, 111, 170, .18), transparent 35%),
          linear-gradient(180deg, #f6fbff 0%, #edf5fb 100%) !important;
      }

      .profile-portrait.has-photo::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at top center, rgba(255,255,255,.28), transparent 34%);
        pointer-events: none;
        z-index: 1;
      }

      .profile-portrait.has-photo::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(6, 63, 109, .05), rgba(6, 63, 109, .16));
        mix-blend-mode: multiply;
        pointer-events: none;
        z-index: 1;
      }

      .profile-portrait.has-photo img {
        display: block;
        width: 100%;
        height: auto;
        filter: saturate(.92) contrast(1.03) brightness(.99) hue-rotate(-4deg);
        transform: scale(1.015);
      }

      .profile-portrait.has-photo span {
        position: absolute;
        left: 18px;
        bottom: 18px;
        z-index: 2;
        background: rgba(255,255,255,.92);
        color: var(--altum-logo-blue) !important;
        border: 1px solid rgba(205, 221, 234, .95);
        box-shadow: 0 12px 26px rgba(6, 63, 109, .12);
      }

      @media (max-width: 760px) {
        .site-header {
          background: rgba(255,255,255,.96) !important;
        }

        .profile-portrait.has-photo span {
          left: 12px;
          bottom: 12px;
        }
      }
    `}</style>
  );
}
