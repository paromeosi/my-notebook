import '../styles/globals.css'
import { useState } from 'react'
import Nav from '../components/Nav'

export default function MyApp({ Component, pageProps }) {
  const [strokeColor, setStrokeColor] = useState('#000000')
  const [showBio, setShowBio] = useState(false)

  return (
    <div className="flex flex-col h-screen">
      <Nav
        onColorChange={setStrokeColor}
        onBioClick={() => setShowBio(true)}
      />

      <main className="flex-1 overflow-hidden relative">
        <Component
          {...pageProps}
          strokeColor={strokeColor}
          strokeWidth={4}
        />

        {showBio && (
          <div
            className="absolute inset-0 bg-yellow-50 flex flex-col items-center justify-center p-6 text-center z-50"
            onClick={() => setShowBio(false)}
          >
            <h1 className="text-3xl font-bold mb-4">
              Francesco Di Cecca (b. 1990)
            </h1>
            <p className="mb-6">
              Nato a Gaeta nel 1990 e ora vivo a Milano. Il resto è sul web.
            </p>
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
            <p className="mt-6 text-sm text-gray-600">
              Clicca per tornare a scrivere
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
