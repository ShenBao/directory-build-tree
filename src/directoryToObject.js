/*
 * @Author: ShenBao shenbaoone@gmail.com 
 * @Date: 2018-10-06 22:45:12 
 * @Last Modified by: ShenBao shenbaoone@gmail.com 
 * @Last Modified time: 2018-10-06 22:45:12 
*/

const fs = require('fs');
const path = require('path');

const CONSTANTS = {
  DIRECTORY: 'directory',
  FILE: 'file',
};

function safeReadDirSync(rootPath) {
  let dirData = {};
  try {
    dirData = fs.readdirSync(rootPath);
  } catch (ex) {
    if (ex.code == 'EACCES')
      return null;
    else throw ex;
  }

  return dirData;
}

function directoryToObject(rootPath, options = {}) {
  const name = path.basename(path.resolve(rootPath));
  const item = { path: rootPath, name };
  let stats;

  try {
    stats = fs.statSync(rootPath);
  }
  catch (e) {
    return null;
  }

  if (options.depth == undefined || options.depth == null || options.depth >= 0) {
    if (options.exclude && options.exclude.test(rootPath))
      return null;
    if (stats.isFile()) {
      if (options.extensions && !options.extensions.test(name))
        return null;
      item.type = CONSTANTS.FILE;
    } else if (stats.isDirectory()) {
      item.type = CONSTANTS.DIRECTORY;
      let childOptions = Object.assign({}, options);
      if (!isNaN(childOptions.depth)) {
        childOptions.depth--;
      }

      item.children = getChildrenByPath(rootPath, childOptions);
      if (item.children === null) return null;

    } else {
      return null;
    }

    return item;
  }
}

function getChildrenByPath(rootPath, options) {
  const dirData = safeReadDirSync(rootPath);

  const children = !!dirData
    ? dirData.map(child => directoryToObject(path.join(rootPath, child), options)).filter(item => !!item)
    : [];

  return children;
}

module.exports = directoryToObject;