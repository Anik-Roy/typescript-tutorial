const me = {
    name: "anik",
    age: 24,
    speak: (text) => {
        console.log(text);
    },
    spend: (amount) => {
        console.log(amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('hello ', person.name);
};
greetPerson(me);
import { Invoice } from "./classes/Invoice.js";
import { ListTeamplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
let docOne;
let docTwo;
docOne = new Invoice('anik', 'web work', 250);
docTwo = new Payment('sourav', 'web work', 300);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const invOne = new Invoice('anik', 'work on the website', 250);
const invTwo = new Invoice('sourav', 'work on the website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invOne.amount = 200;
invoices.forEach(invoice => {
    console.log(invoice.format());
});
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// input
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector('ul');
const list = new ListTeamplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docThree = addUID({ name: "anik", age: 40 });
console.log(docThree);
const docFour = {
    uid: 1,
    resourceName: 'person',
    data: 'anik'
};
console.log(docFour);
const docFive = {
    uid: 2,
    resourceName: 'shoppingList',
    data: ['shirt', 'pant']
};
console.log(docFive);
