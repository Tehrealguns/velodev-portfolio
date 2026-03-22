import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Todo, Priority } from './types';
import { getNodePosition } from './utils/layout';

interface TodoStore {
  todos: Todo[];
  selectedTodoId: string | null;
  modalOpen: boolean;
  addTodo: (text: string, priority: Priority) => void;
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, text: string, priority: Priority) => void;
  selectTodo: (id: string | null) => void;
  setModalOpen: (open: boolean) => void;
}

export const useTodoStore = create<TodoStore>()(
  persist(
    (set, get) => ({
      todos: [],
      selectedTodoId: null,
      modalOpen: false,

      addTodo: (text, priority) => {
        const todos = get().todos;
        const activeTodos = todos.filter((t) => !t.completed);
        const position = getNodePosition(activeTodos.length);
        const newTodo: Todo = {
          id: crypto.randomUUID(),
          text,
          priority,
          completed: false,
          createdAt: Date.now(),
          position,
        };
        set({ todos: [...todos, newTodo], modalOpen: false });
      },

      toggleComplete: (id) => {
        set({
          todos: get().todos.map((t) =>
            t.id === id ? { ...t, completed: !t.completed } : t
          ),
        });
      },

      deleteTodo: (id) => {
        set({
          todos: get().todos.filter((t) => t.id !== id),
          selectedTodoId: null,
        });
      },

      editTodo: (id, text, priority) => {
        set({
          todos: get().todos.map((t) =>
            t.id === id ? { ...t, text, priority } : t
          ),
        });
      },

      selectTodo: (id) => set({ selectedTodoId: id }),
      setModalOpen: (open) => set({ modalOpen: open, selectedTodoId: open ? get().selectedTodoId : null }),
    }),
    {
      name: 'nodedo-storage',
      partialize: (state) => ({ todos: state.todos }),
    }
  )
);
