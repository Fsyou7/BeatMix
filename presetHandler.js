// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (reqType, index, newPresetArray) => {
    if (!index ){
        return ['404'];
    }
    if (index){
        let validRequest = ['200'];
        if (reqType = 'GET'){
            validRequest.push();
        }
        return validRequest;
    }
    if (reqType !== 'GET' || reqType !== 'PUT'){
        return ['400'];
    }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
