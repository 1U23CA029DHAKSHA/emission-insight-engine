import { sources } from "@/lib/carbon-data";
import { motion } from "framer-motion";

export function Sources() {
  return (
    <section id="sources" className="border-b border-border bg-secondary/40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="font-display text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3">§ 03 · Decomposition</div>
            <h2 className="font-serif-display text-5xl tracking-tight">Where it<br/><em className="text-primary">comes from.</em></h2>
            <p className="mt-6 text-muted-foreground max-w-sm">
              Every kilogram traced back to its source activity. The biggest lever is rarely the most obvious one.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-3">
            {sources.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-card border border-border rounded-md p-5 hover:border-foreground/30 transition group"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-xs text-muted-foreground tabular-nums">0{i + 1}</span>
                    <span className="font-serif-display text-2xl">{s.name}</span>
                  </div>
                  <div className="flex items-baseline gap-5">
                    <span className={`font-display text-xs ${s.change > 0 ? "text-accent" : "text-primary"}`}>
                      {s.change > 0 ? "▲" : "▼"} {Math.abs(s.change)}%
                    </span>
                    <span className="font-display text-sm tabular-nums">{s.kg.toLocaleString()} kg</span>
                    <span className="font-serif-display text-3xl w-16 text-right tabular-nums">{s.value}<span className="text-sm text-muted-foreground">%</span></span>
                  </div>
                </div>
                <div className="h-1 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full"
                    style={{ background: s.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
