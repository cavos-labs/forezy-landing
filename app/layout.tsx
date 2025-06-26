import './globals.css';
import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-orbitron',
});

export const metadata: Metadata = {
  title: 'Forezy - Forecast the Future, Earn Rewards',
  description: 'The easiest way to forecast real-world events, earn rewards, and build your prediction reputation — all powered by decentralized technology.',
  keywords: 'predictions, forecasting, decentralized, blockchain, rewards, reputation, events',
  authors: [{ name: 'Forezy Team' }],
  openGraph: {
    title: 'Forezy - Forecast the Future, Earn Rewards',
    description: 'Join the waitlist for the most intuitive prediction platform powered by decentralized technology.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forezy - Forecast the Future, Earn Rewards',
    description: 'Join the waitlist for the most intuitive prediction platform powered by decentralized technology.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={orbitron.className}>{children}</body>
    </html>
  );
}