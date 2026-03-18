import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  GraduationCap,
  Building2,
} from "lucide-react";

const features = [
  "Centralized applications",
  "UCLA email verification",
  "Organized review pipeline",
  "Structured questionnaires",
];

const stats = [
  { icon: Building2, value: 4, suffix: "+", label: "Verified Labs" },
  { icon: GraduationCap, value: 48, suffix: "+", label: "Registered Students" },
  { icon: Users, value: 20, suffix: "+", label: "Majors Represented" },
];

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [scale, setScale] = useState(1);
  const ref = useRef<HTMLParagraphElement>(null);
  const hasAnimated = useRef(false);
  const boosted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const duration = 1400;
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4); // easeOutQuart
            setCount(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  const handleClick = () => {
    if (boosted.current) return;
    boosted.current = true;

    // Rocket up to a ridiculous number
    const peak = value * 100 + Math.floor(Math.random() * 900);
    setCount(peak);
    setScale(1.3);
    setTimeout(() => setScale(1), 200);

    // After a beat, animate back down
    setTimeout(() => {
      const start = performance.now();
      const duration = 1000;
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(peak - eased * (peak - value)));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      setTimeout(() => { boosted.current = false; }, 1200);
    }, 800);
  };

  return (
    <p
      ref={ref}
      onClick={handleClick}
      className="text-2xl font-semibold text-gray-900 dark:text-white tabular-nums cursor-pointer select-none"
      style={{ transform: `scale(${scale})`, transition: "transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
    >
      {count}{suffix}
    </p>
  );
}

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 bg-white dark:bg-gray-950">
      {/* Subtle radial gradient background glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-indigo-50/30 dark:bg-indigo-500/5 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-3xl">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-medium mb-8 dark:bg-indigo-500/10 dark:border-indigo-500/20 dark:text-indigo-400">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Built with UCLA labs
            </span>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-6">
              A simpler way to{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                recruit undergrads
              </span>{" "}
              for your lab.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 leading-relaxed mb-8 max-w-2xl">
              Stop juggling inbox threads, Google Forms, and spreadsheets. Post
              openings, collect structured applications, and review every candidate
              from one organized dashboard built for UCLA labs.
            </p>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-3 mb-10">
              {features.map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-600 dark:bg-gray-800/50 dark:border-gray-700/50 dark:text-gray-400"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  {f}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-16">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white px-6 py-3 rounded-lg font-medium transition-colors shimmer"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left - rect.width / 2;
                  const y = e.clientY - rect.top - rect.height / 2;
                  e.currentTarget.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translate(0px, 0px)";
                }}
                style={{ transition: "transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
              >
                Get started for free
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#product-tour"
                className="inline-flex items-center gap-2 px-6 py-3 font-medium text-gray-600 dark:text-gray-400 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                See how it works
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                    <p className="text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500">
                      {s.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating dashboard mockup (decorative) */}
          <div className="hidden xl:block absolute top-1/2 -translate-y-1/2 right-6 w-[480px]" style={{ transform: `translateY(${scrollY * -0.08}px)` }}>
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl dark:shadow-2xl dark:shadow-black/30 overflow-hidden">
              {/* Browser-style top bar */}
              <div className="flex items-center px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700" />
                  <span className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700" />
                  <span className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700" />
                </div>
                <span className="flex-1 text-center text-[11px] text-gray-400">
                  app.labradoor.org
                </span>
              </div>
              <div className="border-b border-gray-100 dark:border-gray-800" />

              {/* Mock content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-900 dark:text-gray-100">
                    Your Dashboard
                  </p>
                  <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                    Researcher
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Applications", val: "7" },
                    { label: "Interviews", val: "16" },
                    { label: "Openings", val: "3" },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 p-3"
                    >
                      <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {m.val}
                      </p>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {[
                    {
                      title: "ML Research Assistant",
                      status: "Active",
                      color: "bg-emerald-500",
                    },
                    {
                      title: "Bayesian Causal Inference",
                      status: "Active",
                      color: "bg-emerald-500",
                    },
                    {
                      title: "NLP Data Annotation",
                      status: "Draft",
                      color: "bg-yellow-400",
                    },
                  ].map((post) => (
                    <div
                      key={post.title}
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg border border-gray-100 dark:border-gray-800"
                    >
                      <span className="text-sm text-gray-700 dark:text-gray-100">
                        {post.title}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${post.color}`}
                        />
                        {post.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
