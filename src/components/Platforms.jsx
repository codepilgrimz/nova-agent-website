const PLATFORMS = [
  {
    name: 'Windows',
    detail: 'NSIS & MSI installers',
    icon: (
      <path d="M3 5l8-1v8H3V5zm0 8h8v7l-8-1v-6zm9-9l9-1v10h-9V4zm0 9h9v10l-9-1v-9z" fill="currentColor" />
    ),
  },
  {
    name: 'macOS',
    detail: 'Universal .dmg',
    icon: (
      <path d="M15 3c0 2-1.5 3-3 3 0-2 1.5-3 3-3zm3 7c-2-1-4-1-5 0-2-1-5 0-6 3-1 4 2 8 3 8 1 0 2-1 3-1s2 1 3 1c1 0 3-3 3-5-2-1-3-4-1-6z" fill="currentColor" />
    ),
  },
  {
    name: 'Linux',
    detail: 'AppImage & .deb',
    icon: (
      <>
        <path d="M12 2c-3 0-4 3-4 6 0 3-2 5-3 7s-1 4 1 5 3-1 6-1 4 1 6 1 2-3 1-5-3-4-3-7c0-3-1-6-4-6z" fill="currentColor" />
        <circle cx="10" cy="8" r="1" fill="#0b0d12" />
        <circle cx="14" cy="8" r="1" fill="#0b0d12" />
      </>
    ),
  },
]

export default function Platforms() {
  return (
    <section id="download" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Download</div>
          <h2>Runs natively wherever you work.</h2>
          <p className="section-lead">
            One small install. No browser tab, no background cloud dependency — Nova lives on your machine.
          </p>
        </div>

        <div className="platform-grid">
          {PLATFORMS.map((p) => (
            <a key={p.name} href="#" className="platform-card">
              <div className="platform-icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24">
                  {p.icon}
                </svg>
              </div>
              <div className="platform-name">{p.name}</div>
              <div className="platform-detail">{p.detail}</div>
              <div className="platform-cta">Download →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
