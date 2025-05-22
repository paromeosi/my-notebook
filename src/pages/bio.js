export default function Bio() {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold">🔗 Bio & Link</h1>
      <p className="mt-4 max-w-lg">
        Ciao, sono <strong>Il Tuo Nome</strong>, appassionato di AI, sviluppo e design minimal.
      </p>
      <ul className="mt-6 space-y-2">
        <li>
          <a href="https://www.linkedin.com/in/tuo-profilo" target="_blank" rel="noopener noreferrer"
             className="underline hover:text-indigo-600">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://example.com/gpt/marketing" target="_blank" rel="noopener noreferrer"
             className="underline hover:text-indigo-600">
            GPT Marketing
          </a>
        </li>
        <li>
          <a href="https://example.com/gpt/coding" target="_blank" rel="noopener noreferrer"
             className="underline hover:text-indigo-600">
            GPT Coding
          </a>
        </li>
      </ul>
    </div>
  );
}
