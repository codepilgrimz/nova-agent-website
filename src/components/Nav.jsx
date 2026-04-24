export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="logo">
          <span className="logo-mark" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
              <path d="M12 12l9-5M12 12v10M12 12L3 7" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
            </svg>
          </span>
          <span>Nova Agent</span>
        </a>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#integrations">Integrations</a>
          <a href="#architecture">Architecture</a>
          <a href="#download">Download</a>
        </nav>
        <a className="btn btn-ghost" href="https://github.com/" target="_blank" rel="noreferrer">
          GitHub →
        </a>
      </div>
    </header>
  )
}
