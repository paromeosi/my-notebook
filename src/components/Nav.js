import { useState } from 'react'

export default function Nav({ onColorChange, onBioClick }) {
  const [color, setColor] = useState('#000000')

  const handleColor = (e) => {
    const c = e.target.value
    setColor(c)
    onColorChange(c)
  }

  return (
    <nav className="bg-white shadow p-2 flex items-center justify-between">
      <div className="flex space-x-4">
        <button
          onClick={onBioClick}
          className="hover:text-indigo-600 focus:outline-none"
        >
          🔗 Bio
        </button>
        <button
          onClick={() => window.location.reload()}
          className="hover:text-indigo-600 focus:outline-none"
        >
          ✏️ Scrivi
        </button>
      </div>

      <div className="flex items-center space-x-3">
        {/* Color Picker */}
        <input
          type="color"
          value={color}
          onChange={handleColor}
          title="Scegli colore"
          className="cursor-pointer"
        />
        <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded">
          📸 Screenshot!
        </span>
      </div>
    </nav>
  )
}
