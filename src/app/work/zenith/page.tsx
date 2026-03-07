"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Clock, Instagram, Coffee, Flame, Recycle, Handshake, Star } from "lucide-react";
import { useRef } from "react";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

const beans = [
  {
    name: "Morning Ritual",
    origin: "Ethiopia, Yirgacheffe",
    notes: "Blueberry, jasmine, brown sugar",
    roast: "Light",
    color: "bg-amber-100",
  },
  {
    name: "Basecamp",
    origin: "Colombia, Huila",
    notes: "Caramel, walnut, dark chocolate",
    roast: "Medium",
    color: "bg-orange-100",
  },
  {
    name: "Night Shift",
    origin: "Sumatra, Mandheling",
    notes: "Cedar, tobacco, molasses",
    roast: "Dark",
    color: "bg-stone-200",
  },
];

export default function ZenithDemo() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "20%"]);

  return (
    <div className="min-h-screen bg-[#f5f0eb] text-[#2a2520] selection:bg-amber-300/40">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[#f5f0eb]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <span className="font-display text-base font-bold tracking-tight text-stone-800">
            ZENITH
            <span className="text-amber-600">&nbsp;ROASTERS</span>
          </span>
          <a
            href="#visit"
            className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors hidden sm:block uppercase tracking-widest"
          >
            Visit Us
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-end px-6 pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/80 via-[#f5f0eb] to-stone-200/50" />
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-amber-200/30 blur-[120px]" />
        </div>

        <motion.div style={{ y: heroY }} className="relative max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" as const }}
                className="text-xs text-amber-700 uppercase tracking-[0.2em] mb-4 font-medium"
              >
                Small-batch specialty coffee
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" as const }}
                className="font-display text-[clamp(3rem,8vw,6.5rem)] font-bold tracking-tighter leading-[0.88] text-stone-900"
              >
                Roasted with
                <br />
                intention.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" as const }}
                className="text-base text-stone-500 mt-6 max-w-sm leading-relaxed"
              >
                Single-origin beans, roasted weekly in small batches.
                We know every farmer by name and every roast by heart.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" as const }}
                className="mt-8 flex gap-4"
              >
                <a
                  href="#beans"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-sm font-medium transition-colors"
                >
                  Shop Beans
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#story"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-stone-300 hover:border-stone-400 text-stone-700 text-sm font-medium transition-colors"
                >
                  Our Story
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="md:col-span-5"
            >
              <PlaceholderImage label="Hero Photo" className="aspect-[4/5]" dark={false} />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Info strip */}
      <section className="border-y border-stone-200/80 py-5 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-8 text-sm text-stone-500">
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-600" />
            127 Elm Street, Portland OR
          </span>
          <span className="w-1 h-1 rounded-full bg-stone-300" />
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-600" />
            Open daily 7am to 5pm
          </span>
          <span className="w-1 h-1 rounded-full bg-stone-300" />
          <span className="flex items-center gap-2">
            <Instagram className="w-4 h-4 text-amber-600" />
            @zenithroasters
          </span>
        </div>
      </section>

      {/* Beans */}
      <section id="beans" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs text-amber-700 uppercase tracking-[0.2em] font-medium">
              Current Offerings
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-stone-900 mt-2">
              What&apos;s roasting right now
            </h2>
          </div>

          <div className="space-y-4">
            {beans.map((bean, i) => (
              <motion.div
                key={bean.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group grid grid-cols-1 md:grid-cols-12 gap-4 items-center rounded-2xl border border-stone-200/80 hover:border-amber-300/60 p-6 md:p-8 transition-colors bg-white/50 cursor-pointer"
              >
                <div className="md:col-span-1">
                  <div className={`w-12 h-12 rounded-xl ${bean.color} flex items-center justify-center`}>
                    <Coffee className="w-5 h-5 text-stone-600" />
                  </div>
                </div>

                <div className="md:col-span-3">
                  <h3 className="font-display text-xl font-bold tracking-tight text-stone-900 group-hover:text-amber-700 transition-colors">
                    {bean.name}
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    {bean.roast} roast
                  </p>
                </div>

                <div className="md:col-span-3">
                  <p className="text-xs text-stone-400 uppercase tracking-wider mb-0.5">
                    Origin
                  </p>
                  <p className="text-sm text-stone-700">{bean.origin}</p>
                </div>

                <div className="md:col-span-4">
                  <p className="text-xs text-stone-400 uppercase tracking-wider mb-0.5">
                    Tasting notes
                  </p>
                  <p className="text-sm text-stone-700">{bean.notes}</p>
                </div>

                <div className="md:col-span-1 flex justify-end">
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bean photos */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <PlaceholderImage label="Morning Ritual" className="aspect-square" dark={false} />
          <PlaceholderImage label="Basecamp" className="aspect-square" dark={false} />
          <PlaceholderImage label="Night Shift" className="aspect-square" dark={false} />
        </div>
      </section>

      {/* Story */}
      <section id="story" className="px-6 py-16 bg-white/40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <PlaceholderImage label="Founders Photo" className="aspect-square" dark={false} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="text-xs text-amber-700 uppercase tracking-[0.2em] font-medium mb-4 block">
              Our Story
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-stone-900 leading-tight mb-4">
              From a garage
              <br />
              to your morning.
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                It started in 2018 with a question: why does most coffee taste
                like it was roasted six months ago? (Because it was.) We wanted
                something different. Beans roasted this week, shipped
                next-day, sourced from people we actually know.
              </p>
              <p>
                Today we roast three single-origin coffees, rotate them
                seasonally, and sell to a small group of people who care about
                what&apos;s in their cup. We&apos;re not trying to be the biggest.
                Just the best thing you drink all day.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200 rounded-2xl overflow-hidden">
            {[
              {
                icon: <Handshake className="w-6 h-6 text-amber-700" />,
                title: "Direct trade",
                desc: "We buy directly from farmers at 2-3x fair-trade minimums. Every bag has a story and we'll tell you exactly where your money goes.",
              },
              {
                icon: <Flame className="w-6 h-6 text-amber-700" />,
                title: "Roasted weekly",
                desc: "We don't keep stock. Every order is roasted after you place it. Your beans never sit on a shelf wondering what they did wrong.",
              },
              {
                icon: <Recycle className="w-6 h-6 text-amber-700" />,
                title: "Zero waste",
                desc: "Compostable packaging, carbon-offset shipping, and chaff donated to local farms. Because the planet makes the coffee.",
              },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-[#f5f0eb] p-8"
              >
                <div className="mb-4">{v.icon}</div>
                <h3 className="font-display text-lg font-bold tracking-tight text-stone-900 mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Review */}
      <section className="px-6 py-16 bg-stone-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <blockquote className="font-display text-2xl md:text-3xl font-medium tracking-tight leading-snug mb-6">
              I cancelled my bougie subscription box the day I tried
              Morning Ritual. This is what coffee is supposed to taste
              like.
            </blockquote>
            <p className="text-sm text-stone-400">
              Sarah M., Portland OR
            </p>
          </motion.div>
        </div>
      </section>

      {/* Visit CTA */}
      <section id="visit" className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs text-amber-700 uppercase tracking-[0.2em] font-medium mb-4 block">
              Come Say Hi
            </span>
            <h2 className="font-display text-4xl font-bold tracking-tight text-stone-900 mb-4">
              Best enjoyed
              <br />
              in person.
            </h2>
            <p className="text-sm text-stone-500 leading-relaxed mb-6 max-w-sm">
              Our cafe and roastery are open daily. Grab a pour-over, watch
              us roast, or just sit and do nothing for a while. We&apos;re
              into that too.
            </p>
            <div className="space-y-2 text-sm text-stone-600">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-600" />
                127 Elm Street, Portland OR 97214
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-600" />
                Every day, 7am to 5pm
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <PlaceholderImage label="Cafe Interior" className="aspect-video" dark={false} />
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-6 py-12 border-t border-stone-200/80">
        <div className="max-w-md mx-auto text-center">
          <h3 className="font-display text-xl font-bold tracking-tight text-stone-900 mb-2">
            Stay in the loop
          </h3>
          <p className="text-xs text-stone-500 mb-4">
            New roasts, pop-up events, and the occasional bad coffee pun.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 border border-stone-200 rounded-lg px-4 py-3 text-sm text-stone-900 bg-white placeholder:text-stone-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none"
            />
            <button className="px-6 py-3 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-sm font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <footer className="px-6 py-6 border-t border-stone-200/80 text-center">
        <p className="text-xs text-stone-400">
          Demo template by VeloDev. Not a real roastery (but we wish).
        </p>
      </footer>
    </div>
  );
}
