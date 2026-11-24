# GRILL HOUSE — Parrilla & Fuego

Catálogo web independiente de restaurante/parrilla, con diseño responsive y enfoque PWA.

## Estructura
- `index.html`: estructura y secciones de la web.
- `css/styles.css`: identidad visual, responsive, metodología BEM, modo claro/oscuro.
- `js/app.js`: filtros, búsqueda, carrito, formulario de pedido, reservas, modal de 30 segundos, validaciones, bitácora y eventos delegados.
- `data/catalog.json`: carta de ejemplo editable.
- `manifest.json`, `sw.js`: instalación PWA y caché offline de recursos locales.
- `assets/icon.svg`: icono de la aplicación.

## Probar localmente
1. Extraer el ZIP.
2. Abrir una terminal en esta carpeta.
3. Ejecutar `python -m http.server 8000`.
4. Abrir `http://localhost:8000`.
5. Para probar el Service Worker, usar localhost o HTTPS. La primera visita requiere conexión para descargar recursos externos e imágenes.

## Personalización para un cliente real
- Cambiar platos, descripciones, precios e imágenes en `data/catalog.json`.
- Reemplazar correo, ubicación, horario y datos de contacto de demostración.
- Sustituir las imágenes de Unsplash por fotografías propias o autorizadas del restaurante.
- Confirmar precios, disponibilidad, gramajes y alérgenos con el negocio.
- Las solicitudes se guardan en `localStorage` del dispositivo; no llegan al restaurante ni se sincronizan entre usuarios. Para producción, conectar una API/backend y un panel administrativo.
- El formulario no procesa pagos ni confirma automáticamente una reserva.

## Criterios técnicos incorporados de las guías
- Separación de HTML, CSS y JavaScript.
- Diseño responsive con `min-height: 100dvh`, áreas táctiles de al menos 44px, control de textos largos con `min-width: 0` y ellipsis, y media query para landscape.
- CSS organizado con metodología BEM.
- Búsqueda y filtros en tiempo real, tarjetas de catálogo y panel de pedido.
- Efectos jQuery (`slideToggle`, `fadeIn`, `fadeOut`) con alternativas nativas.
- Delegación de eventos para elementos dinámicos y un único listener global.
- Validaciones de formularios y uso de `textContent`/escape de texto para evitar inyección XSS; DOMPurify se incluye como defensa adicional al sanitizar markup dinámico.
- Fetch API asíncrono para cargar `catalog.json`, carga diferida de imágenes secundarias y prioridad para la imagen principal.
- Modal de revisión con cuenta regresiva, toast y bitácora de eventos.
- PWA: manifest, Service Worker, Cache Storage y estrategia cache-first para recursos locales.

## Nota
Precios, carta, horarios e imágenes son demostrativos. No representan una oferta comercial confirmada.
