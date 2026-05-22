import { useState } from 'react';

const REASONS = [
  { value: 'work', label: 'WORK / OPPORTUNITY' },
  { value: 'collab', label: 'COLLAB / OSS' },
  { value: 'chat', label: 'JUST CHAT' },
  { value: 'other', label: 'OTHER' },
];

const SOCIALS = [
  { id: 'github', label: 'GITHUB',   handle: 'nbely',                    href: 'https://github.com/nbely',           kind: 'emerald', action: 'open' },
  { id: 'linked', label: 'LINKEDIN', handle: 'nbely',                    href: 'https://www.linkedin.com/in/nbely/', kind: 'gold',    action: 'open' },
  { id: 'email',  label: 'EMAIL',    handle: 'nicholas.bely@gmail.com',  href: 'mailto:nicholas.bely@gmail.com',     kind: 'default', action: 'mail' },
  { id: 'disc',   label: 'DISCORD',  handle: '_chronicler_',             href: '#',                                  kind: 'default', action: 'copy', copy: '_chronicler_' },
];

function fallbackCopy(text) {
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch (e) { return false; }
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try { await navigator.clipboard.writeText(text); return true; } catch (e) {}
  }
  return fallbackCopy(text);
}

export default function LinkUp() {
  const [form, setForm] = useState({ name: '', email: '', reason: 'work', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(null);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Trainer name required';
    if (!form.email.trim()) e.email = 'Email required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email looks off';
    if (!form.subject.trim()) e.subject = 'Subject required';
    if (!form.message.trim() || form.message.trim().length < 8) e.message = 'A bit more, maybe?';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const buildMailto = (subject, body) => {
    const enc = (s) => encodeURIComponent(s);
    return `mailto:nicholas.bely@gmail.com?subject=${enc(subject)}&body=${enc(body)}`;
  };

  const openMail = (href) => {
    const win = window.open(href, '_blank');
    if (!win || win.closed) {
      try { (window.top || window).location.href = href; } catch (e) {
        window.location.href = href;
      }
    }
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    const reasonLabel = REASONS.find(r => r.value === form.reason)?.label || form.reason;
    const subject = `[${reasonLabel}] ${form.subject}`;
    const body = `Hi Nick,\n\n${form.message}\n\n—\nFrom: ${form.name}\nReply-to: ${form.email}`;
    openMail(buildMailto(subject, body));
    setSent(true);
  };

  const handleSocialClick = async (e, s) => {
    if (s.action === 'copy') {
      e.preventDefault();
      const ok = await copyText(s.copy);
      if (ok) {
        setCopied(s.id);
        setTimeout(() => setCopied(c => c === s.id ? null : c), 1500);
      }
      return;
    }
    if (s.action === 'mail') {
      e.preventDefault();
      openMail(s.href);
      return;
    }
  };

  return (
    <div className="lu-root">
      <div className="lu-header">
        <h2 className="h-pixel" style={{ fontSize: 16, letterSpacing: 2 }}>LINK UP</h2>
        <div className="lu-sub mono">trade info · open a channel</div>
      </div>

      <div className="lu-socials">
        {SOCIALS.map(s => {
          const tooltip =
            s.action === 'copy' ? `Tap to copy ${s.handle}` :
            s.action === 'mail' ? `Open mail to ${s.handle}` :
            `${s.label}: ${s.handle} (opens in new tab)`;
          return (
            <a
              key={s.id}
              className="lu-social"
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleSocialClick(e, s)}
              title={tooltip}
              aria-label={tooltip}>
              <span className={`lu-social-mark ${s.kind}`} aria-hidden="true">{s.label[0]}</span>
              <span className="lu-social-body">
                <span className="lu-social-label">{s.label}</span>
                <span className="lu-social-handle">{copied === s.id ? '✓ COPIED' : s.handle}</span>
              </span>
            </a>
          );
        })}
      </div>

      <form className="lu-form" onSubmit={onSubmit} noValidate>
        <div className="lu-form-head">
          <div className="lu-section-label">SEND A MESSAGE</div>
          <div className="lu-form-hint mono">opens in your mail client</div>
        </div>

        <div className="lu-grid">
          <label className="lu-field">
            <span className="lu-label">NAME</span>
            <input type="text" value={form.name} onChange={e => set('name', e.target.value)} placeholder="What should I call you?" aria-invalid={!!errors.name} />
            {errors.name && <span className="lu-error">{errors.name}</span>}
          </label>

          <label className="lu-field">
            <span className="lu-label">EMAIL</span>
            <input type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="you@somewhere.dev" aria-invalid={!!errors.email} />
            {errors.email && <span className="lu-error">{errors.email}</span>}
          </label>

          <div className="lu-field lu-field-reason">
            <span className="lu-label">REASON</span>
            <div className="lu-radio-row">
              {REASONS.map(r => (
                <button type="button" key={r.value} className={`lu-radio ${form.reason === r.value ? 'on' : ''}`} onClick={() => set('reason', r.value)}>
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          <label className="lu-field lu-field-full">
            <span className="lu-label">SUBJECT</span>
            <input type="text" value={form.subject} onChange={e => set('subject', e.target.value)} placeholder="Quick line about what's up" aria-invalid={!!errors.subject} />
            {errors.subject && <span className="lu-error">{errors.subject}</span>}
          </label>

          <label className="lu-field lu-field-full">
            <span className="lu-label">MESSAGE</span>
            <textarea value={form.message} rows={5} onChange={e => set('message', e.target.value)} placeholder="What's on your mind?" aria-invalid={!!errors.message} />
            {errors.message && <span className="lu-error">{errors.message}</span>}
          </label>
        </div>

        <div className="lu-actions">
          <button type="submit" className="lu-submit">
            ▶ {sent ? 'OPEN MAIL CLIENT AGAIN' : 'SEND MESSAGE'}
          </button>
          {sent && <span className="lu-sent-note mono">your mail client should be open now</span>}
        </div>
      </form>
    </div>
  );
}
