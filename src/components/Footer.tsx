import { useState } from "react";
import DogLogo from "./DogLogo";

export default function Footer() {
  const [bruinFlash, setBruinFlash] = useState(false);

  const triggerBruin = () => {
    if (bruinFlash) return;
    setBruinFlash(true);
    setTimeout(() => setBruinFlash(false), 1500);
  };

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
              <DogLogo className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
              labradoor
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="#features"
              className="text-sm text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
            >
              Features
            </a>
            <a
              href="#product-tour"
              className="text-sm text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#about"
              className="text-sm text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
            >
              About
            </a>
            <a
              href="mailto:alans@g.ucla.edu"
              className="text-sm text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Contact */}
          <a
            href="mailto:alans@g.ucla.edu"
            className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
          >
            alans@g.ucla.edu
          </a>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 dark:border-gray-800 mt-8 pt-6 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-600">
            Labradoor is independently built by UCLA students. Not an official
            UCLA product, but proudly{" "}
            <span
              onClick={triggerBruin}
              className="cursor-pointer hover:text-amber-500 transition-colors"
            >
              Bruin-run
            </span>
            .
          </p>
        </div>
      </div>
      {bruinFlash && (
        <div
          className="fixed inset-0 pointer-events-none z-[99999]"
          style={{ animation: "bruin-flash 1.5s ease-out forwards" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#2774AE] to-[#FFD100] opacity-20" />
        </div>
      )}
    </footer>
  );
}
