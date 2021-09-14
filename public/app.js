import { Invoice } from "./classes/Invoice.js";
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
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
