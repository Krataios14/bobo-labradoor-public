import { motion } from "framer-motion";
import {
  FileText,
  ShieldCheck,
  LayoutDashboard,
  ListChecks,
  BarChart3,
  Mail,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Structured Applications",
    description:
      "Replace scattered Google Forms with a unified application system. Custom questionnaires tailored to your lab's needs.",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    icon: ShieldCheck,
    title: "UCLA Email Verification",
    description:
      "Every applicant is verified with their UCLA email. Know you're reviewing real UCLA students every time.",
    gradient: "from-emerald-400 to-emerald-600",
  },
  {
    icon: LayoutDashboard,
    title: "Researcher Dashboard",
    description:
      "One clean control center. Track every post, applicant count, and status at a glance — no more spreadsheet chaos.",
    gradient: "from-accent-400 to-accent-600",
  },
  {
    icon: ListChecks,
    title: "Organized Review Pipeline",
    description:
      "Move candidates through stages seamlessly. Review, shortlist, and manage applicants with an intuitive workflow.",
    gradient: "from-violet-400 to-violet-600",
  },
  {
    icon: BarChart3,
    title: "Applicant Analytics",
    description:
      "See application trends, major breakdowns, and engagement metrics. Make data-informed recruiting decisions.",
    gradient: "from-amber-400 to-amber-600",
  },
  {
    icon: Mail,
    title: "Streamlined Communication",
    description:
      "Reach candidates directly from the platform. No more lost email threads or forgotten follow-ups.",
    gradient: "from-rose-400 to-rose-600",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section id="features" className="relative py-28 overflow-hidden">
      {/* Section bg accent */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[400px] bg-accent-500/5 rounded-full blur-[128px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-400 mb-4"
          >
            Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Everything your lab needs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-xl mx-auto"
          >
            Purpose-built tools that replace the patchwork of forms,
            spreadsheets, and email threads.
          </motion.p>
        </div>

        {/* Feature grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-7 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
            >
              <div
                className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}
              >
                <f.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
