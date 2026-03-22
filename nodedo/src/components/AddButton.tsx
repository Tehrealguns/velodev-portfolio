import { useTodoStore } from '../store';

export function AddButton() {
  const setModalOpen = useTodoStore((s) => s.setModalOpen);
  const selectTodo = useTodoStore((s) => s.selectTodo);

  const handleClick = () => {
    selectTodo(null);
    setModalOpen(true);
  };

  return (
    <button onClick={handleClick} style={styles.fab}>
      <span style={styles.icon}>+</span>
    </button>
  );
}

const styles: Record<string, React.CSSProperties> = {
  fab: {
    position: 'fixed',
    bottom: '2rem',
    right: '1.5rem',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    border: 'none',
    background: 'linear-gradient(135deg, #4a9eff, #a855f7)',
    boxShadow: '0 4px 20px rgba(74, 158, 255, 0.4)',
    cursor: 'pointer',
    zIndex: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
    lineHeight: 1,
    fontWeight: 300,
  },
};
