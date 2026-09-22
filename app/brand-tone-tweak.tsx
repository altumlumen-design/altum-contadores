'use client';

export default function BrandToneTweak() {
  return (
    <style>{`
      :root {
        --primary: #075a88;
        --cobalt: #075a88;
        --electric: #0a72a8;
        --accent: #82c7ea;
        --ring: #0a72a8;
        --ice: #e1f0f8;
      }

      .hero {
        background:
          radial-gradient(circle at 72% 28%, rgb(10 114 168 / 22%), transparent 29%),
          linear-gradient(122deg, #071a39 0%, #082a4f 58%, #0a4774 100%);
      }

      .hero h1 span {
        color: #82c9ed;
      }

      .eyebrow {
        color: #b7dced;
      }

      .eyebrow-line {
        background: #72badf;
      }

      .primary-cta:hover {
        background: #e2f1f9;
      }

      .detail-hero {
        background: linear-gradient(125deg, #04142d 0%, #083052 58%, #08628d 100%);
      }

      .ideal-section {
        background: linear-gradient(105deg, #06162f, #0a4774);
      }
    `}</style>
  );
}
