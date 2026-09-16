import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono, Syne } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Shashank Raj — Software Engineer | Full Stack Developer',
  description:
    'Software Engineer & Full Stack Developer actively seeking SDE 1 roles. Expertise in Node.js, TypeScript, React, Next.js, microservices, and distributed systems. 1+ years of experience shipping production-grade web applications.',
  keywords: ['SDE 1', 'Software Engineer', 'Full Stack Developer', 'Node.js', 'TypeScript', 'React', 'Next.js', 'Backend Developer', 'Frontend Developer'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-body antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
