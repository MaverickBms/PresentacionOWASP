# OWASP Top 10:2025 — Presentación Rediseñada "Spectra Pro"

Presentación web interactiva en español sobre los 10 riesgos de OWASP Top 10:2025, con fondo de video visible, temas claro/oscuro y texto en negrita para mejor legibilidad.

## 🎨 Mejoras clave

| Aspecto | Antes | Después |
|---------|-------|---------|
| Fondo de video | Overlay oscuro que ocultaba el video | Overlay sutil que deja ver el video claramente |
| Contenido | Bloque grande que encerraba todo y tapaba el fondo | Sin contenedor que tape el video, tarjetas glass translúcidas |
| Barra de progreso | Abajo, en controles | Arriba, debajo del panel superior (OWASP + menú + pantalla completa) |
| Tema | Solo oscuro | Tema claro y oscuro (con toggle y memoria en localStorage) |
| Controles de navegación | Botones Anterior/Siguiente, flechas, hints de teclado | Eliminados por diseño (navegación silenciosa por teclado y touch) |
| Tipografía | Inter + JetBrains Mono | Montserrat, Space Grotesk, Poppins, Syne, Inter, Plus Jakarta Sans, JetBrains Mono, Fira Code |
| Tamaño de texto | Tamaños estándar | Tamaños aumentados en todos los elementos |
| Texto | Podía ocultarse con el fondo | Contraste reforzado, text-shadow en ambos temas |

## 🌓 Temas claro y oscuro

- Hay un botón de toggle en la barra superior (icono sol/luna) para cambiar entre tema claro y oscuro.
- La preferencia se guarda en `localStorage` y se recuerda al recargar.
- También respeta la preferencia del sistema (`prefers-color-scheme`).

## 📱 Responsive

La presentación se adapta a cualquier pantalla:

- **Desktop (≥1024px)**: Diseño completo con dos columnas en secciones de riesgos
- **Tablet (640px–1024px)**: Tarjetas de riesgos en una columna, mapa en 3 columnas
- **Móvil (<640px)**: Todo en una sola columna, texto con tamaños legibles, navegación lateral de ancho completo

## 📁 Estructura

```
owasp_rediseño_2025/
├── index.html
├── VideoFondoHacker.mp4          ← fondo de video (visible, no oculto)
├── README.md
├── css/
│   └── rediseño.css              ← estilos glassmorphism + temas claro/oscuro + responsive
└── js/
    ├── app.js                    ← motor de renderizado, navegación y toggle de tema
    └── slides-data.js            ← contenido de las 10 diapositivas
```

## ▶️ Abrir

1. Abre `owasp_rediseño_2025/index.html` en un navegador moderno.
2. Navega con `←` y `→`, usa `I` para abrir/cerrar el panel lateral, `Home` y `End` para ir al principio/final.
3. Cambia de tema con el botón de sol/luna en la barra superior.
4. Usa el botón de pantalla completa para presentar.

No requiere instalación ni servidor. Google Fonts y Phosphor Icons se cargan desde CDN.

## 📑 Las 10 diapositivas

1. **Portada** — La superficie de ataque
2. **Contexto** — OWASP: marco y propósito
3. **Mapa de amenazas** — Las 10 categorías A01–A10
4. **Bloque 01** — A01 + A02 (control de acceso + configuración)
5. **Bloque 02** — A03 + A04 (cadena de suministro + criptografía)
6. **Bloque 03** — A05 + A06 (inyección + diseño inseguro)
7. **Bloque 04** — A07 + A08 (autenticación + integridad)
8. **Bloque 05** — A09 + A10 (monitoreo + condiciones excepcionales)
9. **Ciclo de vida** — DevSecOps: 5 fases
10. **Cierre** — Defensa en profundidad y fuentes

## 🎥 Fondo de video

El archivo `VideoFondoHacker.mp4` se reproduce como fondo a pantalla completa (`object-fit: cover`, silenciado, bucle infinito). El overlay es **sutil y semi-transparente** para que el video se aprecie sin que interfiera con la legibilidad del texto.

## 🔤 Tipografías utilizadas

### Títulos impactantes
- **Montserrat** (ExtraBold / Black) — Títulos principales (h1)
- **Space Grotesk** (Bold) — Subtítulos (h2)
- **Poppins** (Bold / ExtraBold) — Títulos de sección (h3)
- **Syne** (ExtraBold) — Títulos alternativos

### Textos y puntos clave
- **Inter** (SemiBold / Bold) — Párrafos y cuerpo de texto
- **Plus Jakarta Sans** (Bold) — Etiquetas, kickers, badges

### Detalle y código
- **JetBrains Mono** — Códigos de riesgo, elementos mono
- **Fira Code** — Números y elementos de detalle

## 📖 Fuentes principales (OWASP)

- https://top10.owasp.org/2025/es/
- https://top10.owasp.org/2025/es/0x00_2025-Introduction/
- https://owasp.org/about

## Cómo abrir

1. Abre `index.html` con un navegador moderno (Chrome, Firefox o Edge).
2. Usa las flechas izquierda/derecha para cambiar de diapositiva.
3. Pulsa `I` para abrir el índice y el botón de pantalla completa para presentar.