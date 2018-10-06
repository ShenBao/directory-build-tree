/*
 * @Author: ShenBao shenbaoone@gmail.com 
 * @Date: 2018-10-06 22:45:23 
 * @Last Modified by: ShenBao shenbaoone@gmail.com 
 * @Last Modified time: 2018-10-06 22:45:23 
*/

function matrixToTree(queue) {
  let treeStr = '';
  queue.forEach((item, index) => {
    treeStr += getStrByPos(queue, item.pos, item.isLastChild, item.isNoLeft, index) + item.name + '\n'
  });
  return treeStr;
}

function getStrByPos(queue, pos, isLastChild, isNoLeft, index) {
  const x = pos[0];
  const y = pos[1];
  if (y === 0) {
    return '';
  }
  const start = isLastChild ? '└' : '├';
  const left = addStand(isNoLeft);
  return left + start + '── ';
}

function addStand(isNoLeft) {
  let num = isNoLeft.length - 1;
  let str = '';
  while (num > 0) {
    str = (isNoLeft[num] ? '    ' : '│   ') + str;
    num--;
  }
  return str;
}

module.exports = matrixToTree;