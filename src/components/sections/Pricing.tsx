"use client";

import { motion } from "framer-motion";
import { Check, Zap, ShoppingCart, Code2 } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import MagneticButton from "@/components/ui/MagneticButton";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  highlighted: boolean;
  cta: string;
  note?: string;
}

const tiers: PricingTier[] = [
  {
    name: "The Lightning Landing Page",
    price: "$100",
    description:
      "Ideal for portfolios, waitlists, local businesses, and personal brands.",
    icon: <Zap className="w-6 h-6" />,
    features: [
      "1\u20133 page responsive design",
      "Sub-second load speeds",
      "Contact form & lead capture",
      "48-hour turnaround",
      "Mobile-first, chatbot-ready",
      "Core SEO & schema markup",
    ],
    highlighted: true,
    cta: "Get Started",
  },
  {
    name: "The Commerce Engine",
    price: "$500+",
    description: "Full-stack solution for businesses ready to sell and scale online.",
    icon: <ShoppingCart className="w-6 h-6" />,
    features: [
      "Everything in Lightning",
      "E-commerce (Stripe / Shopify)",
      "CMS for blog & products",
      "Multi-page routing & sitemap",
      "Analytics & conversion tracking",
      "AI-optimized for search & chatbots",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Custom Web App",
    price: "Let's Talk",
    description: "Tailored builds for complex, high-traffic applications.",
    icon: <Code2 className="w-6 h-6" />,
    features: [
      "Custom architecture & API layer",
      "Third-party integrations",
      "Auth, roles & permissions",
      "Database design & ORM",
      "Edge-deployed, globally fast",
      "Ongoing retainer available",
    ],
    highlighted: false,
    cta: "Book a Call",
  },
];

function PricingCard({ tier, index }: { tier: PricingTier; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`relative rounded-2xl p-8 flex flex-col h-full ${
        tier.highlighted
          ? "glass glow-border-strong border border-accent/30"
          : "glass glass-hover"
      }`}
    >
      {tier.highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 rounded-lg bg-accent text-white text-xs font-semibold tracking-wide">
            Most Popular
          </span>
        </div>
      )}

      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-2 rounded-lg ${
            tier.highlighted
              ? "bg-accent/20 text-accent-light"
              : "glass text-gray-400"
          }`}
        >
          {tier.icon}
        </div>
        <div>
          <h3 className="font-display text-lg font-bold tracking-tight">
            {tier.name}
          </h3>
        </div>
      </div>

      <div className="mb-4">
        <span className="font-display text-4xl font-bold tracking-tight">
          {tier.price}
        </span>
        {tier.price !== "Let's Talk" && (
          <span className="text-sm text-gray-500 ml-2">flat rate</span>
        )}
      </div>

      <p className="text-sm text-gray-400 mb-8 leading-relaxed">
        {tier.description}
      </p>

      <ul className="space-y-4 mb-8 flex-1">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Check
              className={`w-4 h-4 mt-0.5 shrink-0 ${
                tier.highlighted ? "text-accent-light" : "text-gray-500"
              }`}
            />
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <MagneticButton
        href="#contact"
        className={`w-full justify-center ${
          !tier.highlighted
            ? "!bg-white/5 hover:!bg-white/10 !text-gray-300"
            : ""
        }`}
      >
        {tier.cta}
      </MagneticButton>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <SectionWrapper id="pricing">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <span className="text-xs font-medium tracking-widest uppercase text-accent-light mb-4 block">
          Transparent Pricing
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Simple, Honest Rates
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          No hidden fees, no hourly billing. Every build is performance-audited,
          accessibility-checked, and structured for AI discoverability.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier, i) => (
          <PricingCard key={tier.name} tier={tier} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
