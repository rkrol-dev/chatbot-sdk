import '@openassistantgpt/ui/dist/index.css';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Asystent w zamówieniach publicznych - zespół ProcureGenius',
  description: 'Badanie zastosowania agentów AI we wsparciu podejmowania decyzji w środowiskach wysoce sformalizowanych.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
