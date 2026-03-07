"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Sparkles, Zap, Link2, Users } from "lucide-react";
import { useRef } from "react";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export default function LuminaDemo() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-[#08080c] text-white overflow-hidden">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[#08080c]/70 backdrop-blur-xl border-b border-white/[0.04]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <span className="font-display text-sm font-bold tracking-tight">
            lumina<span className="text-violet-400">.</span>
          </span>
          <button className="px-4 py-2 text-xs font-medium rounded-lg bg-violet-600 hover:bg-violet-500 transition-colors">
            Join Waitlist
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-violet-600/10 blur-[200px] animate-pulse" />
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-fuchsia-600/[0.06] blur-[150px]" />
        </div>

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-8"
          >
            <Sparkles className="w-3 h-3" />
            2,400+ people already on the list
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" as const }}
            className="font-display text-[clamp(2.5rem,8vw,6rem)] font-bold tracking-tighter leading-[0.9] mb-6"
          >
            Stop managing.
            <br />
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-400 to-violet-300 bg-clip-text text-transparent">
              Start shipping.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" as const }}
            className="text-lg text-gray-400 max-w-lg mx-auto mb-10 leading-relaxed"
          >
            Lumina replaces your entire project management stack with one
            tool that actually thinks. Not another dashboard. An autopilot.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" as const }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full sm:w-80 bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-gray-600 focus:border-violet-500/50 focus:outline-none transition-colors"
            />
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-all hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]">
              Get Early Access
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xs text-gray-600 mt-4"
          >
            Free forever for early adopters. No credit card. No BS.
          </motion.p>
        </motion.div>
      </section>

      {/* Social proof strip */}
      <section className="border-y border-white/[0.04] py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { val: "2.4k+", label: "Waitlisted" },
            { val: "0.4s", label: "Avg load time" },
            { val: "98%", label: "Would recommend" },
            { val: "$0", label: "Price (forever)" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="font-display text-3xl font-bold tracking-tight mb-1">
                {s.val}
              </div>
              <div className="text-xs text-gray-600 uppercase tracking-wider">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product screenshot placeholder */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <PlaceholderImage label="Product Dashboard" className="aspect-video" />
          </motion.div>
        </div>
      </section>

      {/* Features bento */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-xs text-violet-400 font-medium tracking-widest uppercase">
              What you get
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter mt-2">
              One tool. Zero friction.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-3 rounded-2xl bg-gradient-to-br from-violet-950/40 to-[#0c0c14] border border-white/[0.05] p-8 min-h-[280px] flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight mb-2">
                  AI that does the thinking
                </h3>
                <p className="text-sm text-gray-500 max-w-md leading-relaxed">
                  Lumina reads your codebase, understands your sprint goals, and
                  auto-generates tasks, timelines, and blockers before you even
                  open Slack.
                </p>
              </div>
              <div className="mt-6 rounded-xl bg-black/30 border border-white/[0.04] p-4 font-mono text-xs text-gray-500">
                <span className="text-violet-400">lumina</span> analyze --sprint
                current
                <br />
                <span className="text-gray-600">&#8594; 3 blockers found, 2
                auto-resolved, 1 needs review</span>
              </div>
            </motion.div>

            <div className="md:col-span-2 flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-2xl bg-white/[0.02] border border-white/[0.05] p-6 flex-1"
              >
                <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 w-fit mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold tracking-tight mb-1">
                  Instant standup reports
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Auto-generated from your commits, PRs, and messages. No more
                  &quot;what did I do yesterday?&quot; moments.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl bg-white/[0.02] border border-white/[0.05] p-6 flex-1"
              >
                <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 w-fit mb-4">
                  <Link2 className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold tracking-tight mb-1">
                  Plugs into everything
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  GitHub, Linear, Slack, Figma, Notion. If your team uses it,
                  Lumina already supports it.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-6 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="text-5xl mb-6">&ldquo;</div>
          <blockquote className="font-display text-2xl md:text-3xl font-medium tracking-tight leading-snug mb-6 text-gray-200">
            We killed three SaaS subscriptions the week we started using
            Lumina. It&apos;s not just a tool, it&apos;s an unfair advantage.
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <div className="text-sm font-medium">Alex Rivera</div>
              <div className="text-xs text-gray-600">CTO, Onward (YC W24)</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-16">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-gradient-to-b from-violet-950/30 to-[#08080c] border border-violet-500/20 p-8 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent" />

            <span className="text-xs text-violet-400 font-medium uppercase tracking-widest">
              Early Bird
            </span>
            <div className="font-display text-6xl font-bold tracking-tighter mt-4 mb-2">
              $0
            </div>
            <p className="text-sm text-gray-500 mb-8">
              Free forever if you join before launch.
              <br />
              Seriously.
            </p>

            <ul className="space-y-3 text-left mb-8">
              {[
                "Unlimited projects & automations",
                "Up to 10 team members",
                "All integrations included",
                "Priority support queue",
                "API access on day one",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-violet-400 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <button className="w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-all hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]">
              Lock in Free Access
            </button>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-20 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold tracking-tighter mb-4"
          >
            The waitlist closes soon.
            <br />
            <span className="text-gray-600">Don&apos;t be the one who waited.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-72 bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-gray-600 focus:border-violet-500/50 focus:outline-none transition-colors"
            />
            <button className="px-6 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-all inline-flex items-center gap-2 hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]">
              Join
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      <footer className="px-6 py-6 border-t border-white/[0.04] text-center">
        <p className="text-xs text-gray-700">
          Demo template by VeloDev. This is not a real product.
        </p>
      </footer>
    </div>
  );
}
