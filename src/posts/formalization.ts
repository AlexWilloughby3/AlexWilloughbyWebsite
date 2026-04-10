export const postFormalization = `
  <a href="#writing" class="back-link">&larr; Back to Writing</a>
  <h2>The Case for Formal Software in the Age of AI Agents</h2>
  <p class="post-date">April 2026</p>

  <h3>Who am I?</h3>
  <p>My name is Alex Willoughby and I'm a software engineering intern at Nuvo. I'm also currently a third-year at Carnegie Mellon University studying Math and Computer Science. I'm mainly interested in applying the highly abstract fields of analysis and logic to important practical settings. My background lies more on the academic side but I've been enjoying working on improving the identity verification model and extending the dashboard interface at <a href="https://nuvo.com/" target="_blank">Nuvo</a>.</p>

  <h3>Introduction</h3>
  <p>It's no debate that the capabilities of AI agents have exploded over the last few years and will continue to explode over the coming years, but what's still relatively unknown is what role these agents will play in the economy and how they will be <a href="https://forecastingresearch.org/economic-effects-of-ai" target="_blank">utilized by businesses</a>.</p>

  <p>Here is what we do know: software complexity is growing faster than engineers can handle. As that complexity grows, humans have to tackle more meta, abstract problems surrounding the product and delegate the rest to agents. It's become increasingly obvious that most software components at the industry level can be made by AI agents at a fraction of the cost. I imagine most of us have thought of and reconciled with a future where engineers hand off their simpler work to AI agents. In this article, I assert bold claims around its future, redefine important terms, present evidence, and speculate on the best way to approach it as it starts to grow.</p>

  <h3>Current Limitations</h3>
  <p>The primary issue that businesses are having with these agents is that you can't trust their answers when it comes to decision making. In a few prompts Claude can define a database schema, wire up endpoints, and create an interactive UI, but the output is never quite right and the code is hard to read. Engineers still have to verify every line before it ships. The bottleneck hasn't moved.</p>

  <p>The context of what we put in the prompt and our ideas of what we want the model to accomplish are extremely important. Research from <a href="https://arxiv.org/abs/2412.05299" target="_blank">Stoica et al.</a> argues that the lack of precise specifications is the fundamental bottleneck preventing LLM systems from being engineered with the same rigor as traditional software, and <a href="https://arxiv.org/abs/2509.14404v1" target="_blank">Hu et al.</a> have shown that a large class of LLM failures trace directly back to identifiable prompt defects, missing context, ambiguous instructions and under-constrained formatting.</p>

  <p>The development of skills, reusable instruction files that give agents project-specific context, is a practical attempt at standardizing this. Skills have already dramatically accelerated development as I'm sure most engineers have seen, but they have a fundamental limitation: they get out of sync with the project almost immediately. As the codebase evolves, the assumptions baked into a skill silently become stale, and there is currently no mechanism to track or detect that drift. Further, even if every skill were perfectly maintained, model performance <a href="https://arxiv.org/abs/2603.26567v1" target="_blank">dramatically drops off in multi file systems</a> and we still haven't solved the interoperability problem, so we have to keep the skills relatively self contained and read model output.</p>

  <p>The question is not "how do we make agents smarter?" The question is how do we create a standardize system to better leverage existing agent intelligence. We've already abstracted away the bytecode that is actually run post compilation, so who is to say we can't abstract away more about the software we write?</p>

  <h3>A Model for Agent-Operated Software</h3>
  <p>Every software system, regardless of complexity, can be decomposed into three concerns: what external dependencies it relies on (the <strong>dependency layer</strong>), what the system actually does (the <strong>implementation layer</strong>), and what rules the system must follow (the <strong>specification layer</strong>). Today, humans own all three. As formalization matures, agents move from implementing code that humans verify by reading it, to implementing human defined specification in the implementation layer, to automatically identifying dependency layer issues and resolving them, to eventually owning entire applications. This is the trajectory we are on.</p>

  <p>In practice, there is a natural ceiling to how far this goes for human-facing software. As long as a human is responsible for what the software does, they will likely want other humans monitoring nondeterminism, side channels, and other external dependencies at the dependency layer. Hardware behaves in ways formal proofs cannot fully capture, third-party providers change their behavior without notice, and network conditions are inherently unpredictable (although this is <a href="https://ieeexplore.ieee.org/document/8453007" target="_blank">changing</a>). These are problems that require human judgment to manage. Further, if software is being used by humans, there is a cultural expectation that other humans understand how the system works and make decisions about how it interacts with people. Interface design, accessibility, regulatory compliance, and product direction are not things most organizations will hand to agents regardless of how capable they become. For human-facing software, humans likely never fully leave dependency and specification. While there are ideas of agents operating all layers, they are too hypothetical for this discussion. The question is what enables agents to move from reading-and-checking to formal verification.</p>

  <h3>Formalization</h3>
  <p>Formalization is not binary. It is a spectrum that starts with checking that the input to a function is the right type and ends with a full mathematical proof of correctness in a language like Lean. Most software today already sits somewhere on this spectrum: type systems, schema validation, and contract checks are all lightweight forms of formal specification. Applications can undergo a gradual process of formalization as more constraints are made explicit and machine-checkable, and each step along that spectrum unlocks more of the implementation to be handed to agents.</p>

  <p>Software today relies on a subjective trust system: trust in the use of external software is built mainly by third-party security audits, tests, and user adoption. As these constraints become more complex and critical to business needs, they will be formalized because it's more objective and quick to check them.</p>

  <p>Three forces are converging. As <a href="https://martin.kleppmann.com/2025/12/08/ai-formal-verification.html" target="_blank">Kleppmann</a> argues, formal verification is becoming vastly cheaper because LLMs can write proof scripts, AI-generated code <em>needs</em> formal verification so we can skip human review, and the precision of formal verification counteracts the probabilistic nature of LLMs. Critically, it doesn't matter if LLMs hallucinate during proof generation because the proof checker rejects any invalid proof and forces a retry. The verifier is a small amount of trusted code that is itself verified.</p>

  <p>The empirical evidence is already here. The <a href="https://arxiv.org/abs/2509.22908" target="_blank">vericoding benchmark</a> (Bursuc, Tegmark et al., 2025) tested LLM generation of formally verified code across 12,504 tasks and found success rates of 82% in Dafny, 44% in Verus/Rust, and 27% in Lean using off-the-shelf models. Dafny verification improved from 68% to 96% over a single year. Notably, adding natural language descriptions to the formal specs did not significantly improve performance, supporting the thesis that the spec, not the prompt, is more important.</p>

  <p>A lot of research groups are converging on this from different angles. Google DeepMind built <a href="https://www.nature.com/articles/s41586-025-09833-y" target="_blank">AlphaProof</a>, a reinforcement learning agent that generates formal Lean proofs and achieved silver medal performance at the 2024 IMO. DeepSeek released <a href="https://github.com/deepseek-ai/DeepSeek-Prover-V2" target="_blank">Prover-V2</a>, an open-source 671B parameter model for Lean 4 theorem proving that hits 88.9% on the MiniF2F benchmark. Harmonic and ByteDance both fielded strong results at the <a href="https://cacm.acm.org/research/formal-reasoning-meets-llms-toward-ai-for-mathematics-and-verification/" target="_blank">2025 IMO</a>. Microsoft Research maintains both <a href="https://lean-lang.org/" target="_blank">Lean</a> (the language itself) and <a href="https://fstar-lang.org/" target="_blank">F*</a>, and used F* to ship a verified TLS stack in production browsers. On the startup side, <a href="https://axiommath.ai/" target="_blank">Axiom Math</a> raised $200M to build a Lean-based verification engine.</p>

  <p>Once the spec is satisfied, agents can continuously optimize the implementation in the background, minimizing for program length, modularity, cost, latency, or other properties. This idea was first developed by <a href="https://arxiv.org/abs/2410.04753" target="_blank">my friend at CMU</a> and has since been picked up by <a href="https://arxiv.org/abs/2510.15700" target="_blank">Meta researchers</a>. There is also a rich area of research using Lean for <a href="https://blog.lambdaclass.com/amo-lean-towards-formally-verified-optimization-via-equality-saturation-in-lean-4/" target="_blank">compiler optimization</a>.</p>

  <h3>Limitations of this Framework</h3>
  <p>Not all software is equally amenable to this model. Software that is fully formalizable (protocol compliance, algorithmic correctness, cryptographic properties) works today. Software that is parametrically formalizable (correct structure but human-tuned values like timeouts, retry policies and UI design) is possible but requires more work.</p>

  <p>Even where formalization applies, as <a href="https://www.lesswrong.com/posts/pnPDd8uo2NZqn2dtG/safe-recursive-self-improvement-with-verified-compilers" target="_blank">Chlipala</a> outlines, proofs may rely on assumptions that are not true due to side channels and nondeterminism, and this compounds with each new block of agent-written code. The framework also assumes formal spec libraries will exist, but their maturation is a community coordination problem gated by different dynamics than AI capability growth. Writing specs is harder than writing implementations. If the spec of a core axiom of a product changes, the trickle down effects can become arbitrarily large. Formal dependency tracking and agent rebuilds help, but foundational changes like <a href="https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)" target="_blank">Spectre-class</a> discoveries trigger massive re-verification whose speed is an open question.</p>

  <h3>Example</h3>
  <p>Let's formalize the customer app state machine and prove a simple property about it:</p>

  <p>Here is the data model (essentially the same as python definition but in new syntax)</p>

  <pre><code>structure Company where
id : Nat
legalName : Option String
claimed : Bool

inductive ReviewStatus where
| placeholderApplication
| incompleteApplication
| application
| rejectedApplication
| activeAccount

inductive Step where
| companyDetails
| shippingLocations
| taxExemptions
| tradeReferences
| bankReferences
| personalGuaranty
| additionalResponses
| confirmation
| verification

structure CustomerApplication where
id : Nat
buyerId : Nat                    -- FK &rarr; Company
supplierId : Nat                 -- FK &rarr; Company
reviewStatus : ReviewStatus
configSlug : String</code></pre>

  <p>Each supplier has a configuration that controls which steps are shown and which are skippable. The showStep and stepSkippable fields can be static booleans or dynamic rules evaluated against the application's data, but from the spec's perspective, they resolve to booleans for a given application:</p>

  <pre><code>structure StepConfig where
    showStep : Bool
    stepSkippable : Bool

structure AppConfiguration where
    slug : String
    steps : Step &rarr; StepConfig</code></pre>

  <p>A step is required if it's shown and not skippable:</p>

  <pre><code>def stepRequired (cfg : AppConfiguration) (step : Step) : Bool :=
(cfg.steps step).showStep && !(cfg.steps step).stepSkippable</code></pre>

  <p>The domain state tracks applications, their configurations, and which steps have been completed:</p>

  <pre><code>structure AppState where
    apps : Set CustomerApplication
    configs : Nat &rarr; AppConfiguration      -- supplierId &rarr; config
    completedSteps : Set (Nat &times; Step)     -- (appId, step)</code></pre>

  <p>Submitting an application transitions it from incompleteApplication to application. The property we want: this transition can only happen if every required step is complete. This is the part where the lean syntax can get confusing but essentially we are using set builder notation along with common set inclusion symbols</p>

  <pre><code>def requiredSteps (cfg : AppConfiguration) : Set Step :=
{ step | stepRequired cfg step }

def appCompletedSteps (s : AppState) (appId : Nat) : Set Step :=
{ step | (appId, step) &isin; s.completedSteps }</code></pre>

  <p>With these definitions, we can define a rigorous version of what it means to submit an application that lends well to automation:</p>

  <pre><code>def submit (s : AppState) (appId : Nat)
      (h : requiredSteps (s.configs (s.app appId).supplierId)
           &sube; appCompletedSteps s appId)
      : { s' : AppState // (s'.app appId).reviewStatus = .submitted }</code></pre>

  <p>In plain english, this just adds an input to the submit function that says "for all submitted customer apps, all of the requiredSteps have been completed". Because bugs like these appear all of the time, keeping this constraint as a CI check can rapidly improve the rate at which we can confidently push changes.</p>

  <p>The real advantage over Python isn't bypass-ability, a sufficiently opaque token gets you there too. The true power of a system like this is generalization and automation tools. In Lean you can iterate over types with meta-programs, swap out the data model of AppState to be through an OLAP instead of postgres and continuously run an RL environment on the speed as long as interfaces are respected.</p>

  <h3>Integration into Business Applications</h3>
  <p>Despite the capabilities mentioned, anyone trying to integrate formal software into their core product is running into a big issue, under-developed tooling for lean and other formal software. These languages were primarily made for mathematicians and compiler engineers and don't have mature libraries for these use cases. I've started a project called <a href="https://github.com/AlexWilloughby3/SWELib" target="_blank">SWELib</a> which aims to build useful, open source lean tools for developers aiming to try to adopt this model of software engineering, but the project is still in it's infancy.</p>

  <h3>Conclusion</h3>
  <p>The bottleneck holding AI agents back isn't intelligence, it's trust, and formalization is how we build it. Teams that invest in making their specifications explicit and machine-checkable will find that application structure and agent workflows reinforce each other naturally. The more precisely we define what our software should do, the more confidently we can delegate how it gets done. The sooner the broader engineering community invests in that foundation, the sooner we stop babysitting our agents and start collaborating with them.</p>

  <p>If you're excited about the future of AI and formal verification, I'd love to <a href="mailto:alexanderwilloughbyr@gmail.com">hear from you</a>.</p>
`;
