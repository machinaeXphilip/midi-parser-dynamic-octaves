const {midiparser} = require('./index.js');

parserOne = new midiparser(-2);
parserTwo = new midiparser(0);

console.log(parserOne.getMidiNumber(0)); // ==> 0
console.log(parserTwo.getMidiNumber(0)); // ==> 0

console.log(parserOne.getMidiNumber('C-2')); // ==> 0
console.log(parserTwo.getMidiNumber('C-2')); // ==> undefined

console.log(parserOne.getMidiNumber('C')); // ==> 24
console.log(parserTwo.getMidiNumber('C')); // ==> 0