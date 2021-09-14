// interface
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: "anik",
    age: 24,
    speak: (text: string) => {
        console.log(text);
    },
    spend: (amount: number) => {
        console.log(amount);
        return amount;
    }
}

const greetPerson = (person: IsPerson) => {
    console.log('hello ', person.name);
    
}

greetPerson(me);

import { Invoice } from "./classes/Invoice.js";
import { ListTeamplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('anik', 'web work', 250);
docTwo = new Payment('sourav', 'web work', 300);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);

const invOne = new Invoice('anik', 'work on the website', 250);
const invTwo = new Invoice('sourav', 'work on the website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invOne.amount = 200;

invoices.forEach(invoice => {
    console.log(invoice.format());
});

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// input
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTeamplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;
    if(type.value === 'invoice') {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});

// tuples
let tup: [string, number, boolean] = ['hello', 40, true];