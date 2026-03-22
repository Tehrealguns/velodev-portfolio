import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import type { Todo } from '../types';
import { PRIORITY_COLORS, PRIORITY_EMISSIVE } from '../types';
import { useTodoStore } from '../store';

interface TodoNodeProps {
  todo: Todo;
  index: number;
}

export function TodoNode({ todo, index }: TodoNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const selectTodo = useTodoStore((s) => s.selectTodo);
  const setModalOpen = useTodoStore((s) => s.setModalOpen);
  const toggleComplete = useTodoStore((s) => s.toggleComplete);
  const selectedId = useTodoStore((s) => s.selectedTodoId);
  const isSelected = selectedId === todo.id;

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    // Gentle bobbing
    meshRef.current.position.y =
      todo.position[1] + Math.sin(t * 0.8 + index * 1.5) * 0.15;

    // Scale animation
    const targetScale = todo.completed ? 0.1 : hovered || isSelected ? 1.4 : 1;
    meshRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1
    );
  });

  const handleClick = (e: THREE.Event) => {
    (e as any).stopPropagation?.();
    if (todo.completed) return;
    selectTodo(todo.id);
    setModalOpen(true);
  };

  const handleDoubleClick = (e: THREE.Event) => {
    (e as any).stopPropagation?.();
    toggleComplete(todo.id);
  };

  const color = PRIORITY_COLORS[todo.priority];
  const emissive = PRIORITY_EMISSIVE[todo.priority];

  return (
    <group position={todo.position}>
      <mesh
        ref={meshRef}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={hovered || isSelected ? 2 : 0.8}
          transparent
          opacity={todo.completed ? 0.2 : 0.9}
          roughness={0.2}
          metalness={0.3}
        />
      </mesh>
      {!todo.completed && (
        <Text
          position={[0, 0.6, 0]}
          fontSize={0.25}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={3}
          outlineWidth={0.02}
          outlineColor="#000000"
        >
          {todo.text}
        </Text>
      )}
      {/* Glow ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.45, 0.5, 32]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={hovered || isSelected ? 0.6 : 0.15}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}
