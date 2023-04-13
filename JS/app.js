
'use strict';

const employeeForm = document.querySelector('#employee-form');
employeeForm.addEventListener('submit', addNewEmployee)

let allEmployee = [];

function Employee(fullName, department, level,image) {
  this.fullName = fullName;
  this.department = department; 
  this.level = level;
  this.image = image;
  this.salary = this.salaryEmployee(); 
  this.EmployeeId = generateEmployeeId();
  allEmployee.push(this);
}

function render (){




  //getEmployee()

  
  if (allEmployee == null) {
      allEmployee = [];
  }

  for (let i =0; i < allEmployee.length; i++) {

    const card = document.createElement('div');
    card.classList.add('card'); 

    const img = document.createElement('img');
    img.src = allEmployee[i].image;

    const h2 = document.createElement('h2');
    h2.textContent = `Name: ${allEmployee[i].fullName} -ID: ${generateEmployeeId()}`;

    const p1 = document.createElement('p');
    p1.textContent = `Department: ${allEmployee[i].department}`;

    const p2 = document.createElement('p');
    p2.textContent = `Level: ${allEmployee[i].level}`;
    const px3 = document.createElement('p');
    px3.textContent = `Salary: ${allEmployee[i].salary}`;

  
    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(px3);
   
    
    
    if (allEmployee[i].department == "Administration") {

      employeeCards1.appendChild(card);
    } else if (allEmployee[i].department == "Marketing") {

      employeeCards2.appendChild(card);

    } else if (allEmployee[i].department == "Development") {
      employeeCards3.appendChild(card);

    } else if (allEmployee[i].department == "Finance") {
      employeeCards4.appendChild(card);
    }
  }
  }

function addNewEmployee(event){
  //event.preventDefault();

  let fullName =  event.target.fullName.value;
  const department = document.querySelector('#department').value;
  const level = document.querySelector('#level').value;
  const image = document.querySelector('#image').value;


  let newEmployee = new Employee(fullName,department,level,image);
  

  let jsonArr = JSON.stringify(allEmployee);
  localStorage.setItem('allEmployee', jsonArr)


};



const employeeCards1 = document.querySelector('#employee-cards1');
const employeeCards2 = document.querySelector('#employee-cards2');
const employeeCards3 = document.querySelector('#employee-cards3');
const employeeCards4 = document.querySelector('#employee-cards4');



function generateEmployeeId() {
  let id = Math.floor(Math.random() * 9000) + 1000;
  return id;
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

  salary = Math.floor(netSalary)

  return netSalary;

  
};




function getEmployee() {

  let jsonArr = localStorage.getItem('allEmployee');
  let dataFromStorage = JSON.parse(jsonArr);
  allEmployee = dataFromStorage;

}

getEmployee()
render ()



/*let Ghazi = new Employee(1000,'Ghazi Samer','Administration','Senior');
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
*/





/*function employeesSalary() {
Ghazi.renderTable();
Lana.renderTable();
Tamara.renderTable();
Safi.renderTable();
Omar.renderTable();
Rana.renderTable();
RaHadi.renderTable();

}

employeesSalary(); */
