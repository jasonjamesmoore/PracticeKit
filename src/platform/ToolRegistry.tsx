import { IconCards } from '@tabler/icons-react';
import type { ReactNode } from 'react';

export interface ToolDefinition {
  id: string;
  label: string;
  description: string;
  icon: ReactNode;
  category: 'learning' | 'practice' | 'utilities';
  path: string;  // Base path for the tool
}

// Registry of all available tools
export const toolRegistry: ToolDefinition[] = [
  {
    id: 'flashcards',
    label: 'Flashcards',
    description: 'Learn music theory through interactive quizzes',
    icon: <IconCards size={32} />,
    category: 'learning',
    path: '/tools/flashcards',
  },
  // Future tools will be added here
  // {
  //   id: 'earTraining',
  //   label: 'Ear Training',
  //   description: 'Train your ear to recognize intervals and chords',
  //   icon: <IconEar size={32} />,
  //   category: 'learning',
  //   path: '/tools/earTraining',
  // },
];

// Helper to get tool by ID
export function getToolById(id: string): ToolDefinition | undefined {
  return toolRegistry.find(tool => tool.id === id);
}

// Helper to get tools by category
export function getToolsByCategory(category: ToolDefinition['category']): ToolDefinition[] {
  return toolRegistry.filter(tool => tool.category === category);
}
