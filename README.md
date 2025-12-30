# Texto a Voz

Descripción
----------
Aplicación web ligera que convierte texto a voz usando la Web Speech API del navegador. Interfaz responsive con selección de voz, control de velocidad y pitch, contador de caracteres y controles de reproducción.

Archivos principales
--------------------
- [index.html](index.html) — Interfaz de usuario.
- [estilos.css](estilos.css) — Estilos y diseño.
- [app.js](app.js) — Lógica de la aplicación y manejo de la Web Speech API.

Funciones clave (en [app.js](app.js))
------------------------------------
- [`loadVoices`](app.js) — Carga y añade la lista de voces disponibles.
- [`updateCharCount`](app.js) — Actualiza el contador de caracteres del textarea.
- [`updateSlidersValue`](app.js) — Sincroniza los valores visibles de los sliders.
- [`speak`](app.js) — Crea y reproduce una instancia de SpeechSynthesisUtterance.
- [`stop`](app.js) — Detiene la síntesis en curso.
- [`init`](app.js) — Inicializa listeners y comportamientos al cargar la página.

Instalación y ejecución
-----------------------
1. Clonar o copiar el repositorio en una carpeta local.
2. Abrir [index.html](index.html) en un navegador moderno (Chrome, Edge; soporte en Firefox puede variar).
   - No requiere servidor; abrir el archivo localmente es suficiente.
3. Escribir o pegar texto, seleccionar una voz, ajustar velocidad/pitch y presionar "🔊 Oír".

Notas y consideraciones
-----------------------
- Las voces se cargan de forma asíncrona en algunos navegadores; por eso se escucha el evento `voiceschanged` en [`init`](app.js).
- Si no aparecen voces, pruebe reiniciar el navegador o verificar las voces instaladas en el sistema operativo.
- La experiencia puede variar según el motor de síntesis de cada navegador y las voces instaladas.

Contribuciones
--------------
Pull requests y mejoras son bienvenidas. Mantener formato claro y pruebas manuales en navegador.

Créditos
--------
Realizado por Samuel — enlace del proyecto en el pie de página de la aplicación.

