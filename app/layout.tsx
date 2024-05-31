import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './globals.css';

import Footer from '@organisms/Footer/Footer';
import Header from '@organisms/Header/Header';

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Rachela Markwica - Front-end Developer',
  description:
    'Creative Front-End Developer with a passion for building beautiful and functional UIs. I thrive in collaborative environments and have experience leading small teams',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={workSans.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
