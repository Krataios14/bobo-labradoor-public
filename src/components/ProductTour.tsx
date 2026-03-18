import { useState } from "react";
import ScrambleText from "./ScrambleText";
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
        { label: "New", count: 12, color: "bg-blue-500", barColor: "bg-blue-500/60" },
        { label: "Shortlisted", count: 5, color: "bg-amber-500", barColor: "bg-amber-500/60" },
        { label: "Interview", count: 3, color: "bg-violet-500", barColor: "bg-violet-500/60" },
        { label: "Accepted", count: 1, color: "bg-emerald-500", barColor: "bg-emerald-500/60" },
      ],
    },
  },
];

export default function ProductTour() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section id="product-tour" className="bg-white dark:bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <ScrambleText
            text="How It Works"
            className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400 mb-4 inline-block"
          />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Three steps. Zero headaches.
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
            Go from posting a position to reviewing applicants in minutes, not
            weeks.
          </p>
        </div>

        {/* Step selector */}
        <div className="flex justify-center gap-2 mb-12">
          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                active === i
                  ? "text-white"
                  : "text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {active === i && (
                <motion.div
                  layoutId="active-step"
                  className="absolute inset-0 bg-indigo-600 dark:bg-indigo-500 rounded-lg"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <s.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{s.title}</span>
                <span className="sm:hidden">Step {s.step}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                  {step.step}
                </span>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {step.title}
                </h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg mb-6">
                {step.description}
              </p>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm text-emerald-600 dark:text-emerald-400">
                  No setup required — works out of the box
                </span>
              </div>
            </div>

            {/* Mockup */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm dark:shadow-none p-6">
              {step.step === 1 && step.mockup.fields && (
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    {step.mockup.heading}
                  </p>
                  <div className="space-y-3">
                    {step.mockup.fields.map((f) => (
                      <div key={f.label}>
                        <label className="text-xs text-gray-400 dark:text-gray-500 block mb-1">
                          {f.label}
                        </label>
                        <div className="px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300">
                          {f.value}
                        </div>
                      </div>
                    ))}
                    <button className="w-full mt-2 py-2.5 rounded-lg bg-indigo-600 dark:bg-indigo-500 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors">
                      Publish Position
                    </button>
                  </div>
                </div>
              )}

              {step.step === 2 && step.mockup.applicants && (
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    {step.mockup.heading}
                  </p>
                  <div>
                    {step.mockup.applicants.map((a) => (
                      <div
                        key={a.name}
                        className="flex items-center justify-between px-3 py-3 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400 flex items-center justify-center text-xs font-bold">
                            {a.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <p className="text-sm text-gray-900 dark:text-gray-100 font-medium">
                              {a.name}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-500">
                              {a.major} · {a.year}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs text-gray-400 dark:text-gray-600">
                          {a.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step.step === 3 && step.mockup.columns && (
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    {step.mockup.heading}
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    {step.mockup.columns.map((c) => (
                      <div
                        key={c.label}
                        className="rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 p-3 text-center"
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${c.color} mx-auto mb-2`}
                        />
                        <p className="text-xl font-bold text-gray-900 dark:text-gray-100">
                          {c.count}
                        </p>
                        <p className="text-[10px] text-gray-500 dark:text-gray-500 mt-0.5">
                          {c.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* Visual pipeline */}
                  <div className="mt-4 flex items-center gap-1">
                    <div className="h-1.5 rounded-full bg-blue-500/60 flex-[12]" />
                    <div className="h-1.5 rounded-full bg-amber-500/60 flex-[5]" />
                    <div className="h-1.5 rounded-full bg-violet-500/60 flex-[3]" />
                    <div className="h-1.5 rounded-full bg-emerald-500/60 flex-[1]" />
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
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActive(Math.min(steps.length - 1, active + 1))}
            disabled={active === steps.length - 1}
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
