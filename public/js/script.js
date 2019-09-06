// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

const toggleDrum = (arrayName, indexNum) => {
    if (indexNum < 0 || indexNum > 15){
        return;
    }
    if (arrayName == 'kicks'){   
        kicks[indexNum] = !kicks[indexNum];
    } else if (arrayName == 'snares'){
        snares[indexNum] = !snares[indexNum];
    } else if (arrayName == 'hiHats'){
        hiHats[indexNum] = !hiHats[indexNum];
    } else if (arrayName == 'rideCymbals'){
        rideCymbals[indexNum] = !rideCymbals[indexNum];
    } 
};

const clear = (arrayName) => {
    if (arrayName == 'kicks'){
        kicks.forEach(function(currentValue, index){
            kicks[index] = false;
        });
    } else if (arrayName == 'snares'){
        snares.forEach(function(currentValue, index){
            snares[index] = false;
        });
    } else if (arrayName == 'hiHats'){
        hiHats.forEach(function(currentValue, index){
            hiHats[index] = false;
        });
    } else if (arrayName == 'rideCymbals'){
        rideCymbals.forEach(function(currentValue, index){
            rideCymbals[index] = false;
        });
    }
};

const invert = (arrayName) => {
    if (arrayName == 'kicks'){
        kicks.forEach(function(currentValue, index){
            kicks[index] = !kicks[index];
        });
    } else if (arrayName == 'snares'){
        snares.forEach(function(currentValue, index){
            snares[index] = !snares[index];
        });
    } else if (arrayName == 'hiHats'){
        hiHats.forEach(function(currentValue, index){
            hiHats[index] = !hiHats[index];
        });
    } else if (arrayName == 'rideCymbals'){
        rideCymbals.forEach(function(currentValue, index){
            rideCymbals[index] = !rideCymbals[index];
        });
    }
};

const getNeighborPads = (x, y, size) => {
    let neighbors = [];
    neighbors = []
    return neighbors;
}