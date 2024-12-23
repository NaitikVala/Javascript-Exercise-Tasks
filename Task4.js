class University {
  constructor(name) {
    this.name = name;
    this.departments = [];
  }

  addDepartment(departmentName) {
    if (this.departments.includes(departmentName)) {
      console.log(`${departmentName} already exist`);
    } else {
      this.departments.push(departmentName);
      console.log(`${departmentName} is added to ${this.name}`);
    }
  }

  removeDepartment(departmentName) {
    const index = this.departments.indexOf(departmentName);
    if (index !== -1) {
      this.departments.splice(index, 1);
      console.log(`${departmentName} is removed`);
    } else {
      console.log(`${departmentName} is not found`);
    }
  }

  displayDepartment() {
    if (this.departments.length > 0) {
      console.log(`Department in ${this.name}`);
      this.departments.forEach((dept, index) => {
        console.log(`${index + 1}.${dept}`);
      });
    } else {
      console.log(`${this.name} dont have departments`);
    }
  }
}
let university = new University("V.V.P College");

university.addDepartment("Computer Engineering");
university.addDepartment("IT Engineering");
university.addDepartment("Computer Science");

university.displayDepartment();

university.removeDepartment("Computer Science");

university.displayDepartment();

university.removeDepartment("Mechanical Engineering");

university.displayDepartment();
