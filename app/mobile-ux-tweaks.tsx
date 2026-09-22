'use client';

export default function MobileUxTweaks() {
  return (
    <style>{`
      :root {
        --altum-mobile-shell: clamp(16px, 4.2vw, 22px);
      }

      html {
        scroll-behavior: smooth;
      }

      .floating-contact {
        box-shadow: 0 18px 40px rgba(10, 34, 67, .16);
      }

      @media (max-width: 980px) {
        .header-portal {
          display: none !important;
        }
      }

      @media (max-width: 760px) {
        .site-header {
          gap: 12px !important;
          padding-inline: var(--altum-mobile-shell) !important;
          padding-block: 12px !important;
          min-height: 70px !important;
        }

        .brand-mobile img,
        .brand-lockup img {
          max-width: 132px !important;
          height: auto !important;
        }

        .header-actions {
          gap: 10px !important;
        }

        .header-cta {
          min-height: 42px !important;
          padding-inline: 12px !important;
          font-size: .82rem !important;
          border-radius: 999px !important;
        }

        .menu-trigger {
          min-width: 42px !important;
          min-height: 42px !important;
        }

        .mobile-sheet {
          width: min(100vw, 360px) !important;
          padding: 22px 18px 20px !important;
        }

        .mobile-nav {
          margin-top: 12px !important;
          gap: 8px !important;
        }

        .mobile-nav a {
          min-height: 50px !important;
          padding: 11px 12px !important;
          border-radius: 14px !important;
          font-size: .92rem !important;
        }

        .mobile-nav a span {
          min-width: 34px !important;
        }

        .inner-hero {
          min-height: 0 !important;
          padding-block: 88px 42px !important;
        }

        .inner-shell,
        .section-shell {
          padding-inline: var(--altum-mobile-shell) !important;
        }

        .inner-hero-copy p,
        .page-section-heading p,
        .team-intro p,
        .catalog-summary {
          font-size: .93rem !important;
          line-height: 1.58 !important;
        }

        .inner-hero-copy h1,
        .page-section-heading h2,
        .detail-heading h1 {
          font-size: clamp(2rem, 10vw, 2.65rem) !important;
          line-height: .98 !important;
          letter-spacing: -.05em !important;
        }

        .inner-primary-link,
        .detail-back {
          min-height: 46px !important;
          padding: 12px 14px !important;
          font-size: .88rem !important;
        }

        .inner-hero-aside {
          display: none !important;
        }

        .page-section-heading {
          gap: 12px !important;
        }

        .section-kicker,
        .page-kicker {
          font-size: .74rem !important;
        }

        .inner-cta {
          padding: 22px 18px !important;
          gap: 18px !important;
          margin-top: 28px !important;
          margin-bottom: 36px !important;
        }

        .inner-cta h2 {
          font-size: clamp(1.55rem, 7vw, 2rem) !important;
          line-height: 1.02 !important;
        }

        .inner-cta a {
          width: 100% !important;
          justify-content: center !important;
          min-height: 46px !important;
        }

        .footer-main {
          grid-template-columns: 1fr !important;
          gap: 24px !important;
          padding: 28px var(--altum-mobile-shell) !important;
        }

        .footer-bottom {
          padding-inline: var(--altum-mobile-shell) !important;
          gap: 8px !important;
          font-size: .75rem !important;
        }

        .floating-contact {
          right: 14px !important;
          bottom: 14px !important;
          min-height: 48px !important;
          padding-inline: 14px !important;
          font-size: .84rem !important;
        }
      }
    `}</style>
  );
}
