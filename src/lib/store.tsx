import { useEffect, useState, useCallback, useMemo, PropsWithChildren } from 'react';
import { AppCtx, AppContextValue, AppState, DialogueEntry } from './appContext';

export type { AppContextValue, AppState, DialogueEntry };

const LS_KEY = 'nbely-portfolio-v1';

const defaultState: AppState = {
  visited: false,
  route: 'title',
  playMode: true,
  questsVisible: true,
  night: false,
  menuCollapsed: false,
  mobileMenuOpen: false,
  completedQuests: [],
  dialogueLog: [],
};

function loadState(): AppState {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return { ...defaultState };
    const parsed = JSON.parse(raw) as Partial<AppState>;
    return { ...defaultState, ...parsed, mobileMenuOpen: false };
  } catch {
    // localStorage unavailable (e.g. private browsing) — silently ignore
  }
  return { ...defaultState };
}

function saveState(s: AppState): void {
  try {
    const { mobileMenuOpen: _, ...persist } = s;
    localStorage.setItem(LS_KEY, JSON.stringify(persist));
  } catch {
    // localStorage unavailable (e.g. private browsing) — silently ignore
  }
}

export function AppProvider({ children }: Readonly<PropsWithChildren>) {
  const [state, setState] = useState<AppState>(() => loadState());

  useEffect(() => {
    saveState(state);
  }, [state]);

  useEffect(() => {
    document.body.classList.toggle('night', state.night);
  }, [state.night]);

  const update = useCallback((patch: Partial<AppState> | ((prev: AppState) => AppState)) => {
    setState((prev) => (typeof patch === 'function' ? patch(prev) : { ...prev, ...patch }));
  }, []);

  const go = useCallback((route: string) => {
    setState((prev) => ({ ...prev, route, mobileMenuOpen: false }));
  }, []);

  const markVisited = useCallback(() => {
    setState((prev) => (prev.visited ? prev : { ...prev, visited: true }));
  }, []);

  const togglePlay = useCallback(() => {
    setState((prev) => {
      const next = !prev.playMode;
      return next ? { ...prev, playMode: true, questsVisible: true } : { ...prev, playMode: false };
    });
  }, []);

  const toggleQuests = useCallback(() => {
    setState((prev) => ({ ...prev, questsVisible: !prev.questsVisible }));
  }, []);

  const completeQuest = useCallback((id: string) => {
    setState((prev) =>
      prev.completedQuests.includes(id)
        ? prev
        : { ...prev, completedQuests: [...prev.completedQuests, id] }
    );
  }, []);

  const logDialogue = useCallback((entry: Omit<DialogueEntry, 'at'>) => {
    setState((prev) => ({
      ...prev,
      dialogueLog: [...prev.dialogueLog.slice(-80), { ...entry, at: Date.now() }],
    }));
  }, []);

  const clearLog = useCallback(() => {
    setState((prev) => ({ ...prev, dialogueLog: [] }));
  }, []);

  const value = useMemo<AppContextValue>(
    () => ({
      state,
      update,
      go,
      markVisited,
      togglePlay,
      toggleQuests,
      completeQuest,
      logDialogue,
      clearLog,
    }),
    [state, update, go, markVisited, togglePlay, toggleQuests, completeQuest, logDialogue, clearLog]
  );

  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
}
