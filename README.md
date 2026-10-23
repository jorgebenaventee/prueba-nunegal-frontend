# Nunegal Frontend Challenge

Aplicación web desarrollada con React para la compra de dispositivos móviles, como parte de una prueba técnica de frontend.

El proyecto implementa un catálogo de productos con búsqueda en tiempo real, una vista de detalle y la posibilidad de añadir productos al carrito, consumiendo una API REST y optimizando las peticiones mediante caché en el cliente.

## Funcionalidades

- **Catálogo de productos:** visualización de los móviles disponibles en una cuadrícula responsive.
- **Búsqueda en tiempo real:** filtrado de productos por marca y modelo.
- **Detalle del producto:** consulta de las especificaciones técnicas, incluyendo procesador, memoria RAM, sistema operativo, pantalla, batería, cámaras, dimensiones y peso.
- **Selección de variantes:** elección del color y la capacidad de almacenamiento disponibles.
- **Carrito de compra:** incorporación de productos y visualización del número de artículos en la cabecera.
- **Navegación SPA:** navegación entre el listado y el detalle de producto sin recargar la aplicación.
- **Caché de datos:** almacenamiento en el cliente de las respuestas de la API durante una hora para reducir peticiones innecesarias.

## Tecnologías

- **React:** construcción de la interfaz mediante componentes reutilizables.
- **TypeScript:** tipado estático para mejorar la seguridad y el mantenimiento del código.
- **TanStack Query:** gestión de las peticiones asíncronas, el estado del servidor y la caché de datos.
- **Vite:** servidor de desarrollo y herramienta de compilación.
- **shadcn/ui:** componentes de interfaz reutilizables.

## Instalación y ejecución

### Requisitos previos

- Node.js y npm.
- Acceso a la API utilizada por la aplicación.

### Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/jorgebenaventee/prueba-nunegal-frontend.git
cd prueba-nunegal-frontend
npm install
```

### Desarrollo

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local donde estará disponible la aplicación.

### Producción

Genera la compilación de producción:

```bash
npm run build
```

### Calidad del código

Para ejecutar las comprobaciones disponibles en el proyecto:

```bash
npm run lint
```

## API y gestión de datos

La aplicación consume una API REST para obtener el catálogo, consultar los detalles de los productos y añadir artículos al carrito.

TanStack Query permite centralizar la gestión del estado del servidor y reutilizar los datos obtenidos entre vistas.

La estrategia de caché contempla una vigencia de una hora. Una vez transcurrido ese periodo, los datos pueden revalidarse para obtener información actualizada del servicio.

El contador del carrito se mantiene disponible en la cabecera independientemente de la vista en la que se encuentre el usuario.

## Estructura de la aplicación

La aplicación se organiza en componentes y módulos orientados a separar las responsabilidades principales:

- **Listado de productos:** presentación y búsqueda del catálogo.
- **Detalle de producto:** información técnica y selección de variantes.
- **Carrito:** gestión de la operación de añadir productos y actualización del contador.
- **Capa de datos:** comunicación con la API y gestión de la caché.
- **Componentes compartidos:** cabecera, navegación y elementos reutilizables de interfaz.
