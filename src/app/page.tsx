import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import WorkGrid from "@/components/sections/WorkGrid";
import Pricing from "@/components/sections/Pricing";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";

const WireframeTerrainCanvas = dynamic(
  () => import("@/components/canvas/WireframeTerrain"),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="relative">
      <WireframeTerrainCanvas />
      <Hero />
      <WorkGrid />
      <Process />
      <Pricing />
      <Contact />
    </main>
  );
}
