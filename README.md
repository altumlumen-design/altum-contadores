# Altum Contadores y Asociados

Sitio institucional multipágina de Altum, diseñado como una experiencia editorial y preparado para GitHub Pages.

## Contenido del sitio

- portada institucional con explorador interactivo de servicios;
- página general de servicios y seis páginas especializadas;
- método de trabajo y primer ciclo de acompañamiento;
- equipo con un perfil propuesto y posiciones editables;
- historia, propósito y principios de la firma;
- guías prácticas y radar interactivo de control empresarial;
- planificador local de consultas con opciones para copiar y compartir.

## Publicación en GitHub Pages

1. Crea un repositorio nuevo en GitHub.
2. Sube el contenido completo de esta carpeta a la rama `main`.
3. En **Settings → Pages → Build and deployment**, selecciona **GitHub Actions**.
4. La publicación se ejecutará automáticamente. La dirección final aparecerá en la pestaña **Actions**.

La configuración detecta automáticamente el nombre del repositorio, por lo que funciona tanto en un dominio `usuario.github.io` como dentro de `usuario.github.io/nombre-del-repositorio/`.

## Antes de la publicación definitiva

La versión entregada no inventa información comercial. Para conectar la consulta directamente con la firma conviene incorporar:

- número oficial de WhatsApp;
- correo de atención;
- dirección y horario, si se publicarán;
- nombres, cargos y fotografías reales del equipo;
- métricas, certificaciones, clientes o testimonios que puedan verificarse.

Mientras esos datos se completan, la consulta funciona de forma privada en el dispositivo del visitante: prepara un resumen que se puede compartir o copiar sin almacenarlo.

## Desarrollo local

Requiere Node.js 22 o superior y pnpm.

```bash
pnpm install
pnpm dev
```

Para generar la versión estática:

```bash
pnpm build
```

El resultado publicable se genera en `dist/client`.
