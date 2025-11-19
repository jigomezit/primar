# PRIMAR Inmobiliaria - Landing Page

Landing page moderna para inmobiliaria construida con Next.js, React, TypeScript y Tailwind CSS.

## Características

- ✅ Diseño moderno y profesional
- ✅ Animaciones sutiles con Framer Motion
- ✅ Totalmente responsive
- ✅ Fuentes personalizadas: Coolvetica y Poppins
- ✅ Paleta de colores: Blanco y Negro
- ✅ Secciones: Navbar, Hero, Carrusel de Imágenes, About Us, Productos, Servicios, Testimonios, Footer

## Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Agrega las fuentes Coolvetica:
   - Descarga los archivos de fuente Coolvetica (.woff2 y .woff)
   - Colócalos en la carpeta `public/fonts/`

3. Agrega las imágenes:
   - Carrusel de imágenes: `public/images/placeholder-1.jpg`, `placeholder-2.jpg`, `placeholder-3.jpg`
   - Productos: `public/images/product-1.jpg`, `product-2.jpg`, `product-3.jpg`
   - Testimonios: `public/images/testimonial-1.jpg`, `testimonial-2.jpg`, `testimonial-3.jpg`
   - About Us: Agrega una imagen para la sección About Us

4. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura del Proyecto

```
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales
├── components/
│   ├── Navbar.tsx          # Barra de navegación
│   ├── Hero.tsx            # Sección hero
│   ├── ImageCarousel.tsx   # Carrusel de imágenes
│   ├── AboutUs.tsx         # Sección sobre nosotros
│   ├── ProductCarousel.tsx # Carrusel de productos
│   ├── Services.tsx        # Sección de servicios
│   ├── Testimonials.tsx   # Testimonios
│   └── Footer.tsx          # Pie de página
└── public/
    ├── fonts/              # Fuentes personalizadas
    └── images/             # Imágenes del sitio
```

## Personalización

### Colores
Los colores están configurados en `tailwind.config.ts`. Los colores principales son:
- Blanco: `#FFFFFF`
- Negro: `#000000`
- Rojo (precios): `#DC2626`

### Fuentes
- **Coolvetica**: Para títulos y encabezados
- **Poppins**: Para texto del cuerpo

### Contenido
Puedes editar el contenido directamente en cada componente:
- Productos: `components/ProductCarousel.tsx`
- Servicios: `components/Services.tsx`
- Testimonios: `components/Testimonials.tsx`
- Información de contacto: `components/Footer.tsx`

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## Tecnologías Utilizadas

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

## Notas

- Las imágenes son placeholders y deben ser reemplazadas por imágenes reales
- La fuente Coolvetica debe ser agregada manualmente en `public/fonts/`
- Todos los textos son genéricos y pueden ser personalizados según las necesidades

