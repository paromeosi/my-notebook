// src/pages/bio.js
import Link from 'next/link'

export default function Bio() {
  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Ciao, sono Francesco Di Cecca</h1>
      <p>
        Non sono uno sviluppatore professionista, ma un appassionato di tecnologia:
        ho un lavoro “tradizionale” e questo progetto è il mio hobby.  
        Qui sotto trovi i link ai miei GPT preferiti e al mio profilo LinkedIn.
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
            Francesco su LinkedIn
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
    </div>
  )
}
