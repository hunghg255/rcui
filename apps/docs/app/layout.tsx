import './global.css';
import { Toaster } from 'sonner';
import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';
import { ThemeProvider } from '../providers/theme';
import { fonts } from './lib/fonts';
import { cn } from './lib/cn';

type LayoutProps = {
  readonly children: any;
};

const Layout = ({ children }: LayoutProps) => (
  <html lang="en" suppressHydrationWarning>
    <body className={cn('flex min-h-screen flex-col', fonts)}>
      <ThemeProvider>
        <RootProvider>
            {children}
          <Toaster />
        </RootProvider>
      </ThemeProvider>
    </body>
  </html>
);

export default Layout;
