import './global.css';
import { Toaster } from 'sonner';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { RootProvider } from 'fumadocs-ui/provider';
import { ThemeProvider } from '../providers/theme';
import { cn } from 'app/lib/cn';
import { fonts } from 'app/lib/fonts';

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
        <VercelAnalytics />
      </ThemeProvider>
    </body>
  </html>
);

export default Layout;
