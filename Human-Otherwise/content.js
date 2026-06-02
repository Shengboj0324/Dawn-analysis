/*
 * Human / Otherwise — approved content & scoring data
 * ---------------------------------------------------
 * All interpretive copy below is the approved base content from the project
 * specification (Micheal Jiang). Only minor punctuation normalization has been
 * applied. The single exception is the "Significance in Dawn" panel for Module 1
 * (Humanity), which the spec required but left unwritten; that passage is marked
 * with `authored: true` so it can be reviewed or replaced.
 *
 * Loaded as a classic script (no ES modules) so the site runs from file://.
 * Strings may contain trusted HTML (e.g. <em>Dawn</em>); there is no user input,
 * so this content is injected via innerHTML safely.
 */
window.CONTENT = {
  meta: {
    wordmark: "Human / Otherwise",
    primaryText: "Dawn",
    author: "Octavia E. Butler"
  },

  landing: {
    title: ["Human", "Otherwise"],
    subtitle: "An interactive literary philosophy experience inspired by Octavia Butler’s <em>Dawn</em>.",
    hook: "What would be preserved if survival needs to be exchanged with genetic transformation?",
    body: "In <em>Dawn</em>, survival is not the ultimate solution to the problem. It is the beginning of a more sophisticated question: how is human defined when our body, future and fundamental choices are reshaped by an exterior power. This project invites you to move through five ethical modules designed with the novel’s most central conflicts, and to discover your position on humanity, consent, survival, change and judgement.",
    primary: "Begin Experience",
    secondary: "Learn More"
  },

  intro: {
    heading: "Before You Begin",
    body: [
      "Octavia Butler’s <em>Dawn</em> is based on the near total extinction of humanity after the genocidal nuclear war. Lilith Iyapo wakes up on a living ship of the Oankali, an alien species that has somehow preserved the surviving humans from extinction. However, the Oankali do not simply save humanity, they study it, interfere with its evolution, and forcefully carry out a genetic “trade”, in exchange for human survival.",
      "The novel carries depth beyond casual moral formats. The Onakli preserves life, but they also manipulate reproduction, knowledge, and physical evolution. Humans fight for autonomy and identity, but Butler reveals the self-destructive hierarchies that ruined humanity in the first place. Given the preconditions, the story discusses whether survival is still considered freedom when the rules are set by someone else.",
      "As you move through these tensions, you will respond to questions related to the central conflicts and receive an interpretive profile based on your responses and analysis."
    ],
    primary: "Continue",
    secondary: "Back"
  },

  instructions: {
    heading: "Your Personal Experience",
    body: [
      "You will move through five main modules: Humanity, Consent, Survival, Change, and Judgement. Each module is dedicated to a single question based on novel’s moral concepts. Your responses will generate a profile that reveals your approach to Butler’s ideas.",
      "There are no perfect answers in <em>Dawn</em>; it is built from controversy and conflicting ideologies. The goal of this project to visualize your understanding — to show how different values produce different learnings of the same novel."
    ],
    steps: [
      "Read each prompt carefully.",
      "Choose the response that most closely matches your judgement.",
      "Continue through all five modules."
    ],
    primary: "Start Module One",
    secondary: "Return Home"
  },

  /* Order is authoritative for flow & progress. */
  modules: [
    {
      id: "humanity",
      n: 1,
      title: "Humanity",
      tagline: "What defines the human when biology, memory, and choice are mutated?",
      setup: [
        "In <em>Dawn</em>, humans are beyond a biological concept. The Oankali preserve humanity from extinction, but they also redefine the fundamental conditions of human existence through genetic trade, bodily transformation and control over reproduction. This complex combination provides an unclear category, something based on memory, self-agency and the fear of becoming something unfamiliar.",
        "Humans in the novel often long to the idea of purity, believing that remaining fully human means remaining unchanged. This module asks you to decide where humanity truly belongs: in biological continuity, in conscious autonomy, in moral freedom or somewhere more uncertain."
      ],
      question: "If a person’s body is fundamentally changed by an alien power, but their memories, emotions, and self-awareness remain, are they still fully human?",
      choices: [
        { key: "A", text: "Yes. Humanity survives through consciousness, memory, and moral awareness — not through unchanged biology alone." },
        { key: "B", text: "No. Once the body is fundamentally altered, something essential to human identity is broken, even if the mind remains." },
        { key: "C", text: "Partly. The person remains human in experience and memory, but their humanity becomes deeply debatable because body and identity no longer fully match." },
        { key: "D", text: "It depends on consent. A transformation chosen freely may preserve humanity differently than one that is forced." },
        { key: "E", text: "The question itself is too narrow. <em>Dawn</em> shows that human was never a fixed category, transformation is an instability, not a creation." }
      ],
      significance: {
        authored: true,
        paragraphs: [
          "Humanity is the foundational tension of <em>Dawn</em> because Butler refuses to let it rest on any single criterion. The Oankali keep human bodies alive, repair them, even improve them — yet the people who wake on the ship are no longer certain what survives alongside the body. Memory persists, but under conditions someone else controls. Identity continues, but inside a future decided without them. The novel keeps asking whether “human” names a biology, a continuity of self, a web of relationships, or simply a category we defend because losing it feels like death.",
          "What makes the question so destabilizing is that Butler treats purity and transformation as equally dangerous. To insist on remaining unchanged can preserve dignity, but it can also preserve the hierarchical, self-destructive impulses that brought humanity to the edge of extinction. To accept change can mean growth, but it can also mean the quiet erasure of everything that made the survivors recognizable to themselves. This module places you inside that instability — not to locate the correct definition of the human, but to notice which loss you are least willing to accept."
        ]
      },
      transition: "If humanity can be altered, the next question is harder: when change is forced through unequal power, is consent still meaningful?",
      continueLabel: "Continue to Consent"
    },

    {
      id: "consent",
      n: 2,
      title: "Consent",
      tagline: "Are agreements meaningful when one side controls the conditions of life?",
      setup: [
        "In <em>Dawn</em>, consent is extremely objective. Despite the rescuing, Oankali also controls awakening, movement, knowledge, reproduction, and physical change. Humans are not dealing with equals, they depend on a species that has already designed their future for them. This makes “choice” quite ironic.",
        "Therefore, the question becomes whether consent can really exist if there is no otherwise. Butler shows that care can coexist with violence and that survival may coexist under conflicting terms with freedom."
      ],
      question: "If accepting an offer is the only way to survive, but with heavy cost, does the agreement count as real consent?",
      choices: [
        { key: "A", text: "Yes. Even under pressure, choosing survival is still a meaningful form of consent — a difficult choice is still a choice." },
        { key: "B", text: "No. Once one side controls the body, the terms, and the consequences of refusal, consent is coercion in a softer form." },
        { key: "C", text: "Partly. The agreement is practical, but it is morally compromised because the person is choosing within preset conditions they did not determine." },
        { key: "D", text: "Consent depends on transparency. If the controlling power fully reveals the risks, limits, and consequences, agreement can still be morally acceptable." },
        { key: "E", text: "The problem is beyond yes or no. <em>Dawn</em> shows that consent is not a single moment of agreement, but a structure of power, and in unequal structures, it is always unstable." }
      ],
      significance: {
        authored: false,
        paragraphs: [
          "Consent is central to <em>Dawn</em> because the Oankali intervene in the most vulnerable parts of life: sleep, healing, touch, reproduction, and biological change. The novel repeatedly shows that a seemingly beneficial action does not erase the moral problem of forcing it without equal power or permission.",
          "At the same time, the Oankali are not purely sadistic, and the humans hold no certain alternative — that is what gives the theme its force. Consent in the story is not only about individual preference; it is about whether agency can exist without dependency, whether care can become domination, and whether survival under forced terms is ever freely chosen."
        ]
      },
      transition: null,
      continueLabel: "Continue to Survival"
    },

    {
      id: "survival",
      n: 3,
      title: "Survival",
      tagline: "What is the value of life when freedom no longer belongs entirely to you?",
      setup: [
        "In <em>Dawn</em>, survival is extraordinarily sophisticated. Life is preserved, to a degree, but autonomy is reduced, futures are redirected and existence is no longer self-determined. ",
        "Therefore, the novel raises a complex problem: is staying alive always worth the cost? Humans need to decide if survival without full freedom is still meaningful, or if dignity, agency and self direction are more essential."
      ],
      question: "Would you accept guaranteed survival if it needs to be traded with control over your body, your future, and the future of your species?",
      choices: [
        { key: "A", text: "Yes. Survival must come first, because no freedom, identity, or future is possible if life itself ends." },
        { key: "B", text: "No. A life preserved through domination is too high a cost — survival without autonomy is a diminished form of existence." },
        { key: "C", text: "Only temporarily. Survival is acceptable at first, but only if autonomy can be reclaimed or renegotiated later." },
        { key: "D", text: "Only with clear limits. Survival may justify compromise, but not unlimited control over the body, reproduction, or long-term identity." },
        { key: "E", text: "The two cannot be fully separated. <em>Dawn</em> shows that survival and loss are already entangled, and the real issue is how much compromise that could cause to the future." }
      ],
      significance: {
        authored: false,
        paragraphs: [
          "Survival is so crucial in <em>Dawn</em> because it is the Oankali’s strongest moral justification. They can always claim that humanity would have died without them, which makes their power difficult to refuse. But Butler asks whether preservation is enough when the preserved no longer control the definition of their own existence.",
          "This is also why survival in the novel becomes tied to hierarchy, dependence, and the future of the species. The humans are not merely being kept alive — they are being carried into a future they did not anticipate. It becomes a test of values: whether the continuity of life matters most, or whether freedom and self-determination are what make life worth protecting in the first place."
        ]
      },
      transition: "If survival demands compromise, the next question grows even more unstable: does change to the body and the future require destruction, adaptation, or both?",
      continueLabel: "Continue to Change"
    },

    {
      id: "change",
      n: 4,
      title: "Change",
      tagline: "When identity begins to transform, is that survival, loss, or the beginning of something else?",
      setup: [
        "In <em>Dawn</em>, transformation is the mainframe of the genetic trade proposed by Onakali. For many humans, this feels like contamination or erasure. For the Oankali, it is adaptation, growth and the continuation of their species.",
        "Therefore, to remain unchanged may feel like dignity, continuity and resistance, but it may also result in extinction. Transformation may enrich the future while dismantling its old terms. "
      ],
      question: "If transformation offered the highest chance of survival and a viable future, but needs to be traded with human identity, would you accept it?",
      choices: [
        { key: "A", text: "Yes. Survival and growth require adaptation, and identity should not be defended so forcefully that it destroys the future." },
        { key: "B", text: "No. Some changes are too expensive — a future built on the loss of essential human continuity is not truly a human future." },
        { key: "C", text: "Only if the transformation stays limited. Adaptation might be necessary, but it should not erase the core of human identity." },
        { key: "D", text: "Only if the change is freely chosen. Transformation may be acceptable, but once it is imposed it becomes violation rather than growth." },
        { key: "E", text: "The question has no clean answer. <em>Dawn</em> shows that change is both creation and loss, and the future is shaped by that tension, not by victory on either side." }
      ],
      significance: {
        authored: false,
        paragraphs: [
          "Change is crucial in <em>Dawn</em> because Butler does not treat it as a side effect of the story. She makes it the story’s central theme. The Oankali believe species survive through exchange and transformation, while many humans believe purity is necessary to confirm identity. The conflict is not only biological; it is philosophical and political, because it decides who gets to define the future and what counts as survival.",
          "This is also why reproduction becomes so central. Change in <em>Dawn</em> is not limited to individual bodies — it passes into the next generation, into inheritance, into the structure of tomorrow. Butler therefore makes transformation feel intimate and civilizational at once. The deepest problem is not only whether change can happen, but whether identity can survive after being remade from the inside."
        ]
      },
      transition: "If change can be both rescue and loss, the final question becomes unavoidable: how should the power behind that change be judged?",
      continueLabel: "Continue to Judgement"
    },

    {
      id: "judgement",
      n: 5,
      title: "Judgement",
      tagline: "How should power be judged when it saves a people by taking command of their future?",
      setup: [
        "There are no clear definition of the Oankali. They rescue and manipulate humans, creating a conflicting impression for humans.",
        "If the Oankali had only been destroyed and taken, it would be easy to condemn. If they had only preserved without control, there would be gratitude. However, in this condition, rescue and domination are inseparable. Some people argue that domination is the price people pay for continuation, however, the problem does not rest on simple senses, good or bad."
      ],
      question: "Ultimately, How should the Oankali be judged, based on everything they do to humanity?",
      choices: [
        { key: "A", text: "As rescuers. Their control is ethically troubling, but without them humanity would have died — and preservation carries the greatest moral weight." },
        { key: "B", text: "As colonizers. Their aid does not erase the fact that they impose transformation, seize authority, and redefine humanity without consent." },
        { key: "C", text: "As both rescuers and colonizers at once. Their preservation of life is real, but inseparable from domination — which makes their role morally divided." },
        { key: "D", text: "As a force that exposes human weakness rather than simply ruling over it. They are dangerous, but Butler also uses them to reveal the hierarchies and self-destructive patterns within humans." },
        { key: "E", text: "As something other than ordinary moral labels. The novel is designed to showcase the combination of different moral crisis and their trace left on human beings." }
      ],
      significance: null,
      transition: "You have reached the end of the decision path. Your responses now form an interpretive profile showing how you read Butler’s moral world.",
      continueLabel: "See My Result"
    }
  ],

  results: {
    heading: "Your Interpretive Profile",
    intro: "Your responses trace a pattern through <em>Dawn</em>’s central conflicts: humanity, consent, survival, change, and judgment. What follows is not a measure of correctness, but a portrait of how you read Butler’s ethical world.",
    footer: {
      closing: "Your result is not the end of the experience. It is a way of making your interpretation visible.",
      paragraph: "<em>Dawn</em> does not ask readers to choose comfort. It asks them to confront what happens when humanity survives only through dependence, when consent weakens under unequal power, and when the future is shaped by forces that both preserve and violate. Your profile reflects where you stood when those tensions were placed in front of you."
    }
  },

  /* Profile keys are used by the scoring map below. */
  profiles: {
    ER: {
      key: "ER",
      letter: "A",
      name: "Resister",
      identity: "You believe that survival loses moral legitimacy when it is built on domination, coerced change, and compromised autonomy.",
      interpretation: [
        "For you, Butler’s world is defined by the danger of power that presents itself as necessary, benevolent and unavoidable. You are deeply skeptical with any future traded with bodily control, unequal consent and forced transformation. Survival does not serve as a justification even when threatened with extinction. Autonomy, dignity and the right to self determination are not secondary values, they are part of what makes life fully human in the very first place.",
        "This means you are likely to see the Oankali more as a form of domination. Your reading means that you tend to believe that a life preserved by another power does not belong to the people living it anymore."
      ],
      breakdown: [
        ["Humanity", "rooted in continuity, dignity, and moral agency"],
        ["Consent", "invalid when shaped by deep power imbalance"],
        ["Survival", "not worth unconditional surrender"],
        ["Change", "ethically suspect when imposed"],
        ["Judgment", "rescue cannot erase domination"]
      ],
      reflection: "If freedom can be traded away for survival, at what point does survival stop being a moral good and become only prolonged submission?"
    },
    PS: {
      key: "PS",
      letter: "B",
      name: "Survivor",
      identity: "You believe that existence must come before purity, and that difficult compromise may be necessary.",
      interpretation: [
        "For you, Butler’s novel has no ideal options. Extinction is the absolute loss, and compromise. You prioritize survival higher than any other moral conditions such as freedom, negotiation, or future meaning possible. From your perspective, the ethical problem is that humans cannot have a direct resistance.",
        "This means you are likely to understand Oankali in a very practical term. They preserve the continuation of humanity that humans could preserve on their own, their control may be disturbing, but refusal would mean complete loss. Therefore, you prioritize necessity, endurance and the tragic reality of contaminated identity."
      ],
      breakdown: [
        ["Humanity", "resilient even under altered conditions"],
        ["Consent", "constrained, but not always empty"],
        ["Survival", "the first condition of all other values"],
        ["Change", "acceptable if it secures the future"],
        ["Judgment", "preservation carries great moral weight"]
      ],
      reflection: "If extinction is the only alternative, does refusing compromise preserve dignity — or only destroy the possibility of any future at all?"
    },
    HE: {
      key: "HE",
      letter: "C",
      name: "Preservationist",
      identity: "You believe that humanity has boundaries, and that crossing them too far risks destroying the novel aspects to preserve.",
      interpretation: [
        "The way you responded suggests you read Dawn as a story that illustrates how fragile human continuity is. For you, identity is not always adaptable. It is based on limits—of the body, of culture, of history, maybe even of being a particular species. Change might be impossible to avoid, but that doesn't mean every change comes free; some changes cost us something real. You focus on Butler's details on transformation, but you don't believe that transforming is the same as growing.",
        "That's why you probably view the Oankali's genetic trade with suspicion. They don't just help humanity survive, they redefine what humanity is going to become, and they set the terms."
      ],
      breakdown: [
        ["Humanity", "grounded in continuity and recognizable limits"],
        ["Consent", "especially urgent when identity is at stake"],
        ["Survival", "not enough by itself"],
        ["Change", "dangerous when it threatens essential continuity"],
        ["Judgment", "preservation can become erasure"]
      ],
      reflection: "Can a future still be called human if it survives only by giving up the boundaries that once defined humanity itself?"
    },
    TT: {
      key: "TT",
      letter: "D",
      name: "The Adapter",
      identity: "You believe that fixed definitions of humanity is wrong, and that change may be part of what survival requires.",
      interpretation: [
        "The way you responded shows that you read Dawn as opposed to purity and rigidity. Butler is exposing how fragile, and maybe how artificial, the human identities are. You are most likely to believe that identity can survive being transformed, and that the future is better with identity combination rather than preserving. ",
        "That's why you probably see the Oankali as more than just conquerors. You consider the novel as using them to unsettle human exceptionalism."
      ],
      breakdown: [
        ["Humanity", "flexible, unstable, and not reducible to biology alone"],
        ["Consent", "important, but not the only lens for judging change"],
        ["Survival", "tied to adaptation rather than preservation alone"],
        ["Change", "potentially creative as well as disruptive"],
        ["Judgment", "moral categories become unstable under transformation"]
      ],
      reflection: "If identity is not a fixed essence, does transformation destroy the self — or reveal that the self was always capable of becoming something new?"
    },
    AM: {
      key: "AM",
      letter: "E",
      name: "Balanced Reader",
      identity: "You resist clean moral conclusions and read <em>Dawn</em> as a novel built on tension, compromise, and unresolved ethical instability.",
      interpretation: [
        "The way you responded suggests that you see Butler's novel as a world where no side stays untouched, and no complete judgement. You believe that the story intentionally leaves blank space for moral judgement. The Oankali preserve life, and they also dominate. Humans defend their autonomy, and they also carry the same hierarchical structures that destroyed their world at first. ",
        "That's why your interpretation is highly based on contradiction. You cherish the entanglement among pressure, ambiguity, and tragic entanglement. "
      ],
      breakdown: [
        ["Humanity", "unstable and politically contested"],
        ["Consent", "real in form, compromised in structure"],
        ["Survival", "necessary, but morally damaged"],
        ["Change", "both loss and possibility"],
        ["Judgment", "permanently unresolved"]
      ],
      reflection: "What if the deepest truth of <em>Dawn</em> is that some futures cannot be judged cleanly because survival, domination, grief, and transformation have already become inseparable?"
    }
  },

  reflection: {
    heading: "Why This Website Exists",
    body: [
      "This website was designed to translate <em>Dawn</em> into an interactive structure of choices, tensions, and consequences. Rather than reducing the novel to a single moral lesson, it invites users to confront the unstable questions Butler places at the center of the story: what defines the human, whether consent can survive domination, whether survival is still meaningful without autonomy, and how power should be judged when it saves by reshaping.",
      "The final interpretive profile does not tell the user who they are. It reveals how they responded to Butler’s ethical world. In that sense, the website transforms literary interpretation into experience. It makes visible how different values generate different readings of the same novel."
    ],
    objectiveHeading: "Academic objective",
    objective: "This project uses interactive design to explore literary analysis rather than replace it. The structure is built around interpretation, not entertainment."
  },

  /*
   * Scoring map (spec 12.2). Each answer contributes +1 to every listed profile.
   * The highest total wins; ties are broken by the order in `tieBreak` (spec 12.3),
   * then by `finalOrder` as a fully deterministic last resort.
   */
  scoring: {
    humanity:  { A: ["TT", "AM"], B: ["HE"],        C: ["AM"], D: ["ER", "AM"], E: ["TT"] },
    consent:   { A: ["PS"],       B: ["ER"],        C: ["AM"], D: ["PS", "AM"], E: ["ER", "AM"] },
    survival:  { A: ["PS"],       B: ["ER", "HE"],  C: ["AM"], D: ["PS", "AM"], E: ["AM", "TT"] },
    change:    { A: ["TT"],       B: ["HE"],        C: ["HE", "AM"], D: ["ER", "AM"], E: ["AM", "TT"] },
    judgement: { A: ["PS"],       B: ["ER"],        C: ["AM"], D: ["AM", "TT"], E: ["AM"] }
  },

  tieBreak: ["judgement", "consent", "survival"],
  finalOrder: ["ER", "PS", "HE", "TT", "AM"]
};
