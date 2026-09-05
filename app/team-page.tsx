'use client';

import { ArrowUpRight, Layers3, UserRound } from 'lucide-react';
import SiteChrome from './site-chrome';
import { teamProfiles } from './site-content';
import { sitePath } from './site-paths';

export default function TeamPage() {
  return <SiteChrome active="Equipo">
    <section className="inner-hero"><div className="inner-hero-grid" aria-hidden="true" /><div className="inner-hero-copy inner-shell"><div className="page-kicker"><span>03</span>Equipo</div><h1>Especialidades coordinadas.<br /><span>Una sola lectura.</span></h1><p>Una estructura multidisciplinaria para conectar contabilidad, impuestos, personas, finanzas y crecimiento empresarial.</p><a className="inner-primary-link" href="#perfiles">Conocer los perfiles <ArrowUpRight aria-hidden="true" /></a></div><div className="inner-hero-aside" aria-hidden="true"><UserRound /><span>CRITERIO COMPARTIDO</span></div></section>
    <section className="profiles-section inner-shell" id="perfiles"><div className="page-section-heading"><div className="section-kicker"><span>01</span><p>Perfiles</p></div><h2>Las personas detrás de cada perspectiva.</h2><p>La estructura queda lista para reemplazar las posiciones editables por los datos y fotografías definitivas del equipo.</p></div><div className="profiles-grid">{teamProfiles.map((profile, index) => <article className={index === 0 ? 'profile-card featured' : 'profile-card'} key={`${profile.role}-${index}`}><div className="profile-portrait"><UserRound aria-hidden="true" /><span>{profile.initials}</span></div><div className="profile-status">{profile.status}</div><h3>{profile.name}</h3><p className="profile-role">{profile.role}</p><p className="profile-description">{profile.description}</p><ul>{profile.focus.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></section>
    <section className="team-model"><div className="inner-shell team-model-grid"><div><Layers3 aria-hidden="true" /><span>Modelo de colaboración</span><h2>El caso define las especialidades. Altum mantiene la dirección.</h2></div><div><p>Un responsable centraliza el contexto y coordina los frentes que intervienen. Así evitamos respuestas aisladas y conservamos una lectura común de la empresa.</p><div className="team-flow"><span>Contexto</span><span>Especialidades</span><span>Decisión</span></div></div></div></section>
    <section className="inner-cta inner-shell"><div><span>El equipo correcto para el momento correcto</span><h2>Cuéntanos qué necesita resolver tu empresa.</h2></div><a href={sitePath('contacto/')}>Preparar mi consulta <ArrowUpRight aria-hidden="true" /></a></section>
  </SiteChrome>;
}
