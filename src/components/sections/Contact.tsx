"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, ArrowUpRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const tiers = [
  "Lightning Landing Page ($100)",
  "Commerce Engine ($500+)",
  "Custom Web App",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tier: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const marqueeText =
    "LET'S BUILD SOMETHING BEAUTIFUL \u00B7 LIGHTNING DELIVERY \u00B7 PREMIUM QUALITY \u00B7 AI-POWERED WORKFLOW \u00B7 ";

  return (
    <>
      <SectionWrapper id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-xs font-medium tracking-widest uppercase text-accent-light mb-4 block">
              Get in Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Ready to
              <br />
              <span className="gradient-text-accent">Launch?</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
              Tell me about your project and I&apos;ll get back to you within
              24 hours with a plan. No commitment, no pressure.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="mailto:hello@velodev.com"
                className="inline-flex items-center gap-2 text-sm text-accent-light hover:text-white transition-colors duration-300"
              >
                hello@velodev.com
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {submitted ? (
              <div className="rounded-2xl glass p-12 text-center">
                <div className="inline-flex p-4 rounded-2xl bg-accent/20 text-accent-light mb-6">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tight mb-2">
                  Message Sent
                </h3>
                <p className="text-sm text-gray-400">
                  I&apos;ll be in touch within 24 hours. Let&apos;s build
                  something great.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl glass p-8 space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-sm text-white placeholder:text-gray-600
                      focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-sm text-white placeholder:text-gray-600
                      focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors duration-300"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="tier"
                    className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2"
                  >
                    Which tier interests you?
                  </label>
                  <select
                    id="tier"
                    value={formData.tier}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, tier: e.target.value }))
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-sm text-white
                      focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-background">
                      Select a tier
                    </option>
                    {tiers.map((tier) => (
                      <option key={tier} value={tier} className="bg-background">
                        {tier}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2"
                  >
                    Project details (optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-sm text-white placeholder:text-gray-600 resize-none
                      focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors duration-300"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-display font-semibold text-sm tracking-wide
                    bg-accent text-white cursor-pointer
                    hover:bg-accent-light transition-colors duration-300
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </SectionWrapper>

      <footer className="relative overflow-hidden border-t border-white/5">
        <div className="py-8 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="font-display text-6xl md:text-8xl font-bold text-white/[0.03] mx-4 select-none"
              >
                {marqueeText}
              </span>
            ))}
          </div>
        </div>

        <div className="py-8 px-6 text-center border-t border-white/5">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} VeloDev. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
