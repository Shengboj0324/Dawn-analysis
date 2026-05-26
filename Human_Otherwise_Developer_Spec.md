# Human / Otherwise — Website Product & Build Specification
## English Final Project Developer Handoff
**Project owner:** Micheal Jiang  
**Project type:** Interactive literary philosophy / ethics website  
**Source content basis:** Approved project text from Micheal Jiang’s uploaded rubric draft  
**Primary text:** *Dawn* by Octavia E. Butler

---

## 1. Project overview

**Human / Otherwise** is a premium, decision-based literary website inspired by Octavia Butler’s *Dawn*.  
It is **not** a game, personality quiz, or alternate-ending simulator. It is an **interactive interpretive experience**.

Users move through five core modules:

1. Humanity
2. Consent
3. Survival
4. Change
5. Judgement

In each module, the user responds to a high-level ethical question grounded in the novel’s central tensions. The site then generates a final **interpretive profile** showing how the user reads Butler’s moral world.

### Core conceptual goal
The website should make users feel that they are entering a controlled, intellectually serious, speculative environment where their answers reveal:
- how they define humanity
- how they understand consent under unequal power
- what they think survival is worth
- whether change is corruption, adaptation, or both
- how they judge power that rescues by controlling

### Primary audience
- Teacher / evaluator
- Classmates or other viewers
- General readers interacting with the site

### Product positioning
This should feel like:
- premium editorial web design
- speculative ethics experience
- literary analysis translated into interaction

This should **not** feel like:
- BuzzFeed quiz
- fan-fiction branch game
- casual classroom slideshow turned into a site
- over-engineered software product

---

## 2. Core product principles

### 2.1 Intellectual tone
The tone must be:
- serious
- polished
- speculative
- morally tense
- literary but clear
- futuristic without cliché

### 2.2 Visual tone
The visual impression must be:
- premium
- high-contrast
- restrained
- elegant
- immersive
- slightly clinical / bioethical / posthuman
- visually impressive without harming readability or usability

### 2.3 UX principle
The website must remain:
- intuitive
- smooth
- responsive
- low-friction
- readable
- not overloaded by effects

### 2.4 Core experiential arc
The user journey should feel like:

**arrival -> orientation -> ethical pressure -> interpretive judgment -> reflection**

---

## 3. Information architecture

### Primary route
1. Landing Page
2. Intro Page
3. Instructions Page
4. Module 1: Humanity
5. Module 2: Consent
6. Module 3: Survival
7. Module 4: Change
8. Module 5: Judgement
9. Results Page
10. Reflection / About Page

### Optional supporting areas
- lightweight navigation menu or top bar
- progress indicator
- restart flow
- credits / source note
- optional image caption area
- optional short “About *Dawn*” overlay/modal

---

## 4. Step-by-step user experience flow

### Step 1 — Landing Page
The user arrives on the site and sees a highly polished opening screen with title, hook, and first CTA.  
The page should immediately create gravity and curiosity.

**User action:** Click **Begin Experience** or **Learn More**

### Step 2 — Intro Page
The user receives the short conceptual setup of *Dawn*: nuclear destruction, Lilith Iyapo, the Oankali, preservation, genetic trade, transformation, and moral instability.

**User action:** Click **Continue**

### Step 3 — Instructions Page
The user is told how the site works:
- five modules
- one major question per module
- no perfect answers
- final interpretive profile

**User action:** Click **Start Module One**

### Step 4 — Module 1: Humanity
The user confronts the first core philosophical tension: what defines the human?

**User action:** Read, consider, choose one of five responses, optionally open “Significance in Dawn,” then continue.

### Step 5 — Module 2: Consent
The user moves into unequal power, coercion, and whether consent remains meaningful.

**User action:** Select one answer, optionally open significance panel, then continue.

### Step 6 — Module 3: Survival
The user now has to prioritize life, autonomy, and future control.

**User action:** Select one answer, optionally open significance panel, then continue.

### Step 7 — Module 4: Change
The user engages with transformation, hybridity, purity, reproduction, and species future.

**User action:** Select one answer, optionally open significance panel, then continue.

### Step 8 — Module 5: Judgement
The user makes the final synthesis judgment about the Oankali.

**User action:** Select one answer, continue to results.

### Step 9 — Results Page
The website computes a main interpretive profile and displays a structured final reading.

**User sees:**
- profile title
- identity line
- interpretation paragraph
- thematic breakdown
- reflection prompt

### Step 10 — Reflection / About Page
The user sees the academic framing of the project and its relation to *Dawn* and literary interpretation.

**Optional actions:**
- Restart Experience
- Review Answers
- Return Home

---

## 5. Visual design requirements

## 5.1 Overall design language
The site should feel like a fusion of:
- high-end editorial design
- speculative philosophy interface
- bioethics archive / future dossier
- cinematic literary experience

### Keywords for the designer / developer
- premium
- luminous
- restrained
- minimal but deep
- elegant motion
- dark-futurist
- subtle biological atmosphere
- posthuman sophistication

## 5.2 Color palette
Recommended direction:
- deep black / charcoal background
- soft off-white / warm gray text
- muted silver or graphite UI surfaces
- one restrained accent color only

### Good accent directions
- muted electric blue
- cold violet
- dimmed crimson
- sterile teal

Avoid neon overload. Accent color should feel deliberate and rare.

## 5.3 Typography
Use refined, high-end typography pairing.

### Recommended structure
- **Heading font:** elegant serif or high-end editorial serif
- **Body/UI font:** modern sans-serif

### Desired effect
The serif should carry literary gravity.  
The sans-serif should carry precision and usability.

Examples of visual direction:
- Canela / Inter style
- Cormorant Garamond / Geist style
- Playfair Display / Inter style
- Instrument Serif / Satoshi style

Exact font may vary, but the pairing should feel premium and intentional.

## 5.4 Layout system
- center-aligned hero sections where appropriate
- max content width constrained for readability
- generous spacing
- large margins
- consistent vertical rhythm
- card-based answer system
- modular section design
- responsive design for desktop first, but mobile must still work well

## 5.5 Premium effects (must remain subtle)
Use visual effects, but keep them controlled.

### Approved effect directions
- very soft glass or translucent panels
- faint background gradients
- subtle glow behind hero text or CTA
- soft grain / noise overlay at very low opacity
- gentle parallax on hero background
- smooth fade + slide-in transitions
- elegant hover responses on answer cards
- low-amplitude cursor glow or spotlight effect if performance allows
- soft layered shadowing
- slight animated gradient movement in the background

### Avoid
- loud particle systems
- excessive blur
- dramatic scroll hijacking
- motion sickness-inducing parallax
- long page-load animation gates
- unnecessary 3D gimmicks
- heavy WebGL unless extremely optimized

## 5.6 Motion requirements
Animation should feel:
- deliberate
- smooth
- cinematic
- not playful

### Suggested motion behavior
- page entry fade/translate: 300–500ms
- button hover: 150–220ms
- card hover: slight elevation + border/lighting change
- expandable section open/close: smooth height + opacity animation
- results reveal: staged fade-in sequence

Motion should reinforce seriousness, not distract from reading.

---

## 6. Accessibility and usability requirements

The site must remain strong in readability and interaction.

### Required
- strong text contrast
- readable font sizes
- keyboard navigable buttons and choices
- accessible focus states
- responsive on laptop and phone
- minimal lag
- choices easy to click/tap
- no hidden essential content behind animation
- respects reduced-motion preference where possible

### Recommended
- progress bar or module count indicator
- persistent back button
- ability to restart
- clear current state feedback after answer selection

---

## 7. Core interaction features

## 7.1 Buttons
Every button should feel premium and tactile.

### Button behavior
- hover state
- active press state
- focus state
- micro-shift or glow on hover
- no flashy bounce

### Core buttons needed
- Begin Experience
- Learn More
- Continue
- Back
- Start Module One
- Return Home
- Continue to next module
- See Results
- Restart Experience
- Read Reflection Page
- Optional: Review My Answers

## 7.2 Answer cards
Each answer option should be a large clickable card, not a tiny radio button.

### Answer card behavior
- hover highlight
- selected state clearly visible
- smooth border/accent change
- optional iconographic marker or subtle check state
- one answer only per module

## 7.3 Expandable significance section
Modules 1–4 should include a small expandable section labeled:
**Significance in Dawn**

### Behavior
- collapsed by default
- opens inline without navigating away
- smooth animation
- easy to close
- visually secondary to the main question

### Module 5
No dropdown is needed.

## 7.4 Progress tracking
Recommended:
- thin progress bar at top
- module label such as “Module 2 of 5”
- optional breadcrumb or minimal step tracker

## 7.5 Result generation
The site should collect all five answers and map them into a final interpretive profile.

Recommended logic:
- each answer contributes score weight to one or two profiles
- highest-weight profile becomes final result
- tie handling should be deterministic, not random
- optional tie breaker based on Judgement module

---

## 8. Technical implementation requirements

## 8.1 Recommended stack
Any modern front-end stack is acceptable, but ideal options include:
- Next.js + React
- Tailwind CSS for styling
- Framer Motion for motion
- TypeScript preferred
- Simple local state or lightweight state management

No backend is strictly required unless analytics or persistence is desired.

## 8.2 State handling
Store user selections during session.

### Minimum requirement
- persist answers while navigating between pages
- user can go back without losing previous answers in current session

### Nice to have
- save state in localStorage during active session
- restart clears all state cleanly

## 8.3 Routing
Recommended routes:
- `/`
- `/intro`
- `/instructions`
- `/module/humanity`
- `/module/consent`
- `/module/survival`
- `/module/change`
- `/module/judgement`
- `/results`
- `/reflection`

Single-page app is also acceptable if transitions are clean.

## 8.4 Performance
The site should feel fast and premium.

### Performance expectations
- quick initial load
- image assets optimized
- animation lightweight
- avoid large uncompressed media
- defer decorative effects if needed
- prioritize smoothness over technical showmanship

---

## 9. Suggested image strategy

Images are optional, but if used, they should elevate atmosphere rather than clutter the site.

## 9.1 Image direction
Use images in one of these ways:
1. Hero image / background texture only
2. One image per major section
3. Abstract mood imagery rather than literal scene illustration
4. Book cover / official edition artwork in low quantity
5. Biological / organic / cosmic visual motifs

## 9.2 Best image categories
- official *Dawn* book cover
- abstract cosmic backgrounds
- biological membrane / organic texture
- speculative architecture / living-ship feeling
- minimal futuristic structures
- shadowed silhouette or atmospheric figure imagery
- branching / neural / cellular motifs

## 9.3 Strong recommendation
Prefer **abstract, atmospheric imagery** over direct fan art.  
The site should feel original and premium, not derivative.

## 9.4 Image placement ideas
- landing hero background
- subtle side image on Intro Page
- optional image strip or motif divider between modules
- background texture behind results page
- reflection page with minimalist cover art or abstract composition

## 9.5 Licensing / sourcing note
Only use images that are properly licensed or officially provided.  
Do not assume random internet images are safe to use.

### Good source directions
- official publisher book page / official cover
- licensed stock imagery
- self-created abstract backgrounds
- custom gradients, textures, and graphic compositions
- museum/open-license abstract imagery if desired

---

## 10. Suggested public image references for design research
These are for **developer / designer reference and sourcing direction only**. Licensing must still be checked before use.

1. Official *Dawn* publisher page / official cover reference  
   - Hachette book page for *Dawn*

2. Lilith’s Brood series publisher page  
   - Hachette series page

3. Optional secondary catalog references  
   - publisher-author pages
   - official retailer/product listing pages for cover reference only

### Recommendation
If image licensing is uncertain, do **not** use external scene art.  
Use:
- official book cover
- abstract gradients
- custom organic textures
- subtle generative background design

---

## 11. Final content architecture

---

# PAGE 1 — Landing Page

## Page goal
Create immediate intrigue and premium atmosphere.

## Text content

### Title
**Human/Otherwise**

### Subtitle
**An interactive literary philosophy experience inspired by Octavia Butler’s *Dawn***

### Main hook
**What would be preserved if personal survival requires a total genetic transformation?**

### Body text
In *Dawn*, survival is not the ultimate goal of the problem. It is the beginning of a more sophisticated question: how is human defined when exterior power reshapes the body, the future and the fundamentals of choice? This project invites you to move through five ethical modules based on the novel’s most central conflicts and discover your position on humanity, consent, survival, change and judgment.

### Primary button
**Begin Experience**

### Secondary button
**Learn More**

## Visual requirements
- strongest page visually
- large hero area
- cinematic opening
- strong title treatment
- subtle atmospheric background
- optional animated gradient or organic glow
- premium call-to-action buttons
- page should feel elegant, not cluttered

---

# PAGE 2 — Intro Page

## Page goal
Introduce the premise of *Dawn* and establish moral stakes.

## Text content

### Heading
**Before You Begin**

### Body text
Octavia Butler’s *Dawn* begins after humanity has nearly destroyed itself in a nuclear war. Lilith Iyapo wakes on a living ship of the Oankali, an alien species that has somehow preserved the surviving humans from extinction. However, the Oankali do not simply save humanity, they study it, interfere with its evolution and insist on a genetic “trade” that bonds survival with genetic transformation.

The novel is beyond casual moral categories. The Oankali preserve life, yet they also manipulate reproduction, knowledge, and physical change. Humans resist them for autonomy and identity, but Butler showcases the self-destructive hierarchies that ruined humanity in the first place. Therefore, the story not only asks whether humanity can survive, but whether survival still counts as freedom when the rules are set by someone else.

As you move through the tensions and the experience, you will respond to questions shaped by the central conflicts and receive an interpretive profile based on your response and analysis.

### Primary button
**Continue**

### Secondary button
**Back**

## Visual requirements
- quieter than landing page
- strong readability
- optional left/right split layout
- optional image or atmospheric visual beside text
- maintain immersive tone

---

# PAGE 3 — Instructions Page

## Page goal
Explain the experience clearly and transition user into interaction.

## Text content

### Heading
**Your Personal Experience**

### Body text
You will move through five main modules: Humanity, Consent, Survival, Change and Judgement. Each module is dedicated to a question based on the novel’s major tensions, from the uncertainty of being human to the ethics of consent under unequal power. Your responses will generate an interpretive profile that reflects how you approach Butler’s ideas.

There are no perfect answers in *Dawn*, it involves controversy and conflicting ideologies. The goal of this project is not to maintain certainty, but to make interpretation by showing how different values produce different understanding of the same novel.

### Instruction labels
- Read each prompt carefully
- Choose the response that most closely matches your judgement
- Continue through all five modules

### Primary button
**Start Module One**

### Secondary button
**Return Home**

## Visual requirements
- structured and clean
- list section visually distinct
- strong CTA
- should feel like entering the experience formally

---

# PAGE 4 — Module 1: Humanity

## Title
**Humanity**

## Tagline
**What defines the human when biology, memory and choice no longer stay the same?**

## Setup paragraph
In *Dawn*, human is not a simple biological label. The Oankali preserve humanity from extinction, but they also reshape the fundamental way of human existence through genetic trade, bodily intervention and manipulation over reproduction. This complex mixture turns humanity into an unstable category: something not only based on the body, but also to memory, agency, selfhood, and the fear of becoming something unfamiliar.

Humans in the novel often relate to the idea of purity, as if remaining fully human means remaining unchanged. However, it is shown that change can feel like ethical violation and still be inseparable from survival. This module asks you to decide where humanity truly belongs: in biological continuity, in conscious identity, in moral freedom, or somewhere more uncertain.

## Question
**If a person’s body is radically altered by an alien power, but their memories, emotions and self-awareness remain, are they still fully human?**

## Choices
**A.** Yes. Humanity survives through consciousness, memory and moral awareness, not through unchanged biology alone.  
**B.** No. Once the body is fundamentally altered, something essential to human identity is broken, even if the mind remains.  
**C.** Partly. The person remains human in terms of experience and memory, but their humanity becomes extremely debatable because body and identity no longer fully match.  
**D.** It depends on consent. A transformation chosen subjectively may preserve humanity differently than being forced.  
**E.** The question itself is too narrow. *Dawn* suggests that human was never a fixed category, and transformation is an instability, not a creation.

## Transition line
**If humanity can be altered, the next question is harder: when change is forced through unequal power, is consent still meaningful?**

## Bottom requirements
- expandable section labeled **Significance in Dawn**
- button: **Continue to Consent**

---

# PAGE 5 — Module 2: Consent

## Title
**Consent**

## Tagline
**Are agreements meaningful when one side controls the conditions of life?**

## Setup paragraph
In *Dawn*, personal consent is extremely unstable. The Oankali preserve human life, heal diseases, and position themselves as benevolent caretakers, yet they also control awakening, movement, knowledge, reproduction and physical change. Humans are not dealing with equals, they are dependent on a species that has already set their path of future. That makes “choice” quite ironic.

The novel therefore questions whether consent can truly exist when refusal brings overwhelming consequences, when the body has already been altered without permission, and when one side holds nearly all the power. Butler shows that care can coexist with violation and that survival could be proposed in conflicting ways with freedom.

## Question
**If accepting an offer is the only realistic way to survive, but the offer comes from a power that has already altered your body and future without permission, does your agreement count as a real consent?**

## Choices
**A.** Yes. Even under pressure, choosing survival is still a meaningful form of consent because a difficult choice is still a choice.  
**B.** No. Once one side controls the body, the terms, and the consequences of refusal, consent is coercion in a softer form.  
**C.** Partly. The agreement is practical, but it is morally compromised because the person is choosing within preset conditions they did not determine.  
**D.** Consent depends on transparency. If the controlling power fully reveals the risks, limits and consequences, then agreement can still be morally acceptable.  
**E.** The problem is beyond yes or no. *Dawn* suggests that consent is not a single moment of agreement, but rather a structure of power, and in unequal structures, it is always unstable.

## Dropdown — Significance in Dawn
Consent is very important in *Dawn* because the Oankali intervene in the most vulnerable parts of life, including sleep, healing, touch, reproduction and biological change. The novel repeatedly shows that a seemingly beneficial action does not erase the moral problem of forcing it without equal power or permission.

At the same time, Oankali is not purely sadistic, and the humans do not have a certain alternative, that is what gives the theme its force. Consent in the story is not only about individual preference, it is about whether agency can be not influenced with dependency, whether care can become domination and whether survival under forced terms is even freely chosen.

## Continue button
**Continue to Survival**

---

# PAGE 6 — Module 3: Survival

## Title
**Survival**

## Tagline
**What is the value of life when freedom no longer belongs entirely to you?**

## Setup paragraph
In *Dawn*, survival is extremely sophisticated. The Oankali save humanity from extinction, but they do so by manipulating the terms and regulations under which humans will continue to exist. Life is preserved, to some extent, yet autonomy is reduced, futures are redirected and the definition of existence is no longer self-determined. Butler turns survival into an ethical question rather than a clear choice.

The novel therefore raises a difficult question: is staying alive always worth the cost? Humans in *Dawn* are forced to determine whether survival without full freedom is still meaningful, or whether life loses something essential when dignity, agency and self-direction are no longer secure. This module asks you to decide what survival is worth when it is provided through dependence and control.

## Question
**Would you accept guaranteed survival if it meant surrendering lasting control over your body, your future and the future of your species?**

## Choices
**A.** Yes. Survival must come first, because no freedom, identity or future is possible if life itself ends.  
**B.** No. A life preserved through domination is too high a cost, because survival without autonomy is a diminished form of existence.  
**C.** Only temporarily. Survival is expectable at first, but only if autonomy can be reclaimed or renegotiated later.  
**D.** Only with clear limits. Survival may justify compromise, but not unlimited control over the body, reproduction or long-term identity.  
**E.** The question cannot be separated completely. *Dawn* suggests that survival and loss are already entangled, and the core issue is how much compromise a future can bear.

## Dropdown — Significance in Dawn
Survival is so crucial in *Dawn* because it is the Oankali’s most important moral justification. They could always claim that humanity would have died without them. That makes their power difficult to be rejected. But Butler asks whether preservation is enough when the preserved ones no longer control the definition of their own existence.

This is also why survival in the novel becomes tied to hierarchy, dependence, and the future of the species. The humans are not just being kept alive, they are being carried into a future that they did not anticipate to be in. It becomes a test of values, whether continuity of life matters most, or whether freedom and self-determination are what makes life worth protecting in the very first place.

## Transition line
**If survival needs compromise, the next question becomes even more unstable: Does change on the body and the future require destruction, adaptation or both?**

## Continue button
**Continue to Change**

---

# PAGE 7 — Module 4: Change

## Title
**Change**

## Tagline
**When identity begins to transform, is that survival, loss or the beginning of something else?**

## Setup paragraph
In *Dawn*, changing is not optional. The Oankali do not merely preserve human life, they insist on transformation through genetic trade, hybrid reproduction and the redefinition of what humanity will become. For many humans, this feels like contamination or erasure. For the Oankali, it is adaptation, growth and the only future worth having.

The novel therefore turns change into one of the most complicated moral problems. To remain unchanged may feel like dignity, continuity, and resistance. But to remain unchanged may also mean extinction, or the extension of the destructive idea of purity. At the same time, transformation may enrich the future while also destroying the definitions. This module asks you to decide what change means when it enters the body, identity and the future all at once.

## Question
**If radical transformation offered the highest chance of survival and a viable future, but required giving up the idea of a pure, unchanged human identity, would you accept it?**

## Choices
**A.** Yes. Survival and growth require adaptation, and identity should not be protected so forcefully that it destroys the future.  
**B.** No. Some changes are too expensive, because a future built on the loss of essential human continuity is not truly a human future.  
**C.** Only if the transformation remains limited. Adaptation might be necessary, but it should not erase the core of human identity.  
**D.** Only if the change is freely chosen. Transformation may be acceptable but once it is imposed, it becomes violation rather than growth.  
**E.** The question has no clear answer. *Dawn* suggests that change is both creation and loss, and the future is shaped by that tension but not by victory on either side.

## Dropdown — Significance in Dawn
Change is very crucial in *Dawn* because Butler does not make it as a side effect of the story. She makes it the story’s central theme. The Oankali believe species survive through exchange and transformation, while many humans believe that purity is necessary for identity confirmation. The conflict is not only biological. It is philosophical and political, because it determines who gets to define the future and what counts as survival.

This is also why reproduction becomes so crucial in the novel. Change in *Dawn* is not limited to individual bodies. It is passed into the next generation, into inheritance, into the structure of tomorrow. Butler therefore makes transformation feel intimate and civilizational at the same time. The core problem is not only whether change can happen, but whether identity can survive after being recreated from the inside.

## Transition line
**If changes can be both rescue and loss, then the final question becomes unavoidable: how should the power behind that change be judged?**

## Continue button
**Continue to Judgement**

---

# PAGE 8 — Module 5: Judgement

## Title
**Judgement**

## Tagline
**How should power be judged when it saves a people by taking command of their future**

## Setup paragraph
In *Dawn*, the Oankali is not easy to define. They rescue humanity from self inflicted extinction, heal human bodies and offer possibilities of life continuing. At the same time, they act without equal permission, control awakening and knowledge access, intervene in reproduction, and insist on a future that humans did not choose for themselves.

This is what makes judgement so controversial in the novel. If the Oankali had only destroyed, condemning them would be easy. If they had only preserved without control, gratitude would be easy. But Butler builds a moral structure in which rescue and domination are inseparable. The final issue is, therefore, not whether the Oankali help or harm in a simple sense, but how to judge a power that preserves life while claiming authority over what that life will become.

## Question
**How should the Oankali eventually be understood based on everything they do to humanity?**

## Choices
**A.** As rescuers. Their control is ethically troubling, but without them humanity would have died, and preservation carries the greatest moral weight.  
**B.** As colonizers. Their aid does not erase the fact that they impose transformation, seize authority, and redefine humanity without gaining consent.  
**C.** As both rescuers and colonizers at once. Their preservation of life is real, but it is inseparable from domination, which makes their role morally divided.  
**D.** As a force that exposes human weakness rather than simply ruling over it. They are dangerous, but Butler also uses them to reveal the hierarchies and self-destructive patterns within humans.  
**E.** As something beyond ordinary moral labels. *Dawn* suggests that the Oankali cannot be judged through simple categories because the novel is designed to leave rescue, violation, dependence and transformation permanently entangled.

## No dropdown on this page.

## Transition line
**You have reached the end of the decision path. Your responses now form an interpretive profile showing how you read Butler’s moral world.**

## Continue button
**See My Result**

---

# PAGE 9 — Results Page

## Page goal
Deliver a final interpretive profile that feels intellectually serious, emotionally sharp, and conclusive.

## Required structure
1. Main page heading
2. Intro sentence
3. Result profile
4. Thematic breakdown
5. Reflection prompt
6. Next actions

---

## Main heading
**Your Interpretive Profile**

## Intro sentence
Your responses trace a pattern through *Dawn*’s central conflicts: humanity, consent, survival, change, and judgment. What follows is not a measure of correctness, but a portrait of how you read Butler’s ethical world.

---

## Result Profile A — Ethical Resister

### Identity line
**You believe that survival loses moral legitimacy when it is built on domination, coerced change, and compromised autonomy.**

### Core interpretation
Your choices suggest that you read *Dawn* primarily as a warning. For you, Butler’s world is not defined first by rescue, but by the danger of power that presents itself as necessary, benevolent, and unavoidable. You are deeply skeptical of any future purchased through bodily control, unequal consent, or imposed transformation. Even when the alternative is extinction, you do not treat survival as an automatic justification. You read the novel as insisting that autonomy, dignity, and the right to self-determination are not secondary values; they are part of what makes life fully human in the first place.

This means you are likely to see the Oankali less as saviors than as a more sophisticated form of domination. Their care does not erase their control, and their preservation of humanity does not excuse their seizure of its future. Your reading strikes at one of Butler’s harshest questions: whether a life preserved by another power can still belong to the people living it.

### Thematic breakdown
- Humanity: rooted in continuity, dignity, and moral agency
- Consent: invalid when shaped by deep power imbalance
- Survival: not worth unconditional surrender
- Change: ethically suspect when imposed
- Judgment: rescue cannot erase domination

### Reflection prompt
**If freedom can be traded away for survival, at what point does survival stop being a moral good and become only prolonged submission?**

---

## Result Profile B — Pragmatic Survivor

### Identity line
**You believe that existence must come before purity, and that difficult compromise may be morally painful but still necessary.**

### Core interpretation
Your choices suggest that you read *Dawn* through the logic of survival under pressure. For you, Butler’s novel does not offer ideal options; it offers damaged ones. In that world, extinction is the absolute loss, and compromise — however troubling — may still be the only path left open. You do not necessarily celebrate the Oankali’s methods, but you treat survival as the condition that makes all further freedom, negotiation, or future meaning possible. From your perspective, the novel’s ethical force lies in its refusal to grant humanity the comfort of clean resistance.

This means you are likely to judge the Oankali in hard practical terms. They preserve life where humans could not preserve themselves. Their control may be disturbing, but total refusal may amount to choosing annihilation over an imperfect future. Your reading therefore emphasizes necessity, endurance, and the tragic realism of Butler’s world: survival does not come clean, but it still comes.

### Thematic breakdown
- Humanity: resilient even under altered conditions
- Consent: constrained, but not always empty
- Survival: the first condition of all other values
- Change: acceptable if it secures the future
- Judgment: preservation carries great moral weight

### Reflection prompt
**If extinction is the only alternative, does refusing compromise preserve dignity — or only destroy the possibility of any future at all?**

---

## Result Profile C — Human Essentialist

### Identity line
**You believe that humanity has real boundaries, and that crossing them too far risks destroying the very thing the novel claims to preserve.**

### Core interpretation
Your choices suggest that you read *Dawn* as a novel about the fragility of human continuity. For you, identity is not infinitely flexible. It depends on limits: bodily, cultural, historical, and perhaps even species-level. Change may be unavoidable, but not every change can be accepted without loss. You are alert to Butler’s emphasis on transformation, yet you resist the idea that transformation is automatically growth. In your reading, the fear of losing one’s humanity is not merely reactionary. It is a serious moral fear, because some futures may continue life while breaking the continuity that made that life recognizably human.

This means you are likely to treat the Oankali’s genetic trade with deep suspicion. They do not merely help humanity survive; they redefine what humanity will be, and they do so on terms humans did not control. Your reading preserves one of the novel’s most painful tensions: whether survival still counts as survival when what continues forward is no longer clearly the same people, species, or identity.

### Thematic breakdown
- Humanity: grounded in continuity and recognizable limits
- Consent: especially urgent when identity is at stake
- Survival: not enough by itself
- Change: dangerous when it threatens essential continuity
- Judgment: preservation can become erasure

### Reflection prompt
**Can a future still be called human if it survives only by giving up the boundaries that once defined humanity itself?**

---

## Result Profile D — Transformational Thinker

### Identity line
**You believe that fixed definitions of humanity are unstable, and that change — however unsettling — may be part of what survival truly requires.**

### Core interpretation
Your choices suggest that you read *Dawn* as a challenge to purity, rigidity, and the fantasy of unchanged identity. For you, Butler is not simply mourning the loss of old humanity; she is exposing how fragile and perhaps artificial its supposed boundaries always were. You are more open than most to the idea that identity can survive transformation, and that the future may require mixture rather than preservation. In your reading, change is not automatically violation. It can also be adaptation, growth, and an honest confrontation with the fact that no living thing remains entirely pure or unchanged.

This means you are likely to see the Oankali as more than conquerors. Their presence may still be ethically troubling, but you read Butler as using them to unsettle human exceptionalism and to question whether resistance to change is always noble. Your interpretation is forward-facing: it treats the novel not only as a story about loss, but as a demand to imagine forms of life beyond the limits humans try to guard.

### Thematic breakdown
- Humanity: flexible, unstable, and not reducible to biology alone
- Consent: important, but not the only lens for judging change
- Survival: tied to adaptation rather than preservation alone
- Change: potentially creative as well as disruptive
- Judgment: moral categories become unstable under transformation

### Reflection prompt
**If identity is not a fixed essence, does transformation destroy the self — or reveal that the self was always capable of becoming something new?**

---

## Result Profile E — Ambivalent Mediator

### Identity line
**You resist clean moral conclusions and read *Dawn* as a novel built on tension, compromise, and unresolved ethical instability.**

### Core interpretation
Your choices suggest that you see Butler’s novel at its most difficult and most honest: as a world where no side remains pure, no answer remains comfortable, and no judgment remains complete. You do not separate rescue from violation, survival from loss, or care from control. Instead, you read *Dawn* as a novel that forces incompatible truths to exist at once. The Oankali preserve life, but they also dominate. Humans defend autonomy, but they also carry the hierarchical impulses that helped destroy their own world. Lilith survives by mediating between sides, but that mediation itself becomes morally unstable.

This means your interpretation is the least interested in certainty and the most attentive to contradiction. You do not flatten Butler into a warning or a celebration. You read her as a writer of pressure, ambiguity, and tragic entanglement. In your reading, the achievement of *Dawn* is not that it answers what should happen next, but that it makes the reader feel how difficult it is to judge a future shaped by both necessity and violation.

### Thematic breakdown
- Humanity: unstable and politically contested
- Consent: real in form, compromised in structure
- Survival: necessary, but morally damaged
- Change: both loss and possibility
- Judgment: permanently unresolved

### Reflection prompt
**What if the deepest truth of *Dawn* is that some futures cannot be judged cleanly because survival, domination, grief, and transformation have already become inseparable?**

---

## Shared result footer

### Closing line
**Your result is not the end of the experience. It is a way of making your interpretation visible.**

### Optional closing paragraph
*Dawn* does not ask readers to choose comfort. It asks them to confront what happens when humanity survives only through dependence, when consent weakens under unequal power, and when the future is shaped by forces that both preserve and violate. Your profile reflects where you stood when those tensions were placed in front of you.

### Result page buttons
- **View My Decision Map**
- **Read the Reflection Page**
- **Restart Experience**

---

# PAGE 10 — Reflection / About Page

## Page goal
Make the academic purpose explicit.

## Recommended heading
**Why This Website Exists**

## Reflection copy
This website was designed to translate *Dawn* into an interactive structure of choices, tensions, and consequences. Rather than reducing the novel to a single moral lesson, it invites users to confront the unstable questions Butler places at the center of the story: what defines the human, whether consent can survive domination, whether survival is still meaningful without autonomy, and how power should be judged when it saves by reshaping.

The final interpretive profile does not tell the user who they are. It reveals how they responded to Butler’s ethical world. In that sense, the website transforms literary interpretation into experience. It makes visible how different values generate different readings of the same novel.

## Optional supporting section
### Academic objective
This project uses interactive design to explore literary analysis rather than replace it. The website structure is built around interpretation, not entertainment.

### Buttons
- **Restart Experience**
- **Return Home**

---

## 12. Scoring logic requirements

## 12.1 General logic
Each answer choice should map to one or two profiles.  
At the end, the highest total score determines the result.

### Profiles
- Ethical Resister
- Pragmatic Survivor
- Human Essentialist
- Transformational Thinker
- Ambivalent Mediator

## 12.2 Recommended base mapping

### Module 1 — Humanity
- A -> Transformational Thinker + Ambivalent Mediator
- B -> Human Essentialist
- C -> Ambivalent Mediator
- D -> Ethical Resister + Ambivalent Mediator
- E -> Transformational Thinker

### Module 2 — Consent
- A -> Pragmatic Survivor
- B -> Ethical Resister
- C -> Ambivalent Mediator
- D -> Pragmatic Survivor + Ambivalent Mediator
- E -> Ethical Resister + Ambivalent Mediator

### Module 3 — Survival
- A -> Pragmatic Survivor
- B -> Ethical Resister + Human Essentialist
- C -> Ambivalent Mediator
- D -> Pragmatic Survivor + Ambivalent Mediator
- E -> Ambivalent Mediator + Transformational Thinker

### Module 4 — Change
- A -> Transformational Thinker
- B -> Human Essentialist
- C -> Human Essentialist + Ambivalent Mediator
- D -> Ethical Resister + Ambivalent Mediator
- E -> Ambivalent Mediator + Transformational Thinker

### Module 5 — Judgement
- A -> Pragmatic Survivor
- B -> Ethical Resister
- C -> Ambivalent Mediator
- D -> Ambivalent Mediator + Transformational Thinker
- E -> Ambivalent Mediator

## 12.3 Tie-breaking
Recommended tie-break order:
1. Judgement module
2. Consent module
3. Survival module

This keeps the final result aligned with the strongest moral axes.

---

## 13. UI component list

Required reusable components:
- hero section
- page wrapper
- progress bar
- section heading
- answer card
- primary button
- secondary button
- expandable significance panel
- results card
- thematic breakdown list
- reflection prompt card
- transition footer
- navigation / back control

---

## 14. Microinteraction guidelines

### Buttons
- slight glow or border intensification on hover
- subtle down-press response
- no bounce

### Cards
- hover lift of 2–4px max
- border accent on hover
- selected state more obvious than hover state

### Expandables
- smooth opening
- arrow icon rotation
- opacity fade on content reveal

### Page transitions
- short fade / upward reveal
- no long blocking loader unless truly needed

---

## 15. Copy and editorial handling

The current text in this document should be treated as the approved base content.  
Minor grammar and punctuation normalization is acceptable during implementation **only if the meaning is preserved**.

Developer should not:
- simplify the writing too aggressively
- replace literary language with generic app copy
- change the interpretive tone
- make results playful or comedic

---

## 16. Final product expectation

The completed site should feel:
- academically serious
- visually impressive
- technically polished
- emotionally tense
- highly memorable in presentation
- premium enough to stand out immediately
- usable enough that every choice remains clear

The final result should look like a **high-end literary interaction experience**, not a school project that happens to be online.

---

## 17. Source / reference notes for developer

This build specification is based on the approved project content supplied by Micheal Jiang in the uploaded rubric / text draft.

Developer may also consult:
- official publisher materials for *Dawn* cover/reference
- licensed stock or self-generated abstract textures
- restrained editorial / cinematic motion references

If visual inspiration is needed, prioritize:
- clean luxury websites
- premium publication layouts
- art-directed museum / exhibition pages
- restrained sci-fi design systems
