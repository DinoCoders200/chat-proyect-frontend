# Clon Discord

A professional, scalable frontend architecture for a Discord Clone built with React 19, TypeScript 6, and Vite.

- **🟢 Production (Main):** [https://chat-proyect-frontend.vercel.app/](https://chat-proyect-frontend.vercel.app/)
- **🚧 Development (Dev):** [https://chat-proyect-frontend-git-dev-ignaccio7s-projects.vercel.app](https://chat-proyect-frontend-git-dev-ignaccio7s-projects.vercel.app)

## Tech Stack

- **Core**: React 19 + TypeScript + Vite.
- **Styling**: Tailwind CSS v4 + shadcn/ui.
- **State Management**: Zustand (Global client state).
- **Server State**: TanStack Query (React Query) + Axios.
- **Code Quality**: Biome (Linter & Formatter in Rust).
- **Git Hook Automation**: Husky + lint-staged (Validates formatting before commits).
- **Commit Policies**: Commitlint (Enforces Conventional Commits formatting).

---

## Directory Structure

This project implements a **Feature-Based Modular Architecture** to ensure clean boundaries, avoiding messy imports and circular dependencies.

### Coding Conventions:

- **File Naming**: All files and directories must be named using **kebab-case** (e.g., `api-client.ts`, `login-form.tsx`, `scroll-area.tsx`).
- **No Barrel Files**: We explicitly avoid barrel files (`index.ts`) to promote explicit dependencies and better tree-shaking.

```text
src/
├── assets/             # Static files (images, icons, fonts)
├── components/         # Shared global generic UI components (Buttons, Inputs, etc.)
├── config/             # Global configurations (API client, constants)
├── store/              # Global Zustand stores (e.g., auth-store.ts)
├── schemas/            # Global validation schemas (Zod/Yup)
├── features/           # Modular features of the application
│   ├── auth/           # E.g., Authentication feature
│   │   ├── components/ # Private local components (login-form.tsx, register-form.tsx)
│   │   ├── hooks/      # Local custom hooks (Mutations, Queries)
│   │   ├── services/   # Local API request definitions (auth-service.ts)
│   │   ├── schemas/    # Local form validation schemas (login-schema.ts)
│   │   └── types/      # Local TS declarations (auth-types.ts)
│   └── chat/           # E.g., Chat panels and message components
├── hooks/              # Shared global React hooks (use-debounce.ts, use-local-storage.ts)
├── layouts/            # Page layouts (main-layout.tsx, auth-layout.tsx)
├── pages/              # Router pages (imports from features/ to construct layouts)
├── router/             # Routing configuration (react-router)
├── services/           # Shared API clients and base configurations
└── utils/              # Pure utility functions (formatters, data math)
```

---

## Development Setup

### Prerequisites

Make sure you have **Node.js** and **pnpm** installed on your machine.

### Installation

Clone the repository and install dependencies:

```bash
pnpm install
```

### Run Locally

Start the local development server:

```bash
pnpm dev
```

### Linting and Formatting

To validate and automatically fix style issues, imports sorting, and linting rules in one go:

```bash
pnpm lint
```

### Production Build

Runs linter checks, TypeScript compiler checks, and builds the production bundle:

```bash
pnpm build
```

---

## Commit Guidelines

This project enforces **Conventional Commits**. Any commit message that doesn't follow the convention will be blocked.

### Format

`type(scope): description` (Scope is optional but highly recommended).

### Allowed Types

- `feat`: A new feature.
- `fix`: A bug fix.
- `docs`: Documentation changes.
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
- `refactor`: A code change that neither fixes a bug nor adds a feature.
- `perf`: A code change that improves performance.
- `test`: Adding missing tests or correcting existing tests.
- `build`: Changes that affect the build system or external dependencies.
- `ci`: Changes to CI configuration files and scripts.
- `chore`: Other changes that don't modify src or test files.
- `revert`: Reverts a previous commit.

**Example**: `feat(auth): add login form validation schema`
