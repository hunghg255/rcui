'use client';

import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import kibo from '../public/logomark.svg';
import shadcn from '../public/shadcn.svg';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';


type InstallerProps = {
  packageName: string;
};

export const Installer = ({ packageName }: InstallerProps) => {
  const commands = {
    'rcui': {
      image: kibo,
      code: `npx rcui-cli@latest add ${packageName}`,
    },
    shadcn: {
      image: shadcn,
      code: `npx shadcn@latest add https://rcui.vercel.app/registry/${packageName}.json`,
    },
  };

  return <Tabs items={['rcui', 'shadcn']}>
    <Tab value="rcui">
      <DynamicCodeBlock
        lang="bash"
        code={commands.rcui.code}
      />
    </Tab>
    <Tab value="shadcn">
      <DynamicCodeBlock
        lang="bash"
        code={commands.shadcn.code}
      />
    </Tab>
  </Tabs>
};
