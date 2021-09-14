"use strict";
// let greet: Function;
// example 1
let greet;
greet = (name, greetings) => {
    console.log(`${name} says ${greetings}`);
};
greet('anik', 'welcome');
// example 2
let calc;
calc = (numberOne, numberTwo, action) => {
    if (action === 'add') {
        return numberOne + numberTwo;
    }
    return numberOne - numberTwo;
};
let result = calc(10, 10, "add");
console.log(result);
// example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old.`);
};
logDetails({ name: "anik", age: 24 });
