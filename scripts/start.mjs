import { spawn } from 'child_process';
import { readFileSync } from 'fs';
import k from 'kleur';
import { workspace } from './workspace.mjs';
const { targetDirs } = workspace;

// !是否找到对应的脚本
let flag = false;
// !pkgLocation 需要在对应的路径下 执行对应的脚本
const runScript = (scriptName, pkgLocation, args = '') => {
  console.log(scriptName, pkgLocation, args, 'scriptName, pkgLocation, args');
  const pkgJson = JSON.parse(readFileSync(`${pkgLocation}/package.json`, 'utf-8'));
  console.log(pkgJson, 'pkgJson');
  if (pkgJson.scripts && pkgJson.scripts[scriptName]) {
    // !在这个线程执行对应的脚本
    spawn('pnpm', ['run', scriptName, ...args], {
      stdio: 'inherit',
      cwd: pkgLocation,
    });
  }
};

for (let i = 0; i < targetDirs.length; i++) {
  if (process.argv.some((arg) => arg.toLowerCase().includes(targetDirs[i].name.toLowerCase()))) {
    flag = true;
    console.log(k.blue(`[${targetDirs[i].name}]${k.bold().green('正在启动中...')}`));
    runScript('start', targetDirs[i].location);
  }
}
