import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 grain opacity-60 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-8">
          <div className="font-display text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-6 flex items-center gap-3">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            Live · Reporting period · May 2026
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif-display text-[clamp(2.6rem,7vw,6.5rem)] leading-[0.95] tracking-tight text-balance"
          >
            Your carbon, <em className="text-primary not-italic">read</em><br />
            and <em className="text-primary not-italic">reduced</em> by an agent.
          </motion.h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground text-balance">
            Verda ingests your operations data, calculates emissions across Scopes 1–3, explains what changed, and recommends the cheapest path to your reduction target.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <button className="font-display text-xs uppercase tracking-widest bg-foreground text-background px-6 py-3.5 rounded-sm hover:opacity-90 transition">
              Run Analysis
            </button>
            <button className="font-display text-xs uppercase tracking-widest border border-border px-6 py-3.5 rounded-sm hover:bg-secondary transition">
              View live dashboard ↓
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-4 bg-foreground text-background p-7 rounded-md ring-leaf"
        >
          <div className="font-display text-[10px] uppercase tracking-[0.25em] text-background/60">
            Total · This month
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="font-serif-display text-6xl leading-none">13,000</span>
            <span className="font-display text-sm text-background/60">kg CO₂e</span>
          </div>
          <div className="mt-3 flex items-center gap-2 text-sm text-moss">
            <span>▼ 13.3%</span>
            <span className="text-background/50">vs Jan baseline</span>
          </div>
          <div className="mt-8 h-px bg-background/15" />
          <div className="mt-6 grid grid-cols-2 gap-5 font-display text-xs">
            <div>
              <div className="text-background/50 uppercase tracking-widest text-[10px]">Goal</div>
              <div className="mt-1.5 text-background">12,000 kg</div>
            </div>
            <div>
              <div className="text-background/50 uppercase tracking-widest text-[10px]">Progress</div>
              <div className="mt-1.5 text-background">65%</div>
            </div>
          </div>
          <div className="mt-3 h-1.5 rounded-full bg-background/15 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "65%" }}
              transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="h-full bg-moss"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
