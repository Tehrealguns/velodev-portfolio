"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function TerrainLines() {
  const meshRef = useRef<THREE.Mesh>(null);
  const geoRef = useRef<THREE.PlaneGeometry | null>(null);

  const basePositions = useMemo(() => {
    const geo = new THREE.PlaneGeometry(120, 80, 40, 25);
    geo.rotateX(-Math.PI / 2);
    geoRef.current = geo;
    return geo.attributes.position.array.slice() as Float32Array;
  }, []);

  useFrame((state) => {
    if (!geoRef.current) return;
    const t = state.clock.elapsedTime;
    const pos = geoRef.current.attributes.position;

    for (let i = 0; i < pos.count; i++) {
      const x = basePositions[i * 3];
      const z = basePositions[i * 3 + 2];

      let h = 0;
      h += Math.sin(x * 0.15 + t * 0.08) * Math.cos(z * 0.12 + t * 0.06) * 1.5;
      h += Math.sin(x * 0.3 + 1.5 + t * 0.04) * Math.cos(z * 0.25 + 0.8) * 0.8;

      const fade = Math.max(0.05, Math.abs(x) / 25);
      h *= fade;

      pos.setY(i, h);
    }
    pos.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} position={[0, -8, -25]}>
      <primitive object={geoRef.current!} attach="geometry" />
      <meshBasicMaterial
        color="#7c3aed"
        wireframe
        transparent
        opacity={0.04}
      />
    </mesh>
  );
}

export default function WireframeTerrainCanvas() {
  return (
    <div className="fixed inset-0 -z-20">
      <Canvas
        camera={{
          position: [0, 8, 20],
          fov: 50,
          near: 0.1,
          far: 150,
        }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: false }}
        style={{ background: "#050505" }}
      >
        <fog attach="fog" args={["#050505", 30, 80]} />
        <TerrainLines />
      </Canvas>
    </div>
  );
}
