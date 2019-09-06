// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (reqType, index, newPresetArray) => {
    if (index === NaN || index < 0 || index > presets.length ){
        return [404];
    }
    if (reqType !== 'GET' && reqType !== 'PUT'){
        return [400];
    } 
    let validRequest = [200];
    //console.log(validRequest);
    if (reqType === 'GET'){
        validRequest.push(presets[index]);
        //console.log(validRequest);
        return validRequest;
    } else if (reqType === 'PUT'){
        presets[index] = newPresetArray;
        validRequest.push(presets[index]);
        return validRequest;
    }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
