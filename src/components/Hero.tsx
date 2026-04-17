'use client';
import { useEffect, useState, useRef } from 'react';
import { resumeData } from '@/lib/data';
import { Github, Linkedin, Code2, Mail, MapPin, ArrowDown, Instagram, Youtube, Twitter, Link2 } from 'lucide-react';

const roles = [
  'Full Stack Engineer',
  'Node.js Architect',
  'TypeScript Developer',
  'Microservices Builder',
  'React Craftsman',
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!deleting) {
        if (charIdx < current.length) {
          setDisplayed(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        } else {
          setTimeout(() => setDeleting(true), 2000);
        }
      } else {
        if (charIdx > 0) {
          setDisplayed(current.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        } else {
          setDeleting(false);
          setRoleIdx((r) => (r + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, roleIdx]);

  // Canvas particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; color: string;
    }[] = [];

    const isDark = document.documentElement.classList.contains('dark');
    const colors = isDark ? ['#00ff87', '#00e5ff', '#a3e635'] : ['#00c96e', '#0070f3', '#16a34a'];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      });

      // Draw connections
      ctx.globalAlpha = 1;
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = isDark ? '#00ff8720' : '#00c96e20';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Glowing orbs */}
      <div
        className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20 orb-float blur-3xl"
        style={{ background: 'var(--accent)' }}
      />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'var(--accent-2)', animationDelay: '3s' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono border animate-fade-in"
              style={{
                background: 'color-mix(in srgb, var(--accent) 8%, transparent)',
                borderColor: 'color-mix(in srgb, var(--accent) 30%, transparent)',
                color: 'var(--accent)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
              Available for opportunities
            </div>

            {/* Name */}
            <div className="animate-slide-up stagger-1">
              <p
                className="text-sm font-mono mb-2"
                style={{ color: 'var(--text-muted)' }}
              >
                Hello, it&apos;s me 👋
              </p>
              <h1
                className="font-display text-5xl md:text-7xl font-extrabold leading-none tracking-tight"
                style={{ color: 'var(--text)' }}
              >
                Shashank
                <br />
                <span className="gradient-text text-glow">Raj</span>
              </h1>
            </div>

            {/* Typewriter role */}
            <div className="animate-slide-up stagger-2 h-8 flex items-center">
              <span
                className="text-xl md:text-2xl font-mono font-medium"
                style={{ color: 'var(--text-muted)' }}
              >
                {'> '}
              </span>
              <span
                className="text-xl md:text-2xl font-mono font-medium ml-2"
                style={{ color: 'var(--accent)' }}
              >
                {displayed}
                <span className="cursor-blink" />
              </span>
            </div>

            {/* Summary */}
            <p
              className="text-base md:text-lg leading-relaxed max-w-lg animate-slide-up stagger-3"
              style={{ color: 'var(--text-muted)' }}
            >
              Building scalable web applications with{' '}
              <strong style={{ color: 'var(--text)' }}>Node.js</strong>,{' '}
              <strong style={{ color: 'var(--text)' }}>TypeScript</strong>, and{' '}
              <strong style={{ color: 'var(--text)' }}>React</strong>. Passionate about
              distributed systems and clean architecture.
            </p>

            {/* Location */}
            <div
              className="flex items-center gap-2 text-sm font-mono animate-slide-up stagger-3"
              style={{ color: 'var(--text-muted)' }}
            >
              <MapPin size={14} style={{ color: 'var(--accent)' }} />
              {resumeData.location}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 animate-slide-up stagger-4">
              <a
                href="mailto:shashankraj72777@gmail.com"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{ background: 'var(--accent)', color: '#000' }}
              >
                <Mail size={16} />
                Get In Touch
              </a>
              <a
                href={resumeData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105"
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                }}
              >
                <Github size={16} />
                GitHub
              </a>
            </div>

            {/* Socials */}
            <div className="flex flex-wrap gap-2 animate-slide-up stagger-5">
              {[
                { href: resumeData.linkedin, icon: <Linkedin size={17} />, label: 'LinkedIn' },
                { href: resumeData.github, icon: <Github size={17} />, label: 'GitHub' },
                { href: resumeData.leetcode, icon: <Code2 size={17} />, label: 'LeetCode' },
                { href: resumeData.instagram, icon: <Instagram size={17} />, label: 'Instagram' },
                { href: resumeData.youtube, icon: <Youtube size={17} />, label: 'YouTube' },
                { href: resumeData.twitter, icon: <Twitter size={17} />, label: 'X / Twitter' },
                { href: resumeData.linktree, icon: <Link2 size={17} />, label: 'Linktree' },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={typeof href === 'string' ? href : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-muted)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)';
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Stats + Code block */}
          <div className="space-y-6 animate-slide-up stagger-3">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {resumeData.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-2xl border-glow text-center"
                  style={{
                    background: 'var(--bg-card)',
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  <div
                    className="text-3xl font-display font-extrabold gradient-text"
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono mt-1" style={{ color: 'var(--text-muted)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal code block */}
            <div
              className="rounded-2xl overflow-hidden border"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              {/* Terminal bar */}
              <div
                className="flex items-center gap-2 px-4 py-3 border-b"
                style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border)' }}
              >
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full" style={{ background: 'var(--accent)' }} />
                <span className="text-xs font-mono ml-2" style={{ color: 'var(--text-muted)' }}>
                  shashank.ts
                </span>
              </div>
              <div className="p-5 font-mono text-sm space-y-1">
                <p>
                  <span style={{ color: '#7c85a2' }}>{'// '}</span>
                  <span style={{ color: 'var(--text-muted)' }}>Engineer Profile</span>
                </p>
                <p>
                  <span style={{ color: '#c792ea' }}>const </span>
                  <span style={{ color: 'var(--accent-2)' }}>engineer</span>
                  <span style={{ color: 'var(--text)' }}> = {'{'}</span>
                </p>
                <p>
                  <span className="pl-4" style={{ color: 'var(--accent)' }}>stack</span>
                  <span style={{ color: 'var(--text)' }}>: [</span>
                  <span style={{ color: '#f78c6c' }}>&apos;Node&apos;</span>
                  <span style={{ color: 'var(--text)' }}>, </span>
                  <span style={{ color: '#f78c6c' }}>&apos;TS&apos;</span>
                  <span style={{ color: 'var(--text)' }}>, </span>
                  <span style={{ color: '#f78c6c' }}>&apos;React&apos;</span>
                  <span style={{ color: 'var(--text)' }}>],</span>
                </p>
                <p>
                  <span className="pl-4" style={{ color: 'var(--accent)' }}>exp</span>
                  <span style={{ color: 'var(--text)' }}>: </span>
                  <span style={{ color: '#f78c6c' }}>&apos;1+ years&apos;</span>
                  <span style={{ color: 'var(--text)' }}>,</span>
                </p>
                <p>
                  <span className="pl-4" style={{ color: 'var(--accent)' }}>passion</span>
                  <span style={{ color: 'var(--text)' }}>: </span>
                  <span style={{ color: '#f78c6c' }}>&apos;Distributed Systems&apos;</span>
                  <span style={{ color: 'var(--text)' }}>,</span>
                </p>
                <p>
                  <span className="pl-4" style={{ color: 'var(--accent)' }}>leetcode</span>
                  <span style={{ color: 'var(--text)' }}>: </span>
                  <span style={{ color: '#c3e88d' }}>180</span>
                  <span style={{ color: 'var(--text)' }}>,</span>
                </p>
                <p>
                  <span className="pl-4" style={{ color: 'var(--accent)' }}>status</span>
                  <span style={{ color: 'var(--text)' }}>: </span>
                  <span style={{ color: '#c3e88d' }}>true</span>
                  <span style={{ color: 'var(--text)' }}> </span>
                  <span style={{ color: '#7c85a2' }}>// available</span>
                </p>
                <p><span style={{ color: 'var(--text)' }}>{'}'}</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-2 text-xs font-mono transition-colors"
            style={{ color: 'var(--text-muted)' }}
          >
            <span>Scroll down</span>
            <ArrowDown size={16} style={{ color: 'var(--accent)' }} />
          </button>
        </div>
      </div>
    </section>
  );
}
