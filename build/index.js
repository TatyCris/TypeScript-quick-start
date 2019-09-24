"use strict";
console.log("Hello Taty!");
//readest exercises
var a = 1;
var b = "hello";
var c = [true, false];
var d = {};
console.log([a, b, c, d]);
function pythagoras(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        console.log('CHECK!');
    }
    else {
        console.log('NO NO!');
    }
    return Math.sqrt(a * a + b * b);
}
var hypotenuse = pythagoras(3, 5);
var hypotenuseBroken = pythagoras(true, 1);
console.log({
    hypotenuse: hypotenuse,
    hypotenuseBroken: hypotenuseBroken
});
