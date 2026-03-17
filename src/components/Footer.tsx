import { FlaskConical } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center">
              <FlaskConical className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              labradoor
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="#features"
              className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
            >
              Features
            </a>
            <a
              href="#product-tour"
              className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#about"
              className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
            >
              About
            </a>
            <a
              href="mailto:alans@g.ucla.edu"
              className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Contact */}
          <a
            href="mailto:alans@g.ucla.edu"
            className="text-sm text-accent-400 hover:text-accent-300 transition-colors"
          >
            alans@g.ucla.edu
          </a>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-slate-600">
            Labradoor is independently built by UCLA students. Not an official
            UCLA product, but proudly Bruin-run.
          </p>
        </div>
      </div>
    </footer>
  );
}
