type SkillGroup = {
  name: string;
  wide?: boolean;
  tags: { label: string; highlight?: boolean }[];
};

const t = (label: string, highlight = false) => ({ label, highlight });

const skillGroups: SkillGroup[] = [
  {
    name: "AI & Agents",
    wide: true,
    tags: [
      t("Generative AI", true),
      t("Agentic AI", true),
      t("Multi-Agent Systems", true),
      t("RAG", true),
      t("LLM Evaluation", true),
      t("LangGraph"),
      t("LangChain"),
      t("Claude SDK"),
      t("Tool Calling"),
      t("Structured Outputs"),
      t("Human-in-the-Loop"),
      t("Guardrails"),
      t("Prompt Engineering"),
    ],
  },
  {
    name: "RAG & Retrieval",
    tags: [
      t("Hybrid Search (Dense + Sparse)", true),
      t("Qdrant", true),
      t("BAAI/bge-m3"),
      t("Reranking"),
      t("Reciprocal Rank Fusion"),
      t("Semantic Search"),
    ],
  },
  {
    name: "Evaluation",
    tags: [
      t("Ragas", true),
      t("Recall@K"),
      t("SME-labelled Golden Datasets"),
      t("LLM-as-Judge"),
      t("CI Evaluation Gates"),
    ],
  },
  {
    name: "Backend",
    tags: [
      t("Python", true),
      t("FastAPI", true),
      t("Pydantic"),
      t("REST APIs"),
      t("Microservices"),
      t("Redis Streams"),
      t("SSE"),
    ],
  },
  {
    name: "Frontend",
    tags: [t("React 19"), t("Vite"), t("Zustand"), t("ReactFlow"), t("TailwindCSS")],
  },
  {
    name: "Databases",
    tags: [t("Qdrant"), t("Redis"), t("MongoDB"), t("Oracle")],
  },
  {
    name: "DevOps & Tools",
    tags: [
      t("Docker"),
      t("Nginx"),
      t("CI/CD"),
      t("Jira"),
      t("Security & Access Control"),
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="max-w">
        <div className="skills-header">
          <div>
            <div className="section-tag">Skills &amp; Stack</div>
            <h2 className="section-title">What I work with</h2>
            <p className="section-sub">
              Technologies I reach for when shipping real systems, not just
              listed but actually used.
            </p>
          </div>
        </div>
        <div className="skill-groups reveal">
          {skillGroups.map((group) => (
            <div
              className={`skill-group${group.wide ? " skill-group--wide" : ""}`}
              key={group.name}
            >
              <div className="skill-group-name">{group.name}</div>
              <div className="skill-tags">
                {group.tags.map((tag) => (
                  <span
                    className={`skill-tag${tag.highlight ? " highlight" : ""}`}
                    key={tag.label}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
