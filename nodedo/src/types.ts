export type Priority = 'low' | 'medium' | 'high';

export interface Todo {
  id: string;
  text: string;
  priority: Priority;
  completed: boolean;
  createdAt: number;
  position: [number, number, number];
}

export const PRIORITY_COLORS: Record<Priority, string> = {
  low: '#4a9eff',
  medium: '#a855f7',
  high: '#f43f5e',
};

export const PRIORITY_EMISSIVE: Record<Priority, string> = {
  low: '#1a4fff',
  medium: '#7c3aed',
  high: '#dc2626',
};
