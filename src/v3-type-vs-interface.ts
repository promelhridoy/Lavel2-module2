//* type alias vs interface

//? Interface is generally connected to objects
//? type alias is more connected to literals, unions, tuples, primitives

type Id = number;

//! interface id = number; 

type Role = "admin" | "member";

//! interface = "admin" | "member";

interface User {
    name: string;
    id: Id;
    role: 'admin' | 'member';
}


const user: User = {
    id: 123,
    name: 'agag',
    role: "admin"
}

//TODO : interface

interface Animal {
    species: string;
}
interface Cat extends Animal {
    breed: string;
}

const cat : Cat = {
    species: "felix Catus",
    breed: "Persian"
}


type Vehicle = {
    brand: string;
}

type Car  = Vehicle & { 
//? "&" symbol is used to perform intersection
    model: string;
}

const car: Car = {
    model: "corolla",
    brand: "Toyota"
}

interface IEmployee {
    name: string;
}

interface IEmployee {
    id: number;
}

const employee : IEmployee = {
    id: 234,
    name: "adf"
}