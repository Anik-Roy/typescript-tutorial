// let greet: Function;

// example 1
let greet: (a: string, b: string) => void;

greet = (name: string, greetings: string) => {
    console.log(`${name} says ${greetings}`);
}
greet('anik', 'welcome');

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numberOne: number, numberTwo: number, action: string) => {
    if(action === 'add') {
        return numberOne + numberTwo;
    }
    return numberOne - numberTwo;
}

let result = calc(10, 10, "add");
console.log(result);

// example 3
let logDetails: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number};

logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old.`);
}
logDetails({name: "anik", age: 24});
