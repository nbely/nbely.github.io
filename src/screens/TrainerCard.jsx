import { useState } from 'react';
import { Portrait } from '../lib/sprites';

const TRAINER_STATS = [
  { label: 'NAME', value: 'NICK BELY' },
  { label: 'CLASS', value: 'FULL-STACK DEV' },
  { label: 'HOME', value: 'NEW YORK CITY' },
  { label: 'PLAYTIME', value: '5+ YEARS' },
  { label: 'TYPE', value: 'TS / NODE / REACT' },
];

const BADGES = [
  { id: 'launch-eng-1',  letter: 'I',  label: 'ENGINEER I',         org: 'LAUNCH BY NTT DATA', year: '2020', color: 'emerald' },
  { id: 'launch-eng-2',  letter: 'II', label: 'ENGINEER II',        org: 'LAUNCH BY NTT DATA', year: '2021', color: 'emerald' },
  { id: 'launch-sr-1',   letter: 'S',  label: 'SENIOR ENGINEER I',  org: 'LAUNCH BY NTT DATA', year: '2022', color: 'gold' },
  { id: 'novata-mid',    letter: 'M',  label: 'MID-LEVEL ENGINEER', org: 'NOVATA',             year: '2023', color: 'emerald' },
  { id: 'novata-sr-1',   letter: 'S',  label: 'SENIOR ENGINEER I',  org: 'NOVATA',             year: '2024', color: 'gold' },
];

const WORK_HISTORY = [
  {
    company: 'NOVATA',
    period: '2023 — PRESENT',
    blurb: 'ESG data platform for private markets. Shipped reporting, data ingestion, and internal tooling work.',
    roles: [
      { title: 'Senior Engineer I', period: '2024 — PRESENT' },
      { title: 'Mid-Level Engineer', period: '2023 — 2024' },
    ],
    stack: ['TYPESCRIPT', 'REACT', 'NODE', 'POSTGRES'],
  },
  {
    company: 'LAUNCH BY NTT DATA',
    period: '2020 — 2023',
    blurb: 'Consulting agency. Built and shipped client products across multiple stacks — first dev role out of school.',
    roles: [
      { title: 'Senior Engineer I', period: '2022 — 2023' },
      { title: 'Engineer II', period: '2021 — 2022' },
      { title: 'Engineer I', period: '2020 — 2021' },
    ],
    stack: ['ANGULAR', 'REACT', 'NODE', 'JAVA', 'AWS'],
  },
];

export default function TrainerCard() {
  const [side, setSide] = useState('front');

  return (
    <div className={`tc-root ${side === 'back' ? 'is-back' : ''}`}>
      <div className="tc-header">
        <div>
          <h2 className="h-pixel" style={{ fontSize: 16, letterSpacing: 2 }}>TRAINER CARD</h2>
          <div className="tc-sub mono">{side === 'front' ? 'FRONT · stats & badges' : 'BACK · work history'}</div>
        </div>
        <button className="tc-flip" onClick={() => setSide(s => s === 'front' ? 'back' : 'front')}>
          ↻ FLIP CARD
        </button>
      </div>

      <div className="tc-stage">
        <div className={`tc-card ${side === 'back' ? 'is-back' : 'is-front'}`} key={side}>
          {side === 'front' ? (
            <div className="tc-front">
            <div className="tc-front-top">
              <div className="tc-portrait">
                <Portrait scale={5} />
                <span className="tc-portrait-label">NICK</span>
              </div>
              <dl className="tc-stats">
                {TRAINER_STATS.map(s => (
                  <div className="tc-stat-row" key={s.label}>
                    <dt>{s.label}</dt>
                    <dd>{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="tc-badge-case">
              <div className="tc-section-label">BADGES · {BADGES.length}</div>
              <div className="tc-badge-grid">
                {BADGES.map(b => (
                  <div className="tc-badge" key={b.id} title={`${b.label} · ${b.org} · ${b.year}`}>
                    <div className={`tc-badge-disc ${b.color}`}>
                      <span>{b.letter}</span>
                    </div>
                    <div className="tc-badge-meta">
                      <div className="tc-badge-name">{b.label}</div>
                      <div className="tc-badge-org">{b.org}</div>
                      <div className="tc-badge-year mono">{b.year}</div>
                    </div>
                  </div>
                ))}
                {Array.from({ length: Math.max(0, 8 - BADGES.length) }).map((_, i) => (
                  <div className="tc-badge tc-badge-empty" key={`empty-${i}`} title="Locked">
                    <div className="tc-badge-disc tc-badge-disc-empty">
                      <span aria-hidden="true">?</span>
                    </div>
                    <div className="tc-badge-meta">
                      <div className="tc-badge-name">LOCKED</div>
                      <div className="tc-badge-org">future role</div>
                      <div className="tc-badge-year mono">— —</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="tc-footer-meta mono">
              ID No. 00042 · CARTRIDGE: EMERALD · LAST SAVED {new Date().toLocaleDateString()}
            </div>
            </div>
          ) : (
            <div className="tc-back">
            <div className="tc-section-label">WORK HISTORY</div>
            <div className="tc-jobs">
              {WORK_HISTORY.map(job => (
                <article className="tc-job" key={job.company}>
                  <header>
                    <h3>{job.company}</h3>
                    <span className="mono">{job.period}</span>
                  </header>
                  <p className="tc-blurb">{job.blurb}</p>
                  <ul className="tc-role-list">
                    {job.roles.map(r => (
                      <li key={r.title}>
                        <span className="tc-role-bullet" aria-hidden="true">▸</span>
                        <span className="tc-role-title">{r.title}</span>
                        <span className="tc-role-period mono">{r.period}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="tc-stack">
                    {job.stack.map(t => <span key={t} className="type-chip">{t}</span>)}
                  </div>
                </article>
              ))}
            </div>

            <div className="tc-footer-meta mono">
              ID No. 00042 · 2 ORGS · 5 ROLES · STILL PLAYING
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
