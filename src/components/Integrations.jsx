const MORE_INTEGRATIONS = [
  {
    title: 'Google Workspace',
    body: 'One sign-in for Gmail, Calendar, Drive, Sheets, and Tasks. Nova can check your schedule, add events, search your docs, and more.',
    featured: true,
    icon: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" strokeWidth="1.8" />
        <path d="M4 10h16M9 3v4M15 3v4" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M10 14h4M12 12v4" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Any LLM provider',
    body: 'Plug in any OpenAI-compatible model — local Ollama, OpenAI, Anthropic, Groq, or your own endpoint.',
    icon: (
      <>
        <ellipse cx="12" cy="6" rx="7" ry="2.5" strokeWidth="1.8" />
        <path d="M5 6v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" strokeWidth="1.8" />
        <path d="M5 12v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" strokeWidth="1.8" />
      </>
    ),
  },
  {
    title: 'Brave Search',
    body: 'Live web search and current news through Brave’s privacy-respecting API — Nova can look things up on demand.',
    icon: (
      <>
        <circle cx="11" cy="11" r="6" strokeWidth="1.8" />
        <path d="M16 16l5 5" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Local document search',
    body: 'Point Nova at folders on your computer — it indexes them quietly in the background so you can ask questions across your files.',
    icon: (
      <>
        <path d="M4 6a2 2 0 012-2h4l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" strokeWidth="1.8" />
        <path d="M8 13h8M8 16h5" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Voice input',
    body: 'Talk to Nova hands-free. Speech recognition runs locally with faster-whisper — no cloud, no upload.',
    icon: (
      <>
        <rect x="9" y="3" width="6" height="12" rx="3" strokeWidth="1.8" />
        <path d="M6 11a6 6 0 0012 0M12 17v4M9 21h6" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'MCP servers',
    body: 'Extend Nova with Model Context Protocol servers — local stdio or remote HTTP endpoints. Plug in the ecosystem.',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="6" rx="1.5" strokeWidth="1.8" />
        <rect x="3" y="14" width="18" height="6" rx="1.5" strokeWidth="1.8" />
        <circle cx="7" cy="7" r="0.8" fill="currentColor" />
        <circle cx="7" cy="17" r="0.8" fill="currentColor" />
      </>
    ),
  },
  {
    title: 'Shipping carriers',
    body: 'Track deliveries and shipment updates from your carriers — Nova pings you when a package status changes.',
    icon: (
      <>
        <path d="M3 8h12v8H3z" strokeWidth="1.8" />
        <path d="M15 11h4l2 3v2h-6" strokeWidth="1.8" />
        <circle cx="7" cy="18" r="1.5" strokeWidth="1.8" />
        <circle cx="17" cy="18" r="1.5" strokeWidth="1.8" />
      </>
    ),
  },
  {
    title: 'Dynamic skills',
    body: 'A compact registry of on-demand skills that load only when Nova needs them — fast startup, rich capabilities.',
    icon: (
      <>
        <path d="M12 3l2.4 5.1L20 9l-4 3.6L17.2 19 12 16l-5.2 3L8 12.6 4 9l5.6-.9L12 3z" strokeWidth="1.8" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: 'Shell & files',
    body: 'Nova can read, write, and edit files on disk — and run local shell commands when it needs to act on your machine.',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.8" />
        <path d="M7 10l3 2-3 2M12 14h5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
]

export default function Integrations() {
  return (
    <section id="integrations" className="section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Integrations</div>
          <h2>Manages your email and Telegram — end to end.</h2>
          <p className="section-lead">
            Nova doesn&apos;t just read your messages. It replies, drafts, schedules, and follows up —
            across Gmail and Telegram, from a single conversation.
          </p>
        </div>

        <div className="integration-grid">
          <div className="integration-card">
            <div className="integration-head">
              <div className="integration-badge integration-badge-email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.8" />
                  <path d="M3 7l9 6 9-6" strokeWidth="1.8" />
                </svg>
              </div>
              <div>
                <h3>Email</h3>
                <p>Gmail OAuth2 · IMAP/SMTP for everything else</p>
              </div>
            </div>

            <ul className="integration-list">
              <li><span className="check">✓</span> Read inboxes and triage important mail</li>
              <li><span className="check">✓</span> Auto-draft replies, saved to Gmail Drafts</li>
              <li><span className="check">✓</span> Send, delete, and archive on your behalf</li>
              <li><span className="check">✓</span> Background polling with desktop alerts</li>
            </ul>

            <div className="inbox">
              <div className="inbox-row">
                <div className="inbox-from">Jake Morrison</div>
                <div className="inbox-subj">Re: Q2 roadmap — a couple of questions</div>
                <div className="inbox-meta"><span className="tag-drafted">Draft ready</span></div>
              </div>
              <div className="inbox-row">
                <div className="inbox-from">Stripe</div>
                <div className="inbox-subj">Your invoice for April is available</div>
                <div className="inbox-meta"><span className="tag-seen">Archived</span></div>
              </div>
              <div className="inbox-row">
                <div className="inbox-from">Mom</div>
                <div className="inbox-subj">Dinner on Sunday?</div>
                <div className="inbox-meta"><span className="tag-reminder">Reminder set</span></div>
              </div>
            </div>
          </div>

          <div className="integration-card">
            <div className="integration-head">
              <div className="integration-badge integration-badge-telegram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 11l17-7-3 17-5-6-4 4-1-5 11-8-12 7" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h3>Telegram</h3>
                <p>Bidirectional sync via your own bot</p>
              </div>
            </div>

            <ul className="integration-list">
              <li><span className="check">✓</span> Chat with Nova from your phone, away from your desk</li>
              <li><span className="check">✓</span> Desktop and Telegram stay in sync, both ways</li>
              <li><span className="check">✓</span> Forward messages for Nova to summarize or act on</li>
              <li><span className="check">✓</span> Private — your bot, your token, your data</li>
            </ul>

            <div className="tg-chat">
              <div className="tg-msg tg-msg-in">
                <div className="tg-meta">You · Telegram</div>
                Remind me to send the slides to Priya at 4pm and check my inbox for anything urgent.
              </div>
              <div className="tg-msg tg-msg-out">
                <div className="tg-meta">Nova</div>
                Reminder scheduled for 4:00pm. I saw 2 new emails — one from Jake looks time-sensitive. Draft saved for your review.
                <div className="tg-tick">✓✓</div>
              </div>
            </div>
          </div>
        </div>

        <div className="more-integrations">
          <div className="more-head">
            <h3>And plenty more</h3>
            <p>Nova connects to the tools you already use.</p>
          </div>

          <div className="mini-grid">
            {MORE_INTEGRATIONS.map((item) => (
              <article key={item.title} className={`mini-card${item.featured ? ' mini-card-featured' : ''}`}>
                <div className="mini-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    {item.icon}
                  </svg>
                </div>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
                {item.featured && <span className="mini-badge">New</span>}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
