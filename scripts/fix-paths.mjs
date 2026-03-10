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

// Update index.html paths to add /-/ prefix
html = html.replace(/src="\.\//g, 'src="/-/');
html = html.replace(/href="\.\//g, 'href="/-/');
fs.writeFileSync(indexHtmlPath, html);

console.log('Moved all files to -/ subdirectory for GitHub Pages');
