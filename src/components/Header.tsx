export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950 shadow-lg shadow-zinc-950/40 mx-auto flex h-14 w-full items-center justify-between px-4">
      <a href="/" className="flex items-center gap-2">
        <span className="text-lg font-bold tracking-tight text-zinc-50">
          Core<span className="text-cyan-400">Lab</span>
        </span>
      </a>
    </header>
  )
}
