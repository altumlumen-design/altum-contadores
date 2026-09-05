import type { Metadata } from 'next';
import TeamPage from '../team-page';
export const dynamic = 'force-static';
export const metadata: Metadata = { title: 'Equipo | Altum Contadores y Asociados', description: 'Especialidades coordinadas para una lectura integral de tu empresa.' };
export default function Page() { return <TeamPage />; }
