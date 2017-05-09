abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {

    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes must call super()
    }
	

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}
class LogisticsDepartment extends Department {

    constructor() {
        super("Logistics"); // constructors in derived classes must call super()
    }
	

    printMeeting(): void {
        console.log("The Logistics Department meets each Monday at 12pm.");
    }

    generateReports(): void {
        console.log("Generating logistics reports...");
    }
}
class ManufacturingDepartment extends Department {

    constructor() {
        super("Manufacturing"); // constructors in derived classes must call super()
    }
	

    printMeeting(): void {
        console.log("The Manufacturing Department meets each Wednesday at 10am.");
    }

    generateReports(): void {
        console.log("Generating manufacturing costs...");
    }
}

let department: Department; // ok to create a reference to an abstract type

department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
department = new LogisticsDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
department = new ManufacturingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();