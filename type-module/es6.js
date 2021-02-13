/*
% node es6.js        
(node:58887) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)
import * as util from 'util'
^^^^^^

SyntaxError: Cannot use import statement outside a module
*/

import * as util from 'util'

console.log(util.inspect('foo'))
