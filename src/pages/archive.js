// src/pages/archive.js
import { useState, useEffect, useRef } from 'react'
import { ReactSketchCanvas } from 'react-sketch-canvas'

export default function Archive() {
  const [months, setMonths] = useState([])
  const [selected, setSelected] = useState('')
  const [paths, setPaths] = useState([])
  const [loading, setLoading] = useState(false)
  const canvasRef = useRef()

  // Carica i mesi disponibili
  useEffect(() => {
    fetch('/api/months')
      .then(r => r.json())
      .then(setMonths)
      .catch(console.error)
  }, [])

  // Quando cambia il mese selezionato, carica i dati
  useEffect(() => {
    if (!selected) return
    setLoading(true)
    fetch(`/api/canvas?month=${selected}`)
      .then(r => r.json())
      .then(data => {
        const p = Array.isArray(data.paths) ? data.paths : []
        setPaths(p)
        if (canvasRef.current) canvasRef.current.fromData(p)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [selected])

  return (
    <div className="relative flex flex-col h-full bg-yellow-50">
      {/* LINEE DI QUADERNO */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 border-t border-gray-300"
            style={{ top: `${i * 2}rem` }}
          />
        ))}
      </div>

      {/* SELETTORE MESI */}
      <div className="relative z-10 p-4 bg-white shadow">
        <label className="block mb-2 font-semibold">
          Scegli mese archiviato:
        </label>
        <select
          className="p-2 border rounded"
          value={selected}
          onChange={e => setSelected(e.target.value)}
        >
          <option value="">— Seleziona —</option>
          {months.map(m => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      {/* CANVAS IN SOLA LETTURA */}
      <div className="relative z-10 flex-grow">
        {loading && (
          <p className="p-4">Caricamento...</p>
        )}
        {!loading && selected && (
          <ReactSketchCanvas
            ref={canvasRef}
            canvasColor="transparent"
            strokeWidth={4}
            strokeColor="black"
            className="w-full h-full"
            style={{ pointerEvents: 'none' }} // disabilita editing
          />
        )}
      </div>
    </div>
  )
}
