import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, ReferenceLine } from "recharts";
import { monthlyEmissions, inputs } from "@/lib/carbon-data";

export function Dashboard() {
  return (
    <section id="dashboard" className="border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="font-display text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3">§ 01 · Trajectory</div>
            <h2 className="font-serif-display text-5xl tracking-tight">Six months, one curve.</h2>
          </div>
          <div className="font-display text-xs text-muted-foreground">
            Scope 1 + 2 + 3 · kg CO₂e · monthly
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-card border border-border rounded-md p-6">
            <div className="h-[340px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyEmissions} margin={{ top: 10, right: 10, bottom: 0, left: -10 }}>
                  <defs>
                    <linearGradient id="emArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.42 0.11 155)" stopOpacity={0.4} />
                      <stop offset="100%" stopColor="oklch(0.42 0.11 155)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="oklch(0.86 0.02 120)" strokeDasharray="2 4" vertical={false} />
                  <XAxis dataKey="month" stroke="oklch(0.45 0.02 150)" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="oklch(0.45 0.02 150)" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{
                      background: "oklch(0.18 0.02 150)",
                      border: "none",
                      borderRadius: 4,
                      color: "oklch(0.967 0.018 95)",
                      fontSize: 12,
                    }}
                  />
                  <ReferenceLine y={12000} stroke="oklch(0.68 0.18 50)" strokeDasharray="4 4" label={{ value: "Target 12,000", fill: "oklch(0.68 0.18 50)", fontSize: 10, position: "insideTopRight" }} />
                  <Area type="monotone" dataKey="emissions" stroke="oklch(0.42 0.11 155)" strokeWidth={2.5} fill="url(#emArea)" />
                  <Area type="monotone" dataKey="target" stroke="oklch(0.62 0.14 145)" strokeDasharray="3 3" strokeWidth={1.5} fill="none" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-5 pt-5 border-t border-border flex gap-6 font-display text-[11px] uppercase tracking-widest text-muted-foreground">
              <span className="flex items-center gap-2"><span className="size-2 rounded-full bg-primary" />Actual</span>
              <span className="flex items-center gap-2"><span className="size-2 rounded-full bg-moss" />Target curve</span>
              <span className="flex items-center gap-2"><span className="size-2 rounded-full bg-accent" />Reduction goal</span>
              <span className="ml-auto text-foreground">Predicted May–Jun</span>
            </div>
          </div>

          <div className="bg-foreground text-background rounded-md p-6">
            <div className="font-display text-[10px] uppercase tracking-[0.25em] text-background/60 mb-5">
              § 02 · Inputs ingested
            </div>
            <ul className="space-y-4">
              {inputs.map((i) => (
                <li key={i.label} className="border-b border-background/10 pb-4 last:border-0">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm">{i.label}</span>
                    <span className="font-display text-xs text-background/60">{i.factor}</span>
                  </div>
                  <div className="flex justify-between items-baseline mt-1">
                    <span className="font-serif-display text-2xl">
                      {i.value}<span className="text-sm text-background/60 ml-1">{i.unit}</span>
                    </span>
                    <span className="font-display text-sm text-moss">{i.co2.toLocaleString()} kg</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
