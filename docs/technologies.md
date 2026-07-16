# Stack Tecnológico — Chat Proyect (Clon de Discord)

---

## Frontend

- **React (v19.2.7)**: Librería principal de UI con el nuevo compilador React.
- **TypeScript (v6.0.3)**: Lenguaje base con tipado estático para todo el código.
- **Vite (v8.1.3)**: Herramienta de compilación y empaquetado ultrarrápida (vía `@vitejs/plugin-react`).
- **Tailwind CSS (v4.3.2)**: Framework de estilos utility-first con la última versión (vía `@tailwindcss/vite`).
- **shadcn (v4.13.0)**: Sistema de componentes UI construido sobre Base UI (headless components accesibles).
- **Base UI (v1.6.0)**: Componentes primitivos headless de la fundación React (sin estilos propios).
- **TanStack React Query (v5.101.2)**: Gestión de estado del servidor, caché y sincronización de datos.
- **Zustand (v5.0.14)**: Estado global ligero y minimalista (alternativa moderna a Redux).
- **Axios (v1.18.1)**: Cliente HTTP para comunicación con APIs REST.
- **Zod (v4.4.3)**: Validación de esquemas y tipado en tiempo de ejecución.
- **Lucide React (v1.23.0)**: Biblioteca de iconos moderna y consistente.
- **Fontsource Geist (v5.2.9)**: Tipografía Geist (la fuente de Vercel) optimizada para UI modernas.
- **Class Variance Authority (v0.7.1)**: Manejo de variantes de clases CSS (ej: `button` con variantes `primary/secondary`).
- **Tailwind Merge (v3.6.0)**: Fusión inteligente de clases Tailwind sin conflictos.
- **clsx (v2.1.1)**: Utilidad para construir clases condicionales.
- **tw-animate-css (v1.4.0)**: Animaciones predefinidas optimizadas para Tailwind.

---

## Herramientas de Desarrollo y Calidad

- **Biome (v2.5.2)**: Linter + formateador todo-en-uno (reemplaza ESLint + Prettier). Más rápido y con menos configuración.
- **Husky (v9.1.7)**: Git hooks para automatizar tareas pre-commit.
- **lint-staged (v17.0.8)**: Ejecuta linters solo en archivos modificados (integración con Husky).
- **Commitlint (v21.2.0)**: Validación de mensajes de commit según estándares convencionales (conventional commits).
- **PostCSS (v8.5.16)**: Procesador CSS necesario para Tailwind.
- **Autoprefixer (v10.5.2)**: Añade prefijos CSS automáticamente para compatibilidad con navegadores.
- **TypeScript (v6.0.2)**: Configuración triple (`tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`) separando entornos.

---

## Arquitectura (No negociable)

- **Desarrollo**: Aplicación SPA (Single Page Application) construida con React y Vite.
- **Estado**: Híbrido entre estado local (React hooks), estado global (Zustand) y estado del servidor (React Query).
- **Estilos**: Tailwind CSS puro (sin preprocesadores como SASS/LESS).
- **Calidad**: Automatización con Husky + lint-staged para asegurar código limpio en cada commit. Commits semánticos con Commitlint.
- **Distribución**: Build estático desplegable en cualquier servidor web (NGINX, Vercel, Netlify, etc.).

---
