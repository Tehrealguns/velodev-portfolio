"use client";

import { motion } from "framer-motion";
import { MessageSquare, Rocket, PartyPopper } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    number: "01",
    title: "You Brief Me",
    description:
      "Share your vision, brand assets, and goals. A quick call or a detailed brief, whatever suits your workflow.",
    icon: <MessageSquare className="w-6 h-6" />,
  },
  {
    number: "02",
    title: "I Build It Fast",
    description:
      "AI-accelerated development on modern frameworks. Lighthouse-optimized, schema-marked, and structured so search engines and chatbots surface your content first.",
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    number: "03",
    title: "You Launch",
    description:
      "Review, refine, deploy. Your edge-hosted site goes live: fast globally, indexed instantly, and ready to convert.",
    icon: <PartyPopper className="w-6 h-6" />,
  },
];

export default function Process() {
  return (
    <SectionWrapper id="process">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <span className="text-xs font-medium tracking-widest uppercase text-accent-light mb-4 block">
          How It Works
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
          Three Steps to Launch
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="relative rounded-2xl glass glass-hover p-8 text-center group"
          >
            <div className="absolute top-6 right-6 font-display text-6xl font-bold text-white/[0.03] group-hover:text-accent/10 transition-colors duration-500">
              {step.number}
            </div>

            <div className="inline-flex p-4 rounded-2xl glass text-accent-light mb-6">
              {step.icon}
            </div>

            <h3 className="font-display text-xl font-bold tracking-tight mb-4">
              {step.title}
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
