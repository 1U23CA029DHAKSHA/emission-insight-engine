import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/carbon/Nav";
import { Hero } from "@/components/carbon/Hero";
import { Dashboard } from "@/components/carbon/Dashboard";
import { Sources } from "@/components/carbon/Sources";
import { Insights } from "@/components/carbon/Insights";
import { Actions } from "@/components/carbon/Actions";
import { Footer } from "@/components/carbon/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Verda — AI Carbon Emission Monitoring Agent" },
      { name: "description", content: "An AI sustainability analyst that measures, explains, and reduces your company's carbon emissions across Scopes 1–3." },
      { property: "og:title", content: "Verda — AI Carbon Emission Monitoring Agent" },
      { property: "og:description", content: "Measure, analyze, and reduce your carbon footprint with an AI agent that thinks like a sustainability analyst." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Dashboard />
        <Sources />
        <Insights />
        <Actions />
      </main>
      <Footer />
    </div>
  );
}
