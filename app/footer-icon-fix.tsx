'use client';

export default function FooterIconFix() {
  return (
    <style>{`
      .footer-brand > img {
        filter: brightness(0) invert(1) !important;
      }
    `}</style>
  );
}
