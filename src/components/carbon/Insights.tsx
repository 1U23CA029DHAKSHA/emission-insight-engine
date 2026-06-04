import { insights } from "@/lib/carbon-data";

export function Insights() {
  return (
    <section id="insights" className="border-b border-border bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-30 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 relative">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="font-display text-[11px] uppercase tracking-[0.25em] text-background/50 mb-3">§ 04 · The agent speaks</div>
            <h2 className="font-serif-display text-5xl tracking-tight max-w-xl text-balance">
              Not a dashboard. <em className="text-moss">An analyst.</em>
            </h2>
          </div>
          <button className="font-display text-xs uppercase tracking-widest border border-background/20 px-5 py-3 rounded-sm hover:bg-background/5 transition">
            Ask a question →
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {insights.map((ins) => (
            <article
              key={ins.title}
              className="border border-background/15 rounded-md p-6 hover:border-moss/60 transition group"
            >
              <span className="font-display text-[10px] uppercase tracking-[0.2em] text-moss">
                ◆ {ins.tag}
              </span>
              <h3 className="mt-4 font-serif-display text-xl leading-snug">{ins.title}</h3>
              <p className="mt-4 text-sm text-background/70 leading-relaxed">{ins.body}</p>
              <div className="mt-6 pt-4 border-t border-background/10 font-display text-[10px] uppercase tracking-widest text-background/40 flex justify-between">
                <span>verda-agent · v2.1</span>
                <span className="group-hover:text-moss transition">explore →</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
