import { useContext } from 'react';
import { AppCtx, AppContextValue } from './appContext';

export function useApp(): AppContextValue {
  const v = useContext(AppCtx);
  if (!v) throw new Error('useApp must be inside AppProvider');
  return v;
}
