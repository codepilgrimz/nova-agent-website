export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="logo-mark">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
              <path d="M12 12l9-5M12 12v10M12 12L3 7" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
            </svg>
          </span>
          <span>Nova Agent</span>
        </div>

        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#architecture">Architecture</a>
          <a href="#tools">Tools</a>
          <a href="#download">Download</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
        </div>

        <div className="footer-meta">
          <span>MIT licensed</span>
          <span className="dot">•</span>
          <span>© {new Date().getFullYear()} Nova Agent</span>
        </div>
      </div>
    </footer>
  )
}
