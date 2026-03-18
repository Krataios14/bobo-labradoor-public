import { useState, useEffect, useRef } from "react";
import { Menu, X, FlaskConical } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? window.scrollY / totalHeight : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [bubbles, setBubbles] = useState<{ id: number; left: number; size: number; delay: number }[]>([]);
  const bubbleId = useRef(0);

  const spawnBubbles = () => {
    const newBubbles = Array.from({ length: 4 }, () => ({
      id: bubbleId.current++,
      left: 6 + Math.random() * 20, // px from left of the logo container
      size: 3 + Math.random() * 4,
      delay: Math.random() * 0.2,
    }));
    setBubbles((prev) => [...prev, ...newBubbles]);
    setTimeout(() => {
      setBubbles((prev) => prev.filter((b) => !newBubbles.includes(b)));
    }, 1000);
  };

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
        <a href="#" className="relative flex items-center gap-2.5" onMouseEnter={spawnBubbles}>
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
            <FlaskConical className="w-4.5 h-4.5 text-white" />
          </div>
          {bubbles.map((b) => (
            <div
              key={b.id}
              className="bubble bg-indigo-400/60 dark:bg-indigo-300/50"
              style={{
                width: b.size,
                height: b.size,
                left: b.left,
                bottom: 8,
                animationDelay: `${b.delay}s`,
              }}
            />
          ))}
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
