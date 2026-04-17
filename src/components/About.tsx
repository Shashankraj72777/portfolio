'use client';
import { useEffect, useRef } from 'react';
import { resumeData } from '@/lib/data';
import { GraduationCap, Code2, Cpu, Trophy } from 'lucide-react';

export default function About() {
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

  const cards = [
    {
      icon: <Cpu size={24} />,
      title: 'Backend Architect',
      desc: 'Designing scalable microservices with Node.js, handling 1,000+ RPM with Redis caching and RabbitMQ event queues.',
      color: '#00ff87',
    },
    {
      icon: <Code2 size={24} />,
      title: 'Frontend Craftsman',
      desc: 'Building responsive UIs with React & Next.js. Reduced bundle size by 15%, delivering smooth user experiences.',
      color: '#00e5ff',
    },
    {
      icon: <Trophy size={24} />,
      title: 'Problem Solver',
      desc: '180+ LeetCode problems solved. Strong foundation in DSA — Arrays, Trees, Graphs, and Dynamic Programming.',
      color: '#a3e635',
    },
    {
      icon: <GraduationCap size={24} />,
      title: 'CS Graduate',
      desc: 'B.Tech in CS & Engineering (AI & ML) from Chandigarh University with 7.91 CGPA, class of 2025.',
      color: '#f59e0b',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 px-6 md:px-12"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="reveal mb-16">
          <p className="text-sm font-mono mb-3" style={{ color: 'var(--accent)' }}>
            {'// 01. about'}
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ color: 'var(--text)' }}
          >
            Who I Am
          </h2>
          <div
            className="w-16 h-1 mt-4 rounded-full"
            style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2))' }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Bio + education */}
          <div className="space-y-8">
            <div className="reveal space-y-4">
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: 'var(--text-muted)' }}
              >
                I&apos;m a{' '}
                <strong style={{ color: 'var(--text)' }}>Full Stack Software Engineer</strong> with
                over a year of hands-on experience shipping production-grade systems. My work spans
                backend microservices, performant React frontends, and everything in between.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                I thrive in Agile environments, collaborating with cross-functional teams to deliver
                features fast without sacrificing quality. My engineering philosophy: write code
                that&apos;s easy to understand, extend, and delete.
              </p>
            </div>

            {/* Education card */}
            <div
              className="reveal p-6 rounded-2xl border-glow"
              style={{ background: 'var(--bg-card)' }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'color-mix(in srgb, var(--accent) 15%, transparent)' }}
                >
                  <GraduationCap size={22} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <p
                    className="text-xs font-mono mb-1"
                    style={{ color: 'var(--accent)' }}
                  >
                    {resumeData.education.period}
                  </p>
                  <h3
                    className="font-display font-bold text-lg leading-tight"
                    style={{ color: 'var(--text)' }}
                  >
                    {resumeData.education.degree}
                  </h3>
                  <p
                    className="text-sm mt-1"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {resumeData.education.institution}
                  </p>
                  <div
                    className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono"
                    style={{
                      background: 'color-mix(in srgb, var(--accent) 12%, transparent)',
                      color: 'var(--accent)',
                    }}
                  >
                    CGPA: {resumeData.education.cgpa}
                  </div>
                </div>
              </div>
            </div>

            {/* LeetCode card */}
            <div
              className="reveal p-6 rounded-2xl border-glow"
              style={{ background: 'var(--bg-card)' }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Code2 size={20} style={{ color: '#f59e0b' }} />
                  <span className="font-display font-bold" style={{ color: 'var(--text)' }}>
                    LeetCode
                  </span>
                </div>
                <span
                  className="text-2xl font-display font-extrabold"
                  style={{ color: '#f59e0b' }}
                >
                  180+
                </span>
              </div>
              <div
                className="h-2 rounded-full overflow-hidden"
                style={{ background: 'var(--bg-secondary)' }}
              >
                <div
                  className="h-full rounded-full skill-bar"
                  style={{
                    background: 'linear-gradient(90deg, #f59e0b, #ef4444)',
                    width: '72%',
                  }}
                />
              </div>
              <p className="text-xs font-mono mt-3" style={{ color: 'var(--text-muted)' }}>
                {resumeData.leetcodeStats.focus}
              </p>
            </div>
          </div>

          {/* Right: Trait cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, i) => (
              <div
                key={card.title}
                className="reveal card-hover p-6 rounded-2xl"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: `color-mix(in srgb, ${card.color} 15%, transparent)`,
                    color: card.color,
                  }}
                >
                  {card.icon}
                </div>
                <h3
                  className="font-display font-bold text-base mb-2"
                  style={{ color: 'var(--text)' }}
                >
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
