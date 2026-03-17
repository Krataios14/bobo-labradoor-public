import { motion } from "framer-motion";
import { Heart, MessageCircle, Handshake } from "lucide-react";

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
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[128px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-400 mb-4">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              By UCLA researchers,{" "}
              <span className="gradient-text">for UCLA research.</span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Labradoor was created by UCLA student researchers who{" "}
                <strong className="text-slate-200">experienced firsthand</strong>{" "}
                the challenges of the undergraduate research recruitment process
                at UCLA.
              </p>
              <p>
                Our mission is to empower UCLA labs with{" "}
                <strong className="text-slate-200">
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
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 * i }}
                className="group flex gap-5 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all"
              >
                <div className="w-11 h-11 shrink-0 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center group-hover:bg-accent-500/15 transition-colors">
                  <v.icon className="w-5 h-5 text-accent-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">
                    {v.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
