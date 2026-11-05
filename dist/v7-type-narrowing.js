//* "typeof"
//? typeof array and null === object
let x = 122;
console.log(typeof x);
//* Type Guard
const print = (value) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        return value;
    }
};
const loggedInUser = {
    name: "Promel",
    address: {
        street: "Madla"
    }
};
const showAddress = (user) => {
    if (user && user.address) {
        console.log(user.address.street);
        return;
    }
    throw new Error("User not found");
};
//* some caveat of Type Guard
// const printAll = (x: string | string[] | null) => {
//     if(x && typeof x === "object"){
//         for(let str of x) {
//             console.log(str);
//         }
//     } else if (typeof x === "string") {
//         console.log(x);
//     } else {
//         console.log("");
//     }
// }
//* Equality
const compare = (x, y) => {
    if (x === y) {
        console.log(x, y);
    }
};
const printAll = (x) => {
    if (x !== null) {
        if (typeof x === "object") {
            for (let str of x) {
                console.log(str);
            }
            return;
        }
        console.log(x);
        return;
    }
    console.log("");
};
printAll("adfsadgs");
const move = (animal) => {
    if ("fly" in animal) {
        animal.fly();
        return;
    }
    animal.swim();
};
//* "instanceof" check
// const data = new Date();
// const err = new Error("something went wrong");
// console.log(data instanceof Error);
// console.log(data instanceof Date);
const showDate = (x) => {
    if (x instanceof Date) {
        console.log(x.toISOString());
        return;
    }
    const date = new Date(x);
    console.log(date.toISOString());
};
showDate("12-16-1971");
showDate(new Date("2-14-2011"));
const getArea = (shape) => {
    if (shape.kind === "circle") {
        console.log(shape.radius);
    }
    else {
        console.log(shape.sideLength);
    }
};
export {};
