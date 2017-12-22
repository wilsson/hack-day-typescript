// String
var myString = 'myString';
// Number
var myNumber = 10;
// Boolean
var myBoolean = true;
// Enum
var Power;
(function (Power) {
    Power[Power["maxPower"] = 100] = "maxPower";
    Power[Power["minPower"] = 10] = "minPower";
})(Power || (Power = {}));
// Tuple
var x;
x = ['string', 10];
console.log('x>', x);
//Array
var myArray = [1, 2, 3, 4];
var myArrayTwo = [1, 2, 3, 4];
// Void
var unusable = undefined;
function myFunction() {
    // TODO: code here
}
// Never
function error(message) {
    throw new Error(message);
}
// Type assertion “angle-bracket”
var value = "this is a string";
var strLength = value.length;
