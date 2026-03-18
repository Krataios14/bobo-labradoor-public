import { motion } from "framer-motion";
import { Heart, MessageCircle, Handshake } from "lucide-react";
import ScrambleText from "./ScrambleText";

const values = [
  {
    icon: Heart,
    title: "Built by researchers",
    description:
      "Created by UCLA student researchers who experienced firsthand the challenges of undergraduate research recruitment.",
  },
  {
    icon: MessageCircle,
    title: "Feedback-driven",
    description:
      "We've spoken directly to PIs all across campus to understand their pain points and designed Labradoor to address them directly.",
  },
  {
    icon: Handshake,
    title: "Equal access",
    description:
      "Providing undergraduates with unrestrained, seamless access to diverse research opportunities across campus.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ScrambleText
              text="Who We Are"
              className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400 mb-4 inline-block"
            />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              By UCLA researchers,{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                for UCLA research.
              </span>
            </h2>
            <div className="space-y-4 text-gray-500 dark:text-gray-400 leading-relaxed">
              <p>
                Labradoor was created by UCLA student researchers who{" "}
                <strong className="text-gray-900 dark:text-gray-100 font-medium">
                  experienced firsthand
                </strong>{" "}
                the challenges of the undergraduate research recruitment process
                at UCLA.
              </p>
              <p>
                Our mission is to empower UCLA labs with{" "}
                <strong className="text-gray-900 dark:text-gray-100 font-medium">
                  efficient, user-friendly tools
                </strong>{" "}
                that streamline the recruitment process, allowing researchers to
                focus on what they do best — advancing knowledge and innovation.
              </p>
              <p>
                Labradoor is independently built by UCLA students. Not an
                official UCLA product, but proudly Bruin-run.
              </p>
            </div>
          </motion.div>

          {/* Value cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {values.map((v) => (
              <div
                key={v.title}
                className="flex gap-5 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 rounded-xl p-5 hover:shadow-sm dark:hover:border-gray-600 transition-all duration-200"
              >
                <div className="w-10 h-10 shrink-0 bg-indigo-50 dark:bg-indigo-500/10 rounded-lg flex items-center justify-center">
                  <v.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-gray-900 dark:text-gray-100 font-semibold mb-1">
                    {v.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
