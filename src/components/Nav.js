// src/components/Nav.js
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="bg-white shadow p-4 flex items-center justify-between">
      <div className="flex space-x-6">
        <Link href="/" className="hover:text-indigo-600">✏️ Scrivi</Link>
        {/* <Link href="/archive" className="hover:text-indigo-600">📚 Archivi</Link> */}
        <Link href="/bio" className="hover:text-indigo-600">🔗 Bio & Link</Link>
      </div>
      {/* Banner di annuncio */}
      <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded">
        📸 Take a screenshot!
      </div>
    </nav>
)
}
