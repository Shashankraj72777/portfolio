'use client';
import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { Moon, Sun, Menu, X } from 'lucide-react';

const links = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section
      const sections = links.map((l) => l.toLowerCase());
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActive(id.charAt(0).toUpperCase() + id.slice(1));
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <header
      style={{
        background: scrolled ? 'color-mix(in srgb, var(--bg) 85%, transparent)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <div className="font-display font-bold text-xl tracking-tight flex items-center gap-2">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-mono font-bold"
            style={{ background: 'var(--accent)', color: '#000' }}
          >
            SR
          </span>
          <span style={{ color: 'var(--text)' }}>Shashank</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="underline-draw px-4 py-2 text-sm font-medium transition-colors duration-200"
              style={{
                color: active === link ? 'var(--accent)' : 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              {active === link && <span style={{ color: 'var(--accent)' }}>{'>'} </span>}
              {link}
            </button>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              color: 'var(--text)',
            }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a
            href="mailto:shashankraj72777@gmail.com"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
            style={{
              background: 'var(--accent)',
              color: '#000',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Hire Me
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', color: 'var(--text)' }}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden absolute top-16 left-0 right-0 p-4"
          style={{
            background: 'var(--bg)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="block w-full text-left px-4 py-3 text-sm font-mono transition-colors"
              style={{ color: active === link ? 'var(--accent)' : 'var(--text)' }}
            >
              {active === link ? '> ' : '  '}
              {link}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
