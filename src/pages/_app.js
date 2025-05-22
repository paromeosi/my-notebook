// src/pages/_app.js
import '../styles/globals.css'
import Nav from '../components/Nav'

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col h-screen">
      <Nav />
      <main className="flex-1 overflow-hidden">
        <Component {...pageProps} />
      </main>
    </div>
  )
}
