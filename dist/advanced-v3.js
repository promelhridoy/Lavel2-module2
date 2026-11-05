//TODO: Encapsulation: protect a state and change it through methods.
//* Access Modifier
//? public
//? private
//? protected
//? readonly
class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    get salaryWithBonus() {
        return this._baseSalary + 5000;
    }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary cannot be negative value");
        }
        this._baseSalary = newSalary;
    }
}
;
const employee = new Employee("Promel", 22000);
const employee2 = new Employee("Hridoy", 24000);
employee.baseSalary = 30000;
console.log(employee.baseSalary);
console.log(employee.salaryWithBonus); //27000
export {};
