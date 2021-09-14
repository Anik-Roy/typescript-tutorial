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

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.value
    );
    
});