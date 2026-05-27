import { useState } from 'react';
import { useApp } from '../lib/useApp';
import { TrainerSprite } from '../lib/sprites';
import { DialogueBox, DialogueChoice, DialogueNode } from '../lib/dialogue';

type DialogueTree = Record<string, DialogueNode>;

const PLAY_INTRO: DialogueTree = {
  root: {
    text: "Hey! Glad you made it. I'm Nick — I build open-source tools for Discord communities, and I like telling good stories with code. Want the tour?",
    choices: [
      { label: 'SHOW ME AROUND', next: 'tour' },
      { label: 'WHAT ARE YOU BUILDING?', next: 'projects' },
      { label: 'OPEN DEV-DEX', goto: 'dex' },
      { label: 'OPEN TRAINER CARD', goto: 'card' },
      { label: 'SKIP', next: 'skip' },
    ],
  },
  tour: {
    text: "Cool. A quick rundown: the side-nav (☰ MENU) gets you anywhere — DEV-DEX for projects, TRAINER CARD for work history, LINK UP to reach me. See the yellow ! markers? Those are quests — click one and I'll tell you the story behind it. Toggle QUESTS off in the menu any time if you want a quieter read.",
    choices: [
      { label: 'WHAT ABOUT YOUR PROJECTS?', next: 'projects' },
      { label: 'GOT IT — OPEN DEV-DEX', goto: 'dex' },
      { label: 'SKIP', next: 'skip' },
    ],
  },
  projects: {
    text: 'Two big ones: FLOWCORD — a UI state-menu framework for Discord.js bots — and POKÉSANDBOX, a Pokémon fangame engine that lets Discord servers deploy their own custom regions as playable games. Both are open-source and both are a good time.',
    choices: [
      { label: 'SHOW ME THE DEV-DEX', goto: 'dex' },
      { label: 'TELL ME ABOUT YOU', next: 'about' },
      { label: 'SKIP', next: 'skip' },
    ],
  },
  about: {
    text: "Casual, loyal, a little bit cheesy. I'm the friend who'd rather build the weird thing with you than brag about having built it. Fantasy + sci-fi reader, DnD DM, Pokémon gen 1–3 kid at heart. Nice to meet you.",
    choices: [
      { label: 'OPEN TRAINER CARD', goto: 'card' },
      { label: 'OPEN DEV-DEX', goto: 'dex' },
      { label: 'LINK UP', goto: 'link' },
    ],
  },
  skip: {
    text: "All good. The menu's there whenever you want it. Click a ! marker on any page if you ever want the long version.",
    choices: [
      { label: 'OK', next: 'root' },
      { label: 'OPEN DEV-DEX', goto: 'dex' },
    ],
  },
};

const PLAY_RETURN: DialogueTree = {
  root: {
    text: "Hey, you're back! Good to see you. Where to this time?",
    choices: [
      { label: 'DEV-DEX', goto: 'dex' },
      { label: 'TRAINER CARD', goto: 'card' },
      { label: 'LINK UP', goto: 'link' },
      { label: 'RUN INTRO AGAIN', next: 'intro-again' },
    ],
  },
  'intro-again': {
    text: "Sure — grab a seat. I'll give you the tour from the top.",
    choices: [{ label: "LET'S GO", restart: true }],
  },
};

export default function PlayScreen() {
  const { state, go, logDialogue } = useApp();
  const hasVisitedBefore = state.visited && state.dialogueLog.length > 0;
  const [tree, setTree] = useState<DialogueTree>(hasVisitedBefore ? PLAY_RETURN : PLAY_INTRO);
  const [nodeId, setNodeId] = useState('root');
  const node = tree[nodeId];

  const handleChoose = (choice: DialogueChoice) => {
    logDialogue({ who: 'YOU', text: choice.label });
    if (choice.goto) {
      go(choice.goto);
    } else if (choice.restart) {
      setTree(PLAY_INTRO);
      setNodeId('root');
    } else if (choice.next && tree[choice.next]) {
      setNodeId(choice.next);
    }
  };

  return (
    <div className="play-stage">
      <div className="scene">
        <div className="pattern" />
        <div className="hbar" />
        <div className="grass" />
        <div className="sprite-spot">
          <TrainerSprite scale={6} />
        </div>
        {state.questsVisible && (
          <div className="quest-tags">
            <div className="row">
              <span className="quest-mk" style={{ width: 16, height: 16, fontSize: 9 }}>
                !
              </span>
              <span>ASK ABOUT FLOWCORD</span>
            </div>
            <div className="row">
              <span className="quest-mk" style={{ width: 16, height: 16, fontSize: 9 }}>
                !
              </span>
              <span>ASK ABOUT POKÉSANDBOX</span>
            </div>
          </div>
        )}
      </div>

      <DialogueBox
        speaker="NICK"
        node={node}
        onChoose={handleChoose}
        showPortrait={true}
        speed={14}
      />
    </div>
  );
}
