// TODO: Inheritance: a Manager is an Employee with an additional responsibility.
class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    // get baseSalary() : number {
    //     return this._baseSalary
    // }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary cannot be negative value");
        }
        this._baseSalary = newSalary;
    }
    describe() {
        return `${this.name} earns ${this.baseSalary}`;
    }
}
;
class Manager extends Employee {
    teamMemberCounter;
    constructor(name, _baseSalary, teamMemberCounter) {
        super(name, _baseSalary);
        this.teamMemberCounter = teamMemberCounter;
    }
    describeWork() {
        return `${this.name} manages ${this.teamMemberCounter} people`;
    }
    describeManager() {
        return `${this.name} earns ${this._baseSalary}`;
    }
}
const employee = new Employee("Promel", 22000);
console.log(employee.describe());
const manager = new Manager("Hridoy", 20000, 20);
console.log(manager.describe());
console.log(manager.describeWork());
export {};
