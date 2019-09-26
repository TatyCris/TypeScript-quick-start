### TypeScript language
- **Variable declarations**
``` bash
let foo: boolean
const bar: number = 123
const fooConst = foo 
```
The type of fooConst is inferred.

- **Function parameters and return values**
```
function joinWithComma(param1: number, param2: number): string {
    return param1 + ", " + param2
}
```
The function joinWithComma expects two arguments of type number and returns a string.

- **Arrays**

```
let foo: number[]
foo = [1, 2]
foo = ["error!"] // ⛔ this is not allowed! The compiler will give you an error
```

- **Any**
```
let bar: any
bar = 1
bar = "hey"
bar = true
bar = null
bar = { foo: "bar" }
bar = [1, "two", false]
let foo: any[] = bar
```

- **Null and undefined**
By default, all types in TypeScript also include the values null and undefined. So, this is fine:
```
// The 'number' type includes the value 'null'
let foo: number = null
```
If you enable the check below, the previous code snippet will cause a compilation error.
```
{
    "compilerOptions": {
        "strictNullChecks": true,
    }
}
```
Now you have to explicitly say when you want null or undefined to be allowed.
```
let foo: number | null = null
```

- **Type assertions**
```
let foo: any = "some string"
// asserting that foo is a string
let bar: string = foo as string //'as' is the assertion
console.log(bar.toUpperCase())
```

- **Unknown**

*you're not allowed to perform any operation on an unknown variable without first checking or asserting its type.*
```
function printUpperCaseAssertion(foo: unknown) {
    console.log((foo as string).toUpperCase())
}

function printUpperCaseCheck(foo: unknown) {
    if (typeof foo === 'string') {
        console.log(foo.toUpperCase())
    }
}
```
Both of the following functions pass the compile-time type checks, but only the second one prevents run-time errors.

- **Interfaces**
```
interface Person {
    firstName: string
    lastName: string
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName
}

let jane = { firstName: "Jane", lastName: "User", dateOfBirth: new Date("01/01/2010") }
let user: Person = jane
```

- **Methods**
```
interface Counter {
    getCount: () => number
    increment: (n: number) => void
}
```
With the void-type you should not expect any value from that function.

- **Optional properties**
```
interface MyType {
    foo: string
    bar?: string
}

const f1: MyType = { foo: "hello", bar: "world" }
const f2: MyType = { foo: "hello" }
```
When accessing a property (or even a variable) whose value might be null or undefined, there will be an error. You can solve this checking the value in an if statement or using an exclamation mark to override TypeScript's check. This is just as risky as type-assertions.
```
// ...given the code in previous snippet

let trimmed: string

// Error
trimmed = f2.bar.trim()

// OK
if (f2.bar) {
    trimmed = f2.bar.trim()
}

// Also OK, but risky
trimmed = f2.bar!.trim()
```

- **Defining new named union types**
```
let foo1: number | string = 1
let foo2: number | string = "hello"
// becomes
type NumberOrString = number | string
let foo3: NumberOrString = 1
let foo4: NumberOrString = "hello"

// The following two type declarations are equivalent
interface Bar1 {
    name: string
}
type Bar2 = {
    name: string
}
```
- **Generics**
```
type Queue<T> = {
    put: (value: T) => void
    take: () => T
}

let numberQueue: Queue<number>
let stringQueue: Queue<string>
```
Generics can be used with interfaces, but also with union types and function types.
```
// Generic function type

type ToString<INPUT> = (input: INPUT) => string
const numberToString: ToString<number> = (n) => n.toString()


// Generic union type

type PossiblyMissing<TYPE> = TYPE | undefined | null
const foo: PossiblyMissing<boolean> = true
```

- **Classes**
```
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.textContent = greeter(user);
```
The use of public on arguments to the constructor is a shorthand that allows us to automatically create properties with that name.