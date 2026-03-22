import { Scene } from './components/Scene';
import { AddButton } from './components/AddButton';
import { TodoModal } from './components/TodoModal';
import { useTodoStore } from './store';

function EmptyState() {
  const todos = useTodoStore((s) => s.todos);
  const activeTodos = todos.filter((t) => !t.completed);

  if (activeTodos.length > 0) return null;

  return (
    <div style={styles.empty}>
      <p style={styles.emptyText}>tap + to spawn your first node</p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Scene />
      <EmptyState />
      <AddButton />
      <TodoModal />
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  empty: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
    pointerEvents: 'none',
  },
  emptyText: {
    color: 'rgba(255,255,255,0.3)',
    fontSize: '1.1rem',
    fontFamily: 'system-ui, sans-serif',
    textAlign: 'center',
  },
};
