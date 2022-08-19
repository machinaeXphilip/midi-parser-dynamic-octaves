# MIDI parser with dynamic octaves

a simple parser, to convert note names (e.g. 'C-2') into the corresponding MIDI number (0-127). 

By default it considers the lowest possible octave for the midi range to be -2. So the midi number 0 corresponds to 'C-2'. 

This is to match the behaviour of audio tools and instruments that use this octave designation as described for example in [this forum post](https://forum.ableton.com/viewtopic.php?t=228596)

But you can easily adapt this behaviour when instanciating the parser:


## Usage / example
```js
const {midiparser} = require('./index.js');

parserOne = new midiparser();  // defaults to -2 as the lowest octave 
parserTwo = new midiparser(0); // lowest octave here is 0

console.log(parserOne.getMidiNumber(0)); // ==> 0
console.log(parserTwo.getMidiNumber(0)); // ==> 0

console.log(parserOne.getMidiNumber('C-2')); // ==> 0
console.log(parserTwo.getMidiNumber('C-2')); // ==> undefined

console.log(parserOne.getMidiNumber('C')); // ==> 24
console.log(parserTwo.getMidiNumber('C')); // ==> 0
```

