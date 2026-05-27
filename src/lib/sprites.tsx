import { useState, useEffect } from 'react';

const SPRITE_COLORS = {
  outline: '#1b1e15',
  skin: '#f2c28e',
  skinShadow: '#c08a5f',
  hairA: '#2a2421',
  shirt: '#1fa463',
  shirtShadow: '#14723f',
  pants: '#3a3a55',
  pantsShadow: '#25253d',
  shoes: '#1b1e15',
  laptop: '#c8c0a8',
  laptopScreen: '#78d4a0',
  belt: '#3a2a1f',
  ball: '#c4463b',
  ballW: '#f3ecd1',
} as const;

interface TrainerSpriteProps {
  scale?: number;
  facing?: 'down' | 'left';
  idle?: boolean;
}

export function TrainerSprite({ scale = 5, idle = true }: Readonly<TrainerSpriteProps>) {
  const [bob, setBob] = useState(0);

  useEffect(() => {
    if (!idle) return;
    let raf: number;
    const start = performance.now();
    const loop = (t: number) => {
      const elapsed = (t - start) / 1000;
      setBob(Math.round(Math.sin(elapsed * Math.PI * 1.4) * 0.5 + 0.5));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [idle]);

  const W = 24,
    H = 32;
  const c = SPRITE_COLORS;
  let _pxKey = 0;
  const px = (x: number, y: number, color: string, w = 1, h = 1) => (
    <rect
      key={`p${_pxKey++}`}
      x={x}
      y={y + bob}
      width={w}
      height={h}
      fill={color}
      shapeRendering="crispEdges"
    />
  );

  const rects = [];
  for (let y = 2; y <= 5; y++) for (let x = 8; x <= 15; x++) rects.push(px(x, y, c.hairA));
  rects.push(px(9, 6, c.hairA, 6, 1));
  for (let y = 6; y <= 10; y++) for (let x = 9; x <= 14; x++) rects.push(px(x, y, c.skin));
  rects.push(px(9, 6, c.hairA));
  rects.push(px(14, 6, c.hairA));
  rects.push(px(8, 8, c.skin));
  rects.push(px(15, 8, c.skin));
  rects.push(px(10, 8, c.outline));
  rects.push(px(13, 8, c.outline));
  rects.push(px(11, 10, c.outline, 2, 1));
  rects.push(px(11, 11, c.skinShadow, 2, 1));
  for (let y = 12; y <= 19; y++) for (let x = 7; x <= 16; x++) rects.push(px(x, y, c.shirt));
  for (let x = 7; x <= 16; x++) rects.push(px(x, 19, c.shirtShadow));
  for (let y = 12; y <= 18; y++) {
    rects.push(px(6, y, c.shirt));
    rects.push(px(17, y, c.shirt));
  }
  for (let x = 7; x <= 16; x++) rects.push(px(x, 20, c.belt));
  rects.push(px(14, 20, c.ball));
  rects.push(px(15, 20, c.ball));
  rects.push(px(14, 21, c.ballW));
  rects.push(px(15, 21, c.ballW));
  rects.push(px(14, 20, c.outline));
  for (let y = 21; y <= 26; y++) for (let x = 8; x <= 15; x++) rects.push(px(x, y, c.pants));
  for (let x = 8; x <= 15; x++) rects.push(px(x, 26, c.pantsShadow));
  rects.push(px(11, 22, c.pantsShadow, 1, 5));
  for (let x = 8; x <= 10; x++) rects.push(px(x, 27, c.shoes));
  for (let x = 13; x <= 15; x++) rects.push(px(x, 27, c.shoes));
  for (let x = 8; x <= 10; x++) rects.push(px(x, 28, c.shoes));
  for (let x = 13; x <= 15; x++) rects.push(px(x, 28, c.shoes));
  for (let x = 9; x <= 15; x++) rects.push(px(x, 17, c.laptop));
  for (let x = 9; x <= 15; x++) rects.push(px(x, 18, c.laptop));
  for (let y = 14; y <= 16; y++) for (let x = 10; x <= 15; x++) rects.push(px(x, y, c.outline));
  for (let y = 15; y <= 16; y++)
    for (let x = 11; x <= 14; x++) rects.push(px(x, y, c.laptopScreen));
  rects.push(px(9, 17, c.outline));
  rects.push(px(15, 17, c.outline));
  rects.push(px(9, 18, c.outline));
  rects.push(px(15, 18, c.outline));

  return (
    <svg
      width={W * scale}
      height={H * scale}
      viewBox={`0 0 ${W} ${H}`}
      style={{ imageRendering: 'pixelated', display: 'block' }}
      aria-label="Nick (dev trainer sprite)"
    >
      <ellipse cx={W / 2} cy={H - 1} rx={6} ry={1.2} fill="rgba(27,30,21,0.3)" />
      {rects}
    </svg>
  );
}

interface PortraitProps {
  speaking?: boolean;
  scale?: number;
}

export function Portrait({ speaking = false, scale = 3 }: PortraitProps) {
  const [mouthOpen, setMouthOpen] = useState(false);

  useEffect(() => {
    if (!speaking) {
      setMouthOpen(false);
      return;
    }
    let on = true;
    const id = setInterval(() => {
      on = !on;
      setMouthOpen(on);
    }, 140);
    return () => clearInterval(id);
  }, [speaking]);

  const W = 16,
    H = 16;
  const c = SPRITE_COLORS;
  let _pxKey = 0;
  const px = (x: number, y: number, color: string, w = 1, h = 1) => (
    <rect
      key={`p${_pxKey++}`}
      x={x}
      y={y}
      width={w}
      height={h}
      fill={color}
      shapeRendering="crispEdges"
    />
  );
  const rects = [];
  rects.push(px(0, 0, '#f3ecd1', W, H));
  for (let y = 1; y <= 3; y++) for (let x = 4; x <= 11; x++) rects.push(px(x, y, c.hairA));
  rects.push(px(5, 4, c.hairA, 6, 1));
  for (let y = 4; y <= 9; y++) for (let x = 5; x <= 10; x++) rects.push(px(x, y, c.skin));
  rects.push(px(5, 4, c.hairA));
  rects.push(px(10, 4, c.hairA));
  rects.push(px(4, 6, c.skin));
  rects.push(px(11, 6, c.skin));
  rects.push(px(6, 7, c.outline));
  rects.push(px(9, 7, c.outline));
  if (mouthOpen) {
    rects.push(px(7, 9, c.outline, 2, 1));
    rects.push(px(7, 10, '#6a3a2a', 2, 1));
  } else {
    rects.push(px(7, 9, c.outline, 2, 1));
  }
  for (let y = 11; y <= 15; y++) for (let x = 3; x <= 12; x++) rects.push(px(x, y, c.shirt));
  for (let x = 3; x <= 12; x++) rects.push(px(x, 15, c.shirtShadow));
  rects.push(px(7, 10, c.skinShadow, 2, 1));

  return (
    <div className="portrait" style={{ width: W * scale, height: H * scale }}>
      <svg
        width={W * scale}
        height={H * scale}
        viewBox={`0 0 ${W} ${H}`}
        style={{ imageRendering: 'pixelated' }}
      >
        {rects}
      </svg>
    </div>
  );
}

export type DexArtKind = 'flowcord' | 'pokesandbox' | 'generic';

interface DexArtProps {
  kind?: DexArtKind;
  scale?: number;
}

export function DexArt({ kind = 'generic' }: DexArtProps) {
  const W = 16,
    H = 16;
  let _pxKey = 0;
  const px = (x: number, y: number, color: string, w = 1, h = 1) => (
    <rect
      key={`p${_pxKey++}`}
      x={x}
      y={y}
      width={w}
      height={h}
      fill={color}
      shapeRendering="crispEdges"
    />
  );
  const rects = [];
  const outline = '#1b1e15';

  if (kind === 'flowcord') {
    rects.push(px(0, 0, '#f3ecd1', W, H));
    for (let y = 3; y <= 10; y++) for (let x = 2; x <= 13; x++) rects.push(px(x, y, '#1fa463'));
    rects.push(px(2, 3, outline));
    rects.push(px(13, 3, outline));
    rects.push(px(2, 10, outline));
    rects.push(px(13, 10, outline));
    for (let x = 3; x <= 12; x++) {
      rects.push(px(x, 2, outline));
      rects.push(px(x, 11, outline));
    }
    for (let y = 4; y <= 9; y++) {
      rects.push(px(1, y, outline));
      rects.push(px(14, y, outline));
    }
    rects.push(px(4, 12, '#1fa463'));
    rects.push(px(5, 12, '#1fa463'));
    rects.push(px(4, 12, outline));
    rects.push(px(3, 13, outline));
    rects.push(px(5, 13, outline));
    rects.push(px(5, 6, '#f3ecd1', 2, 2));
    rects.push(px(8, 6, '#f3ecd1', 2, 2));
    rects.push(px(11, 6, '#f3ecd1', 1, 2));
  } else if (kind === 'pokesandbox') {
    rects.push(px(0, 0, '#cfeedd', W, H));
    for (let x = 0; x < W; x++) rects.push(px(x, 12, '#7dd4a5', 1, 4));
    for (let x = 0; x < W; x++) rects.push(px(x, 12, outline));
    for (let y = 4; y <= 10; y++)
      for (let x = 5; x <= 10; x++) {
        rects.push(px(x, y, y <= 6 ? '#c4463b' : '#f3ecd1'));
      }
    for (let x = 5; x <= 10; x++) {
      rects.push(px(x, 4, outline));
      rects.push(px(x, 10, outline));
    }
    for (let y = 4; y <= 10; y++) {
      rects.push(px(5, y, outline));
      rects.push(px(10, y, outline));
    }
    for (let x = 5; x <= 10; x++) rects.push(px(x, 7, outline));
    rects.push(px(7, 7, '#f3ecd1', 2, 1));
    rects.push(px(7, 7, outline, 2, 1));
    rects.push(px(12, 2, '#f2c230'));
    rects.push(px(11, 3, '#f2c230'));
    rects.push(px(13, 3, '#f2c230'));
    rects.push(px(12, 4, '#f2c230'));
  } else {
    rects.push(px(0, 0, '#f3ecd1', W, H));
    for (let x = 2; x <= 13; x++) {
      rects.push(px(x, 2, outline));
      rects.push(px(x, 13, outline));
    }
    for (let y = 2; y <= 13; y++) {
      rects.push(px(2, y, outline));
      rects.push(px(13, y, outline));
    }
    rects.push(px(7, 4, outline, 2, 1));
    rects.push(px(6, 5, outline));
    rects.push(px(9, 5, outline));
    rects.push(px(9, 6, outline));
    rects.push(px(8, 7, outline));
    rects.push(px(7, 8, outline, 2, 1));
    rects.push(px(7, 10, outline, 2, 1));
  }

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid meet"
      style={{ imageRendering: 'pixelated' }}
    >
      {rects}
    </svg>
  );
}
