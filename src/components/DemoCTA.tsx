import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

export default function DemoCTA() {
  return (
    <section id="demo" className="relative py-28 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-600 via-accent-500 to-violet-500" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_60%)]" />
          <div className="absolute inset-0 noise" />

          <div className="relative px-8 py-16 sm:px-16 sm:py-20 lg:px-24 lg:py-24">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white/90 text-xs font-semibold uppercase tracking-wider mb-6">
                <Calendar className="w-3.5 h-3.5" />
                Request a Demo
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
                Schedule a walkthrough for your lab
              </h2>
              <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-lg">
                We'll tailor the walkthrough to your lab's recruiting flow and
                get you running quickly. Share a few lines about your lab focus,
                how many undergrads you onboard each quarter, and the best times
                to meet.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:alans@g.ucla.edu"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-accent-600 font-semibold rounded-2xl hover:bg-white/95 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black/10"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="mailto:alans@g.ucla.edu"
                  className="inline-flex items-center px-7 py-3.5 text-white/90 font-semibold rounded-2xl border border-white/25 hover:bg-white/10 transition-all"
                >
                  alans@g.ucla.edu
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
