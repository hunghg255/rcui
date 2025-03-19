#!/usr/bin/env node

import { execSync } from 'node:child_process';

const args = process.argv.slice(2);

if (args.length < 2 || args[0] !== 'add') {
  console.log('Usage: npx rcui add [...packages]');
  process.exit(1);
}

const packageNames = args.slice(1);

for (const packageName of packageNames) {
  if (!packageName.trim()) {
    continue;
  }

  console.log(`Adding ${packageName} component...`);

  const url = new URL(
    `registry/${packageName}.json`,
    'https://www.rcui.vercel.app'
  );

  execSync(`npx shadcn@latest add ${url.toString()}`);
}
