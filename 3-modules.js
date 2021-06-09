//CommonJS, very file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor')
require('./7-mind-grenade') // se va a ejecutar aunque no se invoque
sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)