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
          🔗 info
        </button>
      </div>
    </nav>
  )
}
