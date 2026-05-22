import { useState, useEffect, useRef } from 'react';
import { useApp } from './store';
import { Portrait } from './sprites';

export function useTypewriter(text, speedMs = 18) {
  const [shown, setShown] = useState('');
  const [done, setDone] = useState(false);
  const idxRef = useRef(0);
  const rafRef = useRef(null);
  const lastRef = useRef(0);

  useEffect(() => {
    setShown('');
    setDone(false);
    idxRef.current = 0;
    lastRef.current = 0;

    const step = (t) => {
      if (!lastRef.current) lastRef.current = t;
      const dt = t - lastRef.current;
      if (dt >= speedMs) {
        const advance = Math.max(1, Math.floor(dt / speedMs));
        idxRef.current = Math.min(text.length, idxRef.current + advance);
        setShown(text.slice(0, idxRef.current));
        lastRef.current = t;
      }
      if (idxRef.current < text.length) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setDone(true);
      }
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [text, speedMs]);

  const finish = () => {
    cancelAnimationFrame(rafRef.current);
    idxRef.current = text.length;
    setShown(text);
    setDone(true);
  };

  return { shown, done, finish };
}

export function DialogueBox({ speaker = 'NICK', node, onChoose, showPortrait = true, speed = 14, onClose, onMinimize }) {
  const { shown, done, finish } = useTypewriter(node.text, speed);
  const { state, logDialogue, clearLog } = useApp();
  const [logOpen, setLogOpen] = useState(false);
  const [choiceIdx, setChoiceIdx] = useState(0);
  const loggedRef = useRef(null);

  useEffect(() => {
    if (done && loggedRef.current !== node.text) {
      loggedRef.current = node.text;
      logDialogue({ who: speaker, text: node.text });
    }
  }, [done, node.text, speaker, logDialogue]);

  useEffect(() => {
    const onKey = (e) => {
      if (!done) {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'a' || e.key === 'A') {
          finish(); e.preventDefault(); return;
        }
      } else {
        const choices = node.choices || [];
        if (!choices.length) return;
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
          setChoiceIdx(i => (i + 1) % choices.length); e.preventDefault();
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
          setChoiceIdx(i => (i - 1 + choices.length) % choices.length); e.preventDefault();
        } else if (e.key === 'Enter' || e.key === ' ' || e.key === 'a' || e.key === 'A') {
          onChoose && onChoose(choices[choiceIdx]);
          setChoiceIdx(0);
          e.preventDefault();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [done, node.choices, choiceIdx, finish, onChoose]);

  return (
    <div className="dlg" role="dialog" aria-label="Dialogue">
      {logOpen && (
        <div className="dlg-log" onClick={(e) => e.stopPropagation()}>
          <h4>DIALOGUE LOG</h4>
          {state.dialogueLog.length === 0
            ? <div style={{ color: 'var(--ink-muted)', fontSize: 16 }}>Nothing here yet.</div>
            : <ul>
                {state.dialogueLog.slice().reverse().map((e, i) => (
                  <li key={i}><span className="who">{e.who}:</span>{e.text}</li>
                ))}
              </ul>}
          <div style={{ marginTop: 10, display: 'flex', gap: 8 }}>
            <button className="choice" onClick={() => setLogOpen(false)}>CLOSE</button>
            <button className="choice" onClick={clearLog}>CLEAR</button>
          </div>
        </div>
      )}
      <div className="dlg-head">
        {showPortrait && <Portrait speaking={!done} />}
        <span className="speaker">{speaker}</span>
        <div className="controls">
          <button onClick={() => setLogOpen(o => !o)} title="Dialogue log">▤ LOG</button>
          {onMinimize && <button onClick={onMinimize} title="Minimize">▽</button>}
          {onClose && <button onClick={onClose} title="Close">×</button>}
        </div>
      </div>
      <div className="text" onClick={() => (done ? null : finish())}>
        {shown}
        {!done && <span className="caret" />}
      </div>
      {done && node.choices && node.choices.length > 0 && (
        <div className="choices">
          {node.choices.map((c, i) => (
            <button
              key={i}
              className={`choice ${i === choiceIdx ? 'sel' : ''}`}
              onMouseEnter={() => setChoiceIdx(i)}
              onClick={() => { onChoose && onChoose(c); setChoiceIdx(0); }}>
              {c.icon || '▶'} {c.label}
            </button>
          ))}
        </div>
      )}
      {done && (!node.choices || node.choices.length === 0) && (
        <div className="advance">▼ CLICK TO CONTINUE</div>
      )}
    </div>
  );
}
