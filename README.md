# OWASP Top 10:2025 — Presentación web

Presentación interactiva en español sobre las diez categorías de riesgo de **OWASP Top 10:2025**. Incluye fondo de video, temas claro/oscuro, navegación por teclado y gestos táctiles, índice lateral y diseño adaptable.

## Funciones

- 10 diapositivas: portada, contexto, mapa de riesgos, cinco bloques de riesgos, ciclo de vida y cierre.
- Desplazamiento vertical dentro de cada diapositiva cuando el contenido supera la altura disponible.
- Navegación horizontal por gestos táctiles, sin interferir con el scroll vertical.
- Teclas `←` y `→` o `PageUp` y `PageDown` para cambiar de diapositiva.
- Teclas `Home` y `End` para ir al inicio y al final.
- Tecla `I` para abrir o cerrar el índice.
- Selector de tema claro/oscuro con preferencia guardada en el navegador.
- Modo de pantalla completa.
- Diseño responsive para escritorio, tablet y móvil.

## Estructura

```
.
├── index.html
├── VideoFondoHacker.mp4
├── README.md
├── css/
│   └── rediseño.css
└── js/
    ├── app.js
    └── slides-data.js
```

## Ejecutar localmente

No requiere instalación ni proceso de compilación. Clona el repositorio y abre `index.html` en un navegador moderno. Para evitar restricciones del navegador con recursos locales, también puedes servir la carpeta con un servidor estático, por ejemplo:

```bash
python -m http.server 8000
```

Luego visita `http://localhost:8000`.

Google Fonts y Phosphor Icons se cargan desde sus respectivos CDN. El video de fondo debe permanecer en la raíz con el nombre `VideoFondoHacker.mp4`.

## Contenido y contexto

La diapositiva de contexto presenta el origen del proyecto OWASP (2001), la constitución de la Fundación OWASP como entidad sin ánimo de lucro (2004), su misión global y el papel de OWASP Top 10 como documento de concienciación reconocido internacionalmente.

La metodología de OWASP Top 10:2025 combina datos aportados por la industria sobre aplicaciones evaluadas con una encuesta a profesionales de seguridad y desarrollo. Por eso, la lista es una referencia para reconocer y priorizar riesgos, no una certificación ni una garantía de que una aplicación sea segura.

La sección del ciclo de vida destaca que la seguridad debe incorporarse desde los requisitos y la arquitectura —mediante modelado de amenazas, límites de confianza y controles— y mantenerse durante desarrollo, pruebas y operación.

## Fuentes oficiales

- [OWASP Top 10:2025 — Español](https://top10.owasp.org/2025/es/)
- [Introducción y metodología de OWASP Top 10:2025](https://top10.owasp.org/2025/es/0x00_2025-Introduction/)
- [Acerca de OWASP — historia, misión y recursos](https://top10.owasp.org/2025/es/0x01_2025-About_OWASP/)
- [OWASP Foundation — About](https://owasp.org/about)
- [OWASP Top 10 — proyecto oficial](https://owasp.org/www-project-top-ten/)
