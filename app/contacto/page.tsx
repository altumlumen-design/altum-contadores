import type { Metadata } from 'next';
import ContactPage from '../contact-page';
export const dynamic = 'force-static';
export const metadata: Metadata = { title: 'Contacto | Altum Contadores y Asociados', description: 'Prepara el contexto de tu consulta empresarial o contable.', alternates: { canonical: 'https://altumlumen-design.github.io/altum-contadores/contacto/' } };
export default function Page() { return <ContactPage />; }
