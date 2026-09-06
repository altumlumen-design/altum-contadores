import type { Metadata } from 'next';
import AboutPage from '../about-page';
export const dynamic = 'force-static';
export const metadata: Metadata = { title: 'Nosotros | Altum Contadores y Asociados', description: 'Rigor técnico y perspectiva empresarial para crecer con orden.' };
export default function Page() { return <AboutPage />; }
