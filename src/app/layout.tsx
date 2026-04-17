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
  title: 'Shashank Raj — Full Stack Engineer',
  description:
    'Full Stack Software Engineer with expertise in Node.js, TypeScript, React, Next.js, microservices, and distributed systems.',
  keywords: ['Full Stack', 'Software Engineer', 'Node.js', 'TypeScript', 'React', 'Next.js'],
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
