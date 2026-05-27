import { createContext } from 'react';

export interface DialogueEntry {
  who: string;
  text: string;
  at: number;
}

export interface AppState {
  visited: boolean;
  route: string;
  playMode: boolean;
  questsVisible: boolean;
  night: boolean;
  menuCollapsed: boolean;
  mobileMenuOpen: boolean;
  completedQuests: string[];
  dialogueLog: DialogueEntry[];
}

export interface AppContextValue {
  state: AppState;
  update: (patch: Partial<AppState> | ((prev: AppState) => AppState)) => void;
  go: (route: string) => void;
  markVisited: () => void;
  togglePlay: () => void;
  toggleQuests: () => void;
  completeQuest: (id: string) => void;
  logDialogue: (entry: Omit<DialogueEntry, 'at'>) => void;
  clearLog: () => void;
}

export const AppCtx = createContext<AppContextValue | null>(null);
