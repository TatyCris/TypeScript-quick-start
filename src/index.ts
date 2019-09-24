console.log("Hello Taty!");

// readest exercises

interface Counter {
    getCount: () => number
    increment: (n: number) => void
}

let c: Counter = {
    getCount: () => 1, 
    increment: (n) => 'I will order ' + (n + c.getCount()) + ' pizzas!'
}

console.log(c.increment(2));