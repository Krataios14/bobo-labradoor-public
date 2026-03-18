import { useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductTour from "./components/ProductTour";
import DemoCTA from "./components/DemoCTA";
import About from "./components/About";
import Footer from "./components/Footer";
import { useKonamiCode } from "./hooks/useKonamiCode";

const CONFETTI_COLORS = [
  "#6366f1", "#818cf8", "#f59e0b", "#fbbf24",
  "#10b981", "#34d399", "#f43f5e", "#fb7185",
  "#8b5cf6", "#a78bfa", "#0ea5e9", "#38bdf8",
];

function spawnConfetti() {
  const count = 150;
  const container = document.createElement("div");
  document.body.appendChild(container);

  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.className = "confetti-piece";
    const size = Math.random() * 8 + 4;
    const isCircle = Math.random() > 0.5;
    el.style.width = `${size}px`;
    el.style.height = isCircle ? `${size}px` : `${size * 0.4}px`;
    el.style.borderRadius = isCircle ? "50%" : "2px";
    el.style.background = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    el.style.left = `${Math.random() * 100}vw`;
    el.style.top = `${-10 + Math.random() * 20}vh`;
    el.style.setProperty("--confetti-duration", `${1.5 + Math.random() * 2}s`);
    el.style.setProperty("--confetti-spin", `${360 + Math.random() * 720}deg`);
    el.style.animationDelay = `${Math.random() * 0.5}s`;
    container.appendChild(el);
  }

  setTimeout(() => container.remove(), 4000);
}

export default function App() {
  useKonamiCode(useCallback(() => spawnConfetti(), []));

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ProductTour />
        <DemoCTA />
        <About />
      </main>
      <Footer />
    </div>
  );
}
