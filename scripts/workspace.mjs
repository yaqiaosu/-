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

const publishPackages = fse.readdirSync(packagesDir);
const publishApps = fse.readdirSync(appsDir);
const packageDir = publishPackages.map((item) => resolve(packagesDir, item));
const appDir = publishApps.map((item) => resolve(appsDir, item));
// console.log(appDir);
// const appsResult = appDir.map((path) => {
//   // console.log(path, 'hhh');
//   // console.log(appsDir, 'appDir');
//   return {
//     location: '',
//     name: '',
//   };
// });
console.log(publishPackages, 'publishPackages');
const pkgDirs = publishPackages.map((path, idx) => {
  // console.log(path, 'packageResult');
  console.log(path, idx);
  return {
    location: packageDir[idx],
    name: path,
  };
});
export const workspace = {
  targetDirs: pkgDirs,
};
