# Quick Start Guide

## Installation

```bash
# Install dependencies (using pnpm)
pnpm install
```

## Available Commands

### Development
```bash
# Start development server on http://localhost:5173
pnpm dev
```

### Building
```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Testing
```bash
# Run unit tests in watch mode
pnpm test

# Run tests once
pnpm test --run

# Run tests with UI dashboard
pnpm test:ui

# Generate coverage report
pnpm test:coverage

# Run E2E tests with Playwright
pnpm test:e2e
```

### Code Quality
```bash
# Lint and fix code issues
pnpm lint

# Format code
pnpm format
```

## Project Structure

### Source Code (`src/`)
- **components/** - Reusable React components
  - `LoginForm.tsx` - Example form using React Hook Form + Zod
  - `UsersTable.tsx` - Example table using TanStack Table
- **pages/** - Page components
  - `Home.tsx` - Home page
- **lib/** - Utilities and configurations
  - `apollo-client.ts` - Apollo Client setup for GraphQL
  - `schemas.ts` - Zod schemas for validation
- **__tests__/** - Unit tests

### Configuration Files
- **vite.config.ts** - Vite build configuration
- **vitest.config.ts** - Unit test configuration
- **tailwind.config.js** - TailwindCSS configuration
- **postcss.config.js** - PostCSS configuration
- **playwright.config.ts** - E2E test configuration
- **biome.json** - Biome linter/formatter configuration
- **.env** - Environment variables

### E2E Tests (`e2e/`)
- `home.spec.ts` - Example E2E test

## GraphQL Integration

The application is configured to connect to a GraphQL backend at:
```
http://localhost:4000/graphql
```

Configure this via the environment variable:
```env
VITE_GRAPHQL_ENDPOINT=http://your-graphql-endpoint/graphql
```

## Example Features

### Form Validation (Zod + React Hook Form)
See `src/components/LoginForm.tsx` for an example of:
- Type-safe form validation with Zod
- Error handling and display
- React Hook Form integration

### Data Tables (TanStack Table)
See `src/components/UsersTable.tsx` for an example of:
- Building data tables
- Column definitions
- Row rendering

### GraphQL Queries
Apollo Client is pre-configured in `src/lib/apollo-client.ts`:
```typescript
import { useQuery, gql } from '@apollo/client'

const QUERY = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`

function UsersList() {
  const { data, loading } = useQuery(QUERY)
  // ...
}
```

## Technology Stack Summary

| Category | Tools |
|----------|-------|
| **Frontend Framework** | React 19 + TypeScript |
| **Build Tool** | Vite |
| **Styling** | TailwindCSS v4 + Radix UI |
| **Form Management** | React Hook Form + Zod |
| **Data Management** | TanStack Table, Apollo Client |
| **Package Manager** | pnpm |
| **Testing** | Vitest, Playwright |
| **Code Quality** | Biome (linter + formatter) |
| **Backend** | GraphQL |

## Next Steps

1. **Configure GraphQL endpoint** in `.env`
2. **Start the dev server** with `pnpm dev`
3. **Write GraphQL queries** using Apollo Client
4. **Build features** using the provided components as templates
5. **Write tests** in `src/__tests__/` and `e2e/`
6. **Keep code clean** with `pnpm lint` and `pnpm format`

## Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [TailwindCSS Documentation](https://tailwindcss.com)
- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)
- [React Hook Form Documentation](https://react-hook-form.com)
- [TanStack Table Documentation](https://tanstack.com/table/latest)
- [Vitest Documentation](https://vitest.dev)
- [Playwright Documentation](https://playwright.dev)
- [Zod Documentation](https://zod.dev)
