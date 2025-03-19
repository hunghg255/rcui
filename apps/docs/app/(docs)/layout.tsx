import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import Image from 'next/image';
import { source } from '../../lib/source';

type LayoutProps = {
  readonly children: any;
};

const Layout = ({ children }: LayoutProps) => (
  <DocsLayout
    tree={source.pageTree}
    tabMode="navbar"
    sidebar={{ collapsible: false }}
    nav={{
      title: (
        <Image
          src="/logo.svg"
          alt="RC UI"
          width={611}
          height={116}
          className="h-5 w-[105px] dark:invert"
        />
      ),
      mode: 'top',
    }}
  >
    {children}
  </DocsLayout>
);

export default Layout;
