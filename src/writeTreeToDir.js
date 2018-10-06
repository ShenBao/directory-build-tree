/*
 * @Author: ShenBao shenbaoone@gmail.com 
 * @Date: 2018-10-06 22:45:33 
 * @Last Modified by: ShenBao shenbaoone@gmail.com 
 * @Last Modified time: 2018-10-06 22:45:33 
*/

const fs = require('fs');

function writeTreeToDir(tree, dir) {
  fs.writeFile(dir, tree, 'utf8', (err) => {
    if (err) throw err;
    console.log('The dist path: ' + dir);
    console.log('The file has been saved!');
  });
}

module.exports = writeTreeToDir;
