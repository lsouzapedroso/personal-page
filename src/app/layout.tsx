import './globals.css';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'] });

const neutralFace = localFont({
  src: [
    {
      path: './fonts/NeutralFace.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/NeutralFace-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-neutral-face',
});

export const metadata = {
    title: 'My Personal Page - V2',
    description: 'The new and improved personal page',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} ${neutralFace.variable} antialiased`}>
            {children}
        </body>
        </html>
    );
}