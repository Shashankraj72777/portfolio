'use client';
import { useEffect, useRef } from 'react';
import { resumeData } from '@/lib/data';
import { ExternalLink, Github, Zap } from 'lucide-react';

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 px-6 md:px-12"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="reveal mb-4">
          <p className="text-sm font-mono mb-3" style={{ color: 'var(--accent)' }}>
            {'// 03. projects'}
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ color: 'var(--text)' }}
          >
            What I&apos;ve Built
          </h2>
          <div
            className="w-16 h-1 mt-4 rounded-full"
            style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2))' }}
          />
        </div>

        {/* Live badge strip */}
        <div className="reveal mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono"
            style={{
              background: 'color-mix(in srgb, #00ff87 8%, transparent)',
              border: '1px solid color-mix(in srgb, #00ff87 30%, transparent)',
              color: '#00ff87',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
            3 projects live in production · deployed on Vercel
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-10">
          {resumeData.projects.map((project, idx) => (
            <div
              key={idx}
              className="reveal card-hover rounded-3xl overflow-hidden border"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              {/* Top bar */}
              <div
                className="flex items-center justify-between px-6 py-4 border-b"
                style={{
                  background: `color-mix(in srgb, ${project.color} 6%, var(--bg-secondary))`,
                  borderColor: `color-mix(in srgb, ${project.color} 20%, var(--border))`,
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{
                      background: `color-mix(in srgb, ${project.color} 20%, transparent)`,
                      border: `1.5px solid color-mix(in srgb, ${project.color} 40%, transparent)`,
                      color: project.color,
                    }}
                  >
                    <Zap size={16} />
                  </div>
                  <span className="font-mono text-xs font-bold tracking-widest uppercase" style={{ color: project.color }}>
                    Project 0{idx + 1}
                  </span>
                  {project.liveLink !== project.githubLink && (
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-bold"
                      style={{
                        background: 'color-mix(in srgb, #00ff87 12%, transparent)',
                        border: '1px solid color-mix(in srgb, #00ff87 40%, transparent)',
                        color: '#00ff87',
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      LIVE
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all hover:scale-105"
                    style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                  >
                    <Github size={14} />
                    <span className="hidden sm:inline">Code</span>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all hover:scale-105"
                    style={{ background: project.color, color: '#000' }}
                  >
                    <ExternalLink size={14} />
                    <span className="hidden sm:inline">Live Demo</span>
                  </a>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <h3 className="font-display font-extrabold text-2xl md:text-3xl mb-3 leading-tight" style={{ color: 'var(--text)' }}>
                    {project.name}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {project.description}
                  </p>
                </div>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium"
                      style={{
                        background: `color-mix(in srgb, ${project.color} 10%, var(--bg-secondary))`,
                        border: `1px solid color-mix(in srgb, ${project.color} 25%, transparent)`,
                        color: project.color,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights grid */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.highlights.map((h, i) => {
                    const emoji = h.split(' ')[0];
                    const text = h.split(' ').slice(1).join(' ');
                    return (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 rounded-xl transition-all hover:scale-[1.01]"
                        style={{
                          background: 'var(--bg-secondary)',
                          border: `1px solid color-mix(in srgb, ${project.color} 12%, var(--border))`,
                        }}
                      >
                        <span className="text-base flex-shrink-0 mt-0.5">{emoji}</span>
                        <span className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                          {text}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Live link footer */}
                <div
                  className="mt-6 flex items-center justify-between pt-5 border-t"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                    🌐{' '}
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:underline"
                      style={{ color: project.color }}
                    >
                      {project.liveLink.replace('https://', '')}
                    </a>
                  </span>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono font-bold transition-all hover:gap-2.5"
                    style={{ color: project.color }}
                  >
                    Visit Project <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal mt-12 text-center">
          <a
            href="https://github.com/Shashankraj72777"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text)' }}
          >
            <Github size={18} />
            View All Projects on GitHub
            <ExternalLink size={14} style={{ color: 'var(--accent)' }} />
          </a>
        </div>
      </div>
    </section>
  );
}
