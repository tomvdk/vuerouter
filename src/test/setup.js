//simulate browser environment
require('jsdom-global')()

// expose the assertion library
global.expect = require('expect')