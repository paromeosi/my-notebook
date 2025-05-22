// src/pages/_app.js
import '../styles/globals.css'
import { useState } from 'react'
import Nav from '../components/Nav'

export default function MyApp({ Component, pageProps }) {
  const [showBio, setShowBio] = useState(false)

  return (
    <>
      <Nav onBioClick={() => setShowBio(true)} />

      {/* Sposta il contenuto sotto la navbar fissa di 4rem */}
      <main className="pt-16 flex-1">
        <Component {...pageProps} />
      </main>

      {showBio && (
        <div
          className="fixed inset-0 bg-yellow-50 flex flex-col items-center justify-center p-6 text-center z-50"
          onClick={() => setShowBio(false)}
        >
          <h1 className="text-3xl font-bold mb-4">Francesco Di Cecca (b. 1990)</h1>
          <p className="mb-6">Nato a Gaeta, vivo a Milano. Il resto è sul web.</p>
          <ul className="space-y-2">
            <li>
              🔗{' '}
              <a
                href="https://www.linkedin.com/in/francesco-di-cecca/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-indigo-600"
              >
                LinkedIn
              </a>
            </li>
            <li>
              📷{' '}
              <a
                href="https://instagram.com/piccione"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-indigo-600"
              >
                @piccione (Instagram)
              </a>
            </li>
            <li>
              🐦{' '}
              <a
                href="https://x.com/piccione"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-indigo-600"
              >
                @piccione (X)
              </a>
            </li>
            <li>
              🤖{' '}
              <a
                href="https://chatgpt.com/g/g-CQm7LOrMb-dream-explorer"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-indigo-600"
              >
                Dream Explorer GPT
              </a>
            </li>
          </ul>
          <p className="mt-6 text-sm text-gray-700">
            Clicca fuori per chiudere e tornare alla pagina.
          </p>
        </div>
      )}
    </>
  )
}
