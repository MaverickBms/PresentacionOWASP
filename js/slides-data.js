"use strict";

const SLIDES = [
  {
    id: "inicio",
    section: "BRIEFING DE SEGURIDAD",
    type: "cover",
    kicker: "OWASP TOP 10 · EDICIÓN 2025",
    title: "La superficie <em>de ataque</em>",
    subtitle: "Diez riesgos que todo equipo debe reconocer antes de poner una aplicación web en producción.",
    tags: ["APPSEC / 2025", "10 RIESGOS", "SECURE BY DESIGN"],
    note: "BRIEFING · SEGURIDAD DE APLICACIONES WEB"
  },
  {
    id: "owasp",
    section: "CONTEXTO",
    type: "overview",
    kicker: "01 / EL MARCO",
    title: "OWASP: conocimiento abierto.<br><em>Seguridad aplicable.</em>",
    lead: "OWASP es una comunidad global que impulsa la seguridad del software mediante proyectos, investigación, herramientas y formación abierta.",
    cards: [
      ["01", "COMUNIDAD", "Colaboración global, neutral y abierta.", "ph ph-users-three", "cyan"],
      ["02", "TOP 10", "Documento de concienciación sobre riesgos web prioritarios.", "ph ph-shield-warning", "amber"],
      ["03", "PROPÓSITO", "Un lenguaje común para orientar decisiones de seguridad.", "ph ph-target", "violet"]
    ],
    note: "El Top 10 es una guía de concienciación: no sustituye un análisis de riesgos ni garantiza que una aplicación sea segura."
  },
  {
    id: "mapa",
    section: "MAPA DE AMENAZAS",
    type: "risk-overview",
    kicker: "02 / EL MAPA",
    title: "Diez categorías.<br><em>Una superficie de ataque.</em>",
    lead: "La edición 2025 organiza riesgos que pueden afectar la confidencialidad, integridad y disponibilidad de una aplicación.",
    risks: [
      ["A01", "Pérdida de control de acceso"],
      ["A02", "Configuración de seguridad incorrecta"],
      ["A03", "Cadena de suministro de software"],
      ["A04", "Fallas criptográficas"],
      ["A05", "Inyección"],
      ["A06", "Diseño inseguro"],
      ["A07", "Fallas de autenticación"],
      ["A08", "Integridad del software o los datos"],
      ["A09", "Registro, alerta y monitoreo"],
      ["A10", "Condiciones excepcionales"]
    ],
    note: "Los códigos y nombres corresponden a OWASP Top 10:2025 en español."
  },
  {
    id: "riesgos-1",
    section: "RIESGOS · A01 / A02",
    type: "pair-risk",
    kicker: "03 / ATAQUE Y DEFENSA · BLOQUE 01",
    title: "A01 + A02",
    lead: "Reconoce el patrón, entiende el impacto y aplica el control en el punto correcto.",
    risks: [
      {
        code: "A01",
        english: "BROKEN ACCESS CONTROL",
        name: "Pérdida de control de acceso",
        summary: "El sistema no comprueba correctamente qué usuario puede consultar o modificar cada recurso.",
        example: "Un usuario cambia /pedido/104 por /pedido/105 y obtiene información de otra cuenta.",
        impact: "Exposición de datos, cambios no autorizados o escalamiento de privilegios.",
        prevention: "Autorizar en el servidor cada acción y cada recurso. Aplicar mínimo privilegio y denegar por defecto.",
        signal: "La interfaz oculta una opción, pero el endpoint acepta la petición directa."
      },
      {
        code: "A02",
        english: "SECURITY MISCONFIGURATION",
        name: "Configuración de seguridad incorrecta",
        summary: "Servicios, frameworks o entornos se despliegan con ajustes inseguros o innecesarios.",
        example: "Producción muestra trazas de error, conserva credenciales de prueba o expone un panel administrativo.",
        impact: "Filtración de información técnica y exposición de servicios.",
        prevention: "Configuraciones seguras repetibles, eliminación de valores por defecto y separación de entornos.",
        signal: "Depuración activa, directorios listables o consolas administrativas públicas."
      }
    ]
  },
  {
    id: "riesgos-2",
    section: "RIESGOS · A03 / A04",
    type: "pair-risk",
    kicker: "03 / ATAQUE Y DEFENSA · BLOQUE 02",
    title: "A03 + A04",
    lead: "Reconoce el patrón, entiende el impacto y aplica el control en el punto correcto.",
    risks: [
      {
        code: "A03",
        english: "SOFTWARE SUPPLY CHAIN FAILURES",
        name: "Fallas en la cadena de suministro",
        summary: "El riesgo aparece en dependencias, herramientas, compilación y distribución del software.",
        example: "Una biblioteca comprometida o vulnerable entra al proyecto y llega a producción sin revisión.",
        impact: "Código malicioso, vulnerabilidades heredadas o actualizaciones manipuladas.",
        prevention: "Inventariar dependencias, fijar versiones, verificar procedencia y proteger el pipeline CI/CD.",
        signal: "Se instalan paquetes sin conocer su origen, mantenimiento o impacto."
      },
      {
        code: "A04",
        english: "CRYPTOGRAPHIC FAILURES",
        name: "Fallas criptográficas",
        summary: "Los datos sensibles no se protegen correctamente al almacenarse o transmitirse.",
        example: "Contraseñas guardadas en texto plano o información sensible enviada sin cifrado adecuado.",
        impact: "Robo de credenciales y pérdida de confidencialidad.",
        prevention: "TLS, algoritmos y bibliotecas confiables, gestión de claves y hash de contraseñas especializado.",
        signal: "Secretos legibles en bases de datos, repositorios, logs o tráfico."
      }
    ]
  },
  {
    id: "riesgos-3",
    section: "RIESGOS · A05 / A06",
    type: "pair-risk",
    kicker: "03 / ATAQUE Y DEFENSA · BLOQUE 03",
    title: "A05 + A06",
    lead: "Reconoce el patrón, entiende el impacto y aplica el control en el punto correcto.",
    risks: [
      {
        code: "A05",
        english: "INJECTION",
        name: "Inyección",
        summary: "Una entrada no confiable termina interpretándose como parte de una consulta o instrucción.",
        example: "La búsqueda concatena texto del usuario en SQL y altera la consulta original.",
        impact: "Lectura o modificación de datos, ejecución de comandos o manipulación de la aplicación.",
        prevention: "Consultas parametrizadas, validación contextual y APIs seguras. No concatenar entradas en instrucciones.",
        signal: "Los datos del usuario terminan formando parte de SQL, comandos o consultas interpretadas."
      },
      {
        code: "A06",
        english: "INSECURE DESIGN",
        name: "Diseño inseguro",
        summary: "La arquitectura o la lógica de negocio no contempla amenazas ni controles desde el inicio.",
        example: "La recuperación de cuenta permite intentos ilimitados y no verifica suficientemente la identidad.",
        impact: "Debilidades estructurales que no se resuelven únicamente con parches.",
        prevention: "Modelado de amenazas, requisitos de seguridad, límites de negocio y análisis de abuso.",
        signal: "Se implementan funciones sin definir qué debe protegerse ni qué abuso debe impedirse."
      }
    ]
  },
  {
    id: "riesgos-4",
    section: "RIESGOS · A07 / A08",
    type: "pair-risk",
    kicker: "03 / ATAQUE Y DEFENSA · BLOQUE 04",
    title: "A07 + A08",
    lead: "Reconoce el patrón, entiende el impacto y aplica el control en el punto correcto.",
    risks: [
      {
        code: "A07",
        english: "AUTHENTICATION FAILURES",
        name: "Fallas de autenticación",
        summary: "Los mecanismos que verifican la identidad son débiles o están mal implementados.",
        example: "No hay límites de intentos y las sesiones siguen activas después de un cambio crítico.",
        impact: "Suplantación de identidad y acceso a cuentas ajenas.",
        prevention: "MFA cuando corresponda, protección contra fuerza bruta, sesiones seguras y recuperación robusta.",
        signal: "Sin límites de intentos, expiración adecuada o invalidación de sesiones."
      },
      {
        code: "A08",
        english: "SOFTWARE OR DATA INTEGRITY FAILURES",
        name: "Fallas de integridad del software o los datos",
        summary: "No se comprueba que código, actualizaciones o datos críticos sean auténticos y no hayan sido alterados.",
        example: "La aplicación confía en una actualización o procesa datos manipulables sin verificar su integridad.",
        impact: "Ejecución de código alterado, manipulación de procesos o corrupción de información.",
        prevention: "Verificar firmas y procedencia, proteger pipelines y validar datos entre límites de confianza.",
        signal: "Se aceptan artefactos o datos críticos sin comprobar su origen."
      }
    ]
  },
  {
    id: "riesgos-5",
    section: "RIESGOS · A09 / A10",
    type: "pair-risk",
    kicker: "03 / ATAQUE Y DEFENSA · BLOQUE 05",
    title: "A09 + A10",
    lead: "Reconoce el patrón, entiende el impacto y aplica el control en el punto correcto.",
    risks: [
      {
        code: "A09",
        english: "SECURITY LOGGING AND ALERTING FAILURES",
        name: "Fallas de registro, alerta y monitoreo",
        summary: "Los eventos relevantes no se registran, supervisan o convierten en alertas accionables.",
        example: "Ocurren múltiples accesos sospechosos, pero nadie recibe una alerta ni puede reconstruir el evento.",
        impact: "Detección tardía, respuesta lenta y dificultad para investigar incidentes.",
        prevention: "Registrar eventos relevantes, centralizar y proteger logs, definir alertas y procedimientos.",
        signal: "Hay registros incompletos o nadie revisa los eventos críticos."
      },
      {
        code: "A10",
        english: "MISHANDLING OF EXCEPTIONAL CONDITIONS",
        name: "Manejo inadecuado de condiciones excepcionales",
        summary: "El sistema responde de forma insegura ante errores, fallos parciales o situaciones inesperadas.",
        example: "Un pago falla a mitad del proceso, pero el pedido queda marcado como pagado.",
        impact: "Estados inconsistentes, filtración de detalles internos o controles que dejan de proteger.",
        prevention: "Manejo seguro de errores, fallar de forma cerrada, transacciones y pruebas de escenarios límite.",
        signal: "Ante una excepción, el sistema continúa sin validar el estado o revela detalles internos."
      }
    ]
  },
  {
    id: "ciclo",
    section: "INTEGRACIÓN EN EL CICLO DE VIDA",
    type: "lifecycle",
    kicker: "04 / DEVSECOPS",
    title: "La defensa empieza<br><em>antes del despliegue.</em>",
    lead: "Los controles funcionan mejor cuando se diseñan y verifican durante todo el ciclo de vida, no cuando el producto ya está en producción.",
    items: [
      ["01", "Requisitos", "Identificar activos, datos sensibles y obligaciones."],
      ["02", "Arquitectura", "Modelar amenazas y definir límites de confianza."],
      ["03", "Desarrollo", "Aplicar patrones seguros y revisar cambios."],
      ["04", "Pruebas", "Analizar código, dependencias y comportamiento."],
      ["05", "Operación", "Monitorear, responder y corregir incidentes."]
    ],
    note: "Integra seguridad en cada fase y automatiza los controles repetibles."
  },
  {
    id: "defensa",
    section: "DEL RIESGO A LA PRÁCTICA",
    type: "closing",
    kicker: "04 / DEFENSA EN PROFUNDIDAD",
    title: "La seguridad se integra.<br><em>No se improvisa.</em>",
    lead: "Usa OWASP Top 10 como punto de partida para convertir riesgos en decisiones verificables durante todo el ciclo de desarrollo.",
    items: [
      ["DISEÑAR", "Identificar activos, amenazas y límites de confianza."],
      ["CONSTRUIR", "Aplicar controles, revisar código y proteger dependencias."],
      ["VERIFICAR", "Automatizar pruebas, validar permisos y comprobar integridad."],
      ["OPERAR", "Monitorear eventos, responder y corregir con prioridad."]
    ],
    sources: [
      ["OWASP Top 10:2025 — Español", "https://top10.owasp.org/2025/es/"],
      ["Introducción y metodología 2025", "https://top10.owasp.org/2025/es/0x00_2025-Introduction/"],
      ["OWASP Foundation — About", "https://owasp.org/about"]
    ],
    note: "IDEA CLAVE: no preguntes si cumples una lista; pregunta qué riesgo existe en cada flujo y qué control lo reduce."
  }
];
