# Project Setup Documentation

## Overview
This is a fully-configured React 19 + TypeScript + Vite application with a complete modern tech stack for building a Dota 2 statistics tracker with GraphQL backend integration.

## Technology Stack

### Core Framework
- **React 19.2** - UI framework
- **TypeScript 5.9** - Type-safe JavaScript
- **Vite 7.3** - Lightning-fast build tool

### Styling
- **TailwindCSS 4.1** - Utility-first CSS framework
- **@tailwindcss/postcss 4.1** - Tailwind CSS PostCSS plugin
- **Radix UI Components** - Accessible component library
  - Dialog, Dropdown Menu, Navigation Menu

### Form & Validation
- **React Hook Form 7.71** - High-performance form library
- **Zod 4.3** - TypeScript-first schema validation
- **@hookform/resolvers 5.2** - Validation resolver integration

### Data Management
- **Apollo Client 4.0** - GraphQL client
  - InMemoryCache for state management
  - HttpLink for GraphQL communication
- **GraphQL 16.12** - Query language
- **@tanstack/react-table 8.21** - Headless table component library

### Development Tools
- **Vite 7.3** - Build tool with HMR
- **@vitejs/plugin-react 5.1** - React plugin for Vite

### Testing
- **Vitest 4.0** - Lightning-fast unit test framework
- **@vitest/ui 4.0** - Visual test results dashboard
- **@vitest/coverage-v8 4.0** - Code coverage reporting
- **jsdom 27.4** - DOM implementation for testing
- **Playwright 1.57** - E2E testing framework
- **@playwright/test** - Playwright test runner

### Code Quality
- **Biome 2.3** - Fast formatter and linter
  - Replaces ESLint + Prettier
  - Built-in JavaScript, TypeScript, JSON, CSS support

### Package Management
- **pnpm 10.28** - Fast, disk-space efficient package manager

## File Structure

```
dota2Stats/
├── src/
│   ├── __tests__/
│   │   └── schemas.test.ts          # Unit tests
│   ├── components/
│   │   ├── LoginForm.tsx            # React Hook Form example
│   │   └── UsersTable.tsx           # TanStack Table example
│   ├── pages/
│   │   └── Home.tsx                 # Home page
│   ├── lib/
│   │   ├── apollo-client.ts         # Apollo Client configuration
│   │   └── schemas.ts               # Zod validation schemas
│   ├── assets/                      # Static assets
│   ├── App.tsx                      # Root component
│   ├── main.tsx                     # Application entry point
│   └── index.css                    # Global styles with Tailwind
├── e2e/
│   └── home.spec.ts                 # End-to-end tests
├── public/                          # Static files
├── dist/                            # Build output
├── node_modules/                    # Dependencies
│
├── Configuration Files:
├── vite.config.ts                   # Vite configuration
├── vitest.config.ts                 # Vitest configuration
├── tailwind.config.js               # Tailwind CSS config
├── postcss.config.js                # PostCSS config
├── playwright.config.ts             # Playwright config
├── biome.json                       # Biome linter/formatter config
├── tsconfig.json                    # TypeScript config
├── tsconfig.app.json                # App TypeScript config
├── tsconfig.node.json               # Node TypeScript config
│
├── package.json                     # Project metadata & scripts
├── pnpm-lock.yaml                   # Dependency lock file
├── .env                             # Environment variables
├── .env.example                     # Example environment file
├── .gitignore                       # Git ignore file
├── index.html                       # HTML entry point
├── README.md                        # Full documentation
└── QUICK_START.md                   # Quick start guide
```

## NPM Scripts

```json
{
  "dev": "vite",                              // Start dev server
  "build": "tsc -b && vite build",            // Build for production
  "lint": "biome lint --write src",           // Lint and fix code
  "format": "biome format --write src",       // Format code
  "test": "vitest",                          // Run tests (watch mode)
  "test:ui": "vitest --ui",                  // Tests with UI dashboard
  "test:coverage": "vitest --coverage",      // Generate coverage report
  "test:e2e": "playwright test",             // Run E2E tests
  "preview": "vite preview"                  // Preview production build
}
```

## Configuration Details

### Vite Configuration (`vite.config.ts`)
- React plugin enabled
- Path alias `@/` pointing to `src/`
- Optimized for development and production

### TypeScript Configuration
- **target**: ES2022
- **module**: ESNext
- **strict**: true (strict type checking)
- **jsx**: react-jsx (automatic JSX transformation)
- **Path aliases**: `@/*` → `src/*`

### Tailwind CSS v4
- Content paths configured for src files
- PostCSS plugin integration
- Autoprefixer support

### Vitest Configuration
- jsdom environment for React testing
- globals enabled for test APIs
- V8 coverage provider
- Excludes e2e directory from unit tests

### Playwright Configuration
- Support for Chromium, Firefox, WebKit
- Configured for http://localhost:5173 base URL
- HTML reporter generation
- Automatic dev server start during testing

### Biome Configuration
- Recommended linting rules enabled
- Space indentation (2 spaces)
- Line width: 100 characters
- Single quotes for JavaScript
- Trailing commas in all contexts
- Ignores Tailwind at-rules

## Environment Variables

Create a `.env` file:

```env
# GraphQL API endpoint
VITE_GRAPHQL_ENDPOINT=http://localhost:4000/graphql
```

## Getting Started

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Start development server**:
   ```bash
   pnpm dev
   ```

3. **Run tests**:
   ```bash
   pnpm test
   ```

4. **Build for production**:
   ```bash
   pnpm build
   ```

## Key Features

✅ **Modern React 19** with TypeScript
✅ **Fast Development** with Vite and HMR
✅ **Comprehensive Testing** - Vitest + Playwright
✅ **Form Management** - React Hook Form + Zod
✅ **Data Tables** - TanStack Table
✅ **GraphQL Ready** - Apollo Client configured
✅ **Styling** - TailwindCSS + Radix UI
✅ **Code Quality** - Biome linting & formatting
✅ **Type Safety** - Full TypeScript support
✅ **Production Ready** - Optimized builds

## Next Steps

1. Configure GraphQL endpoint in `.env`
2. Define GraphQL queries in `src/lib/`
3. Create API hooks using Apollo Client
4. Build components using provided examples
5. Write tests in `src/__tests__/` and `e2e/`
6. Deploy using standard React build

## Notes

- **Apollo Client**: Configured for HTTP and memory caching
- **Zod Schemas**: Type-safe validation with TypeScript inference
- **React Hook Form**: Minimal re-renders with validation
- **TanStack Table**: Headless table for maximum flexibility
- **Biome**: Faster alternative to ESLint + Prettier combo
- **Playwright**: Browser automation for E2E testing

## Troubleshooting

### Tests not running
Ensure `jsdom` is installed: `pnpm install -D jsdom`

### Linting errors
Run `pnpm lint` to auto-fix issues

### GraphQL queries failing
Verify `VITE_GRAPHQL_ENDPOINT` is set correctly in `.env`

### Tailwind styles not applying
Ensure path in `tailwind.config.js` includes all template files
