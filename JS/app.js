
'use strict';


function Employee(employeeId,fullName,department,level) {
this.employeeId = employeeId;
this.fullName = fullName;
this.department = department; 
this.level = level;
this.imageUrl = `./img/${this.fullName}.png`;
this.salary = this.salaryEmployee(); 
}



Employee.prototype.salaryEmployee = function (){
  

    const taxPercent = 7.5;
    let level =this.level;
    let minLevelSalary = 0;
    let maxLevelSalary = 0;

    switch (level) {
        case "Senior":
            minLevelSalary = 1500;
            maxLevelSalary = 2000;
            break;
        case "Mid-Senior":
            minLevelSalary = 1000;
            maxLevelSalary = 1500;
            break;
        case "Junior":
            minLevelSalary = 500;
            maxLevelSalary = 1000;
            break;
        
        default:
            console.log("Invalid level");
    }

    let salary = Math.floor(Math.random() * (maxLevelSalary - minLevelSalary + 1)) + minLevelSalary;

    let netSalary = salary - (salary * (taxPercent / 100));

    salary = netSalary

    return netSalary;

    
    
}

let Ghazi = new Employee(1000,'Ghazi Samer','Administration','Senior');
let Lana = new Employee(1001,'Lana Ali','Finance','Senior');
let Tamara = new Employee(1002,'Tamara Ayoub','Marketing','Senior');
let Safi = new Employee(1003,'Safi Walid','Administration','Mid-Senior');
let Omar = new Employee(1004,'Omar Zaid','Development','Senior');
let Rana = new Employee(1005,'Rana Saleh','Development','Junior');
let RaHadi = new Employee(1006,'Hadi Ahmad','Finance','Mid-Senior');




Employee.prototype.renderTable = function() {
  let tableBody = document.getElementById("employeeTableBody");
  let row = tableBody.insertRow();
  let fullNameCell = row.insertCell(0);
  let salaryCell = row.insertCell(1);
  fullNameCell.innerHTML = this.fullName;
  salaryCell.innerHTML = this.salary;
};





function employeesSalary() {
Ghazi.renderTable();
Lana.renderTable();
Tamara.renderTable();
Safi.renderTable();
Omar.renderTable();
Rana.renderTable();
RaHadi.renderTable();

}

employeesSalary(); 