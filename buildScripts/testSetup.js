//This file isn't transpiled, so must use CommonJs and ES5

//Register Babel to translpile before ourt tests run
require('babel-register')()

//Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};
