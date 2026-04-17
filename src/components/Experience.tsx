'use client';
import { useEffect, useRef } from 'react';
import { resumeData } from '@/lib/data';
import { Briefcase, CheckCircle2, MapPin } from 'lucide-react';

export default function Experience() {
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
      id="experience"
      className="py-24 px-6 md:px-12"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="reveal mb-16">
          <p className="text-sm font-mono mb-3" style={{ color: 'var(--accent)' }}>
            {'// 02. experience'}
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ color: 'var(--text)' }}
          >
            Where I&apos;ve Worked
          </h2>
          <div
            className="w-16 h-1 mt-4 rounded-full"
            style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2))' }}
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-8 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }}
          />

          <div className="space-y-12">
            {resumeData.experience.map((job, idx) => (
              <div key={idx} className="relative pl-16 md:pl-24">
                {/* Timeline dot */}
                <div
                  className="absolute left-4 md:left-6 top-6 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                  style={{
                    background: 'var(--bg)',
                    borderColor: 'var(--accent)',
                    boxShadow: '0 0 12px var(--accent-glow)',
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: 'var(--accent)' }}
                  />
                </div>

                {/* Card */}
                <div
                  className="reveal card-hover p-6 md:p-8 rounded-2xl border-glow"
                  style={{ background: 'var(--bg-card)' }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{
                            background: 'color-mix(in srgb, var(--accent) 15%, transparent)',
                          }}
                        >
                          <Briefcase size={18} style={{ color: 'var(--accent)' }} />
                        </div>
                        <div>
                          <h3
                            className="font-display font-bold text-xl"
                            style={{ color: 'var(--text)' }}
                          >
                            {job.role}
                          </h3>
                          <p
                            className="text-sm font-medium"
                            style={{ color: 'var(--accent)' }}
                          >
                            {job.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-2">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-mono"
                        style={{
                          background: 'color-mix(in srgb, var(--accent) 10%, transparent)',
                          color: 'var(--accent)',
                          border: '1px solid color-mix(in srgb, var(--accent) 30%, transparent)',
                        }}
                      >
                        {job.period}
                      </span>
                      <div
                        className="flex items-center gap-1 text-xs font-mono"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <MapPin size={12} />
                        {job.type}
                      </div>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <CheckCircle2
                          size={16}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: 'var(--accent)' }}
                        />
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          {bullet}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
