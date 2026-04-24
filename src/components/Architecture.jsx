export default function Architecture() {
  return (
    <section id="architecture" className="section section-alt">
      <div className="container arch-grid">
        <div className="arch-copy">
          <div className="eyebrow">Architecture</div>
          <h2>Native speed, streaming responses, zero bloat.</h2>
          <p>
            Nova Agent pairs a <strong>Tauri v2 (Rust)</strong> shell with a <strong>React</strong> frontend and a <strong>Node.js sidecar</strong> for LLM inference, email, Telegram, and task scheduling.
          </p>
          <p>
            The Rust layer spawns the sidecar and communicates via stdio JSON-RPC.
            Streaming LLM responses flow back as Tauri events to the UI in real time.
          </p>

          <ul className="arch-list">
            <li><span className="tag tag-rust">Rust</span> Lightweight native shell &amp; notifications</li>
            <li><span className="tag tag-react">React</span> Sidebar nav, chat, tasks, settings</li>
            <li><span className="tag tag-node">Node</span> LLM, email, Telegram, scheduler</li>
          </ul>
        </div>

        <div className="arch-diagram" aria-hidden="true">
          <div className="layer layer-ui">
            <div className="layer-title">React Frontend</div>
            <div className="layer-sub">Sidebar · Chat · Tasks · Settings</div>
          </div>
          <div className="flow">
            <span>Tauri events</span>
            <svg width="100%" height="18" viewBox="0 0 200 18">
              <line x1="0" y1="9" x2="200" y2="9" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1.2" />
            </svg>
          </div>
          <div className="layer layer-shell">
            <div className="layer-title">Tauri Shell · Rust</div>
            <div className="layer-sub">Native window · Notifications · Sidecar mgmt</div>
          </div>
          <div className="flow">
            <span>stdio JSON-RPC</span>
            <svg width="100%" height="18" viewBox="0 0 200 18">
              <line x1="0" y1="9" x2="200" y2="9" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1.2" />
            </svg>
          </div>
          <div className="layer layer-side">
            <div className="layer-title">Node Sidecar</div>
            <div className="layer-sub">LLM · Email · Telegram · Tasks</div>
          </div>
        </div>
      </div>
    </section>
  )
}
