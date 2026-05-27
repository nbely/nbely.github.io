import { useState } from 'react';
import { useApp } from '../lib/useApp';
import { DexArt, DexArtKind } from '../lib/sprites';
import { DialogueBox, DialogueChoice, DialogueNode } from '../lib/dialogue';

function getTypeChipClass(index: number): string {
  if (index === 0) return 'emerald';
  if (index === 1) return 'gold';
  return '';
}

interface DexAction {
  label: string;
  href?: string;
  primary?: boolean;
  quest?: boolean;
}

interface DexQuest {
  id: string;
  prompt: string;
  lines: [string, string];
}

interface DexEntry {
  id: string;
  number: string;
  name: string;
  types: string[];
  desc: string;
  stats: [string, string][];
  actions: DexAction[];
  featured: boolean;
  art: DexArtKind;
  quest?: DexQuest;
}

const ENTRIES: DexEntry[] = [
  {
    id: 'flowcord',
    number: '001',
    name: 'FLOWCORD',
    types: ['OSS', 'DISCORD.JS', 'TYPESCRIPT'],
    desc: 'A UI state-menu framework for Discord.js bots. Declarative menus, shared state, less boilerplate — build complex interactive bot UIs without the usual mess of listener spaghetti.',
    stats: [
      ['ROLE', 'Creator'],
      ['STATUS', 'Active'],
      ['LINK', 'flowcord.dev'],
    ],
    actions: [
      { label: 'READ DOCS', href: 'https://flowcord.dev/', primary: true },
      { label: 'GITHUB ↗', href: 'https://github.com/flowcord-dev/flowcord-core' },
    ],
    featured: true,
    art: 'flowcord',
    quest: {
      id: 'flowcord-why',
      prompt: 'Why build another Discord framework?',
      lines: [
        'Most bots bolt on interactive menus as an afterthought — you end up with state scattered across closures and listeners. I wanted something declarative, like React for bot UIs.',
        'Flowcord treats menus as state machines. You describe the screens and transitions; the framework handles the wiring. Less boilerplate, fewer footguns, and state that actually lives somewhere you can reason about.',
      ],
    },
  },
  {
    id: 'pokesandbox',
    number: '002',
    name: 'POKÉSANDBOX',
    types: ['FANGAME-ENGINE', 'BOT', 'NODE'],
    desc: 'A Pokémon fangame creation engine: Discord servers can design, manage and deploy their own custom regions as playable games, all run through a bot. Catching, battling, progression — server-native.',
    stats: [
      ['ROLE', 'Creator'],
      ['STATUS', 'In development'],
      ['LINK', 'github.com/nbely/pokesandbox'],
    ],
    actions: [{ label: 'GITHUB ↗', href: 'https://github.com/nbely/pokesandbox', primary: true }],
    featured: true,
    art: 'pokesandbox',
    quest: {
      id: 'pokesandbox-origin',
      prompt: "What's the origin story?",
      lines: [
        "I grew up on Gold and Sapphire, and I've always wanted to let other people build their own little Pokémon worlds without hacking ROMs.",
        "PokéSandbox is the answer I wish I'd had: a server admin can configure a region, set up encounters and trainers, and players explore it through normal Discord messages. It's my love letter to fangames and to Discord communities both.",
      ],
    },
  },
  {
    id: 'placeholder-1',
    number: '003',
    name: 'SIDE QUEST 03',
    types: ['WEB', 'REACT'],
    desc: 'Placeholder — a smaller experiment or side project lives here. Swap in real copy once the dust settles.',
    stats: [
      ['ROLE', 'Solo'],
      ['STATUS', 'Archived'],
    ],
    actions: [{ label: 'GITHUB ↗', href: '#' }],
    featured: false,
    art: 'generic',
  },
  {
    id: 'placeholder-2',
    number: '004',
    name: 'SIDE QUEST 04',
    types: ['CLI', 'GO'],
    desc: 'Another slot to fill. Keeps the dex feeling alive without overclaiming.',
    stats: [
      ['ROLE', 'Solo'],
      ['STATUS', 'Tinkering'],
    ],
    actions: [{ label: 'GITHUB ↗', href: '#' }],
    featured: false,
    art: 'generic',
  },
];

type QuestTree = Record<string, DialogueNode>;

const buildQuestTree = (quest: DexQuest): QuestTree => ({
  root: {
    text: quest.lines[0],
    choices: [
      { label: 'GO ON…', next: 'n1' },
      { label: 'LATER', close: true },
    ],
  },
  n1: { text: quest.lines[1], choices: [{ label: 'THANKS', close: true }] },
});

export default function DevDex() {
  const { state, togglePlay, completeQuest, logDialogue } = useApp();
  const [filter, setFilter] = useState('ALL');
  const [activeQuest, setActiveQuest] = useState<DexQuest | null>(null);
  const [questNode, setQuestNode] = useState('root');

  const filtered = filter === 'ALL' ? ENTRIES : ENTRIES.filter((e) => e.types.includes(filter));
  const allTypes = ['ALL', ...Array.from(new Set(ENTRIES.flatMap((e) => e.types)))];

  const onQuestClick = (entry: DexEntry) => {
    if (!entry.quest || !state.questsVisible) return;
    setActiveQuest(entry.quest);
    setQuestNode('root');
    completeQuest(entry.quest.id);
  };

  const questTree = activeQuest ? buildQuestTree(activeQuest) : null;

  const handleQuestChoose = (choice: DialogueChoice) => {
    logDialogue({ who: 'YOU', text: choice.label });
    if (choice.close) {
      setActiveQuest(null);
      return;
    }
    if (choice.next && questTree?.[choice.next]) {
      setQuestNode(choice.next);
    }
  };

  const defaultNode: DialogueNode = {
    text: "Click a ! marker next to any entry and I'll tell you the story behind it. Grey checks mean you've heard that one — hover to re-engage.",
    choices: [
      { label: 'BACK TO PLAY', goto: 'play' },
      { label: 'CLOSE DIALOGUE', close: true },
    ],
  };

  return (
    <div className="dex-root">
      <div className="dex-header">
        <div>
          <h2>DEV-DEX</h2>
          <div className="count">
            No. {String(filtered.length).padStart(3, '0')} /{' '}
            {String(ENTRIES.length).padStart(3, '0')} entries
          </div>
        </div>
        <div className="filter-select">
          <div className="select-wrap">
            <span className="select-prefix" aria-hidden="true">
              FILTER ·
            </span>
            <select
              id="dex-filter"
              aria-label="Filter by type"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              {allTypes.map((t) => (
                <option key={t} value={t}>
                  {t === 'ALL' ? 'ALL TYPES' : t}
                </option>
              ))}
            </select>
            <span className="select-caret" aria-hidden="true">
              ▾
            </span>
          </div>
        </div>
      </div>

      <div className="dex-list">
        {filtered.map((entry) => {
          const done = state.completedQuests.includes(entry.quest?.id ?? '');
          return (
            <article key={entry.id} className={`dex-entry ${entry.featured ? 'featured' : ''}`}>
              {state.questsVisible && entry.quest && (
                <span
                  className={`marker quest-mk ${done ? 'done' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onQuestClick(entry);
                  }}
                  title={done ? 'Re-engage quest' : entry.quest.prompt}
                >
                  {done ? '' : '!'}
                </span>
              )}
              <div className="dex-head">
                <div className="dex-id">No. {entry.number}</div>
                <div className="name">{entry.name}</div>
                <div className="types">
                  {entry.types.map((t, i) => (
                    <span key={t} className={`type-chip ${getTypeChipClass(i)}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="dex-row">
                <div className="dex-art">
                  <DexArt kind={entry.art} />
                </div>
                <div className="dex-content">
                  <div className="desc">{entry.desc}</div>
                  <div className="stats">
                    {entry.stats.map(([k, v]) => (
                      <span key={k}>
                        <b>{k}</b>&nbsp;&nbsp;{v}
                      </span>
                    ))}
                  </div>
                  <div className="actions">
                    {entry.actions.map((a, i) =>
                      a.href ? (
                        <a
                          key={i}
                          className={`btn ${a.primary ? 'primary' : ''}`}
                          href={a.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {a.label}
                        </a>
                      ) : (
                        <button
                          key={i}
                          className={`btn ${a.primary ? 'primary' : ''}`}
                          onClick={() => a.quest && onQuestClick(entry)}
                        >
                          {a.label}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {(state.playMode || activeQuest) && (
        <div className="docked-dlg">
          <DialogueBox
            speaker="NICK"
            node={activeQuest && questTree ? questTree[questNode] : defaultNode}
            onChoose={(c) => {
              if (activeQuest) {
                handleQuestChoose(c);
                return;
              }
              if (c.goto) {
                logDialogue({ who: 'YOU', text: c.label });
                globalThis.dispatchEvent(new CustomEvent('nav-go', { detail: c.goto }));
              }
              if (c.close) togglePlay();
            }}
            showPortrait={true}
            speed={14}
            onMinimize={togglePlay}
            onClose={togglePlay}
          />
        </div>
      )}
    </div>
  );
}
