'use client';
import { useEffect, useRef } from 'react';
import { resumeData } from '@/lib/data';

const categoryColors: Record<string, string> = {
  Languages: '#00ff87',
  Frontend: '#00e5ff',
  Backend: '#a3e635',
  Databases: '#f59e0b',
  'DevOps & Tools': '#c084fc',
  'Cloud & Infra': '#fb7185',
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
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
      id="skills"
      className="py-24 px-6 md:px-12"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="text-sm font-mono mb-3" style={{ color: 'var(--accent)' }}>
            {'// 04. skills'}
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ color: 'var(--text)' }}
          >
            Tech Arsenal
          </h2>
          <div
            className="w-16 h-1 mt-4 rounded-full"
            style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2))' }}
          />
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(resumeData.skills).map(([category, techs]) => {
            const color = categoryColors[category] || '#00ff87';
            return (
              <div
                key={category}
                className="reveal card-hover p-6 rounded-2xl"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-3 h-8 rounded-full"
                    style={{ background: color }}
                  />
                  <h3
                    className="font-display font-bold text-lg"
                    style={{ color: 'var(--text)' }}
                  >
                    {category}
                  </h3>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all hover:scale-105 cursor-default"
                      style={{
                        background: `color-mix(in srgb, ${color} 10%, var(--bg-secondary))`,
                        border: `1px solid color-mix(in srgb, ${color} 25%, transparent)`,
                        color: color,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom strip: featured stack with icons */}
        <div className="reveal mt-12">
          <div
            className="p-6 md:p-8 rounded-2xl border"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
          >
            <p
              className="text-xs font-mono mb-4 text-center"
              style={{ color: 'var(--text-muted)' }}
            >
              PRIMARY STACK
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: 'Node.js', emoji: '🟢' },
                { name: 'TypeScript', emoji: '🔷' },
                { name: 'React', emoji: '⚛️' },
                { name: 'Next.js', emoji: '▲' },
                { name: 'PostgreSQL', emoji: '🐘' },
                { name: 'Docker', emoji: '🐳' },
                { name: 'Redis', emoji: '🔴' },
                { name: 'RabbitMQ', emoji: '🐰' },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-mono font-medium"
                  style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                    color: 'var(--text)',
                  }}
                >
                  <span>{tech.emoji}</span>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
