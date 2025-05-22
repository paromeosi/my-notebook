// src/pages/index.js
import { useRef, useEffect, useState } from 'react'
import { ReactSketchCanvas } from 'react-sketch-canvas'

export default function Home() {
  const canvasRef = useRef()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/canvas')
      .then(r => r.json())
      .then(data => {
        const paths = Array.isArray(data.paths) ? data.paths : []
        if (paths.length && canvasRef.current) {
          canvasRef.current.fromData(paths)
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const handleChange = async () => {
    if (!canvasRef.current) return
    const paths = await canvasRef.current.exportPaths()
    await fetch('/api/canvas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ paths }),
    })
  }

  return (
    <div className="relative flex flex-col h-full bg-yellow-50">
      {/* LINEE SOTTO IL CANVAS */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 border-t border-gray-300"
            style={{ top: `${i * 2}rem` }}
          />
        ))}
      </div>

      {/* CANVAS OCCUPA TUTTO LO SPAZIO */}
      <div className="relative z-10 flex-1">
        {loading ? (
          <p className="p-4">Caricamento...</p>
        ) : (
          <ReactSketchCanvas
            ref={canvasRef}
            strokeWidth={4}
            strokeColor="black"
            canvasColor="transparent"
            className="w-full h-full"
            onChange={handleChange}
          />
        )}
      </div>
    </div>
  )
}
