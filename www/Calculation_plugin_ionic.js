var exec = require('cordova/exec');

// exports.coolMethod = function (arg0, success, error) {
//     exec(success, error, 'Calculation_plugin_ionic', 'coolMethod', [arg0]);
// };

exports.add = function (arg0, success, error) {
    exec(success, error, 'Calculation_plugin_ionic', 'add', [arg0]);
};

exports.subtract = function (arg0, success, error) {
    exec(success, error, 'Calculation_plugin_ionic', 'subtract', [arg0]);
};

exports.mul = function (arg0, success, error) {
    exec(success, error, 'Calculation_plugin_ionic', 'mul', [arg0]);
};

exports.div = function (arg0, success, error) {
    exec(success, error, 'Calculation_plugin_ionic', 'div', [arg0]);
};

