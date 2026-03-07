"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function RotatingMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(2.4, 1), []);

  useFrame((state) => {
    if (!meshRef.current) return;

    const pointer = state.pointer;
    mouseRef.current.x += (pointer.x * 0.3 - mouseRef.current.x) * 0.05;
    mouseRef.current.y += (pointer.y * 0.3 - mouseRef.current.y) * 0.05;

    meshRef.current.rotation.x =
      state.clock.elapsedTime * 0.08 + mouseRef.current.y;
    meshRef.current.rotation.y =
      state.clock.elapsedTime * 0.1 + mouseRef.current.x;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
      <mesh ref={meshRef} geometry={geometry} scale={viewport.width > 10 ? 1 : 0.7}>
        <meshBasicMaterial
          color="#7c3aed"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  );
}

export default function WireframeMeshCanvas() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <RotatingMesh />
      </Canvas>
    </div>
  );
}
