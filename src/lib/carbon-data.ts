export const monthlyEmissions = [
  { month: "Jan", emissions: 15000, target: 15000 },
  { month: "Feb", emissions: 14500, target: 14750 },
  { month: "Mar", emissions: 14000, target: 14500 },
  { month: "Apr", emissions: 13500, target: 14250 },
  { month: "May", emissions: 13000, target: 14000, predicted: true },
  { month: "Jun", emissions: 12600, target: 13750, predicted: true },
];

export const sources = [
  { name: "Transportation", value: 45, kg: 5850, change: 18, color: "var(--ember)" },
  { name: "Electricity", value: 30, kg: 3900, change: -6, color: "var(--leaf)" },
  { name: "Manufacturing", value: 20, kg: 2600, change: -2, color: "var(--moss)" },
  { name: "Waste", value: 5, kg: 650, change: -12, color: "var(--ink)" },
];

export const inputs = [
  { label: "Office Electricity", value: "5,000", unit: "kWh", factor: "× 0.82", co2: 4100 },
  { label: "Vehicle Distance", value: "12,000", unit: "km", factor: "× 0.21", co2: 2520 },
  { label: "Diesel Consumed", value: "800", unit: "L", factor: "× 2.68", co2: 2144 },
  { label: "Paper Waste", value: "200", unit: "kg", factor: "× 1.05", co2: 210 },
];

export const insights = [
  {
    tag: "Anomaly",
    title: "Transportation emissions rose 18% this month",
    body: "Diesel consumption climbed sharply due to a 22% increase in delivery volume across the southern region. Route consolidation could recover ~340 kg CO₂.",
  },
  {
    tag: "Forecast",
    title: "On track to miss Q2 target by 4.1%",
    body: "Current trajectory projects 12,950 kg CO₂ by June against a 12,400 kg target. Recommended: accelerate the LED retrofit and the EV pilot.",
  },
  {
    tag: "Opportunity",
    title: "Solar offset could cut Scope 2 by 28%",
    body: "A 120 kW rooftop array at the Pune facility would offset ~1,090 kg CO₂/month with a 4.2 year payback at current tariffs.",
  },
];

export const recommendations = [
  { area: "Transport", action: "Consolidate delivery routes via clustering", impact: 340, effort: "Low" },
  { area: "Transport", action: "Pilot 6 electric vans in metro fleet", impact: 1120, effort: "Med" },
  { area: "Electricity", action: "Install LEDs across HQ + 2 plants", impact: 480, effort: "Low" },
  { area: "Electricity", action: "Schedule HVAC shutdown 19:00–06:00", impact: 220, effort: "Low" },
  { area: "Manufacturing", action: "Switch boiler 3 to biomass feedstock", impact: 860, effort: "High" },
];
