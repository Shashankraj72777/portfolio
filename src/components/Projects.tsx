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
      { threshold: 0.1 }
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
        <div className="reveal mb-16">
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

        {/* Projects grid */}
        <div className="space-y-8">
          {resumeData.projects.map((project, idx) => (
            <div
              key={idx}
              className="reveal card-hover rounded-3xl overflow-hidden border"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              <div className="grid md:grid-cols-5">
                {/* Colored accent strip */}
                <div
                  className="md:col-span-1 p-8 flex items-center justify-center"
                  style={{
                    background: `color-mix(in srgb, ${project.color} 10%, transparent)`,
                    borderRight: `1px solid color-mix(in srgb, ${project.color} 20%, transparent)`,
                  }}
                >
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-3"
                      style={{
                        background: `color-mix(in srgb, ${project.color} 20%, transparent)`,
                        border: `2px solid color-mix(in srgb, ${project.color} 40%, transparent)`,
                      }}
                    >
                      <Zap size={28} style={{ color: project.color }} />
                    </div>
                    <span
                      className="text-xs font-mono"
                      style={{ color: project.color }}
                    >
                      0{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-4 p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3
                        className="font-display font-bold text-2xl mb-2"
                        style={{ color: 'var(--text)' }}
                      >
                        {project.name}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        {project.description}
                      </p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                        style={{
                          background: 'var(--bg-secondary)',
                          border: '1px solid var(--border)',
                          color: 'var(--text-muted)',
                        }}
                        title="GitHub"
                      >
                        <Github size={16} />
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                        style={{
                          background: `color-mix(in srgb, ${project.color} 15%, transparent)`,
                          border: `1px solid color-mix(in srgb, ${project.color} 30%, transparent)`,
                          color: project.color,
                        }}
                        title="Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.stack.map((tech) => (
                      <span key={tech} className="tag-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="grid sm:grid-cols-2 gap-2">
                    {project.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-sm p-3 rounded-xl"
                        style={{ background: 'var(--bg-secondary)' }}
                      >
                        <span style={{ color: project.color }} className="flex-shrink-0 font-bold">
                          ✦
                        </span>
                        <span style={{ color: 'var(--text-muted)' }}>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal mt-12 text-center">
          <a
            href={resumeData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              color: 'var(--text)',
            }}
          >
            <Github size={18} />
            View All on GitHub
            <ExternalLink size={14} style={{ color: 'var(--accent)' }} />
          </a>
        </div>
      </div>
    </section>
  );
}
