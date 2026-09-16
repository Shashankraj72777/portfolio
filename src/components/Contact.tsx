'use client';
import { useEffect, useRef, useState } from 'react';
import { resumeData } from '@/lib/data';
import { Mail, Phone, Github, Linkedin, Code2, Send, MapPin, Instagram, Youtube, Twitter, Link2, Facebook } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '9dca9e08-ad62-4eb5-84a8-cbe970095a38',
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New Contact Form Submission from ${form.name}`,
          from_name: 'Portfolio Contact Form',
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 4000);
  };

  const contacts = [
    { icon: <Mail size={20} />, label: 'Email', value: resumeData.email, href: `mailto:${resumeData.email}` },
    { icon: <Phone size={20} />, label: 'Phone', value: resumeData.phone, href: `tel:${resumeData.phone}` },
    { icon: <MapPin size={20} />, label: 'Location', value: resumeData.location, href: '#' },
  ];

  const socials = [
    { icon: <Linkedin size={18} />, label: 'LinkedIn', href: resumeData.linkedin },
    { icon: <Github size={18} />, label: 'GitHub', href: resumeData.github },
    { icon: <Code2 size={18} />, label: 'LeetCode', href: resumeData.leetcode },
    { icon: <Instagram size={18} />, label: 'Instagram', href: resumeData.instagram },
    { icon: <Youtube size={18} />, label: 'YouTube', href: resumeData.youtube },
    { icon: <Twitter size={18} />, label: 'X / Twitter', href: resumeData.twitter },
    { icon: <Facebook size={18} />, label: 'Facebook', href: resumeData.facebook },
    { icon: <Link2 size={18} />, label: 'Linktree', href: resumeData.linktree },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 px-6 md:px-12"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="text-sm font-mono mb-3" style={{ color: 'var(--accent)' }}>
            {'// 05. contact'}
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ color: 'var(--text)' }}
          >
            Let&apos;s Connect
          </h2>
          <div
            className="w-16 h-1 mt-4 rounded-full"
            style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2), var(--accent-3), var(--accent-4))' }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div className="space-y-8">
            <div className="reveal">
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                I&apos;m actively seeking SDE 1, Software Engineer, and Full Stack Developer
                opportunities. Whether you have an opening, a project idea, or just want to chat
                about tech — my inbox is always open.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              {contacts.map((c) => (
                <div key={c.label} className="reveal">
                  <a
                    href={c.href}
                    className="flex items-center gap-4 p-4 rounded-xl transition-all hover:scale-[1.02]"
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'color-mix(in srgb, var(--accent) 15%, transparent)',
                        color: 'var(--accent)',
                      }}
                    >
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                        {c.label}
                      </p>
                      <p className="text-sm font-medium" style={{ color: 'var(--text)' }}>
                        {c.value}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="reveal flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-muted)',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'var(--accent)';
                    el.style.color = 'var(--accent)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'var(--border)';
                    el.style.color = 'var(--text-muted)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="reveal">
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-2xl space-y-5"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              {/* Name */}
              <div>
                <label
                  className="block text-xs font-mono mb-2"
                  style={{ color: 'var(--text-muted)' }}
                >
                  NAME
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl text-sm font-body outline-none transition-all"
                  style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                    color: 'var(--text)',
                  }}
                  onFocus={(e) => {
                    (e.target as HTMLElement).style.borderColor = 'var(--accent)';
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLElement).style.borderColor = 'var(--border)';
                  }}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  className="block text-xs font-mono mb-2"
                  style={{ color: 'var(--text-muted)' }}
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl text-sm font-body outline-none transition-all"
                  style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                    color: 'var(--text)',
                  }}
                  onFocus={(e) => {
                    (e.target as HTMLElement).style.borderColor = 'var(--accent)';
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLElement).style.borderColor = 'var(--border)';
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  className="block text-xs font-mono mb-2"
                  style={{ color: 'var(--text-muted)' }}
                >
                  MESSAGE
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-xl text-sm font-body outline-none transition-all resize-none"
                  style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                    color: 'var(--text)',
                  }}
                  onFocus={(e) => {
                    (e.target as HTMLElement).style.borderColor = 'var(--accent)';
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLElement).style.borderColor = 'var(--border)';
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ background: 'var(--accent)', color: 'var(--accent-text)' }}
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
                    Sending...
                  </>
                ) : status === 'sent' ? (
                  <>✓ Message Sent!</>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              {status === 'sent' && (
                <p className="text-center text-sm font-mono animate-pulse" style={{ color: 'var(--accent)' }}>
                  ✓ Thanks! I&apos;ll get back to you soon.
                </p>
              )}

              {status === 'error' && (
                <p className="text-center text-sm font-mono text-red-500">
                  ⚠ Oops! Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
