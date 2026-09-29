export default function About() {
  return (
    <section id="about">
      <div className="max-w">
        <div className="about-grid">
          <div className="about-photo-wrap reveal">
            <div className="about-photo-frame"></div>
            <div className="about-monogram" aria-label="Pranit Dhane">
              PD<span>.</span>
            </div>
            <div className="about-photo-accent"></div>
          </div>
          <div className="about-text reveal">
            <h2>About me</h2>
            <p>
              I&apos;m an <strong>AI engineer</strong> building{" "}
              <strong>RAG</strong> and <strong>agentic LLM systems</strong> on
              a solid backend engineering foundation. Currently at{" "}
              <strong>Cerillion Technologies</strong>, where I work with a
              telecom <strong>BSS</strong> domain context: hybrid retrieval,
              multi-agent prototypes, guardrails, and evaluation in CI.
            </p>
            <p>
              I work at the intersection of backend engineering and applied
              AI. I care about RAG that is{" "}
              <strong>secure, permission-aware, and measured by evals</strong>,
              not vibes, and about treating the LLM as an{" "}
              <strong>unreliable dependency</strong>: validated schemas, safe
              fallbacks, exponential backoff, and deterministic degradation.
            </p>
            <p>
              Outside of work I build <strong>ARKEN AI</strong>, an agentic
              orchestration platform for heat exchanger design, with an LLM
              judge gating every step and streaming decoupled from the model
              call through Redis Streams.
            </p>
            <p>
              Before Cerillion I spent a few months at{" "}
              <strong>Phenom People</strong> on job matching and
              recommendation for high-volume hiring.
            </p>
            <div className="about-chips">
              <span className="chip">Pune, India</span>
              <span className="chip">AI Engineer</span>
              <span className="chip">RAG</span>
              <span className="chip">Agentic Systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
