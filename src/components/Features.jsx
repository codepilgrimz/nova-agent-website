const FEATURES = [
  {
    title: 'Email & Telegram Manager',
    body: 'One place to read, reply, draft, and triage your messages — across Gmail (OAuth2 or IMAP/SMTP) and Telegram. Inbox triage, not overwhelm.',
    highlight: true,
  },
  {
    title: 'A daily briefing without chaos',
    body: 'See one clear overview of the day — unread email that actually matters, reminders that are due, and anything Nova flagged while you were away.',
  },
  {
    title: 'Reminders that actually stick',
    body: 'Speak naturally — "ping me in 20 minutes", "every Monday at 9" — and Nova handles the scheduling, desktop notifications, and follow-through.',
  },
  {
    title: 'Shopping that keeps up with you',
    body: 'Nova notes what you reorder often, watches for price changes, and pings you before you run out — no more panicked runs to the shop.',
  },
  {
    title: 'Household routines that don’t collapse',
    body: 'Set up recurring chores, share them across the household, and let Nova handle the reminders — so nobody has to hold it all in their head.',
  },
  {
    title: 'No more surprise renewals',
    body: 'Nova spots subscription charges and renewal emails in your inbox and flags them early — before the money leaves your account.',
  },
  {
    title: 'On the go, in sync',
    body: 'The Telegram bridge keeps your desktop and phone aligned both ways. Forward a message, fire off a task, or ask a question from anywhere.',
  },
  {
    title: 'Local or cloud LLM',
    body: 'Conversational AI powered by any OpenAI-compatible endpoint. Run Ollama privately on your machine, or point Nova at the cloud.',
  },
  {
    title: 'Multi-step tasks, hands-off',
    body: 'Research, summarize, draft, notify. Nova chains tool calls across email, web, and shell, then reports back when the work is done.',
  },
  {
    title: 'Setup wizard for everyone',
    body: 'Guided first-launch setup so non-technical users can connect email, Telegram, and an LLM in under two minutes.',
  },
  {
    title: 'An assistant that sounds like yours',
    body: 'Shape Nova’s name, language, style, and rules in plain Markdown — make the assistant truly your own.',
  },
]

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Features &amp; scenarios</div>
          <h2>Everything your workday needs,<br />one conversation away.</h2>
          <p className="section-lead">
            Nova brings your inbox, chats, and to-dos into a single AI-powered surface —
            and quietly takes the busywork off your plate.
          </p>
        </div>

        <div className="feature-grid">
          {FEATURES.map((f, i) => (
            <article key={f.title} className={`feature-card${f.highlight ? ' feature-card-highlight' : ''}`}>
              <div className="feature-num">{String(i + 1).padStart(2, '0')}</div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
