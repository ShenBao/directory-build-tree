/*
 * @Author: ShenBao shenbaoone@gmail.com 
 * @Date: 2018-10-06 22:45:06 
 * @Last Modified by: ShenBao shenbaoone@gmail.com
 * @Last Modified time: 2018-10-06 22:47:06
*/

const config = {
    exclude: 'node_modules',
    dist: './build_tree/dist_tree.tree'
};

config.exclude && (config.exclude = new RegExp(config.exclude));
config.extensions && (config.extensions = new RegExp(config.extensions));

module.exports = config;