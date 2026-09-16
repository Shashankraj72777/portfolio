'use client';
import { resumeData } from '@/lib/data';
import { Github, Linkedin, Code2, Heart, Instagram, Youtube, Twitter, Link2, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="py-8 px-6 md:px-12 border-t"
      style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left */}
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold"
            style={{ background: 'var(--accent)', color: 'var(--accent-text)' }}
          >
            SR
          </div>
          <span className="text-sm font-mono" style={{ color: 'var(--text-muted)' }}>
            Shashank Raj · {new Date().getFullYear()}
          </span>
        </div>

        {/* Center */}
        <p
          className="text-xs font-mono flex items-center gap-1"
          style={{ color: 'var(--text-muted)' }}
        >
          Built with Next.js + TypeScript{' '}
          <Heart size={12} style={{ color: 'var(--accent)' }} fill="currentColor" />
        </p>

        {/* Socials */}
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { href: resumeData.linkedin, icon: <Linkedin size={15} />, label: 'LinkedIn' },
            { href: resumeData.github, icon: <Github size={15} />, label: 'GitHub' },
            { href: resumeData.leetcode, icon: <Code2 size={15} />, label: 'LeetCode' },
            { href: resumeData.instagram, icon: <Instagram size={15} />, label: 'Instagram' },
            { href: resumeData.youtube, icon: <Youtube size={15} />, label: 'YouTube' },
            { href: resumeData.twitter, icon: <Twitter size={15} />, label: 'X / Twitter' },
            { href: resumeData.facebook, icon: <Facebook size={15} />, label: 'Facebook' },
            { href: resumeData.linktree, icon: <Link2 size={15} />, label: 'Linktree' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:scale-110"
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
    </footer>
  );
}
