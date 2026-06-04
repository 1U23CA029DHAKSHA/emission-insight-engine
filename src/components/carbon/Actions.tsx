import { recommendations } from "@/lib/carbon-data";

export function Actions() {
  return (
    <section id="actions" className="border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-12">
          <div className="lg:col-span-7">
            <div className="font-display text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3">§ 05 · Action queue</div>
            <h2 className="font-serif-display text-5xl tracking-tight">
              Ranked by <em className="text-primary">kg saved per dollar spent.</em>
            </h2>
          </div>
          <div className="lg:col-span-5 text-muted-foreground">
            Five interventions modeled against your operational footprint. Total potential reduction: <span className="text-foreground font-display">3,020 kg CO₂/mo</span>.
          </div>
        </div>

        <div className="border-t border-border">
          {recommendations.map((r, i) => (
            <div
              key={r.action}
              className="grid grid-cols-12 gap-4 py-6 border-b border-border items-center hover:bg-secondary/40 transition px-2 -mx-2 rounded-sm"
            >
              <span className="col-span-1 font-display text-xs text-muted-foreground tabular-nums">
                /{String(i + 1).padStart(2, "0")}
              </span>
              <span className="col-span-2 font-display text-[10px] uppercase tracking-widest">
                <span className="px-2 py-1 bg-secondary rounded-sm">{r.area}</span>
              </span>
              <span className="col-span-5 font-serif-display text-lg">{r.action}</span>
              <span className="col-span-2 font-display text-xs text-muted-foreground">
                Effort · <span className="text-foreground">{r.effort}</span>
              </span>
              <span className="col-span-2 text-right font-serif-display text-2xl tabular-nums text-primary">
                −{r.impact}<span className="text-xs text-muted-foreground ml-1">kg/mo</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
