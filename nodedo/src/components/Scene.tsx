import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { TodoNode } from './TodoNode';
import { Connections } from './Connections';
import { useTodoStore } from '../store';

function SceneContent() {
  const todos = useTodoStore((s) => s.todos);
  const selectTodo = useTodoStore((s) => s.selectTodo);

  return (
    <>
      <color attach="background" args={['#0a0a1a']} />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#4a9eff" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#a855f7" />

      <Stars
        radius={50}
        depth={50}
        count={2000}
        factor={3}
        saturation={0.5}
        fade
        speed={0.5}
      />

      <Connections todos={todos} />

      {todos.map((todo, i) => (
        <TodoNode key={todo.id} todo={todo} index={i} />
      ))}

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={3}
        maxDistance={20}
        autoRotate
        autoRotateSpeed={0.3}
        touches={{ ONE: 1, TWO: 2 }}
      />

      <EffectComposer>
        <Bloom
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          intensity={1.5}
          mipmapBlur
        />
      </EffectComposer>

      {/* Invisible plane to catch click-away */}
      <mesh
        visible={false}
        onClick={() => selectTodo(null)}
      >
        <sphereGeometry args={[50, 8, 8]} />
        <meshBasicMaterial side={2} />
      </mesh>
    </>
  );
}

export function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60 }}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: false }}
      dpr={[1, 2]}
    >
      <SceneContent />
    </Canvas>
  );
}
