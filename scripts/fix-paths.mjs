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

// Check if -/ subdirectory exists (from previous builds)
const subDirPath = path.join(distPath, '-');
if (fs.existsSync(subDirPath)) {
  // Move all files from -/ to dist root
  const files = fs.readdirSync(subDirPath);
  for (const file of files) {
    const srcPath = path.join(subDirPath, file);
    const destPath = path.join(distPath, file);
    if (fs.statSync(srcPath).isFile()) {
      fs.renameSync(srcPath, destPath);
      console.log(`Moved ${file} to root`);
    } else if (fs.statSync(srcPath).isDirectory()) {
      fs.renameSync(srcPath, destPath);
      console.log(`Moved ${file}/ to root`);
    }
  }
  // Remove empty - directory
  fs.rmdirSync(subDirPath);
}

// Update index.html
let html = fs.readFileSync(indexHtmlPath, 'utf8');

// Fix script src: /umi.js -> ./umi.js (relative path)
html = html.replace(/src="\/([^"]+\.js)"/g, 'src="./$1"');

// Fix href: / -> ./
html = html.replace(/href="\//g, 'href="./');

fs.writeFileSync(indexHtmlPath, html);
console.log('Updated index.html paths to relative');

console.log('Build ready for root deployment');
