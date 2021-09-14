"use strict";
const longDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greet = (user) => {
    console.log(`hello ${user.name}! your uid is ${user.uid}`);
};
longDetails(1, 'android');
greet({ name: 'anik', uid: "2" });
