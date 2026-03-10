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

// Check for _site directory and move all back to root
const sitePath = path.join(distPath, '_site');
if (fs.existsSync(sitePath)) {
  const files = fs.readdirSync(sitePath);
  for (const file of files) {
    const srcPath = path.join(sitePath, file);
    const destPath = path.join(distPath, file);
    if (fs.statSync(srcPath).isFile()) {
      fs.renameSync(srcPath, destPath);
    } else if (fs.statSync(srcPath).isDirectory()) {
      fs.renameSync(srcPath, destPath);
    }
  }
  fs.rmdirSync(sitePath);
}

// Update index.html - use relative paths so they work with any base
let html = fs.readFileSync(indexHtmlPath, 'utf8');
html = html.replace(/src="\/([^"]+)"/g, 'src="./$1"');
html = html.replace(/href="\/([^"]+)"/g, 'href="./$1"');
fs.writeFileSync(indexHtmlPath, html);

console.log('Build ready - using relative paths');

console.log('Build ready for /-/ deployment');
