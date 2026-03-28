import { spawn } from 'node:child_process';

const [scriptName, ...extraArgs] = process.argv.slice(2);

if (!scriptName) {
  console.error('Usage: node scripts/run-workspaces.mjs <script> [...args]');
  process.exit(1);
}

const command = ['npm', 'run', scriptName, '--workspaces', ...extraArgs].join(' ');
const child = spawn(command, [], {
  stdio: 'inherit',
  shell: true,
  env: process.env,
});

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 1);
});

