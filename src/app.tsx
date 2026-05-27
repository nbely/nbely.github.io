import { ReactNode, useEffect } from 'react';
import { AppProvider } from './lib/store';
import { useApp } from './lib/useApp';
import PauseMenu from './shell/PauseMenu';
import TitleScreen from './screens/TitleScreen';
import PlayScreen from './screens/PlayScreen';
import DevDex from './screens/DevDex';
import TrainerCard from './screens/TrainerCard';
import LinkUp from './screens/LinkUp';

function MobileTopbar() {
  const { state, update } = useApp();
  return (
    <div className="mobile-topbar">
      <button onClick={() => update({ mobileMenuOpen: !state.mobileMenuOpen })}>☰ MENU</button>
      <span>NICK BELY</span>
      <button onClick={() => update({ night: !state.night })}>{state.night ? '☀' : '☾'}</button>
    </div>
  );
}

function Shell() {
  const { state, go } = useApp();

  useEffect(() => {
    const handler = (e: Event) => go((e as CustomEvent<string>).detail);
    globalThis.addEventListener('nav-go', handler);
    return () => globalThis.removeEventListener('nav-go', handler);
  }, [go]);

  if (state.route === 'title' && !state.visited) {
    return <TitleScreen />;
  }

  let screen: ReactNode;
  switch (state.route) {
    case 'title':
      screen = <TitleScreen />;
      break;
    case 'play':
      screen = <PlayScreen />;
      break;
    case 'dex':
      screen = <DevDex />;
      break;
    case 'card':
      screen = <TrainerCard />;
      break;
    case 'link':
      screen = <LinkUp />;
      break;
    default:
      screen = <PlayScreen />;
  }

  return (
    <div className="app">
      <MobileTopbar />
      <div className="app-body">
        <PauseMenu />
        <main className="main-col">{screen}</main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Shell />
    </AppProvider>
  );
}
