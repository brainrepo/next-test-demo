# React Testing
In this project i try all the react testing best practices


## Setup

Create an empty tsconfig.json file

Add typescript requirement

    yarn add --dev typescript @types/react @types/node

Install requirements  

    yarn add --dev jest @testing-library/react @types/jest @testing-library/jest-dom ts-jest

Add test script in the package  

    "scripts": {
        ...
        "test": "jest",
        "test:watch": "jest --watch"
    },

Crea il __jest.config.js__

    module.exports = {
        preset: 'ts-jest',
        testEnvironment: 'jsdom',
        globals: {
            "ts-jest": {
                tsConfig: "tsconfig.jest.json" //punta al tsconfig per l'ambiente 
            }
        }
    };

Crea il tsconfig adatto per l'ambiente jest

    {
    "extends": "./tsconfig.json",
        "compilerOptions": {
            "jsx": "react"
        }
    }

Runna i test

    yarn jest //runna una volta
    yarn jest:watch //rimane in ascolto delle modifiche e runna

## Cheatsheet
You can refer to online cheatsheet for react testing library

https://testing-library.com/docs/react-testing-library/cheatsheet/

## Referenze

    https://github.com/vercel/next.js/issues/8663