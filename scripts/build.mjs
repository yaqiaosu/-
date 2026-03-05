import { spawn } from 'child_process';
import { readFileSync } from 'fs';
import k from 'kleur';
import { workspace } from './workspace.mjs';
// !找到构建的任务
const getBuildTask = () => {
  const totalBuildTask = workspace.targetDirs;
  const argv = process.argv.slice(2).map((s) => s.toLowerCase());
  if (argv.length === 0) return totalBuildTask;
  return totalBuildTask.filter((task) => argv.some((arg) => arg.includes(task.name.toLowerCase())));
};
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
(() => {
  const buildTask = getBuildTask();
  if (buildTask.length == 0) {
    console.log(k.bold().red('构建失败,构建任务为空'));
  }
  buildTask.forEach((task) => {
    console.log(k.blue(`[${task.name}]${k.bold().green('正在构建中...')}`));
    runScript('build', task.location);
  });
})();
