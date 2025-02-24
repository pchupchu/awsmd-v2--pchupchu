import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import localFont from 'next/font/local';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
});

const freigeistRegular = localFont({
  src: './fonts/Fontspring-DEMO-freigeist-conregular.woff',
  variable: '--font-freigeist-regular',
  weight: '400',
});

const freigeistBold = localFont({
  src: './fonts/Fontspring-DEMO-freigeist-conbold.woff',
  variable: '--font-freigeist-bold',
  weight: '700',
});

const freigeistBoldItalic = localFont({
  src: './fonts/Fontspring-DEMO-freigeist-bolditalic.woff',
  variable: '--font-freigeist-bold-italic',
  weight: '700',
});

export const metadata: Metadata = {
  title: 'AWSMD',
  description: 'Design Studio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${jakarta.variable} ${freigeistRegular.variable} ${freigeistBold.variable} ${freigeistBoldItalic.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
