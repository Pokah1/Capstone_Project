// app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from './metadata';
import "@uploadthing/react/styles.css";
import ClientWrapper from '@/app/clientWrapper';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
