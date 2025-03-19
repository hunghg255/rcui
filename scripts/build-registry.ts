import { promises as fs } from 'node:fs';
import { readdirSync } from 'node:fs';
import path, { join } from 'node:path';

const cwd = process.cwd();
const packagesPath = join(cwd, 'packages');
const packagesDir = readdirSync(packagesPath, { withFileTypes: true });
const internalPackages = ['tailwind-config', 'shadcn-ui', 'typescript-config'];

const packages = packagesDir
  .filter((dir) => dir.isDirectory() && !internalPackages.includes(dir.name))
  .map((dir) => dir.name);

const PUBLIC_FOLDER_BASE_PATH = 'apps/docs/public/registry';

const writeFileRecursive = async (filePath: string, data: string) => {
  const dir = path.dirname(filePath);

  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(filePath, data, 'utf-8');
};

const buildRegistry = async (pkg: string) => {
  const cwd = process.cwd();

  const packagePath = join(cwd, 'packages', pkg, 'package.json');
  console.log(packagePath);

  const packageJson = await import(packagePath);

  const dependencies = Object.keys(packageJson.dependencies).filter(
    (dep) => !['react', 'react-dom', '@repo/shadcn-ui'].includes(dep)
  );

  const devDependencies = Object.keys(packageJson.devDependencies).filter(
    (dep) =>
      ![
        '@types/react',
        '@types/react-dom',
        'typescript',
      ].includes(dep)
  );

  const packageDir = join(cwd, 'packages', pkg);
  const files = readdirSync(packageDir, { withFileTypes: true })
    .filter((file) => file.isFile() && (file.name.endsWith('.tsx') || file.name.endsWith('.css')))
    .map(async (file) => {
      const filePath = join(packageDir, file.name);
      const content = await fs.readFile(filePath, 'utf-8');
      return {
        type: 'registry:ui',
        path: file.name,
        content,
        target: `components/ui/rcui/${pkg}/${file.name}`,
      };
    });

  const allFiles = await Promise.all(files);
  const allContent = allFiles.map((f) => f.content).join('\n');

  const registryDependencies = (
    allContent.match(/@\/components\/ui\/([a-z-]+)/g) || []
  )
    .map((path) => path.split('/').pop())
    .filter((name): name is string => !!name);

  const json = JSON.stringify(
    {
      $schema: 'https://ui.shadcn.com/schema/registry.json',
      homepage: `https://www.rcui.vercel.app/${pkg}`,
      name: pkg,
      type: 'registry:ui',
      author: 'hunghg255 <giahung197bg@gmail.com>',
      registryDependencies,
      dependencies,
      devDependencies,
      files: allFiles,
    },
    null,
    2
  );
  const jsonPath = join(PUBLIC_FOLDER_BASE_PATH, `${pkg}.json`);
  await writeFileRecursive(jsonPath, json);
};

const main = async () => {
  for (const pkg of packages) {
    await buildRegistry(pkg);
  }
};

main()
  .then(() => {
    console.log('done');
  })
  .catch((err) => {
    console.error(err);
  });
