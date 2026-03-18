import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import DogLogo from "./DogLogo";

const PAW_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="17" rx="5" ry="4"/><circle cx="7" cy="10" r="2.5"/><circle cx="17" cy="10" r="2.5"/><circle cx="4" cy="14" r="2"/><circle cx="20" cy="14" r="2"/></svg>`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [wiggle, setWiggle] = useState(false);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const pawId = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? window.scrollY / totalHeight : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const spawnPaws = useCallback(() => {
    if (wiggle) return;
    setWiggle(true);
    setTimeout(() => setWiggle(false), 700);

    const logo = logoRef.current;
    if (!logo) return;

    // Spawn 3 small paw prints trailing to the right of the logo
    for (let i = 0; i < 3; i++) {
      const paw = document.createElement("div");
      paw.className = "paw-print text-indigo-400/50 dark:text-indigo-300/40";
      paw.innerHTML = PAW_SVG;
      paw.style.width = "12px";
      paw.style.height = "12px";
      paw.style.left = `${80 + i * 18}px`;
      paw.style.top = `${4 + (i % 2 === 0 ? -3 : 3)}px`;
      paw.style.setProperty("--paw-rot", `${-20 + i * 15}deg`);
      paw.style.animationDelay = `${i * 0.12}s`;
      paw.id = `paw-${pawId.current++}`;
      logo.appendChild(paw);
      setTimeout(() => paw.remove(), 1100);
    }
  }, [wiggle]);

  const links = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#product-tour" },
    { label: "About", href: "#about" },
  ];

  const linkClasses =
    "text-sm text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200 transition-colors";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-950 transition-colors duration-200 ${
        scrolled
          ? "border-b border-gray-200 dark:border-gray-800 shadow-sm"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          ref={logoRef}
          href="#"
          className="relative flex items-center gap-2.5"
          onMouseEnter={spawnPaws}
        >
          <div className={`w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center ${wiggle ? "dog-wiggle" : ""}`}>
            <DogLogo className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
            labradoor
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={linkClasses}>
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#demo" className={linkClasses}>
            Request Demo
          </a>
          <ThemeToggle />
          <a
            href="#"
            className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white text-sm font-medium rounded-lg px-4 py-2 transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 text-sm text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200 rounded-lg transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <hr className="border-gray-200 dark:border-gray-800 my-2" />
              <a
                href="#demo"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200 transition-colors"
              >
                Request Demo
              </a>
              <div className="px-3 py-2">
                <ThemeToggle />
              </div>
              <a
                href="#"
                onClick={() => setMobileOpen(false)}
                className="mt-1 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white text-sm font-medium rounded-lg px-4 py-2.5 text-center transition-colors"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll progress indicator */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-indigo-500/30 dark:bg-indigo-400/20"
        style={{ width: `${scrollProgress * 100}%` }}
      />
    </nav>
  );
}
