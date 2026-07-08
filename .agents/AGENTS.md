# Agent Guidelines for clon-discord

This document outlines the coding standards, patterns, and technical constraints for AI agents contributing to this project. Always follow these rules.

## Core Stack & Tools
- **Framework**: React 19 + Vite + TypeScript (TS 6).
- **Styling**: Tailwind CSS v4.
- **State Management**: Zustand for global client-side state.
- **Data Fetching**: TanStack Query + Axios for server state.
- **Code Quality**: Biome for linting and formatting. Do not use ESLint, Prettier, or Oxlint.
- **Git Hooks**: Husky and lint-staged validate formatting. Commitlint enforces Conventional Commits.

## Architectural Architecture Rules

### 1. Folder & File Naming (kebab-case)
All files and directories must be named using **kebab-case** (hyphen-separated, e.g., `api-client.ts`, `login-form.tsx`, `scroll-area.tsx`). Do not use camelCase, PascalCase, or snake_case for filenames.

### 2. Folder Structure (Feature-Based)
Organize the code under `src/` by feature:
```text
src/
├── components/         # Shared global generic UI components (Buttons, Inputs, etc.)
├── store/              # Global Zustand stores (e.g., auth-store.ts)
├── schemas/            # Global validation schemas (Zod/Yup)
├── features/           # Feature modules (e.g., auth/, chat/, servers/)
│   ├── [feature-name]/
│   │   ├── components/ # Local components (e.g., profile-card.tsx)
│   │   ├── hooks/      # Local hooks (e.g., use-login-mutation.ts)
│   │   ├── services/   # Local API calls (e.g., login-service.ts)
│   │   ├── schemas/    # Local validation schemas (e.g., login-schema.ts)
│   │   └── types/      # Local TypeScript types (e.g., auth-types.ts)
```

### 3. No Barrel Files (No `index.ts` re-exports)
- **Do not** use `index.ts` files to re-export directories inside `features/` or components.
- Always use **explicit and direct imports**.
  - **Correct**: `import { LoginForm } from '@/features/auth/components/login-form'`
  - **Incorrect**: `import { LoginForm } from '@/features/auth'`

### 3. Separation of Schemas and Types
- **Validation Schemas** (like Zod) belong in `schemas/` directories (e.g., `features/auth/schemas/loginSchema.ts`).
- **TypeScript Types** belong in `types/` directories (e.g., `features/auth/types/authTypes.ts`).
- Do not mix runtime validation logic inside static declaration files.

### 4. Accessibility and Code Standards
- Always provide an explicit `type` attribute on `<button>` elements (e.g., `type="button"`).
- Prefer Node.js imports using the `node:` protocol (e.g., `import path from "node:path"`).
- Do not use TS non-null assertions (`!`). Perform runtime checks instead.
- **Never use emojis** in source code, console logs, comments, or documentation files. Always use plain text.
