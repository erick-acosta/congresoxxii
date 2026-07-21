# XXII Congreso Venezolano de Neurocirugía

Sitio web oficial interactivo y modular del **XXII Congreso Venezolano de Neurocirugía**, diseñado para facilitar la difusión científica del evento, la visualización del cronograma, la información del hotel sede y el proceso de pre-registro académico.

---

## 🎨 Identidad Visual y Diseño

El sitio cuenta con un diseño premium y adaptativo (responsive) que sigue las pautas de estilo solicitadas:

- **Paleta de Colores**:
  - **Color Principal**: `#3f77bc` (Azul Medio) - Usado para fondos principales, botones, guías de cronograma y elementos activos de navegación.
  - **Color Secundario**: `#f2a97f` (Naranja/Coral Suave) - Usado para etiquetas académicas, rebordes decorativos y elementos destacados.
- **Tipografías**:
  - **Títulos**: `Helvetica` (o en su defecto `'Helvetica Neue', 'Helvetica', 'Arial'`) - Utilizado en encabezados (`h1` a `h6`), números destacados y montos de precios.
  - **Subtítulos**: `Univers Bold` (con fallback de sans-serif bold) - Utilizado en pestañas de navegación, cargos de ponentes, etiquetas estadísticas, títulos de charlas y nombres de campos de formulario.
  - **Textos**: `Univers Regular` (con fallback de sans-serif regular) - Utilizado para párrafos de lectura, bios, descripciones y campos de entrada de datos.

---

## 📁 Estructura Modular de Secciones

La página está construida bajo una arquitectura de **Single Page Application (SPA)** autogestionada mediante JavaScript, dividida en 4 módulos accesibles desde la cabecera:

1. **Info & Cronograma**:
   - Cabecera con el logotipo de la Sociedad Venezolana de Neurocirugía.
   - Banner de presentación académica (Hero) con un mapa interactivo estilizado de Venezuela.
   - Bloque de estadísticas clave (Fecha, Sede, Modalidad, Aval).
   - Ejes temáticos destacados (Tecnología, Cirugía Mínimamente Invasiva, Impacto Local).
   - **Cronograma Interactivo**: Línea de tiempo filtrable por días (Lunes a Viernes) para explorar las charlas y ponentes.
2. **Invitados**:
   - Directorio de ponentes nacionales e internacionales con afiliaciones institucionales, biografías breves y títulos de conferencias.
3. **Hotel Sede**:
   - Presentación del **Hesperia WTC Valencia** (sede del evento).
   - Tarifas corporativas preferenciales de alojamiento para los asistentes del congreso.
   - Galería de fotos del hotel y accesos rápidos de reservas.
4. **Precios y Registro**:
   - Tarjetas de inversión académica para Estudiantes, Residentes, Especialistas y Asistentes Virtuales.
   - **Convertidor de Moneda Dinámico**: Permite cambiar los precios entre Dólares (`$`) y Bolívares (`Bs.`) en tiempo real usando el interruptor superior.
   - **Formulario de Pre-registro**: Formulario con validación interactiva y simulación de procesamiento de datos.
   - Panel informativo con los datos bancarios oficiales (Pago Móvil, Zelle y Transferencias nacionales) para canalizar los pagos.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica completa optimizada para SEO.
- **CSS3 (Vanilla)**: Maquetación moderna basada en Grid y Flexbox, con uso intensivo de variables de diseño (`:root`), transiciones de desvanecimiento suaves y micro-animaciones en botones e iconos.
- **JavaScript (Vanilla - ES6)**: Lógica nativa de ruteo de pestañas, filtrado de agenda, conversión de divisa y procesamiento interactivo de registro.
- **Vite**: Entorno de desarrollo ultrarrápido y servidor local con recarga en caliente (Hot Module Replacement).

---

## 🚀 Instrucciones de Ejecución

Para levantar el proyecto en su máquina local de manera sencilla, siga los siguientes pasos:

### Prerrequisitos
Tener instalado [Node.js](https://nodejs.org/) (incluye `npm`).

### 1. Instalar Dependencias
Ejecute en la terminal dentro de la carpeta del proyecto:
```bash
npm install
```

### 2. Iniciar Servidor de Desarrollo
Levante el servidor local con soporte de recarga automática en caliente:
```bash
npm run dev
```
El proyecto estará disponible por defecto en: **[http://localhost:5173/](http://localhost:5173/)**

### 3. Compilar para Producción
Para generar los archivos estáticos de distribución listos para subir a un servidor web:
```bash
npm run build
```
Los archivos optimizados se guardarán en la carpeta `/dist`.
