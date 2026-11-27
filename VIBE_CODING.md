
# Documentación del proceso Vibe Coding

## Proyecto: ÉLORA Beauty

## 1. Descripción del proyecto

ÉLORA Beauty es una aplicación web desarrollada con Next.js 16, TypeScript y Tailwind CSS.

El proyecto consiste en un catálogo digital de productos de belleza, cosmética y cuidado personal, con una identidad visual elegante basada en el estilo Luxury Minimalist.

El objetivo fue construir una aplicación funcional y responsive utilizando la metodología Vibe Coding, empleando herramientas de inteligencia artificial como asistentes durante el desarrollo.

## 2. Herramientas de inteligencia artificial utilizadas

- ChatGPT: asistente de desarrollo para planificación, generación de código, diseño de componentes, integración de API y resolución de errores.
- Visual Studio Code: entorno de desarrollo.
- GitHub: administración del código fuente y control de versiones.
- Vercel: plataforma de despliegue.

## 3. Prompts principales utilizados

A continuación se presentan los principales prompts y solicitudes utilizados durante el desarrollo.

### Prompt 1. Planificación del proyecto

Analizar los requisitos de la actividad evaluada y proponer una aplicación web sencilla, funcional y visualmente atractiva utilizando Next.js.

La temática seleccionada fue un catálogo digital de productos de belleza y cuidado personal.

### Prompt 2. Configuración inicial

Guiar la creación de un proyecto Next.js 16 utilizando TypeScript, Tailwind CSS, App Router y pnpm.

Establecer una estructura organizada para los componentes, servicios y tipos de datos.

### Prompt 3. Diseño de la interfaz

Desarrollar una interfaz web con estilo Luxury Minimalist para una marca ficticia llamada ÉLORA Beauty.

Utilizar una paleta de colores crema, beige y tonos neutros, con tipografía elegante, fotografías de productos y diseño responsive.

### Prompt 4. Integración de API

Integrar DummyJSON para obtener productos de belleza y crear un Route Handler interno utilizando Next.js.

### Prompt 5. Desarrollo del catálogo

Implementar un catálogo dinámico con tarjetas de productos, buscador, filtros por categoría y navegación hacia páginas de detalle.

### Prompt 6. Validación y corrección

Revisar errores de TypeScript y ESLint, identificar problemas de implementación y proporcionar soluciones para corregirlos.

### Prompt 7. Despliegue

Preparar el repositorio de GitHub y realizar el despliegue de la aplicación mediante Vercel.

## 4. Iteraciones realizadas durante el desarrollo

| Etapa | Actividad |
|---|---|
| 1 | Creación del proyecto Next.js y configuración del entorno. |
| 2 | Definición de identidad visual y desarrollo de la página principal. |
| 3 | Integración de DummyJSON y creación de la API interna. |
| 4 | Desarrollo del catálogo dinámico y filtros de productos. |
| 5 | Implementación del detalle de productos y página Nosotros. |
| 6 | Incorporación de estados de carga y manejo de errores. |
| 7 | Corrección de errores de TypeScript y ESLint. |
| 8 | Preparación del repositorio y despliegue en Vercel. |

## 5. Decisiones técnicas tomadas

### Next.js

Se seleccionó Next.js 16 con App Router para implementar la estructura de rutas y aprovechar sus capacidades de renderizado.

### TypeScript

Se utilizó TypeScript para mejorar el control de tipos y la organización del código.

### Tailwind CSS

Se seleccionó Tailwind CSS para desarrollar interfaces modernas y adaptables a diferentes tamaños de pantalla.

### DummyJSON

Se seleccionó DummyJSON como fuente externa de información para evitar la necesidad de construir una base de datos propia.

### Route Handlers

Se implementó un endpoint interno mediante Route Handlers para obtener y proporcionar los productos a la aplicación.

### Server Components y Client Components

Se utilizaron Server Components para la obtención de información y Client Components para las funcionalidades interactivas.

### React Hooks

Se implementaron los hooks `useState` y `useEffect` para administrar estados y cargar información de productos.

### Vercel

Se seleccionó Vercel para desplegar la aplicación y permitir su acceso público.

## 6. Desafíos encontrados y soluciones implementadas

### 6.1. Configuración de rutas dinámicas

Durante el desarrollo de la página de detalle de productos se presentó un problema relacionado con el nombre de la carpeta dinámica.

**Solución:** se corrigió el nombre de la carpeta a `[id]` para permitir que Next.js reconociera correctamente los parámetros de la ruta.

### 6.2. Prerenderizado y Suspense

Se presentó un problema relacionado con el acceso asíncrono a los parámetros de una ruta dinámica durante el prerenderizado.

**Solución:** se incorporó React Suspense alrededor del componente asíncrono de detalle del producto.

### 6.3. Errores de ESLint

Durante las validaciones se identificaron errores relacionados con caracteres especiales sin escapar y enlaces internos implementados mediante etiquetas HTML `<a>`.

**Solución:** se corrigieron los caracteres y se utilizaron componentes `Link` de Next.js para la navegación interna.

### 6.4. Navegación entre páginas

Se identificó la necesidad de mejorar la navegación para permitir regresar fácilmente a la página principal.

**Solución:** se incorporaron enlaces de regreso al inicio y al catálogo.

## 7. Pruebas y validaciones realizadas

Se realizaron verificaciones funcionales y técnicas durante el desarrollo.

- Visualización de la página principal.
- Carga del catálogo de productos.
- Funcionamiento del buscador.
- Filtrado por categorías.
- Navegación hacia el detalle de productos.
- Visualización de información individual.
- Carga de la página Nosotros.
- Verificación del endpoint interno.
- Revisión del diseño responsive.
- Validación de TypeScript.
- Validación de ESLint.

## 8. Repositorio y despliegue

### Repositorio GitHub

https://github.com/garodriguezsv/elora-beauty

### Aplicación desplegada

https://elora-beauty-tau.vercel.app/

## 9. Conclusión

El desarrollo de ÉLORA Beauty permitió aplicar la metodología Vibe Coding mediante la colaboración entre el desarrollador y herramientas de inteligencia artificial.

La IA se utilizó como copiloto para acelerar la generación de código, la creación de componentes, la integración de servicios y la resolución de problemas técnicos.

El proceso incluyó revisión, validación y corrección de los resultados generados, manteniendo el control sobre las decisiones técnicas y la estructura de la aplicación.

Como resultado se obtuvo una aplicación web funcional, responsive y desplegada públicamente, desarrollada con Next.js 16 y TypeScript.
