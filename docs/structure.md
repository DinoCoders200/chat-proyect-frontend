# Estructura del Proyecto: Chat Project Frontend

## Comando

`find . \( -name node_modules -o -name .git -o -name .husky \) -prune -o -print`

## Ignorado

- **node_modules/**: Dependencias del proyecto (pnpm)
- **.git/**: Clonado del repositorio (rama dev)
- **.husky/**: Hooks de Git (auto-generado)

## Frontend

- **Configuración de Raíz:** `.env`, `.env.example`, `.gitignore`, `biome.json`, `commitlint.config.js`, `components.json` (shadcn), `DESIGN.md`, `index.html`, `package.json`, `pnpm-lock.yaml`, `README.md`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`, `vite.config.ts`

- **.agents/**: Documentación y configuración para agentes de desarrollo.
  - `AGENTS.md`

- **docs/**: Documentación técnica.
  - `structure.md`, `technologies.md`

- **public/**: Recursos estáticos públicos.
  - `favicon.svg`, `icons.svg`

- **src/**: Código fuente de la aplicación.
  - `App.tsx`, `main.tsx`, `index.css`
  - **assets/**: Recursos gráficos.
    - `hero.png`, `vite.svg`
  - **components/**: Componentes reutilizables.
    - **ui/**: Componentes base del sistema de diseño (shadcn).
      - `avatar.tsx`, `button.tsx`, `dialog.tsx`, `scroll-area.tsx`, `tooltip.tsx`
  - **config/**: Configuración de la aplicación.
    - `api-client.ts`, `env.ts`
  - **lib/**: Utilidades compartidas.
    - `utils.ts`
