"use client";

import { useEffect, useRef } from "react";

type TermLine =
  | { type: "cmd"; prompt: string; text: string }
  | { type: "out"; text: string }
  | { type: "agent"; label: string; text: string }
  | { type: "success"; text: string };

const termLines: TermLine[] = [
  { type: "cmd", prompt: "❯", text: "python ask.py --query \"how do we onboard a new BSS tenant?\"" },
  { type: "out", text: "  Initializing secure RAG pipeline..." },
  { type: "agent", label: "[retriever]", text: "Hybrid search: bge-m3 dense + sparse on Qdrant" },
  { type: "agent", label: "[fusion]", text: "Merging results with Reciprocal Rank Fusion" },
  { type: "agent", label: "[guard]", text: "Permission filter · PII & secret masking" },
  { type: "success", text: "  ✓ Answer grounded · citations validated" },
  { type: "out", text: "  19,538 pages  |  43 spaces  |  Ragas eval in CI" },
];

const roles = [
  "AI Engineer",
  "RAG & Agentic AI Systems",
  "LLM Platforms & Evaluation",
  "Shipping production AI at Cerillion",
];

export default function Hero() {
  const termBodyRef = useRef<HTMLDivElement>(null);
  const typewriterRef = useRef<HTMLSpanElement>(null);

  // Terminal animation: types out scripted log lines, then loops.
  useEffect(() => {
    const node = termBodyRef.current;
    if (!node) return;
    const termBody: HTMLDivElement = node;

    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const schedule = (fn: () => void, delay: number) => {
      timeouts.push(setTimeout(fn, delay));
    };

    let termIdx = 0;
    function renderTermLine(line: TermLine) {
      const div = document.createElement("div");
      div.className = "term-line";
      if (line.type === "cmd") {
        div.innerHTML = `<span class="prompt">${line.prompt}</span><span class="cmd">${line.text}</span>`;
      } else if (line.type === "agent") {
        div.innerHTML = `<span class="agent-name">${line.label}</span><span class="out"> ${line.text}</span>`;
      } else if (line.type === "success") {
        div.innerHTML = `<span class="success">${line.text}</span>`;
      } else {
        div.innerHTML = `<span class="out">${line.text}</span>`;
      }
      div.style.opacity = "0";
      div.style.transform = "translateY(4px)";
      div.style.transition = "opacity 0.3s, transform 0.3s";
      termBody.appendChild(div);
      requestAnimationFrame(() => {
        div.style.opacity = "1";
        div.style.transform = "none";
      });
    }
    function runTerminal() {
      if (termIdx < termLines.length) {
        renderTermLine(termLines[termIdx++]);
        schedule(runTerminal, termIdx === 1 ? 400 : 550 + Math.random() * 300);
      } else {
        const cur = document.createElement("div");
        cur.className = "term-cursor-line";
        cur.innerHTML = '<span class="prompt">❯</span><span class="term-blink"></span>';
        termBody.appendChild(cur);
        schedule(() => {
          termBody.innerHTML = "";
          termIdx = 0;
          runTerminal();
        }, 4000);
      }
    }
    schedule(runTerminal, 800);

    return () => timeouts.forEach(clearTimeout);
  }, []);

  // Typewriter: cycles through role strings, typing then deleting each.
  useEffect(() => {
    const node = typewriterRef.current;
    if (!node) return;
    const tw: HTMLSpanElement = node;

    let ri = 0;
    let ci = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    function type() {
      const cur = roles[ri];
      if (!deleting) {
        ci++;
        tw.textContent = cur.slice(0, ci);
        if (ci === cur.length) {
          deleting = true;
          timeoutId = setTimeout(type, 2200);
          return;
        }
      } else {
        ci--;
        tw.textContent = cur.slice(0, ci);
        if (ci === 0) {
          deleting = false;
          ri = (ri + 1) % roles.length;
        }
      }
      timeoutId = setTimeout(type, deleting ? 40 : 75);
    }
    type();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="hero">
      <div className="hero-grid"></div>
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span>Open to opportunities</span>
          </div>
          <h1 className="hero-name">
            <span className="line1">Pranit</span>
            <span className="line2">Dhane</span>
          </h1>
          <div className="hero-role">
            <span ref={typewriterRef} id="typewriter"></span>
            <span className="cursor"></span>
          </div>
          <p className="hero-desc">
            Building production <strong>RAG pipelines</strong>,{" "}
            <strong>multi-agent systems</strong>, and the backend platforms
            that make LLMs reliable - measured, guarded, and ready to ship.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View my work ↓
            </a>
            <a
              href="https://github.com/PranitDhane"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              GitHub ↗
            </a>
          </div>
          <div className="hero-stats" style={{ flexWrap: "wrap", gap: 32 }}>
            <div>
              <div className="stat-num">19.5K</div>
              <div className="stat-label">Confluence pages indexed</div>
            </div>
            <div>
              <div className="stat-num">43</div>
              <div className="stat-label">Spaces covered by RAG</div>
            </div>
            <div>
              <div className="stat-num">15</div>
              <div className="stat-label">Steps in ARKEN HX pipeline</div>
            </div>
            <div>
              <div className="stat-num">2</div>
              <div className="stat-label">LLM providers (Claude, Gemini)</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="agent-terminal">
            <div className="agent-terminal-bar">
              <span className="term-dot term-dot-r"></span>
              <span className="term-dot term-dot-y"></span>
              <span className="term-dot term-dot-g"></span>
              <span className="term-title">ask.py</span>
              <span className="term-status"></span>
            </div>
            <div className="agent-terminal-body" id="term-body" ref={termBodyRef}></div>
          </div>
          <div className="hero-mini-cards">
            <div className="hero-mini-card">
              <div className="mini-card-icon">🔎</div>
              <div>
                <div className="mini-card-val">Hybrid RAG</div>
                <div className="mini-card-label">dense + sparse + RRF</div>
              </div>
            </div>
            <div className="hero-mini-card">
              <div className="mini-card-icon">🤖</div>
              <div>
                <div className="mini-card-val">Multi-Agent</div>
                <div className="mini-card-label">LangGraph &amp; Claude SDK</div>
              </div>
            </div>
            <div className="hero-mini-card">
              <div className="mini-card-icon">⚖️</div>
              <div>
                <div className="mini-card-val">LLM-as-Judge</div>
                <div className="mini-card-label">gated escalation</div>
              </div>
            </div>
            <div className="hero-mini-card">
              <div className="mini-card-icon">📡</div>
              <div>
                <div className="mini-card-val">Redis + SSE</div>
                <div className="mini-card-label">resilient streaming</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
