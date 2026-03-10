import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, '..', 'dist', 'index.html');

if (!fs.existsSync(distPath)) {
  console.error('dist/index.html not found');
  process.exit(1);
}

let html = fs.readFileSync(distPath, 'utf8');

// Fix static asset paths for GitHub Pages subdirectory
html = html
  .replace(/src="\/umi/g, 'src="/-/umi')
  .replace(/href="\//g, 'href="/-/')
  .replace(/window\.routerBase = "\/"/g, 'window.routerBase = "/-/"');

fs.writeFileSync(distPath, html);
console.log('Fixed asset paths in index.html');
