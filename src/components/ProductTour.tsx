import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Users,
  LayoutDashboard,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const steps = [
  {
    step: 1,
    icon: FileText,
    title: "Post an Opening",
    description:
      "Create a structured research position posting with custom questions, requirements, and deadlines. Your listing goes live to all verified UCLA students instantly.",
    mockup: {
      heading: "Create New Position",
      fields: [
        { label: "Position Title", value: "ML Research Assistant — NLP Lab" },
        { label: "Department", value: "Computer Science" },
        { label: "Hours / Week", value: "10–15 hours" },
        { label: "Start Date", value: "Fall 2026" },
      ],
    },
  },
  {
    step: 2,
    icon: Users,
    title: "Collect Applications",
    description:
      "Students apply directly through Labradoor with verified UCLA credentials. Applications are organized, timestamped, and ready for review — no inbox digging.",
    mockup: {
      heading: "Incoming Applications",
      applicants: [
        {
          name: "Sarah Chen",
          major: "Computer Science",
          year: "3rd Year",
          time: "2h ago",
        },
        {
          name: "Marcus Rivera",
          major: "Statistics",
          year: "2nd Year",
          time: "5h ago",
        },
        {
          name: "Anika Patel",
          major: "Mathematics",
          year: "4th Year",
          time: "1d ago",
        },
      ],
    },
  },
  {
    step: 3,
    icon: LayoutDashboard,
    title: "Review & Decide",
    description:
      "Move candidates through your pipeline — review responses, compare qualifications, and make offers. Everything tracked in one dashboard with full context.",
    mockup: {
      heading: "Review Pipeline",
      columns: [
        { label: "New", count: 12, color: "bg-blue-400" },
        { label: "Shortlisted", count: 5, color: "bg-amber-400" },
        { label: "Interview", count: 3, color: "bg-violet-400" },
        { label: "Accepted", count: 1, color: "bg-emerald-400" },
      ],
    },
  },
];

export default function ProductTour() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section id="product-tour" className="relative py-28 overflow-hidden">
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[128px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-400 mb-4"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Three steps. Zero headaches.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-xl mx-auto"
          >
            Go from posting a position to reviewing applicants in minutes, not
            weeks.
          </motion.p>
        </div>

        {/* Step selector */}
        <div className="flex justify-center gap-2 mb-12">
          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                active === i
                  ? "bg-accent-500/15 border border-accent-500/30 text-accent-400"
                  : "bg-white/5 border border-white/5 text-slate-400 hover:text-slate-300 hover:bg-white/[0.07]"
              }`}
            >
              <s.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{s.title}</span>
              <span className="sm:hidden">Step {s.step}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-500/15 text-accent-400 text-sm font-bold">
                  {step.step}
                </span>
                <h3 className="text-2xl font-bold text-white">{step.title}</h3>
              </div>
              <p className="text-slate-400 leading-relaxed text-lg mb-6">
                {step.description}
              </p>
              <div className="flex items-center gap-2 text-sm text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                No setup required — works out of the box
              </div>
            </div>

            {/* Mockup */}
            <div className="rounded-2xl border border-white/10 bg-navy-900/60 backdrop-blur-sm p-6 glow">
              {/* Window chrome */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
              </div>

              {step.step === 1 && step.mockup.fields && (
                <div>
                  <p className="text-sm font-semibold text-white mb-4">
                    {step.mockup.heading}
                  </p>
                  <div className="space-y-3">
                    {step.mockup.fields.map((f) => (
                      <div key={f.label}>
                        <label className="text-[11px] text-slate-500 uppercase tracking-wider block mb-1">
                          {f.label}
                        </label>
                        <div className="px-3 py-2 rounded-lg bg-white/5 border border-white/5 text-sm text-slate-300">
                          {f.value}
                        </div>
                      </div>
                    ))}
                    <button className="w-full mt-2 py-2.5 rounded-xl bg-accent-500 text-white text-sm font-semibold hover:bg-accent-400 transition-colors">
                      Publish Position
                    </button>
                  </div>
                </div>
              )}

              {step.step === 2 && step.mockup.applicants && (
                <div>
                  <p className="text-sm font-semibold text-white mb-4">
                    {step.mockup.heading}
                  </p>
                  <div className="space-y-2">
                    {step.mockup.applicants.map((a) => (
                      <div
                        key={a.name}
                        className="flex items-center justify-between px-3 py-3 rounded-lg bg-white/[0.02] border border-white/5"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center text-white text-xs font-bold">
                            {a.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <p className="text-sm text-white font-medium">
                              {a.name}
                            </p>
                            <p className="text-xs text-slate-500">
                              {a.major} · {a.year}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs text-slate-500">{a.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step.step === 3 && step.mockup.columns && (
                <div>
                  <p className="text-sm font-semibold text-white mb-4">
                    {step.mockup.heading}
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    {step.mockup.columns.map((c) => (
                      <div
                        key={c.label}
                        className="rounded-lg bg-white/[0.02] border border-white/5 p-3 text-center"
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${c.color} mx-auto mb-2`}
                        />
                        <p className="text-xl font-bold text-white">
                          {c.count}
                        </p>
                        <p className="text-[10px] text-slate-500 mt-0.5">
                          {c.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* Visual pipeline */}
                  <div className="mt-4 flex items-center gap-1">
                    <div className="h-1.5 rounded-full bg-blue-400/40 flex-[12]" />
                    <div className="h-1.5 rounded-full bg-amber-400/40 flex-[5]" />
                    <div className="h-1.5 rounded-full bg-violet-400/40 flex-[3]" />
                    <div className="h-1.5 rounded-full bg-emerald-400/40 flex-[1]" />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Nav arrows */}
        <div className="flex justify-center gap-3 mt-10">
          <button
            onClick={() => setActive(Math.max(0, active - 1))}
            disabled={active === 0}
            className="p-2 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActive(Math.min(steps.length - 1, active + 1))}
            disabled={active === steps.length - 1}
            className="p-2 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
