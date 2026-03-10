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

// Create -/ subdirectory for GitHub Pages
const targetPath = path.join(distPath, '-');
if (!fs.existsSync(targetPath)) {
  fs.mkdirSync(targetPath, { recursive: true });
}

// Move all files except -/ to -/ directory
const files = fs.readdirSync(distPath);
for (const file of files) {
  const srcPath = path.join(distPath, file);
  const destPath = path.join(targetPath, file);

  // Skip -/ directory and index.html (keep at root for SPA fallback)
  if (file === '-' || file === 'index.html' || file === '404.html') {
    continue;
  }

  if (fs.statSync(srcPath).isFile()) {
    fs.renameSync(srcPath, destPath);
    console.log(`Moved ${file} to -/`);
  } else if (fs.statSync(srcPath).isDirectory()) {
    fs.renameSync(srcPath, destPath);
    console.log(`Moved ${file}/ to -/`);
  }
}

// Update index.html paths
let html = fs.readFileSync(indexHtmlPath, 'utf8');
html = html.replace(/src="\//g, 'src="/-/');
html = html.replace(/href="\//g, 'href="/-/');
fs.writeFileSync(indexHtmlPath, html);
console.log('Updated index.html paths');

console.log('Build ready for /-/ deployment');
