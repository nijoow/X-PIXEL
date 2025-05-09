import type { Metadata } from 'next';
import { suit, pretendard } from '../fonts/font';
import './globals.css';
import Header from '../components/Header';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${suit.variable} ${pretendard.variable} h-full antialiased`}
      >
        <div className="font-suit max-w-screen">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
