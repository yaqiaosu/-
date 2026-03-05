import fse from 'fs-extra';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
// console.log(__filename);
const __dirname = dirname(__filename);
// console.log(__dirname);
// !获取路径下面的子包
const packagesDir = resolve(__dirname, '../packages');
// console.log(packagesDir);
const appsDir = resolve(__dirname, '../apps');
// console.log(appsDir);

const readSubDirs = (rootDir) => {
  return fse
    .readdirSync(rootDir, { withFileTypes: true })
    .filter((ent) => ent.isDirectory() && !ent.name.startsWith('.'))
    .map((ent) => ent.name);
};

const publishPackages = readSubDirs(packagesDir);
const publishApps = readSubDirs(appsDir);

const packageDir = publishPackages.map((item) => resolve(packagesDir, item));
const appDir = publishApps.map((item) => resolve(appsDir, item));
// const appsResult = appDir.map((path) => {
//   // console.log(path, 'hhh');
//   // console.log(appsDir, 'appDir');
//   return {
//     location: '',
//     name: '',
//   };
// });
const pkgDirs = publishPackages.map((path, idx) => {
  // console.log(path, 'packageResult');
  return {
    location: packageDir[idx],
    name: path,
  };
});

const appDirs = publishApps.map((path, idx) => {
  return {
    location: appDir[idx],
    name: path,
  };
});
export const workspace = {
  // packages
  targetDirs: pkgDirs,
  // apps
  appDirs,
};
