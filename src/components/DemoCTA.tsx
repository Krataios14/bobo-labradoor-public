import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

export default function DemoCTA() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section id="demo" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden px-8 py-16 sm:px-16 sm:py-20 lg:px-24 lg:py-24 bg-gradient-to-br from-indigo-600 to-indigo-700 dark:from-indigo-700 dark:to-indigo-900"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            setIsHovering(true);
          }}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Subtle inner glow for visual depth */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/5 blur-[80px]" />
          <div
            className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-300"
            style={{
              opacity: isHovering ? 1 : 0,
              background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.08), transparent 60%)`,
            }}
          />

          <div className="relative max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold uppercase tracking-wider mb-6">
              <Calendar className="w-3.5 h-3.5" />
              Request a Demo
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
              Schedule a walkthrough for your lab
            </h2>
            <p className="text-lg text-indigo-100 leading-relaxed mb-8 max-w-lg">
              We'll tailor the walkthrough to your lab's recruiting flow and
              get you running quickly. Share a few lines about your lab focus,
              how many undergrads you onboard each quarter, and the best times
              to meet.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:alans@g.ucla.edu"
                className="inline-flex items-center gap-2 bg-white text-indigo-700 dark:text-indigo-800 font-medium rounded-lg px-6 py-3 hover:bg-indigo-50 dark:hover:bg-gray-100 transition"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:alans@g.ucla.edu"
                className="inline-flex items-center border border-white/30 text-white rounded-lg px-6 py-3 hover:bg-white/10 transition"
              >
                alans@g.ucla.edu
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
