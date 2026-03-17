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
  {
    icon: Building2,
    value: "4+",
    label: "Verified Labs",
    color: "from-accent-400 to-accent-600",
  },
  {
    icon: GraduationCap,
    value: "48+",
    label: "Registered Students",
    color: "from-emerald-400 to-emerald-500",
  },
  {
    icon: Users,
    value: "20+",
    label: "Majors Represented",
    color: "from-gold-400 to-gold-500",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent-500/8 rounded-full blur-[128px]" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-accent-600/5 rounded-full blur-[96px]" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
              Built with UCLA labs
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6"
          >
            A simpler way to{" "}
            <span className="gradient-text">recruit undergrads</span> for your
            lab.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl"
          >
            Stop juggling inbox threads, Google Forms, and spreadsheets. Post
            openings, collect structured applications, and review every candidate
            from one organized dashboard built for UCLA labs.
          </motion.p>

          {/* Feature chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {features.map((f) => (
              <span
                key={f}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {f}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <a
              href="#"
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white rounded-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-accent-500/25"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent-500 to-accent-600" />
              <span className="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                Get started for free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
            <a
              href="#product-tour"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-slate-300 hover:text-white rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
            >
              See how it works
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-8"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg`}
                >
                  <s.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating dashboard mockup (decorative) */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotateY: -8 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden xl:block absolute top-1/2 -translate-y-1/2 right-0 w-[480px]"
          style={{ perspective: "1200px" }}
        >
          <div className="relative rounded-2xl border border-white/10 bg-navy-900/60 backdrop-blur-sm p-6 glow shadow-2xl">
            {/* Mock dashboard header */}
            <div className="flex items-center gap-2 mb-5">
              <div className="w-3 h-3 rounded-full bg-red-400/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
              <div className="w-3 h-3 rounded-full bg-green-400/60" />
              <span className="ml-3 text-xs text-slate-500 font-mono">
                app.labradoor.org
              </span>
            </div>
            {/* Mock content */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">
                  Your Dashboard
                </p>
                <span className="text-xs text-accent-400 font-medium">
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
                    className="rounded-xl bg-white/5 border border-white/5 p-3"
                  >
                    <p className="text-2xl font-bold text-white">{m.val}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
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
                    color: "bg-emerald-400",
                  },
                  {
                    title: "Bayesian Causal Inference",
                    status: "Active",
                    color: "bg-emerald-400",
                  },
                  {
                    title: "NLP Data Annotation",
                    status: "Draft",
                    color: "bg-yellow-400",
                  },
                ].map((post) => (
                  <div
                    key={post.title}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-white/[0.02] border border-white/5"
                  >
                    <span className="text-sm text-slate-300">{post.title}</span>
                    <span
                      className={`flex items-center gap-1.5 text-xs font-medium text-slate-400`}
                    >
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
        </motion.div>
      </div>
    </section>
  );
}
