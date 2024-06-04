import { ApolloProvider } from '@autospace/network/src/config/apollo';
import '@autospace/ui/app/globals.css';
import { SessionProvider } from '@autospace/ui/components/molecules';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang="en">
      <SessionProvider>
        <ApolloProvider>
          <body className={inter.className}>{children}</body>
        </ApolloProvider>
      </SessionProvider>
    </html>
  );
}
