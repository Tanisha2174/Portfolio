"use client";
import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollYProgress, "change", () => {
    const currentScrollY = scrollYProgress.get();
    const direction = currentScrollY - lastScrollY.current;

    if (direction < 0) {
      // Scrolling up
      setVisible(true);
    } else {
      // Scrolling down
      setVisible(false);
    }
    lastScrollY.current = currentScrollY;
  });

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className={`relative inline-flex h-[4rem] overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 fixed top-10 left-1/2 transform -translate-x-1/2 z-[5000] ${
            className || ""
          }`}
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white backdrop-blur-3xl">
            <div className="flex items-center justify-center space-x-8">
              {navItems.map((navItem, idx) => (
                <a
                  key={`link=${idx}`}
                  href={navItem.link}
                  className="relative text-white flex space-x-1 hover:text-gray-300"
                >
                  <span className="block sm:hidden">{navItem.icon}</span>
                  <span className="hidden sm:block text-sm">
                    {navItem.name}
                  </span>
                </a>
              ))}
            </div>
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};



