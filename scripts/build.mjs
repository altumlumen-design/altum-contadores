import { spawn } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cli = path.join(root, 'node_modules', 'vinext', 'dist', 'cli.js');
const child = spawn(process.execPath, [cli, 'build'], {
  cwd: root,
  env: process.env,
  stdio: ['inherit', 'pipe', 'pipe'],
});

let transcript = '';

function createDirectoryIndexCopies() {
  const clientRoot = path.join(root, 'dist', 'client');
  const htmlFiles = [];
  const collect = (directory) => {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const absolute = path.join(directory, entry.name);
      if (entry.isDirectory()) collect(absolute);
      else if (entry.name.endsWith('.html') && !['index.html', '404.html'].includes(entry.name)) htmlFiles.push(absolute);
    }
  };
  collect(clientRoot);
  for (const source of htmlFiles) {
    const relative = path.relative(clientRoot, source).replace(/\.html$/, '');
    const destinationDirectory = path.join(clientRoot, relative);
    mkdirSync(destinationDirectory, { recursive: true });
    copyFileSync(source, path.join(destinationDirectory, 'index.html'));
  }
}

for (const stream of [child.stdout, child.stderr]) {
  stream.on('data', (chunk) => {
    transcript += chunk.toString();
    const target = stream === child.stdout ? process.stdout : process.stderr;
    target.write(chunk);
  });
}

child.on('error', (error) => {
  console.error(error);
  process.exit(1);
});

child.on('close', (code) => {
  if (code === 0) {
    createDirectoryIndexCopies();
    process.exit(0);
  }

  const exportedIndex = path.join(root, 'dist', 'client', 'index.html');
  const completed = transcript.includes('Build complete.');
  const knownWindowsShutdownIssue = transcript.includes(
    'Assertion failed: !(handle->flags & UV_HANDLE_CLOSING)',
  );
  const exportIsPresent =
    existsSync(exportedIndex) && statSync(exportedIndex).size > 1000;

  if (
    process.platform === 'win32' &&
    completed &&
    knownWindowsShutdownIssue &&
    exportIsPresent
  ) {
    createDirectoryIndexCopies();
    console.log(
      'Static export verified after the known Windows runtime shutdown assertion.',
    );
    process.exit(0);
  }

  process.exit(code ?? 1);
});
