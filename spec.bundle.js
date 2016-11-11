import angular from 'angular';
import mocks from 'angular-mocks';

// use context method on `require` to signify to define which files  
// to require or import.
// passing in true, this process will run recursively
let context = require.context('./src/modules', true, /__tests__\/.*\.js$/);

// calling  context function for each file
// that will require and load the file. 
context.keys().forEach(context);