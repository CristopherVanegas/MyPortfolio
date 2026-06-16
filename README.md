# MyPortfolio

Portfolio personal construido con React + Vite. El sitio presenta la informacion profesional de Cristopher Vanegas en dos idiomas (`es` y `en`) e incluye secciones de presentacion, perfil, experiencia, proyectos y contacto.

## Stack

- React 18
- Vite 6
- CSS Modules
- Swiper
- Fontsource (`Outfit` y `Roboto`)
- ESLint

## Scripts

- `npm run dev`: levanta el entorno local con Vite.
- `npm run build`: genera el bundle de produccion en `dist/`.
- `npm run preview`: sirve el build localmente.
- `npm run lint`: valida el codigo con ESLint.

## Arquitectura general

La app se monta desde `src/main.jsx` y usa `src/App.jsx` como composicion principal. `App` controla el idioma actual con `useState`, lo persiste en `localStorage` bajo la clave `site-language` y consume el contenido visible desde `src/data/siteContent.js`.

Flujo principal:

1. `App.jsx` obtiene el idioma activo.
2. `getSiteContent(language)` devuelve todos los textos del sitio.
3. Cada seccion recibe su bloque de contenido como prop.
4. Las imagenes se resuelven con `getImageUrl()` desde `public/assets`.

## Secciones del sitio

- `Navbar`: navegacion principal, menu responsive y switch de idioma ES/EN.
- `Hero`: presentacion inicial, accesos sociales y foto principal.
- `About`: resumen profesional con items de fortalezas.
- `Experience`: stack tecnologico segmentado por categorias y experiencia laboral.
- `Projects`: slider de proyectos con tarjeta, modal de imagen y modal de detalle.
- `Contact`: footer con CTA, correo y enlaces profesionales.

## Estructura del proyecto

```text
MyPortfolio/
├─ public/
│  └─ assets/
│     ├─ about/
│     ├─ contact/
│     ├─ hero/
│     ├─ history/
│     ├─ nav/
│     ├─ projects/
│     └─ skills/
├─ src/
│  ├─ components/
│  │  ├─ About/
│  │  ├─ Contact/
│  │  ├─ Experience/
│  │  ├─ Hero/
│  │  ├─ Projects/
│  │  │  └─ ProjectCard/
│  │  └─ navbar/
│  ├─ data/
│  │  ├─ siteContent.js
│  │  └─ skills.json
│  ├─ App.jsx
│  ├─ App.module.css
│  ├─ index.css
│  ├─ main.jsx
│  ├─ utils.js
│  └─ vars.css
└─ README.md
```

## Fuente de contenido

### `src/data/siteContent.js`

Es la fuente central de:

- textos visibles del navbar
- copy de `Hero`, `About`, `Experience`, `Projects` y `Contact`
- estructura bilingue `es` y `en`
- items de proyectos y experiencia

Si necesitas cambiar titulos, descripciones, proyectos o textos traducidos, este es el archivo principal.

### `src/data/skills.json`

Define el catalogo base de tecnologias que se muestra en `Experience`. El agrupado visual por categoria se hace en `src/components/Experience/Experience.jsx`.

## Infraestructura de frontend

### Estilos

- Se usan CSS Modules por componente.
- `src/vars.css` centraliza colores y fuente base.
- `src/App.module.css` controla el contenedor general y el comportamiento global de overflow.

### Navegacion y responsive

- El navbar es sticky.
- Hay menu hamburguesa para mobile.
- El switch de idioma se renderiza al final del navbar.
- En mobile, la etiqueta `Idioma` se oculta y solo queda el control ES/EN.

### Slider y modales

- `Experience` usa `Swiper` para la subseccion `Trabajos`.
- En mobile, cada trabajo abre un modal con foco administrado, `Escape`, `aria-controls`, `aria-expanded` y restore de foco al trigger.
- `Projects` usa `Swiper` con paginacion y navegacion.
- `ProjectCard` tiene modal para ampliar imagen y modal para ver mas detalle.

## Convenciones del repositorio

- Componentes en PascalCase.
- Estilos junto al componente como `*.module.css`.
- Contenido visible centralizado en `siteContent.js`.
- Assets servidos desde `public/assets`.
- Para cambios de una seccion, actualizar componente, CSS y contenido juntos.

## Mantenimiento por seccion

### Cambiar textos

- Archivo principal: `src/data/siteContent.js`

### Cambiar tecnologias del stack

- Catalogo base: `src/data/skills.json`
- Agrupado y render: `src/components/Experience/Experience.jsx`

### Cambiar proyectos

- Archivo principal: `src/data/siteContent.js`
- Render de slider: `src/components/Projects/Projects.jsx`
- Render de tarjeta y modales: `src/components/Projects/ProjectCard/ProjectCard.jsx`

### Cambiar experiencia laboral

- Contenido: `src/data/siteContent.js`
- Layout e interaccion: `src/components/Experience/Experience.jsx`
- Estilos: `src/components/Experience/Experience.module.css`

## Imagenes y fotos

La guia detallada esta en:

- `docs/DESKTOP_ASSETS_GUIDE.md`

Resumen rapido:

- Foto principal: `public/assets/hero/me_hero.jpg`
- Foto de `About`: `public/assets/about/yo_programando.png`
- Logos de experiencia: `public/assets/history/*`
- Imagenes de proyectos: `public/assets/projects/*`
- Iconos de contacto: `public/assets/contact/*`

## Proyectos destacados actuales

La seccion `Projects` ahora incluye al inicio:

- `GestorDeUsuarios`
- `InternetCompany`

Ambos usan placeholders temporales:

- `public/assets/projects/gestordeusuarios-placeholder.png`
- `public/assets/projects/internetcompany-placeholder.png`

Puedes reemplazarlos sin tocar codigo si mantienes el mismo nombre de archivo.

## Accesibilidad implementada

- Modales de experiencia con `role="dialog"` y `aria-modal`
- `aria-controls` y `aria-expanded` en triggers mobile de experiencia
- foco inicial en boton de cierre
- foco atrapado dentro del modal mientras esta abierto
- restauracion de foco al trigger al cerrar

## Validacion recomendada

Antes de cerrar cambios:

1. Ejecutar `npm run lint`
2. Ejecutar `npm run build`
3. Revisar visualmente mobile y desktop con `npm run dev`

## Notas

- Existen archivos legacy como `src/data/projects.json` y `src/data/history.json`, pero el sitio actual consume `src/data/siteContent.js`.
- `utils.js` resuelve rutas de assets con el patron `/assets/<path>`.
