"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
      >
        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6"
        >
          VeloDev Web Development.
          <br />
          <span className="gradient-text">Instant Delivery.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          High-performance, SEO-tuned landing pages starting at $100 flat.
          Optimized for search engines, AI chatbots, and real conversions.
          Delivered in days, not weeks.
        </motion.p>

        <motion.div variants={itemVariants}>
          <MagneticButton href="#contact">Start Your Project</MagneticButton>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-lg border border-gray-700 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 rounded-lg bg-accent-light" />
        </motion.div>
      </div>
    </section>
  );
}
