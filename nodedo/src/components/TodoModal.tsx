import { useState, useEffect } from 'react';
import { useTodoStore } from '../store';
import type { Priority } from '../types';
import { PRIORITY_COLORS } from '../types';

const priorities: { value: Priority; label: string }[] = [
  { value: 'low', label: 'Chill' },
  { value: 'medium', label: 'Mid' },
  { value: 'high', label: 'Urgent' },
];

export function TodoModal() {
  const modalOpen = useTodoStore((s) => s.modalOpen);
  const setModalOpen = useTodoStore((s) => s.setModalOpen);
  const selectedTodoId = useTodoStore((s) => s.selectedTodoId);
  const todos = useTodoStore((s) => s.todos);
  const addTodo = useTodoStore((s) => s.addTodo);
  const editTodo = useTodoStore((s) => s.editTodo);
  const deleteTodo = useTodoStore((s) => s.deleteTodo);
  const toggleComplete = useTodoStore((s) => s.toggleComplete);

  const selectedTodo = todos.find((t) => t.id === selectedTodoId);

  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');

  useEffect(() => {
    if (selectedTodo) {
      setText(selectedTodo.text);
      setPriority(selectedTodo.priority);
    } else {
      setText('');
      setPriority('medium');
    }
  }, [selectedTodo, modalOpen]);

  if (!modalOpen) return null;

  const handleSubmit = () => {
    if (!text.trim()) return;
    if (selectedTodo) {
      editTodo(selectedTodo.id, text.trim(), priority);
      setModalOpen(false);
    } else {
      addTodo(text.trim(), priority);
    }
  };

  const handleDelete = () => {
    if (selectedTodo) {
      deleteTodo(selectedTodo.id);
      setModalOpen(false);
    }
  };

  const handleToggleComplete = () => {
    if (selectedTodo) {
      toggleComplete(selectedTodo.id);
      setModalOpen(false);
    }
  };

  return (
    <div style={styles.overlay} onClick={() => setModalOpen(false)}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 style={styles.title}>
          {selectedTodo ? 'Edit Node' : 'New Node'}
        </h2>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs doing?"
          style={styles.input}
          autoFocus
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        />

        <div style={styles.priorities}>
          {priorities.map((p) => (
            <button
              key={p.value}
              onClick={() => setPriority(p.value)}
              style={{
                ...styles.priorityBtn,
                backgroundColor:
                  priority === p.value ? PRIORITY_COLORS[p.value] : 'transparent',
                borderColor: PRIORITY_COLORS[p.value],
                color: priority === p.value ? '#fff' : PRIORITY_COLORS[p.value],
              }}
            >
              {p.label}
            </button>
          ))}
        </div>

        <button onClick={handleSubmit} style={styles.submitBtn}>
          {selectedTodo ? 'Save' : 'Add'}
        </button>

        {selectedTodo && (
          <div style={styles.actions}>
            <button onClick={handleToggleComplete} style={styles.actionBtn}>
              {selectedTodo.completed ? 'Undo' : 'Complete ✓'}
            </button>
            <button
              onClick={handleDelete}
              style={{ ...styles.actionBtn, color: '#f43f5e' }}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  overlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    zIndex: 100,
    padding: '1rem',
    backdropFilter: 'blur(4px)',
  },
  modal: {
    background: 'linear-gradient(145deg, #1a1a2e, #16162a)',
    borderRadius: '1.25rem',
    padding: '1.5rem',
    width: '100%',
    maxWidth: '400px',
    border: '1px solid rgba(255,255,255,0.08)',
    marginBottom: '1rem',
  },
  title: {
    color: '#fff',
    margin: '0 0 1rem',
    fontSize: '1.2rem',
    fontWeight: 600,
  },
  input: {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '0.75rem',
    border: '1px solid rgba(255,255,255,0.1)',
    background: 'rgba(255,255,255,0.05)',
    color: '#fff',
    fontSize: '1rem',
    outline: 'none',
    boxSizing: 'border-box',
  },
  priorities: {
    display: 'flex',
    gap: '0.5rem',
    margin: '1rem 0',
  },
  priorityBtn: {
    flex: 1,
    padding: '0.5rem',
    borderRadius: '0.5rem',
    border: '2px solid',
    cursor: 'pointer',
    fontSize: '0.85rem',
    fontWeight: 600,
    transition: 'all 0.2s',
  },
  submitBtn: {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '0.75rem',
    border: 'none',
    background: 'linear-gradient(135deg, #4a9eff, #a855f7)',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
  },
  actions: {
    display: 'flex',
    gap: '0.5rem',
    marginTop: '0.75rem',
  },
  actionBtn: {
    flex: 1,
    padding: '0.5rem',
    borderRadius: '0.5rem',
    border: '1px solid rgba(255,255,255,0.1)',
    background: 'transparent',
    color: '#ccc',
    cursor: 'pointer',
    fontSize: '0.85rem',
  },
};
