console.log("Hello Taty!");

// readest exercises

type Foo = object | string

let f1: Foo = { name: "James" }
let f2: Foo = "normal string"

console.log(f1, f2);



type Wrapper<TYPE> = (value: TYPE) => { data: TYPE }

const wrapString: Wrapper<string> = (v) => ({ data: v })
const wrapBoolean: Wrapper<boolean> = (v) => ({ data: v })

console.log(wrapString('name'));
console.log(wrapBoolean(true));