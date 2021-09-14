type stringOrNumber = string | number;
type objWithName = {name: string, uid: stringOrNumber}

const longDetails = (uid: stringOrNumber, item: string) => {
    console.log(`${item} has a uid of ${uid}`);   
}

const greet = (user: objWithName) => {
    console.log(`hello ${user.name}! your uid is ${user.uid}`);
}
longDetails(1, 'android');
greet({name: 'anik', uid: "2"});