# Desktop Assets Guide

Esta guia explica donde cambiar fotos, logos e imagenes del portfolio en el equipo local.

Raiz local del proyecto:

`C:\Users\ismrj\Documents\MyPortfolio`

## Regla general

Todas las imagenes visibles del sitio salen de:

`public/assets/`

El helper `src/utils.js` convierte cada ruta relativa en:

```js
/assets/<ruta>
```

Eso significa que si mantienes el mismo nombre de archivo y reemplazas la imagen dentro de `public/assets`, no necesitas tocar el codigo.

## Foto principal del sitio

Archivo actual:

`public/assets/hero/me_hero.jpg`

Se usa en:

- `Hero`
- `Contact`

Archivos relacionados:

- `src/components/Hero/Hero.jsx`
- `src/components/Contact/Contact.jsx`

## Imagen de la seccion About

Archivo actual:

`public/assets/about/yo_programando.png`

Se usa en:

- `About`

Archivo relacionado:

- `src/components/About/About.jsx`

## Logos e iconos del navbar y contacto

Navbar:

- `public/assets/nav/menuIcon.png`
- `public/assets/nav/closeIcon.png`

Contacto:

- `public/assets/contact/emailIcon.png`
- `public/assets/contact/linkedinIcon.png`
- `public/assets/contact/githubIcon.png`

Social links del Hero:

- `public/assets/skills/gmail.png`
- `public/assets/skills/github.png`
- `public/assets/skills/linkedin.png`

## Logos de experiencia laboral

Carpeta:

`public/assets/history/`

Ejemplos actuales:

- `viamatica_logo.jpg`
- `bpoandinaec_logo.jpg`
- `armpsa.avif`
- `trescloud.jpg`
- `holcim.jpg`
- `fundacionmqvencedores.jpg`
- `javafx.png`
- `arduino.webp`

El mapeo de cada logo se define en:

- `src/data/siteContent.js`

Ruta a revisar:

- `experience.history[].imageSrc`

## Imagenes de proyectos

Carpeta:

`public/assets/projects/`

Archivos actuales relevantes:

- `flujo_n8n.png`
- `flujo_n8n_RAG.png`
- `fundacionmqvencedores.png`
- `sistemadeventasjavafx.png`
- `valerytruck.jpeg`
- `gestordeusuarios-placeholder.png`
- `internetcompany-placeholder.png`

El mapeo de cada imagen se define en:

- `src/data/siteContent.js`

Ruta a revisar:

- `projects.items[].imageSrc`

## Placeholders creados para reemplazar

### GestorDeUsuarios

Placeholder actual:

`public/assets/projects/gestordeusuarios-placeholder.png`

Opciones:

1. Reemplazar el archivo manteniendo el mismo nombre.
2. Guardar otra imagen y cambiar `imageSrc` en `src/data/siteContent.js`.

### InternetCompany

Placeholder actual:

`public/assets/projects/internetcompany-placeholder.png`

Opciones:

1. Reemplazar el archivo manteniendo el mismo nombre.
2. Guardar otra imagen y cambiar `imageSrc` en `src/data/siteContent.js`.

## Donde editar si cambias nombres de archivo

Si cambias el nombre de una imagen, no basta con reemplazar el asset. Tambien debes actualizar la referencia:

- `src/data/siteContent.js` para proyectos, experiencia y textos con iconos
- `src/components/Hero/Hero.jsx` para la foto principal
- `src/components/About/About.jsx` para la imagen de About
- `src/components/Contact/Contact.jsx` para la foto del footer

## Recomendaciones practicas

- Usa nombres descriptivos y consistentes.
- Mantiene formatos livianos cuando sea posible: `png`, `jpg`, `webp`.
- Si una captura de proyecto pesa mucho, optimizala antes de subirla.
- Despues de cambiar imagenes, ejecuta `npm run build` para confirmar que las rutas siguen validas.

## Checklist rapido

1. Copia la imagen nueva dentro de `public/assets/<seccion>/`
2. Si mantienes el nombre, no hace falta tocar codigo
3. Si cambias el nombre, actualiza la referencia en el archivo correspondiente
4. Ejecuta `npm run lint`
5. Ejecuta `npm run build`
