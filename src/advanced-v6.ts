//TODO Polymorphism: different employees respond differently to the same method call.

class Employee {
    constructor(
         public name: string,
         private _baseSalary:number,
    ) {}

    get baseSalary() : number {
        return this._baseSalary
    }

    set baseSalary( newSalary : number ){
        if(newSalary < 0) {
            throw new Error("Salary cannot be negative value");
            
        }
        this._baseSalary = newSalary;
    }

    calculatePay(taxRate: number) {
        return this.baseSalary - this.baseSalary * taxRate;
    }
};


// class Manager extends Employee {}
// const manager = new Manager("Promel", 22000);
// console.log(manager.calculatePay());

class Manager extends Employee {
    override calculatePay() {
        return this.baseSalary + 5000;
    }
}

class Developer extends Employee {
  constructor (
    name: string,
    _baseSalary: number,
    public type: string,
    ){
        super(name, _baseSalary)
    }

    override calculatePay(taxRate: number) {
        return (this.baseSalary + 3000) - this.baseSalary * taxRate;
    }
}

const employee = new Employee("Promel", 22000);
const developer = new Developer("Promel", 22000, "FrontEnd");

console.log(employee.calculatePay(0.1));
console.log(developer.calculatePay(0.1));



