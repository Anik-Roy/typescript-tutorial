let age: any = 25;
age = {name: "anik"};
console.log(age);

// mixed type array
let mixed: any[] = [];
mixed.push(5);
mixed.push('anik');
mixed.push(true);
console.log(mixed);

// mixed type object
let mixed_obj: {name: any, age: any};
mixed_obj = {name: 'anik', age: 24};
console.log(mixed_obj);
mixed_obj = {name: 20, age: 'anik'};
console.log(mixed_obj);

