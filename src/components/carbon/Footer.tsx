export function Footer() {
  return (
    <footer className="bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-end">
          <h3 className="font-serif-display text-4xl md:text-5xl tracking-tight text-balance">
            Ready to put a number on your <em className="text-primary">net-zero</em>?
          </h3>
          <div className="flex md:justify-end gap-3">
            <button className="font-display text-xs uppercase tracking-widest bg-foreground text-background px-6 py-3.5 rounded-sm">
              Start free trial
            </button>
            <button className="font-display text-xs uppercase tracking-widest border border-border px-6 py-3.5 rounded-sm">
              Book a demo
            </button>
          </div>
        </div>
        <div className="mt-16 pt-6 border-t border-border flex justify-between font-display text-[11px] uppercase tracking-widest text-muted-foreground flex-wrap gap-4">
          <span>© 2026 Verda · AI Sustainability Agent</span>
          <span>ESG · GHG Protocol · Scope 1–3 compliant</span>
        </div>
      </div>
    </footer>
  );
}
