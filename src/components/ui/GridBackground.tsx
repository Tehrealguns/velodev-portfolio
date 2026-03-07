"use client";

import { motion, useScroll, useTransform } from "framer-motion";

function Stars() {
  const stars = [
    { top: "4%", left: "12%", size: "w-1 h-1", opacity: "0.15" },
    { top: "7%", left: "28%", size: "w-0.5 h-0.5", opacity: "0.1" },
    { top: "2%", left: "45%", size: "w-1 h-1", opacity: "0.12" },
    { top: "9%", left: "62%", size: "w-0.5 h-0.5", opacity: "0.08" },
    { top: "3%", left: "78%", size: "w-1 h-1", opacity: "0.14" },
    { top: "11%", left: "88%", size: "w-0.5 h-0.5", opacity: "0.09" },
    { top: "6%", left: "35%", size: "w-0.5 h-0.5", opacity: "0.07" },
    { top: "14%", left: "52%", size: "w-1 h-1", opacity: "0.1" },
    { top: "5%", left: "70%", size: "w-0.5 h-0.5", opacity: "0.11" },
    { top: "1%", left: "20%", size: "w-0.5 h-0.5", opacity: "0.08" },
    { top: "16%", left: "8%", size: "w-0.5 h-0.5", opacity: "0.06" },
    { top: "10%", left: "42%", size: "w-1 h-1", opacity: "0.09" },
    { top: "8%", left: "92%", size: "w-0.5 h-0.5", opacity: "0.1" },
    { top: "13%", left: "75%", size: "w-1 h-1", opacity: "0.07" },
    { top: "18%", left: "58%", size: "w-0.5 h-0.5", opacity: "0.06" },
    { top: "20%", left: "30%", size: "w-0.5 h-0.5", opacity: "0.05" },
    { top: "15%", left: "16%", size: "w-1 h-1", opacity: "0.08" },
    { top: "22%", left: "85%", size: "w-0.5 h-0.5", opacity: "0.05" },
  ];

  return (
    <>
      {stars.map((s, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-cyan-400 ${s.size}`}
          style={{ top: s.top, left: s.left, opacity: s.opacity }}
        />
      ))}
    </>
  );
}

export default function GridBackground() {
  const { scrollYProgress } = useScroll();

  const terrainY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const ridgeBackY = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);
  const ridgeFrontY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.4]);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-[#050505]">
      <Stars />

      {/* Horizon glow */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute left-0 right-0 bottom-[28%] h-40"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/[0.08] via-cyan-400/[0.03] to-transparent" />
        <div className="absolute bottom-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      </motion.div>

      {/* Back ridge wireframe */}
      <motion.div
        style={{ y: ridgeBackY }}
        className="absolute left-0 right-0 bottom-[26%]"
      >
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 120 L0 80 L80 55 L160 70 L240 35 L320 50 L400 20 L480 40 L560 25 L640 45 L720 15 L800 35 L880 50 L960 30 L1040 45 L1120 20 L1200 40 L1280 55 L1360 35 L1440 60 L1440 120"
            stroke="rgba(6,182,212,0.12)"
            strokeWidth="1"
          />
          {/* Horizontal grid lines on back ridge */}
          <path d="M0 90 L1440 90" stroke="rgba(6,182,212,0.04)" strokeWidth="0.5" />
          <path d="M0 105 L1440 105" stroke="rgba(6,182,212,0.03)" strokeWidth="0.5" />
        </svg>
      </motion.div>

      {/* Front ridge wireframe */}
      <motion.div
        style={{ y: ridgeFrontY }}
        className="absolute left-0 right-0 bottom-[18%]"
      >
        <svg
          viewBox="0 0 1440 140"
          className="w-full h-auto"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 140 L0 100 L100 70 L180 85 L260 45 L340 60 L420 30 L500 50 L580 35 L660 55 L740 20 L820 40 L900 60 L980 35 L1060 55 L1140 25 L1220 45 L1300 65 L1380 40 L1440 70 L1440 140"
            stroke="rgba(6,182,212,0.18)"
            strokeWidth="1"
          />
          {/* Vertical grid lines dropping from ridge */}
          {Array.from({ length: 18 }).map((_, i) => {
            const x = 80 * (i + 1);
            return (
              <line
                key={`fv-${i}`}
                x1={x}
                y1={70}
                x2={x}
                y2={140}
                stroke="rgba(6,182,212,0.06)"
                strokeWidth="0.5"
              />
            );
          })}
          {/* Horizontal grid lines */}
          <path d="M0 95 L1440 95" stroke="rgba(6,182,212,0.05)" strokeWidth="0.5" />
          <path d="M0 115 L1440 115" stroke="rgba(6,182,212,0.04)" strokeWidth="0.5" />
          <path d="M0 130 L1440 130" stroke="rgba(6,182,212,0.03)" strokeWidth="0.5" />
        </svg>
      </motion.div>

      {/* Perspective ground grid */}
      <motion.div
        style={{ y: terrainY }}
        className="absolute left-0 right-0 bottom-0 h-[22%]"
      >
        <div
          className="absolute inset-0"
          style={{
            perspective: "400px",
            perspectiveOrigin: "50% 0%",
          }}
        >
          <div
            className="absolute inset-0 origin-top"
            style={{
              transform: "rotateX(45deg)",
              backgroundImage: `
                linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "60px 30px",
              maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 80%)",
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 80%)",
            }}
          />
        </div>
      </motion.div>

      {/* Dark overlay so content stays readable, seamless blend */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,5,5,0.4) 0%, rgba(5,5,5,0.3) 30%, rgba(5,5,5,0.5) 60%, rgba(5,5,5,0.85) 85%, rgba(5,5,5,0.95) 100%)",
        }}
      />
    </div>
  );
}
