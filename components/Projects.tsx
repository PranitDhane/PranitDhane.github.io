type Project = {
  num: string;
  name: string;
  description: string;
  tags: string[];
  href: string;
};

const GITHUB = "https://github.com/PranitDhane";

const projects: Project[] = [
  {
    num: "01",
    name: "ARKEN AI",
    description:
      "Agentic LLM orchestration platform for shell-and-tube heat exchanger design. An LLM orchestrator runs a bounded tool-use loop and dispatches to microservices through config-driven tool schemas, a second LLM acts as an autonomous judge after each pipeline step, and tokens are re-emitted as typed events into Redis Streams for SSE reconnect, replay and cancellation.",
    tags: ["Python", "FastAPI", "Claude SDK", "Gemini", "Redis Streams", "SSE"],
    href: GITHUB,
  },
  {
    num: "02",
    name: "ARKEN HX Design Engine",
    description:
      "TEMA-compliant design pipeline with 15 calculation steps, from heat duty and fluid properties through LMTD/F-factor, HTC, pressure drop, vibration, mechanical and cost to final validation. Each step is backed by a versioned markdown skill prompt, with state accumulating in a Redis-backed context.",
    tags: ["Python 3.11", "FastAPI", "Redis", "Markdown skills"],
    href: GITHUB,
  },
  {
    num: "03",
    name: "ARKEN Frontend",
    description:
      "Chat UI plus a ReactFlow graph that renders multi-step agent state, so users can inspect what each step produced and how judge verdicts flowed between steps.",
    tags: ["React 19", "Vite", "Zustand", "TailwindCSS v4", "ReactFlow"],
    href: GITHUB,
  },
  {
    num: "04",
    name: "Enterprise RAG Knowledge Assistant",
    description:
      "Secure RAG over 19,538 Confluence pages across 43 spaces: incremental-sync ingestion with secrets scanning, structure-aware chunking, hybrid retrieval, permission-aware results and citation validation. Built at Cerillion.",
    tags: ["Python", "LangChain", "Qdrant", "BAAI/bge-m3", "RRF", "Ragas"],
    href: "#experience",
  },
];

const highlights = [
  {
    title: "Bounded agent loop",
    text: "The orchestrator runs a controlled tool-use loop. New tools register declaratively through a tool registry, with no orchestrator code changes.",
  },
  {
    title: "LLM-as-judge gating",
    text: "A second LLM reviews each step and returns a structured verdict (proceed / warn / correct / escalate) with a confidence score that decides auto-continue or human escalation.",
  },
  {
    title: "Versioned, hot-loaded prompts",
    text: "Prompts are markdown files hashed at load time, so every run traces back to the exact prompt version that produced it.",
  },
  {
    title: "Decoupled streaming",
    text: "Token output is re-emitted as typed events into Redis Streams, independent of the model call, for resilient SSE on flaky connections.",
  },
  {
    title: "LLM as an unreliable dependency",
    text: "Outputs are parsed into validated Pydantic schemas with safe fallbacks, calls use exponential backoff, and auth errors degrade to deterministic behavior.",
  },
  {
    title: "Multi-provider",
    text: "Claude is primary and Gemini secondary, with cross-provider tool-schema translation so one tool registry works with either.",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="max-w">
        <div className="section-tag">Projects</div>
        <h2 className="section-title">Things I&apos;ve built</h2>
        <p className="section-sub">
          Agentic AI, RAG, and streaming systems, from ARKEN AI to enterprise
          knowledge assistants.
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <a
              href={project.href}
              target={project.href.startsWith("http") ? "_blank" : undefined}
              rel={project.href.startsWith("http") ? "noreferrer" : undefined}
              className="project-card reveal"
              key={project.num}
            >
              <div className="project-num">{project.num}</div>
              <div className="project-name">{project.name}</div>
              <div className="project-desc">{project.description}</div>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-arrow">↗</div>
            </a>
          ))}
        </div>

        <h3
          className="section-title reveal"
          style={{ fontSize: 28, marginTop: 72, marginBottom: 28 }}
        >
          ARKEN AI: engineering highlights
        </h3>
        <div className="projects-grid">
          {highlights.map((h) => (
            <div className="project-card reveal" key={h.title}>
              <div className="project-name" style={{ fontSize: 17 }}>
                {h.title}
              </div>
              <div className="project-desc">{h.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
