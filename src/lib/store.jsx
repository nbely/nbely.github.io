import { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';

const LS_KEY = 'nbely-portfolio-v1';
const defaultState = {
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

function loadState() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return { ...defaultState };
    const parsed = JSON.parse(raw);
    return { ...defaultState, ...parsed, mobileMenuOpen: false };
  } catch (e) {
    return { ...defaultState };
  }
}

function saveState(s) {
  try {
    const { mobileMenuOpen, ...persist } = s;
    localStorage.setItem(LS_KEY, JSON.stringify(persist));
  } catch (e) {}
}

const AppCtx = createContext(null);

export function AppProvider({ children }) {
  const [state, setState] = useState(() => loadState());

  useEffect(() => { saveState(state); }, [state]);

  useEffect(() => {
    document.body.classList.toggle('night', state.night);
  }, [state.night]);

  const update = useCallback((patch) => {
    setState(prev => (typeof patch === 'function' ? patch(prev) : { ...prev, ...patch }));
  }, []);

  const go = useCallback((route) => {
    setState(prev => ({ ...prev, route, mobileMenuOpen: false }));
  }, []);

  const markVisited = useCallback(() => {
    setState(prev => prev.visited ? prev : { ...prev, visited: true });
  }, []);

  const togglePlay = useCallback(() => {
    setState(prev => {
      const next = !prev.playMode;
      return next
        ? { ...prev, playMode: true, questsVisible: true }
        : { ...prev, playMode: false };
    });
  }, []);

  const toggleQuests = useCallback(() => {
    setState(prev => ({ ...prev, questsVisible: !prev.questsVisible }));
  }, []);

  const completeQuest = useCallback((id) => {
    setState(prev =>
      prev.completedQuests.includes(id)
        ? prev
        : { ...prev, completedQuests: [...prev.completedQuests, id] }
    );
  }, []);

  const logDialogue = useCallback((entry) => {
    setState(prev => ({
      ...prev,
      dialogueLog: [...prev.dialogueLog.slice(-80), { ...entry, at: Date.now() }],
    }));
  }, []);

  const clearLog = useCallback(() => {
    setState(prev => ({ ...prev, dialogueLog: [] }));
  }, []);

  const value = useMemo(() => ({
    state, update, go, markVisited,
    togglePlay, toggleQuests,
    completeQuest, logDialogue, clearLog,
  }), [state, update, go, markVisited, togglePlay, toggleQuests, completeQuest, logDialogue, clearLog]);

  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
}

export function useApp() {
  const v = useContext(AppCtx);
  if (!v) throw new Error('useApp must be inside AppProvider');
  return v;
}
