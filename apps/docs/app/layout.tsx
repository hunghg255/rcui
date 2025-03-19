import './global.css';
import { ThemeProvider } from '@/providers/theme';
import { Toaster } from 'sonner';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';
import { fonts } from './lib/fonts';
import { cn } from '@/app/lib/cn';

type LayoutProps = {
  readonly children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <html lang="en" suppressHydrationWarning>
    <body className={cn('flex min-h-screen flex-col', fonts)}>
      <ThemeProvider>
        <RootProvider>
           {children}
          <Toaster />
        </RootProvider>
        <VercelAnalytics />
      </ThemeProvider>
    </body>
  </html>
);

export default Layout;
