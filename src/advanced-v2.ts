//TODO: CLASS AND OBJECT

// interface Employee {
//     name: string;
//     baseSalary: number;
// }

// const employ: Employee = {
//     name: "Promel",
//     baseSalary: 22000,
// };

// const employee2: Employee = {
//     name: "hridoy",
//     baseSalary: 22000,
// }

class Employee {
    name: string;
    baseSalary:number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
};

const employee = new Employee("Promel", 22000);
const employee2 = new Employee("Hridoy", 24000);

console.log(employee, employee2);
console.log(employee instanceof Employee); // true

