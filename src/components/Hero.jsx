function NavItem({ label, icon, active }) {
  return (
    <div className={`app-nav-item${active ? ' app-nav-item-active' : ''}`}>
      <svg className="app-nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        {icon}
      </svg>
      <span className="app-nav-label">{label}</span>
    </div>
  )
}

function ChatMsg({ author, from, children }) {
  return (
    <div className={`app-msg app-msg-${from}`}>
      <div className="app-msg-author">{author}</div>
      <div className="app-msg-body">{children}</div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="grid-mask" />
      </div>

      <div className="container hero-inner">
        <div className="pill">
          <span className="pill-dot" /> Version 0.1.0 — now in preview
        </div>

        <h1 className="hero-title">
          Your personal AI workspace,<br />
          <span className="gradient-text">living on your desktop.</span>
        </h1>

        <p className="hero-sub">
          Nova Agent reads and replies to your <strong>Gmail</strong>, chats with you over <strong>Telegram</strong>,
          schedules reminders, and runs multi-step tasks — all from one conversation.
        </p>

        <div className="hero-cta">
          <a href="#download" className="btn btn-primary">Download for Windows</a>
          <a href="#features" className="btn btn-secondary">Explore features</a>
        </div>

        <div className="hero-meta">
          <span>Works on Windows, macOS, Linux</span>
          <span className="dot">•</span>
          <span>Local or cloud LLMs</span>
          <span className="dot">•</span>
          <span>Open source · MIT</span>
        </div>

        <div className="hero-preview">
          <div className="window">
            <div className="window-bar">
              <span className="dot-red" />
              <span className="dot-yellow" />
              <span className="dot-green" />
              <span className="window-title">Nova Agent</span>
            </div>
            <div className="window-body">
              <aside className="app-sidebar">
                <div className="app-logo" aria-hidden="true">
                  <span className="app-logo-mark">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>

                <NavItem label="Home" icon={
                  <path d="M4 11l8-7 8 7v9a1 1 0 01-1 1h-5v-6h-4v6H5a1 1 0 01-1-1v-9z" strokeWidth="1.6" strokeLinejoin="round" />
                } />
                <NavItem label="Chat" active icon={
                  <path d="M5 5h14v10H9l-4 4V5z" strokeWidth="1.6" strokeLinejoin="round" />
                } />
                <NavItem label="Routines" icon={
                  <>
                    <path d="M4 12a8 8 0 0114-5l2-2v6h-6l2-2a6 6 0 10-2 9" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
                  </>
                } />
                <NavItem label="Tasks" icon={
                  <>
                    <circle cx="12" cy="12" r="8" strokeWidth="1.6" />
                    <path d="M12 8v4l3 2" strokeWidth="1.6" strokeLinecap="round" />
                  </>
                } />
                <NavItem label="Bookings" icon={
                  <>
                    <rect x="4" y="5" width="16" height="15" rx="2" strokeWidth="1.6" />
                    <path d="M4 10h16M9 3v4M15 3v4" strokeWidth="1.6" strokeLinecap="round" />
                  </>
                } />
                <NavItem label="Settings" icon={
                  <>
                    <circle cx="12" cy="12" r="3" strokeWidth="1.6" />
                    <path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" strokeWidth="1.6" strokeLinecap="round" />
                  </>
                } />
              </aside>

              <div className="app-chat">
                <div className="app-chat-scroll">
                  <ChatMsg author="You" from="you">
                    Check my inbox and remind me to call my boss at 11pm.
                  </ChatMsg>

                  <ChatMsg author="Nova" from="nova">
                    <strong>Reminder set</strong> for 11:00 PM tonight. I&apos;ll notify you 10 minutes before, and again at the time.
                    <div className="tool-pills">
                      <span className="tool-pill">manage_tasks</span>
                    </div>
                  </ChatMsg>

                  <ChatMsg author="Nova" from="nova">
                    <div className="inbox-header">Here&apos;s what&apos;s new in your inbox:</div>
                    <div className="inbox-preview">
                      <div className="inbox-preview-row">
                        <div className="ipr-from">Jake Morrison</div>
                        <div className="ipr-subj">Re: Q2 roadmap — a couple of questions</div>
                        <span className="ipr-pill ipr-pill-draft">Draft saved</span>
                      </div>
                      <div className="inbox-preview-row">
                        <div className="ipr-from">Priya Shah</div>
                        <div className="ipr-subj">Slides for Thursday — final version?</div>
                        <span className="ipr-pill ipr-pill-flag">Needs reply</span>
                      </div>
                      <div className="inbox-preview-row">
                        <div className="ipr-from">Stripe</div>
                        <div className="ipr-subj">Your invoice for April is available</div>
                        <span className="ipr-pill ipr-pill-quiet">Archived</span>
                      </div>
                    </div>
                    <div className="tool-pills">
                      <span className="tool-pill">manage_email</span>
                      <span className="tool-pill">notify_user</span>
                    </div>
                  </ChatMsg>
                </div>

                <div className="app-input">
                  <input className="app-input-field" readOnly placeholder="Enter message for Nova" />
                  <button className="app-input-send" aria-label="Send">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M4 12l16-8-6 16-3-7-7-1z" fill="currentColor" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
