


class midiparser {
    constructor(lowestOctave) {
        this.map = this.mappedToOctave(lowestOctave);
        console.log("done");
    }

    mapping = [
        {names:["C"]},
        {names:["C#","Db"]},
        {names:["D"]},
        {names:["D#","Eb"]},
        {names:["E"]}, 
        {names:["F"]},
        {names:["F#","Gb"]},
        {names:["G"]},
        {names:["G#","Ab"]},
        {names:["A"]},
        {names:["A#","Bb"]},
        {names:["B"]}
    ]

    mappedToOctave(lowestOctave=-2){
        let outputmap = {}
        let oct = lowestOctave-1;
        for (let i = 0; i <= 127; i++){
            if (this.dividable(i,12)){
                oct += 1
            }
            let notenames = this.mapping[i%12]["names"];
            //console.log("oct",oct, i, `${notenames[0]}${oct}`);
            for (let notename of notenames){
                outputmap[`${notename}${oct}`] = i;
                if (oct == 0) outputmap[`${notename}`] = i;
            }
        }
        return outputmap
    }

    dividable(num, divisor){
        if (num % divisor == 0) return true
        return false
    }

    parsesAsNumber(input){ 
        return !isNaN(parseFloat(input)) && !isNaN(input - 0) 
    }

    getMidiNumber(input){
        if (this.parsesAsNumber(input) && input <= 127 && input >= 0) return input

        return this.map[input]
    }
}
module.exports = {
    midiparser
}

