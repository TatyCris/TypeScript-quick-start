### TypeScript language
- Variable declarations
``` bash
let foo: boolean
const bar: number = 123
const fooConst = foo 
```
The type of fooConst is inferred.

- Function parameters and return values
```
function joinWithComma(param1: number, param2: number): string {
    return param1 + ", " + param2
}
```
The function joinWithComma expects two arguments of type number and returns a string.

- Arrays

```
let foo: number[]
foo = [1, 2]
foo = ["error!"] // ⛔ this is not allowed! The compiler will give you an error
```

- Any
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

- Null and undefined
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

- Type assertions
```
let foo: any = "some string"
// asserting that foo is a string
let bar: string = foo as string //'as' is the assertion
console.log(bar.toUpperCase())
```

- Unknown

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
