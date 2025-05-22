// src/components/Nav.js
export default function Nav({ onInfoClick }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow h-16 px-4 flex items-center">
      <button
        onClick={onInfoClick}
        className="text-lg font-medium hover:text-indigo-600 focus:outline-none"
      >
        🔗 Info
      </button>
    </nav>
  )
}
