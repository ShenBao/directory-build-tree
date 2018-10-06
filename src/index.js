/*
 * @Author: ShenBao shenbaoone@gmail.com 
 * @Date: 2018-10-06 22:44:57 
 * @Last Modified by: ShenBao shenbaoone@gmail.com 
 * @Last Modified time: 2018-10-06 22:44:57 
*/

const yargs = require('yargs');

const directoryToObject = require('./directoryToObject.js');
const objectToMatrix = require('./objectToMatrix.js');
const matrixToTree = require('./matrixToTree.js');
const writeTreeToDir = require('./writeTreeToDir.js');

let config = require('./config.js');

const options = yargs
  .option("d", { alias: "directory", describe: "设置根目录路径", type: "string" })
  .option("exclude", { describe: "设置忽略的文件", type: "string" })
  .option("extensions", { describe: "设置文件夹的后缀", type: "string" })
  .option("depth", { describe: "设置遍历深度", type: "number" })
  .option("dist", { describe: "目录树结构输出位置", type: "string" })
  .help()
  .alias("?", "help")
  .argv;

const directory = options.d || require('process').cwd();

options.exclude && (config.exclude = new RegExp(options.exclude));
options.extensions && (config.extensions = new RegExp(options.extensions));
options.depth && (config.depth = options.depth);
options.dist && (config.dist = options.dist);

config = { ...options, ...config };

console.log(JSON.stringify(config, null, 4));

const result = directoryToObject(directory, config);

if (result) {
  const queue = objectToMatrix([result]);
  const tree = matrixToTree(queue);

  console.log(tree);

  if (config.dist) {
    writeTreeToDir(tree, config.dist);
  }
} else {
  console.error('The Error of options or config ...');
}
