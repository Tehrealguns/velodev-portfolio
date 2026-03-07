"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { type MouseEvent } from "react";
import { ExternalLink, Zap, Palette, Minimize2 } from "lucide-react";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  gradient: string;
  href: string;
}

const projects: Project[] = [
  {
    title: "Lumina",
    subtitle: "SaaS Waitlist Page",
    description:
      "High-conversion waitlist page engineered for signups. Animated hero, social proof blocks, and integrated email capture \u2014 all Lighthouse 100.",
    tags: ["Next.js", "Framer Motion", "Conversion"],
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-violet-600/20 to-purple-900/20",
    href: "/work/lumina",
  },
  {
    title: "Aura",
    subtitle: "Creative Agency Portfolio",
    description:
      "Typography-forward portfolio with immersive scroll animations, magnetic interactions, and structured data for rich search results.",
    tags: ["React", "GSAP", "Structured Data"],
    icon: <Palette className="w-6 h-6" />,
    gradient: "from-cyan-600/20 to-blue-900/20",
    href: "/work/aura",
  },
  {
    title: "Zenith",
    subtitle: "Local Business Site",
    description:
      "Ultra-minimalist design built for clarity and trust. Sub-second loads, perfect accessibility scores, and chatbot-friendly markup.",
    tags: ["Performance", "A11y", "AI-Ready"],
    icon: <Minimize2 className="w-6 h-6" />,
    gradient: "from-emerald-600/20 to-teal-900/20",
    href: "/work/zenith",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 30, mass: 0.5 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const rotateX = useTransform(ySpring, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const normalX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(normalX);
    y.set(normalY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Link href={project.href}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative rounded-2xl glass glass-hover cursor-pointer overflow-hidden"
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        <div className="relative p-6 flex flex-col h-full min-h-[280px]">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg glass text-accent-light">
              {project.icon}
            </div>
            <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-accent-light transition-colors duration-300" />
          </div>

          <h3 className="font-display text-2xl font-bold tracking-tight mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-accent-light font-medium mb-2">
            {project.subtitle}
          </p>
          <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-md text-xs font-medium text-gray-400 bg-white/5 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function WorkGrid() {
  return (
    <SectionWrapper id="work">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <span className="text-xs font-medium tracking-widest uppercase text-accent-light mb-4 block">
          Featured Work
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
          Crafted with Precision
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
