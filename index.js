'use strict';

function objectToArray(obj, keyPrefix) {
    var kp = keyPrefix ? keyPrefix : '';
    return Object.keys(obj).map(function (x) {
        return x.replace(kp, '');
    }).map(function (h) {
        return obj[kp + h];
    });
}

module.exports = {
    objectToArray: objectToArray
};
