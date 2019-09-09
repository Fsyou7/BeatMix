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
    var pad =`${x},${y}`;
    var neighbors = []; 
    if (x < 0 || x > 4 || y < 0 || y > 4 || size !== 5){
        return [];
    }
    
    switch (pad) {
        case '0,0':
            neighbors = [[0, 1], [1, 0]];
            return neighbors;
        case '0,4':
            neighbors = [[0, 3], [1, 4]];
            return neighbors;
        case '4,4':
            neighbors = [[4, 3], [3, 4]];
            return neighbors;
        case '4,0':
            neighbors = [[3, 0], [4, 1]];
            return neighbors;
        default:
            switch (pad) {
                case '0,1':
                case '0.2':
                case '0,3':
                    neighbors = [[x, y-1], [x, y+1], [x+1, y]];
                    return neighbors;
                case '1,0':
                case '2,0':
                case '3,0':
                    neighbors = [[x-1, y], [x+1, y], [x, y+1]];
                    return neighbors;
                case '4,1':
                case '4,2':
                case '4,3':
                    neighbors = [[x, y-1], [x, y+1], [x-1, y]];
                    return neighbors;
                case '1,4':
                case '2,4':
                case '3,4':
                    neighbors = [[x-1, y], [x+1, y], [x, y-1]];
                    return neighbors;
                default:
                    neighbors = [[x-1, y], [x, y-1], [x+1, y], [x, y+1]];
                    return neighbors;
            break;
            }
    }
}