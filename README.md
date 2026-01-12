# Dota2 Stats

A modern React application for tracking Dota 2 statistics with a comprehensive tech stack including GraphQL, testing, and code quality tools.

## Tech Stack

### Frontend
- **React 19** - UI library with TypeScript
- **Vite** - Lightning-fast build tool
- **TailwindCSS** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible component library
- **Apollo Client** - GraphQL client for state management

### Forms & Validation
- **React Hook Form** - Performant form management
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Validation resolvers

### Data Management
- **TanStack Table (React Table)** - Headless table component
- **GraphQL** - Query language and runtime for APIs

### Development Tools
- **TypeScript** - Type-safe JavaScript
- **Biome** - Fast formatter and linter
- **pnpm** - Fast, disk space efficient package manager

### Testing
- **Vitest** - Lightning-fast unit test framework
- **@vitest/ui** - UI for test results
- **@vitest/coverage-v8** - Code coverage
- **Playwright** - E2E testing framework

## Project Structure

```
src/
├── components/        # Reusable components
│   ├── LoginForm.tsx
│   └── UsersTable.tsx
├── pages/            # Page components
│   └── Home.tsx
├── lib/              # Utility functions and configurations
│   ├── apollo-client.ts
│   └── schemas.ts
├── __tests__/        # Unit tests
├── App.tsx
└── main.tsx

e2e/                  # End-to-end tests
├── home.spec.ts

Configuration files:
├── vite.config.ts
├── vitest.config.ts
├── tailwind.config.js
├── postcss.config.js
├── biome.json
└── playwright.config.ts
```

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start dev server
pnpm dev

# Run in watch mode
pnpm build --watch
```

### Building

```bash
# Build for production
pnpm build
```

### Testing

```bash
# Run unit tests
pnpm test

# Run tests with UI
pnpm test:ui

# Generate coverage report
pnpm test:coverage

# Run E2E tests
pnpm test:e2e
```

### Code Quality

```bash
# Lint and fix code
pnpm lint

# Format code
pnpm format
```

## Environment Variables

Create a `.env` file based on `.env.example`:

```env
VITE_GRAPHQL_ENDPOINT=http://localhost:4000/graphql
```

## GraphQL Backend

This application expects a GraphQL backend running at `http://localhost:4000/graphql` (configurable via environment variables).

### Example GraphQL Schema

```graphql
type Query {
  users: [User!]!
  user(id: ID!): User
}

type User {
  id: ID!
  name: String!
  email: String!
}

type Mutation {
  login(email: String!, password: String!): AuthToken!
}

type AuthToken {
  token: String!
  user: User!
}
```

## Contributing

1. Follow Biome linting rules
2. Write tests for new features
3. Ensure all tests pass before submitting

## License

MIT