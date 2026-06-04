export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-7 rounded-sm gradient-leaf grid place-items-center">
            <span className="text-cream font-display text-[11px] font-bold">CO₂</span>
          </div>
          <span className="font-display text-sm tracking-tight">verda<span className="text-primary">/agent</span></span>
        </div>
        <nav className="hidden md:flex items-center gap-8 font-display text-xs uppercase tracking-widest text-muted-foreground">
          <a href="#dashboard" className="hover:text-foreground transition">Dashboard</a>
          <a href="#sources" className="hover:text-foreground transition">Sources</a>
          <a href="#insights" className="hover:text-foreground transition">AI Insights</a>
          <a href="#actions" className="hover:text-foreground transition">Actions</a>
        </nav>
        <button className="font-display text-xs uppercase tracking-widest bg-primary text-primary-foreground px-4 py-2 rounded-sm hover:bg-primary/90 transition">
          Connect Data →
        </button>
      </div>
    </header>
  );
}
