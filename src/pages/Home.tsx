export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <header className="bg-gray-900 border-b border-gray-700 p-6">
        <h1 className="text-3xl font-bold text-white">Dota2 Stats</h1>
        <p className="text-gray-400 mt-2">A modern application for tracking Dota 2 statistics</p>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4">Apollo Client</h2>
            <p className="text-gray-400">GraphQL client configured and ready to use</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4">TailwindCSS</h2>
            <p className="text-gray-400">Utility-first CSS framework</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4">Radix UI</h2>
            <p className="text-gray-400">Unstyled, accessible component library</p>
          </div>
        </div>

        <section className="mt-12 bg-gray-800 rounded-lg p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Get Started</h2>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center">
              <span className="text-green-500 mr-3">✓</span>
              React 19 with TypeScript
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-3">✓</span>
              Vite for fast development
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-3">✓</span>
              Vitest for unit testing
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-3">✓</span>
              Playwright for E2E testing
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-3">✓</span>
              React Hook Form for form management
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-3">✓</span>
              TanStack Table for data management
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-3">✓</span>
              Zod for schema validation
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-3">✓</span>
              Biome for code quality
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
