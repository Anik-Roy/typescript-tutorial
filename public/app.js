"use strict";
// const anchor = document.querySelector('a');
// console.log(anchor);
// console.log(anchor?.href);
// console.log(anchor?.innerHTML);
// console.log(anchor?.innerText);
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
