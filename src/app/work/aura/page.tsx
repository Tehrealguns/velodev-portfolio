"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

const caseStudies = [
  {
    num: "01",
    title: "Neon",
    category: "Brand Identity",
    year: "2025",
    color: "from-fuchsia-500/20 to-purple-900/20",
    accent: "text-fuchsia-400",
    description:
      "Tore down a decade of fintech beige. Rebuilt Neon's entire visual language from the ground up: logo, type system, motion language, and a 200-page brand book their team actually uses.",
  },
  {
    num: "02",
    title: "Meridian",
    category: "Digital Experience",
    year: "2025",
    color: "from-sky-500/20 to-blue-900/20",
    accent: "text-sky-400",
    description:
      "An architecture firm wanted their website to feel like walking through one of their buildings. We delivered a scroll-driven spatial experience with WebGL transitions between projects.",
  },
  {
    num: "03",
    title: "Prism",
    category: "Product Launch",
    year: "2024",
    color: "from-amber-500/20 to-orange-900/20",
    accent: "text-amber-400",
    description:
      "48 hours to build hype for a hardware launch. We created a teaser site with a real-time countdown, 3D product viewer, and a waitlist that hit 10k signups before the product was even announced.",
  },
  {
    num: "04",
    title: "Solstice",
    category: "Editorial Platform",
    year: "2024",
    color: "from-emerald-500/20 to-teal-900/20",
    accent: "text-emerald-400",
    description:
      "A digital magazine that treats the web like a canvas, not a Word doc. Custom CMS, dynamic layouts that shift based on content type, and typography that makes you want to read every word.",
  },
];

const services = [
  { name: "Brand Strategy", detail: "Positioning, naming, verbal identity" },
  { name: "Visual Identity", detail: "Logo, color, type, motion systems" },
  { name: "Web & Digital", detail: "Sites, apps, interactive experiences" },
  { name: "Art Direction", detail: "Campaigns, editorial, content systems" },
];

export default function AuraDemo() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "25%"]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 0.95]);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 mix-blend-difference">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <span className="font-display text-base font-bold tracking-tighter">
            AURA<span className="text-cyan-400">&trade;</span>
          </span>
          <a
            href="#contact"
            className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block"
          >
            Start a project
          </a>
        </div>
      </nav>

      {/* Hero */}
t      <section ref={heroRef} className="relative z-0 min-h-screen flex flex-col justify-end px-6 pb-20 pt-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-gradient-to-bl from-cyan-900/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tr from-violet-900/10 to-transparent" />
        </div>

        <motion.div style={{ y: heroY, scale: heroScale }} className="relative max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="flex items-end justify-between gap-8 mb-8"
          >
            <div className="flex gap-12 text-xs text-gray-600 uppercase tracking-widest">
              <span>Design Studio</span>
              <span>Est. 2019</span>
            </div>
            <div className="hidden md:flex gap-8 text-xs text-gray-600 uppercase tracking-widest">
              <span>NYC</span>
              <span>London</span>
              <span>Remote</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" as const }}
            className="font-display text-[clamp(3rem,12vw,10rem)] font-bold tracking-tighter leading-[0.85]"
          >
            We don&apos;t
            <br />
            do{" "}
            <span className="italic font-normal bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              ordinary
            </span>
            <span className="text-cyan-400">.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" as const }}
            className="mt-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6"
          >
            <p className="text-base text-gray-500 max-w-md leading-relaxed">
              A design-obsessed creative studio for brands that refuse to blend
              in. Strategy, identity, digital, end to end.
            </p>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 text-sm font-medium text-white"
            >
              See the work
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured project image */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <PlaceholderImage label="Featured Project" className="aspect-[21/9]" dark />
          </motion.div>
        </div>
      </section>

      {/* Scrolling ticker */}
      <section className="border-y border-white/[0.04] py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 3 }).map((_, i) => (
            <span
              key={i}
              className="text-sm text-gray-600 mx-8 flex items-center gap-8"
            >
              {["12 Years", "140+ Projects", "36 Awards", "8 Countries", "4 Disciplines"].map(
                (t) => (
                  <span key={t} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/40" />
                    {t}
                  </span>
                )
              )}
            </span>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section id="work" className="py-16">
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <span className="text-xs text-gray-600 uppercase tracking-widest">
            Selected Work
          </span>
        </div>

        <div className="divide-y divide-white/[0.04]">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group cursor-pointer relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${study.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              <div className="relative max-w-7xl mx-auto px-6 py-10 md:py-12 flex flex-col md:flex-row md:items-center gap-4 md:gap-0">
                <span className="text-xs text-gray-700 font-mono w-12 shrink-0">
                  {study.num}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-4">
                    <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
                      {study.title}
                    </h3>
                    <span className={`text-xs font-medium ${study.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                      {study.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 max-w-2xl leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    {study.description}
                  </p>
                </div>

                <div className="flex items-center gap-6 shrink-0">
                  <span className="text-xs text-gray-700">{study.year}</span>
                  <ArrowUpRight className="w-5 h-5 text-gray-700 group-hover:text-white group-hover:rotate-45 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project images grid */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <PlaceholderImage label="Neon / Brand System" className="aspect-[4/3]" dark />
          <PlaceholderImage label="Meridian / Web Experience" className="aspect-[4/3]" dark />
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-16 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs text-gray-600 uppercase tracking-widest mb-4 block">
                What we do
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
                Full scope.
                <br />
                <span className="text-gray-600">No gaps.</span>
              </h2>
              <p className="text-sm text-gray-500 mt-4 leading-relaxed max-w-sm">
                We handle everything from the first strategy session to the
                final pixel. No hand-offs to agencies you&apos;ve never met.
              </p>
            </motion.div>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <div className="divide-y divide-white/[0.04]">
              {services.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="py-6 flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight group-hover:text-cyan-400 transition-colors">
                      {s.name}
                    </h3>
                    <p className="text-xs text-gray-600 mt-0.5">{s.detail}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-700 group-hover:text-cyan-400 group-hover:rotate-45 transition-all" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 py-20 border-t border-white/[0.04]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-2">
              <span className="text-xs text-gray-600 uppercase tracking-widest">
                Philosophy
              </span>
            </div>
            <div className="md:col-span-10">
              <p className="font-display text-3xl md:text-4xl font-medium tracking-tight leading-snug text-gray-300">
                We don&apos;t believe in trends. We believe in{" "}
                <span className="text-white">taste</span>. Every project starts
                with a question:{" "}
                <span className="italic text-cyan-400">
                  what does this brand deserve?
                </span>{" "}
                Not what&apos;s popular. Not what&apos;s safe. What&apos;s{" "}
                <span className="text-white">right</span>.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Clients ticker */}
      <section className="border-y border-white/[0.04] py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-4">
          <span className="text-xs text-gray-700 uppercase tracking-widest">
            Trusted by
          </span>
        </div>
        <div className="flex gap-16 items-center justify-center text-2xl font-display font-bold tracking-tighter text-gray-800">
          {["Stripe", "Vercel", "Linear", "Notion", "Arc", "Loom"].map(
            (name) => (
              <span key={name} className="whitespace-nowrap">
                {name}
              </span>
            )
          )}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <span className="text-xs text-gray-600 uppercase tracking-widest mb-4 block">
                New Project
              </span>
              <h2 className="font-display text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85]">
                Let&apos;s
                <br />
                talk<span className="text-cyan-400">.</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4 md:items-end">
              <a
                href="mailto:hello@aura.studio"
                className="group inline-flex items-center gap-2 text-lg text-cyan-400 hover:text-white transition-colors"
              >
                hello@aura.studio
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </a>
              <p className="text-xs text-gray-600 max-w-xs text-right">
                Drop us a line. We respond within 24 hours and never send decks
                nobody asked for.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="px-6 py-6 border-t border-white/[0.04] text-center">
        <p className="text-xs text-gray-700">
          Demo template by VeloDev. Not a real agency.
        </p>
      </footer>
    </div>
  );
}
