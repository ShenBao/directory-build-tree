/*
 * @Author: ShenBao shenbaoone@gmail.com 
 * @Date: 2018-10-06 22:45:28 
 * @Last Modified by: ShenBao shenbaoone@gmail.com 
 * @Last Modified time: 2018-10-06 22:45:28 
*/

function objectToMatrix(array, row = 0, cloumn = 0, isNoLeft = []) {
  let queue = [];
  array.forEach((item, index) => {
    const isLastChild = index === array.length - 1;
    queue.push({
      name: item.name,
      isLastChild,
      isNoLeft,
      pos: [row, cloumn]
    });
    if (item.children && item.children.length) {
      const isNoLeft_temp = isNoLeft.slice();
      isNoLeft_temp.push(isLastChild);
      const chileQueue = objectToMatrix(item.children, row + 1, cloumn + 1, isNoLeft_temp);
      queue = queue.concat(chileQueue);
    }
    row++;
  });
  return queue;
}

module.exports = objectToMatrix;
