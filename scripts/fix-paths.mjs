import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, '..', 'dist');
const indexHtmlPath = path.join(distPath, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html not found');
  process.exit(1);
}

// Read index.html before moving
let html = fs.readFileSync(indexHtmlPath, 'utf8');

// Move all files to _site subdirectory for GitHub Pages
const targetPath = path.join(distPath, '_site');
if (!fs.existsSync(targetPath)) {
  fs.mkdirSync(targetPath, { recursive: true });
}

const files = fs.readdirSync(distPath);
for (const file of files) {
  const srcPath = path.join(distPath, file);
  const destPath = path.join(targetPath, file);

  // Skip _site itself and keep index.html at root
  if (file === '_site' || file === 'index.html') continue;

  if (fs.statSync(srcPath).isFile()) {
    fs.renameSync(srcPath, destPath);
  } else if (fs.statSync(srcPath).isDirectory()) {
    fs.renameSync(srcPath, destPath);
  }
}

// Update index.html paths to use /_site/ prefix
// First replace absolute paths like /umi.js with /-/_site/umi.js
html = html.replace(/src="\/umi/g, 'src="/-/_site/umi');
html = html.replace(/href="\//g, 'href="/-/_site/');
fs.writeFileSync(indexHtmlPath, html);

console.log('Build ready for /-/ deployment');
