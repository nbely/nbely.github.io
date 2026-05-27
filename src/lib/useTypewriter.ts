import { useState, useEffect, useRef } from 'react';

export function useTypewriter(text: string, speedMs = 18) {
  const [shown, setShown] = useState('');
  const [done, setDone] = useState(false);
  const idxRef = useRef(0);
  const rafRef = useRef(0);
  const lastRef = useRef(0);

  useEffect(() => {
    setShown('');
    setDone(false);
    idxRef.current = 0;
    lastRef.current = 0;

    const step = (t: number) => {
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
