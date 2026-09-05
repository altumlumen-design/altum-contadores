import type { Metadata } from 'next';
import MethodPage from '../method-page';
export const dynamic = 'force-static';
export const metadata: Metadata = { title: 'Método Altum | Altum Contadores y Asociados', description: 'Una ruta clara para diagnosticar, ordenar e interpretar la gestión de tu empresa.' };
export default function Page() { return <MethodPage />; }
