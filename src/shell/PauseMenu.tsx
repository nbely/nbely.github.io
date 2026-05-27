import { ReactNode } from 'react';
import { useApp } from '../lib/useApp';

const DexIcon = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    shapeRendering="crispEdges"
    style={{ display: 'block' }}
    aria-hidden="true"
  >
    <rect x="2" y="2" width="12" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <rect x="4" y="4" width="8" height="4" fill="currentColor" />
    <rect x="5" y="10" width="1" height="3" fill="currentColor" />
    <rect x="4" y="11" width="3" height="1" fill="currentColor" />
    <circle cx="11" cy="11" r="1.2" fill="currentColor" />
  </svg>
);

const CardIcon = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    shapeRendering="crispEdges"
    style={{ display: 'block' }}
    aria-hidden="true"
  >
    <rect x="1" y="3" width="14" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <rect x="3" y="5" width="4" height="5" fill="currentColor" />
    <rect x="8" y="6" width="5" height="1" fill="currentColor" />
    <rect x="8" y="9" width="5" height="1" fill="currentColor" />
  </svg>
);

interface NavItem {
  id: string;
  label: string;
  icon: ReactNode;
  hint: string;
}

const NAV: NavItem[] = [
  { id: 'play', label: 'PLAY', icon: '▶', hint: 'home' },
  { id: 'dex', label: 'DEV-DEX', icon: DexIcon, hint: 'projects' },
  { id: 'card', label: 'TRAINER CARD', icon: CardIcon, hint: 'resume' },
  { id: 'link', label: 'LINK UP', icon: '⇄', hint: 'contact' },
];

export default function PauseMenu() {
  const { state, update, go, togglePlay, toggleQuests } = useApp();
  const { route, menuCollapsed, night, playMode, questsVisible, mobileMenuOpen } = state;

  const isMobile = window.innerWidth <= 820;

  return (
    <>
      {mobileMenuOpen && isMobile && (
        <div className="backdrop-close" onClick={() => update({ mobileMenuOpen: false })} />
      )}
      <aside
        className={`pause-rail ${menuCollapsed ? 'collapsed' : ''} ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Pause menu"
      >
        <div className="brand">
          <div className="mark" aria-hidden="true" />
          <div className="name">
            NICK
            <br />
            BELY
          </div>
        </div>

        <div className="menu-label">☰ MENU</div>

        <nav>
          {NAV.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${route === item.id ? 'active' : ''}`}
              onClick={() => go(item.id)}
              title={item.label}
              aria-label={item.label}
            >
              <span className="cursor">▶</span>
              <span className="icon" aria-hidden="true">
                {item.icon}
              </span>
              <span className="label-text">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="toggles">
          <div className="toggle-row">
            <span className="lbl">PLAY</span>
            <span
              className={`pxswitch ${playMode ? 'on' : ''}`}
              onClick={togglePlay}
              role="switch"
              aria-checked={playMode}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') togglePlay();
              }}
            >
              <i />
            </span>
            <span className="hint">{playMode ? 'on' : 'off'}</span>
          </div>
          <div className="toggle-row">
            <span className="lbl">QUESTS</span>
            <span
              className={`pxswitch ${questsVisible ? 'on' : ''}`}
              onClick={toggleQuests}
              role="switch"
              aria-checked={questsVisible}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') toggleQuests();
              }}
            >
              <i />
            </span>
            <span className="hint">{questsVisible ? 'on' : 'off'}</span>
          </div>
          <div className="toggle-row toggle-night-row">
            <span className="lbl">NIGHT</span>
            <span
              className={`pxswitch ${night ? 'on' : ''}`}
              onClick={() => update({ night: !night })}
              role="switch"
              aria-checked={night}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') update({ night: !night });
              }}
            >
              <i />
            </span>
            <span className="hint">{night ? 'on' : 'off'}</span>
          </div>
          <button
            className="toggle-collapse"
            onClick={() => update({ menuCollapsed: !menuCollapsed })}
            title={menuCollapsed ? 'Expand menu' : 'Collapse menu'}
            aria-label={menuCollapsed ? 'Expand menu' : 'Collapse menu'}
          >
            {menuCollapsed ? '»' : '« COLLAPSE'}
          </button>
        </div>
      </aside>
    </>
  );
}
