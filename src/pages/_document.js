// src/pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="it">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* altri meta se vuoi */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
