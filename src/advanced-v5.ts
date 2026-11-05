// TODO: Inheritance: a Manager is an Employee with an additional responsibility.


class Employee {
    constructor(
         public name: string,
         protected _baseSalary:number,
    ) {}

    // get baseSalary() : number {
    //     return this._baseSalary
    // }

    set baseSalary( newSalary : number ){
        if(newSalary < 0) {
            throw new Error("Salary cannot be negative value");
            
        }
        this._baseSalary = newSalary;
    }

    describe(): string {
        return `${this.name} earns ${this.baseSalary}`
    }
};

class Manager extends Employee {
    constructor(
        name: string, 
        _baseSalary: number, 
        public teamMemberCounter: number
    ) {
        super(name, _baseSalary);
    }

    describeWork() : string {
        return `${this.name} manages ${this.teamMemberCounter} people`
    }

    describeManager(): string {
        return `${this.name} earns ${this._baseSalary}`
    }
}


const employee = new Employee("Promel", 22000);

console.log(employee.describe());


const manager =new Manager("Hridoy", 20000, 20)

console.log(manager.describe());
console.log(manager.describeWork());