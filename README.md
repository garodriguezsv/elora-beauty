
# ÉLORA Beauty

**Catálogo digital de productos de belleza y cuidado personal.**

ÉLORA Beauty es una aplicación web desarrollada con Next.js que presenta un catálogo de productos de belleza, cosmética y cuidado personal mediante una experiencia visual elegante, minimalista y adaptable a diferentes dispositivos.

El proyecto fue desarrollado utilizando la metodología Vibe Coding, con herramientas de inteligencia artificial como asistentes durante el proceso de planificación, generación de código, diseño, implementación y validación.

## 🌐 Aplicación en producción

**URL:** https://elora-beauty-tau.vercel.app/

## 📂 Repositorio

https://github.com/garodriguezsv/elora-beauty

## 🛠️ Tecnologías utilizadas

- Next.js 16.4.6
- React 19
- TypeScript
- Tailwind CSS 4
- pnpm
- DummyJSON API
- Git y GitHub
- Vercel

## ✨ Características principales

- Diseño elegante con identidad visual Luxury Minimalist.
- Interfaz adaptable a dispositivos móviles y escritorio.
- Catálogo dinámico de productos de belleza.
- Consumo de información mediante DummyJSON.
- Búsqueda de productos.
- Filtrado por categorías.
- Visualización individual de productos.
- Información descriptiva y precios.
- Navegación entre las diferentes páginas.
- Componentes de servidor y cliente.
- Manejo de estados de carga y errores.
- Integración de una API interna mediante Route Handlers.

## 📄 Estructura de páginas

| Ruta | Descripción |
|---|---|
| `/` | Página principal |
| `/catalogo` | Catálogo de productos |
| `/producto/[id]` | Detalle individual de productos |
| `/nosotros` | Información sobre la marca |
| `/api/products` | API interna de productos |

## 🔌 Integración de API

La aplicación utiliza DummyJSON para obtener información de productos de belleza.

API externa:

https://dummyjson.com/products/category/beauty

También se implementó un Route Handler interno en Next.js para consultar y proporcionar los productos a la aplicación.

Endpoint interno:

`/api/products`

## 💻 Requisitos de instalación

Para ejecutar el proyecto localmente necesitas:

- Node.js 20.9 o superior.
- pnpm.
- Git.
- Visual Studio Code (recomendado).

## 🚀 Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/garodriguezsv/elora-beauty.git
```

### 2. Ingresar al directorio

```bash
cd elora-beauty
```

### 3. Instalar dependencias

```bash
pnpm install
```

### 4. Ejecutar el servidor de desarrollo

```bash
pnpm dev
```

### 5. Abrir la aplicación

Accede desde el navegador:

http://localhost:3000

## 🧪 Validación del proyecto

Para verificar los tipos de TypeScript:

```bash
pnpm exec tsc --noEmit
```

Para ejecutar ESLint:

```bash
pnpm exec eslint .
```

## 🏗️ Compilación para producción

Para generar la compilación de producción:

```bash
pnpm build
```

## ☁️ Despliegue

La aplicación está desplegada en Vercel y conectada al repositorio de GitHub.

URL de producción:

https://elora-beauty-tau.vercel.app/

## 🔐 Variables de entorno

Actualmente, el proyecto no requiere claves de API ni variables de entorno privadas.

Se incluye el archivo `.env.example` como referencia de configuración.

## 🤖 Metodología de desarrollo

El proyecto fue desarrollado mediante Vibe Coding, utilizando inteligencia artificial como copiloto durante las diferentes etapas del desarrollo.

Se utilizaron asistentes de IA para:

- Planificación y definición del proyecto.
- Creación de la estructura inicial.
- Generación de componentes.
- Diseño de interfaces.
- Integración de API.
- Corrección de errores.
- Validación del código.
- Preparación del despliegue.

Para conocer el proceso completo, consulta el archivo `VIBE_CODING.md`.

## 👨‍💻 Autor

Proyecto desarrollado como parte de una actividad evaluada de implementación de aplicaciones web con Next.js mediante Vibe Coding.
Gerson Rodriguez