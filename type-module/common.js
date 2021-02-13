/*
% node common.js 
const util = require('util')
             ^
ReferenceError: require is not defined
*/

const util = require('util')

console.log(util.inspect('foo'))
