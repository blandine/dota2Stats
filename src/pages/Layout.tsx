import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='min-h-screen bg-gray-900'>
      <nav className='bg-gray-800 border-b border-gray-700'>
        <div className='max-w-6xl mx-auto px-6 py-4 flex items-center justify-between'>
          <h1 className='text-2xl font-bold text-white'>Dota2 Stats</h1>
          <ul className='flex gap-6 text-gray-400'>
            <li>
              <Link to='/' className='hover:text-white transition'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/players' className='hover:text-white transition'>
                Players
              </Link>
            </li>
            <li>
              <Link to='/stats' className='hover:text-white transition'>
                Stats
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className='max-w-6xl mx-auto px-6 py-8'>
        <Outlet />
      </main>
    </div>
  )
}
