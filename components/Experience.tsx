export default function Experience() {
  return (
    <section id="experience">
      <div className="max-w">
        <div className="exp-layout">
          <div>
            <div className="section-tag">Experience</div>
            <h2 className="section-title">Where I&apos;ve worked</h2>
            <p className="section-sub">
              Building RAG and agentic AI systems, and the backends that keep
              them reliable.
            </p>
            <a
              href="https://linkedin.com/in/pranit-dhane-758543211/"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
              style={{ marginTop: 32, display: "inline-flex" }}
            >
              Full profile ↗
            </a>
          </div>
          <div className="timeline">
            <div className="timeline-item reveal">
              <div className="tl-dot active"></div>
              <div className="tl-content">
                <div className="tl-company">Cerillion Technologies</div>
                <div className="tl-role">AI Engineer</div>
                <div className="tl-period">Oct 2023 - Present · Pune, India</div>

                <div className="exp-label">RAG Knowledge Assistant</div>
                <ul className="tl-bullets">
                  <li>
                    Designed a <strong>RAG</strong> assistant over{" "}
                    <strong>19,538 Confluence pages across 43 spaces</strong>,
                    with a Python incremental-sync ingestion and{" "}
                    <strong>secrets-scanning</strong> pipeline.
                  </li>
                  <li>
                    Implemented structure-aware chunking and{" "}
                    <strong>hybrid retrieval</strong> using{" "}
                    <strong>LangChain</strong>, self-hosted{" "}
                    <strong>BAAI/bge-m3</strong> dense and sparse embeddings,{" "}
                    <strong>Qdrant</strong>, and{" "}
                    <strong>Reciprocal Rank Fusion (RRF)</strong>.
                  </li>
                  <li>
                    Engineered a secure pipeline with{" "}
                    <strong>per-user permission-aware retrieval</strong>,
                    citation validation, PII and secret masking, and
                    evidence-grounded response <strong>guardrails</strong>.
                  </li>
                  <li>
                    Built an <strong>LLM evaluation framework</strong> with
                    SME-labelled golden datasets, Recall@K, and{" "}
                    <strong>Ragas</strong> faithfulness and context scoring,
                    with <strong>evaluation gates in CI</strong>.
                  </li>
                </ul>

                <div className="exp-label">Agentic AI Support System</div>
                <ul className="tl-bullets">
                  <li>
                    Designed an agentic support system for a telecom{" "}
                    <strong>BSS</strong> platform integrating RAG,{" "}
                    <strong>LLM-based triage</strong>, automated{" "}
                    <strong>Jira routing</strong>, and{" "}
                    <strong>Human-in-the-Loop</strong> code-analysis agents.
                  </li>
                  <li>
                    Prototyped a <strong>multi-agent system in LangGraph</strong>{" "}
                    with state graphs, checkpointing and tool calling, using a{" "}
                    <strong>Router architecture</strong> to cut unnecessary LLM
                    calls and latency.
                  </li>
                </ul>
              </div>
            </div>

            <div className="timeline-item reveal">
              <div className="tl-dot"></div>
              <div className="tl-content">
                <div className="tl-company">Phenom People</div>
                <div className="tl-role">Product Development Engineer I</div>
                <div className="tl-period">Jun 2023 - Sep 2023 · Hyderabad, India</div>
                <ul className="tl-bullets">
                  <li>
                    Built <strong>job-matching and recommendation</strong> for
                    High Volume Hiring using embedding-based similarity and{" "}
                    <strong>gradient-boosted ranking</strong>.
                  </li>
                  <li>
                    Turned candidate and job attributes into{" "}
                    <strong>semantic embeddings</strong> for vector retrieval,
                    with offline evaluation on precision, recall, and NDCG.
                  </li>
                  <li>
                    Prototyped an <strong>LLM-assisted screening workflow</strong>{" "}
                    (prompt engineering, structured outputs) that summarizes
                    profiles and generates match rationales, with{" "}
                    <strong>Human-in-the-Loop</strong> review.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
