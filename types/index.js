// String
var myString = 'myString';
var myStringTwo = 'myString';
// Number
var myNumber = 10;
var myNumberTwo = 10;
// Boolean
var myBoolean = true;
var myBooleanTwo = true;
// Enum
var Power;
(function (Power) {
    Power[Power["maxPower"] = 100] = "maxPower";
    Power[Power["minPower"] = 10] = "minPower";
})(Power || (Power = {}));
// Tuple
var x;
x = ['string', 10];
//Array
var myArray = [1, 2, 3, 4];
var myArrayTwo = [1, 2, 3, 4];
// Void
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
var max = {};
