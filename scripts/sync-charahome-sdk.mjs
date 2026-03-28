import { access, cp, mkdir, readFile, rm, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const siblingSdkRoot = path.resolve(repoRoot, '..', 'CHARAHOME-JS-SDKs');
const vendorRoot = path.resolve(repoRoot, 'vendor', 'charahome-js-sdks');
const packageNames = ['api', 'auth', 'onboarding-minimal'];

async function exists(targetPath) {
  try {
    await access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function copyIfExists(sourcePath, destinationPath) {
  if (!(await exists(sourcePath))) {
    return false;
  }
  await cp(sourcePath, destinationPath, { recursive: true });
  return true;
}

async function buildWorkspacePackageMap() {
  const entries = await Promise.all(packageNames.map(async (packageName) => {
    const packageJsonPath = path.join(siblingSdkRoot, 'packages', packageName, 'package.json');
    const packageJson = JSON.parse(await readFile(packageJsonPath, 'utf8'));
    return [packageJson.name, packageName];
  }));
  return new Map(entries);
}

function rewriteWorkspaceDependencies(packageJson, workspacePackageMap) {
  const sections = ['dependencies', 'devDependencies', 'optionalDependencies'];
  for (const section of sections) {
    const dependencies = packageJson[section];
    if (!dependencies || typeof dependencies !== 'object') continue;
    for (const [dependencyName, dependencyValue] of Object.entries(dependencies)) {
      if (typeof dependencyValue !== 'string' || !dependencyValue.startsWith('workspace:')) {
        continue;
      }
      const targetFolder = workspacePackageMap.get(dependencyName);
      if (targetFolder) {
        dependencies[dependencyName] = `file:../${targetFolder}`;
      }
    }
  }
  return packageJson;
}

async function syncPackage(packageName) {
  const sourceRoot = path.join(siblingSdkRoot, 'packages', packageName);
  const destinationRoot = path.join(vendorRoot, 'packages', packageName);

  if (!(await exists(sourceRoot))) {
    throw new Error(`Missing CHARAHOME SDK package: ${sourceRoot}`);
  }
  if (!(await exists(path.join(sourceRoot, 'dist')))) {
    throw new Error(`Missing built dist for ${packageName}. Build CHARAHOME-JS-SDKs first.`);
  }

  await rm(destinationRoot, { recursive: true, force: true });
  await mkdir(destinationRoot, { recursive: true });

  await copyIfExists(path.join(sourceRoot, 'dist'), path.join(destinationRoot, 'dist'));
  await copyIfExists(path.join(sourceRoot, 'README.md'), path.join(destinationRoot, 'README.md'));

  const workspacePackageMap = await buildWorkspacePackageMap();
  const packageJson = rewriteWorkspaceDependencies(
    JSON.parse(await readFile(path.join(sourceRoot, 'package.json'), 'utf8')),
    workspacePackageMap,
  );
  await writeFile(path.join(destinationRoot, 'package.json'), `${JSON.stringify(packageJson, null, 2)}\n`, 'utf8');
}

async function main() {
  if (!(await exists(siblingSdkRoot))) {
    throw new Error(`CHARAHOME-JS-SDKs repo was not found next to CHARACHAT: ${siblingSdkRoot}`);
  }

  await mkdir(path.join(vendorRoot, 'packages'), { recursive: true });

  for (const packageName of packageNames) {
    await syncPackage(packageName);
  }

  await writeFile(
    path.join(vendorRoot, 'README.md'),
    [
      '# Vendored CHARAHOME SDK packages',
      '',
      'This directory is generated from the sibling `CHARAHOME-JS-SDKs` repository.',
      'Run `npm run sync:charahome-sdk` from the CHARACHAT root to refresh the snapshot.',
      '',
      `Generated at: ${new Date().toISOString()}`,
      '',
    ].join('\n'),
    'utf8',
  );

  console.log(`Synced CHARAHOME SDK packages into ${vendorRoot}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});

