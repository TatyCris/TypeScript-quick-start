# TypeScript-quick-start
My sample to quick start with TypeScript

## Technologies used
- TypeScript

## Setup this project
- git clone
```bash
$ git clone https://github.com/TatyCris/TypeScript-quick-start.git
```

- npm install
```bash
$ npm install
```

- npm start
```bash
$ npm start
```

## Creating a new TypeScript Project 
```bash
$ mkdir typescript-sample
$ cd typescript-sample
$ npm init -y
$ npm i typescript ts-node nodemon
$ npx tsc --init
$ mkdir src
$ cd src
$ touch index.ts
```

At tsconfig.json file
```tsconfig.json
{
  "include": [
    "src/**/*"
  ],
  "compilerOptions": {
    "outDir": "./build"
  }
}
```

Create a nodemon.json file inside typescript-sample folder
```nodemon.json
{
    "watch": [
        "src"
    ],
    "ext": "ts tsx js jsx",
    "ignore": [
        "src/**/*.spec.ts"
    ],
    "exec": "npx ts-node ./src/index.ts"
}
```

To run your project at the terminal type 'nodemon'
```bash
$ nodemon
```
