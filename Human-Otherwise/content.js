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
    hook: "What would be preserved if personal survival required a total genetic transformation?",
    body: "In <em>Dawn</em>, survival is not the ultimate goal of the problem. It is the beginning of a more sophisticated question: how is the human defined when an exterior power reshapes the body, the future, and the fundamentals of choice? This project invites you to move through five ethical modules drawn from the novel’s most central conflicts, and to discover your position on humanity, consent, survival, change, and judgment.",
    primary: "Begin Experience",
    secondary: "Learn More"
  },

  intro: {
    heading: "Before You Begin",
    body: [
      "Octavia Butler’s <em>Dawn</em> begins after humanity has nearly destroyed itself in a nuclear war. Lilith Iyapo wakes on a living ship of the Oankali, an alien species that has somehow preserved the surviving humans from extinction. Yet the Oankali do not simply save humanity — they study it, interfere with its evolution, and insist on a genetic “trade” that binds survival to genetic transformation.",
      "The novel reaches beyond casual moral categories. The Oankali preserve life, yet they also manipulate reproduction, knowledge, and physical change. Humans resist them for autonomy and identity, but Butler exposes the self-destructive hierarchies that ruined humanity in the first place. The story therefore asks not only whether humanity can survive, but whether survival still counts as freedom when the rules are set by someone else.",
      "As you move through these tensions, you will respond to questions shaped by the central conflicts and receive an interpretive profile based on your responses and analysis."
    ],
    primary: "Continue",
    secondary: "Back"
  },

  instructions: {
    heading: "Your Personal Experience",
    body: [
      "You will move through five main modules: Humanity, Consent, Survival, Change, and Judgement. Each module is dedicated to a single question drawn from the novel’s major tensions — from the uncertainty of being human to the ethics of consent under unequal power. Your responses will generate an interpretive profile that reflects how you approach Butler’s ideas.",
      "There are no perfect answers in <em>Dawn</em>; it is built from controversy and conflicting ideologies. The goal of this project is not to arrive at certainty, but to make interpretation visible — to show how different values produce different understandings of the same novel."
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
      tagline: "What defines the human when biology, memory, and choice no longer stay the same?",
      setup: [
        "In <em>Dawn</em>, the human is not a simple biological label. The Oankali preserve humanity from extinction, but they also reshape the fundamental terms of human existence through genetic trade, bodily intervention, and control over reproduction. This complex mixture turns humanity into an unstable category — something rooted not only in the body, but in memory, agency, selfhood, and the fear of becoming something unfamiliar.",
        "Humans in the novel often cling to the idea of purity, as if remaining fully human means remaining unchanged. Yet Butler shows that change can feel like an ethical violation and still be inseparable from survival. This module asks you to decide where humanity truly belongs: in biological continuity, in conscious identity, in moral freedom, or somewhere more uncertain."
      ],
      question: "If a person’s body is radically altered by an alien power, but their memories, emotions, and self-awareness remain, are they still fully human?",
      choices: [
        { key: "A", text: "Yes. Humanity survives through consciousness, memory, and moral awareness — not through unchanged biology alone." },
        { key: "B", text: "No. Once the body is fundamentally altered, something essential to human identity is broken, even if the mind remains." },
        { key: "C", text: "Partly. The person remains human in experience and memory, but their humanity becomes deeply debatable because body and identity no longer fully match." },
        { key: "D", text: "It depends on consent. A transformation chosen freely may preserve humanity differently than one that is forced." },
        { key: "E", text: "The question itself is too narrow. <em>Dawn</em> suggests that the human was never a fixed category — transformation is an instability, not a creation." }
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
        "In <em>Dawn</em>, consent is extremely unstable. The Oankali preserve human life, heal disease, and position themselves as benevolent caretakers — yet they also control awakening, movement, knowledge, reproduction, and physical change. Humans are not dealing with equals; they depend on a species that has already set the path of their future. That makes “choice” deeply ironic.",
        "The novel therefore questions whether consent can truly exist when refusal brings overwhelming consequences, when the body has already been altered without permission, and when one side holds nearly all the power. Butler shows that care can coexist with violation, and that survival may be offered in terms that conflict with freedom."
      ],
      question: "If accepting an offer is the only realistic way to survive, but the offer comes from a power that has already altered your body and your future without permission, does your agreement count as real consent?",
      choices: [
        { key: "A", text: "Yes. Even under pressure, choosing survival is still a meaningful form of consent — a difficult choice is still a choice." },
        { key: "B", text: "No. Once one side controls the body, the terms, and the consequences of refusal, consent is coercion in a softer form." },
        { key: "C", text: "Partly. The agreement is practical, but it is morally compromised because the person is choosing within preset conditions they did not determine." },
        { key: "D", text: "Consent depends on transparency. If the controlling power fully reveals the risks, limits, and consequences, agreement can still be morally acceptable." },
        { key: "E", text: "The problem is beyond yes or no. <em>Dawn</em> suggests consent is not a single moment of agreement, but a structure of power — and in unequal structures, it is always unstable." }
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
        "In <em>Dawn</em>, survival is extraordinarily complicated. The Oankali save humanity from extinction, but they do so by controlling the terms under which humans will continue to exist. Life is preserved, to a degree, yet autonomy is reduced, futures are redirected, and existence is no longer self-determined. Butler turns survival into an ethical question rather than a clear choice.",
        "The novel therefore raises a difficult problem: is staying alive always worth the cost? Humans in <em>Dawn</em> must decide whether survival without full freedom is still meaningful, or whether life loses something essential when dignity, agency, and self-direction are no longer secure. This module asks you to decide what survival is worth when it arrives through dependence and control."
      ],
      question: "Would you accept guaranteed survival if it meant surrendering lasting control over your body, your future, and the future of your species?",
      choices: [
        { key: "A", text: "Yes. Survival must come first, because no freedom, identity, or future is possible if life itself ends." },
        { key: "B", text: "No. A life preserved through domination is too high a cost — survival without autonomy is a diminished form of existence." },
        { key: "C", text: "Only temporarily. Survival is acceptable at first, but only if autonomy can be reclaimed or renegotiated later." },
        { key: "D", text: "Only with clear limits. Survival may justify compromise, but not unlimited control over the body, reproduction, or long-term identity." },
        { key: "E", text: "The two cannot be fully separated. <em>Dawn</em> suggests survival and loss are already entangled, and the real issue is how much compromise a future can bear." }
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
        "In <em>Dawn</em>, change is not optional. The Oankali do not merely preserve human life; they insist on transformation through genetic trade, hybrid reproduction, and a redefinition of what humanity will become. For many humans, this feels like contamination or erasure. For the Oankali, it is adaptation, growth, and the only future worth having.",
        "The novel therefore turns change into one of its most complicated moral problems. To remain unchanged may feel like dignity, continuity, and resistance — but it may also mean extinction, or the extension of a destructive idea of purity. Transformation may enrich the future while dismantling its old definitions. This module asks you to decide what change means when it enters the body, identity, and the future all at once."
      ],
      question: "If radical transformation offered the highest chance of survival and a viable future, but required giving up the idea of a pure, unchanged human identity, would you accept it?",
      choices: [
        { key: "A", text: "Yes. Survival and growth require adaptation, and identity should not be defended so forcefully that it destroys the future." },
        { key: "B", text: "No. Some changes are too expensive — a future built on the loss of essential human continuity is not truly a human future." },
        { key: "C", text: "Only if the transformation stays limited. Adaptation might be necessary, but it should not erase the core of human identity." },
        { key: "D", text: "Only if the change is freely chosen. Transformation may be acceptable, but once it is imposed it becomes violation rather than growth." },
        { key: "E", text: "The question has no clean answer. <em>Dawn</em> suggests change is both creation and loss, and the future is shaped by that tension — not by victory on either side." }
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
        "In <em>Dawn</em>, the Oankali are not easy to define. They rescue humanity from self-inflicted extinction, heal human bodies, and offer the possibility of life continuing. At the same time, they act without equal permission, control awakening and access to knowledge, intervene in reproduction, and insist on a future humans did not choose for themselves.",
        "This is what makes judgement so contested in the novel. If the Oankali had only destroyed, condemning them would be easy. If they had only preserved without control, gratitude would be easy. But Butler builds a moral structure in which rescue and domination are inseparable. The final issue is therefore not whether the Oankali help or harm in a simple sense, but how to judge a power that preserves life while claiming authority over what that life will become."
      ],
      question: "How should the Oankali ultimately be understood, based on everything they do to humanity?",
      choices: [
        { key: "A", text: "As rescuers. Their control is ethically troubling, but without them humanity would have died — and preservation carries the greatest moral weight." },
        { key: "B", text: "As colonizers. Their aid does not erase the fact that they impose transformation, seize authority, and redefine humanity without consent." },
        { key: "C", text: "As both rescuers and colonizers at once. Their preservation of life is real, but inseparable from domination — which makes their role morally divided." },
        { key: "D", text: "As a force that exposes human weakness rather than simply ruling over it. They are dangerous, but Butler also uses them to reveal the hierarchies and self-destructive patterns within humans." },
        { key: "E", text: "As something beyond ordinary moral labels. <em>Dawn</em> suggests the Oankali cannot be judged through simple categories, because the novel is designed to leave rescue, violation, dependence, and transformation permanently entangled." }
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
      name: "Ethical Resister",
      identity: "You believe that survival loses moral legitimacy when it is built on domination, coerced change, and compromised autonomy.",
      interpretation: [
        "Your choices suggest that you read <em>Dawn</em> primarily as a warning. For you, Butler’s world is not defined first by rescue, but by the danger of power that presents itself as necessary, benevolent, and unavoidable. You are deeply skeptical of any future purchased through bodily control, unequal consent, or imposed transformation. Even when the alternative is extinction, you do not treat survival as an automatic justification. You read the novel as insisting that autonomy, dignity, and the right to self-determination are not secondary values — they are part of what makes life fully human in the first place.",
        "This means you are likely to see the Oankali less as saviors than as a more sophisticated form of domination. Their care does not erase their control, and their preservation of humanity does not excuse their seizure of its future. Your reading strikes at one of Butler’s harshest questions: whether a life preserved by another power can still belong to the people living it."
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
      name: "Pragmatic Survivor",
      identity: "You believe that existence must come before purity, and that difficult compromise may be morally painful but still necessary.",
      interpretation: [
        "Your choices suggest that you read <em>Dawn</em> through the logic of survival under pressure. For you, Butler’s novel does not offer ideal options; it offers damaged ones. In that world, extinction is the absolute loss, and compromise — however troubling — may still be the only path left open. You do not necessarily celebrate the Oankali’s methods, but you treat survival as the condition that makes all further freedom, negotiation, or future meaning possible. From your perspective, the novel’s ethical force lies in its refusal to grant humanity the comfort of clean resistance.",
        "This means you are likely to judge the Oankali in hard practical terms. They preserve life where humans could not preserve themselves. Their control may be disturbing, but total refusal may amount to choosing annihilation over an imperfect future. Your reading therefore emphasizes necessity, endurance, and the tragic realism of Butler’s world: survival does not come clean, but it still comes."
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
      name: "Human Essentialist",
      identity: "You believe that humanity has real boundaries, and that crossing them too far risks destroying the very thing the novel claims to preserve.",
      interpretation: [
        "Your choices suggest that you read <em>Dawn</em> as a novel about the fragility of human continuity. For you, identity is not infinitely flexible — it depends on limits: bodily, cultural, historical, and perhaps even species-level. Change may be unavoidable, but not every change can be accepted without loss. You are alert to Butler’s emphasis on transformation, yet you resist the idea that transformation is automatically growth. In your reading, the fear of losing one’s humanity is not merely reactionary. It is a serious moral fear, because some futures may continue life while breaking the continuity that made that life recognizably human.",
        "This means you are likely to treat the Oankali’s genetic trade with deep suspicion. They do not merely help humanity survive; they redefine what humanity will be, and they do so on terms humans did not control. Your reading preserves one of the novel’s most painful tensions: whether survival still counts as survival when what continues forward is no longer clearly the same people, species, or identity."
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
      name: "Transformational Thinker",
      identity: "You believe that fixed definitions of humanity are unstable, and that change — however unsettling — may be part of what survival truly requires.",
      interpretation: [
        "Your choices suggest that you read <em>Dawn</em> as a challenge to purity, rigidity, and the fantasy of unchanged identity. For you, Butler is not simply mourning the loss of old humanity; she is exposing how fragile and perhaps artificial its supposed boundaries always were. You are more open than most to the idea that identity can survive transformation, and that the future may require mixture rather than preservation. In your reading, change is not automatically violation. It can also be adaptation, growth, and an honest confrontation with the fact that no living thing remains entirely pure or unchanged.",
        "This means you are likely to see the Oankali as more than conquerors. Their presence may still be ethically troubling, but you read Butler as using them to unsettle human exceptionalism and to question whether resistance to change is always noble. Your interpretation is forward-facing: it treats the novel not only as a story about loss, but as a demand to imagine forms of life beyond the limits humans try to guard."
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
      name: "Ambivalent Mediator",
      identity: "You resist clean moral conclusions and read <em>Dawn</em> as a novel built on tension, compromise, and unresolved ethical instability.",
      interpretation: [
        "Your choices suggest that you see Butler’s novel at its most difficult and most honest: as a world where no side remains pure, no answer remains comfortable, and no judgment remains complete. You do not separate rescue from violation, survival from loss, or care from control. Instead, you read <em>Dawn</em> as a novel that forces incompatible truths to exist at once. The Oankali preserve life, but they also dominate. Humans defend autonomy, but they also carry the hierarchical impulses that helped destroy their own world. Lilith survives by mediating between sides, but that mediation itself becomes morally unstable.",
        "This means your interpretation is the least interested in certainty and the most attentive to contradiction. You do not flatten Butler into a warning or a celebration. You read her as a writer of pressure, ambiguity, and tragic entanglement. In your reading, the achievement of <em>Dawn</em> is not that it answers what should happen next, but that it makes the reader feel how difficult it is to judge a future shaped by both necessity and violation."
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
