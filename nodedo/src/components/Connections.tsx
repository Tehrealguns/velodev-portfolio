import { useMemo } from 'react';
import { Line } from '@react-three/drei';
import type { Todo } from '../types';
import { PRIORITY_COLORS } from '../types';

interface ConnectionsProps {
  todos: Todo[];
}

export function Connections({ todos }: ConnectionsProps) {
  const connections = useMemo(() => {
    const active = todos.filter((t) => !t.completed);
    const lines: { points: [number, number, number][]; color: string }[] = [];

    // Connect each node to its nearest 1-2 neighbors for the network look
    for (let i = 0; i < active.length; i++) {
      const distances: { index: number; dist: number }[] = [];
      for (let j = 0; j < active.length; j++) {
        if (i === j) continue;
        const dx = active[i].position[0] - active[j].position[0];
        const dy = active[i].position[1] - active[j].position[1];
        const dz = active[i].position[2] - active[j].position[2];
        distances.push({ index: j, dist: Math.sqrt(dx * dx + dy * dy + dz * dz) });
      }
      distances.sort((a, b) => a.dist - b.dist);
      const neighbors = distances.slice(0, 2);

      for (const n of neighbors) {
        // Avoid duplicate lines (only draw if i < j)
        if (i < n.index) {
          lines.push({
            points: [active[i].position, active[n.index].position],
            color: PRIORITY_COLORS[active[i].priority],
          });
        }
      }
    }
    return lines;
  }, [todos]);

  return (
    <>
      {connections.map((line, i) => (
        <Line
          key={i}
          points={line.points}
          color={line.color}
          lineWidth={1}
          transparent
          opacity={0.25}
        />
      ))}
    </>
  );
}
