import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";
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
  },
  {
    icon: ShieldCheck,
    title: "UCLA Email Verification",
    description:
      "Every applicant is verified with their UCLA email. Know you're reviewing real UCLA students every time.",
  },
  {
    icon: LayoutDashboard,
    title: "Researcher Dashboard",
    description:
      "One clean control center. Track every post, applicant count, and status at a glance — no more spreadsheet chaos.",
  },
  {
    icon: ListChecks,
    title: "Organized Review Pipeline",
    description:
      "Move candidates through stages seamlessly. Review, shortlist, and manage applicants with an intuitive workflow.",
  },
  {
    icon: BarChart3,
    title: "Applicant Analytics",
    description:
      "See application trends, major breakdowns, and engagement metrics. Make data-informed recruiting decisions.",
  },
  {
    icon: Mail,
    title: "Streamlined Communication",
    description:
      "Reach candidates directly from the platform. No more lost email threads or forgotten follow-ups.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-gray-50 dark:bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <ScrambleText
            text="Features"
            className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400"
          />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
            Everything your lab needs
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto mt-4">
            Purpose-built tools that replace the patchwork of forms,
            spreadsheets, and email threads.
          </p>
        </div>

        {/* Feature grid */}
        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
              }}
            >
              <div
                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 border-t-2 border-t-transparent hover:border-t-indigo-600 dark:hover:border-t-indigo-400 rounded-xl p-6 hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 dark:hover:bg-gray-800/80 transition-all duration-200"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const rx = ((y - rect.height / 2) / (rect.height / 2)) * -3;
                  const ry = ((x - rect.width / 2) / (rect.width / 2)) * 3;
                  e.currentTarget.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg)";
                }}
                style={{ transition: "transform 0.15s ease-out" }}
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center mb-5">
                  <f.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
