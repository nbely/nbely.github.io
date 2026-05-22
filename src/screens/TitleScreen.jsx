import { useApp } from '../lib/store';

export default function TitleScreen() {
  const { state, update, go, markVisited } = useApp();

  const start = () => {
    markVisited();
    go('play');
  };

  return (
    <div className="title-screen">
      <button className="night-pill" onClick={() => update({ night: !state.night })} title="Toggle night mode">
        {state.night ? '☀ DAY' : '☾ NIGHT'}
      </button>

      <div className="crt-frame">
        <h1 className="logo">
          <span className="nick">NICK</span> <span className="bely">BELY</span>
        </h1>
        <div className="version">ver. 2.0 — new game</div>

        <p className="tagline">
          full-stack dev · open-source author<br/>
          tells stories, ships weird useful things
        </p>

        <button className="press-start" onClick={start} autoFocus>
          ▶ PRESS START
        </button>

        <div className="deco-row" aria-hidden="true">
          <span className="px" /><span className="px" /><span className="px" /><span className="px" /><span className="px" /><span className="px" /><span className="px" /><span className="px" />
        </div>

        <div className="meta">
          <span>© NICK BELY · {new Date().getFullYear()}</span>
          <span>emerald edition</span>
        </div>
      </div>
    </div>
  );
}
