console.log("Hello Taty!");

//readest exercises

let a: number = 1
let b: string = "hello"
let c: boolean[] = [true, false]
let d: object = {}
console.log([a,b,c,d]) 

function pythagoras(a: any, b: any): number {
    if (typeof a === 'number' && typeof b === 'number') {
        console.log('CHECK!');
    }
    else {
        console.log('NO NO!');
    }
    return Math.sqrt(a*a + b*b)
}
let hypotenuse = pythagoras(3, 5)
let hypotenuseBroken = pythagoras(true, 1)
console.log ({
    hypotenuse,
    hypotenuseBroken
})