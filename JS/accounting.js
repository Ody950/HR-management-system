

'use strict';




let numberEmployees1 = 0;
let totalSalary1 = 0;


let numberEmployees2 = 0;
let totalSalary2 = 0;


let numberEmployees3 = 0;
let totalSalary3 = 0;

let numberEmployees4 = 0;
let totalSalary4 = 0;



let allEmployee = [];

function getEmployee() {

  let jsonArr = localStorage.getItem('allEmployee');
  let dataFromStorage = JSON.parse(jsonArr);
  allEmployee = dataFromStorage;

}

getEmployee()


for(let i =0; i < allEmployee.length; i++) {
  if(allEmployee[i].department == "Administration") {
    numberEmployees1 = numberEmployees1 + 1;
    totalSalary1 += allEmployee[i].salary;
  } else if (allEmployee[i].department == "Marketing") {
    numberEmployees2 = numberEmployees2 + 1;
    totalSalary2 += allEmployee[i].salary;

  } else if (allEmployee[i].department == "Development") {
    numberEmployees3 = numberEmployees3 + 1;
    totalSalary3 += allEmployee[i].salary;
    
  } else if (allEmployee[i].department == "Finance") {
    numberEmployees4 = numberEmployees4 + 1;
    totalSalary4 += allEmployee[i].salary;
    
  }
}




let tableEl = document.getElementById("tablex")

let tr1 = document.createElement('tr');

tableEl.appendChild(tr1)


let th1Tr1 = document.createElement('th');
th1Tr1.textContent = "Department Name";
tr1.appendChild(th1Tr1);


let th2Tr1 = document.createElement('th');
th2Tr1.textContent = "Number of employees";
tr1.appendChild(th2Tr1);

let th3Tr1 = document.createElement('th');
th3Tr1.textContent = "Average salary";
tr1.appendChild(th3Tr1);

let th4Tr1 = document.createElement('th');
th4Tr1.textContent = "Total salary";
tr1.appendChild(th4Tr1);



let tr2 = document.createElement('tr');
tableEl.appendChild(tr2)

let td1Tr2 = document.createElement('td');
td1Tr2.textContent = "Administration";
tr2.appendChild(td1Tr2);

let td2Tr2 = document.createElement('td');
td2Tr2.textContent = numberEmployees1;
tr2.appendChild(td2Tr2);


let avg1 = Math.round(totalSalary1 / numberEmployees1)
if (isNaN(avg1)) {
  avg1 = 0;
}

let td3Tr2 = document.createElement('td');
td3Tr2.textContent = avg1;
tr2.appendChild(td3Tr2);

let td4Tr2 = document.createElement('td');
td4Tr2.textContent = Math.round(totalSalary1);
tr2.appendChild(td4Tr2);



let tr3 = document.createElement('tr');
tableEl.appendChild(tr3)

let td1Tr3 = document.createElement('td');
td1Tr3.textContent = "Marketing";
tr3.appendChild(td1Tr3);

let td2Tr3 = document.createElement('td');
td2Tr3.textContent = numberEmployees2;
tr3.appendChild(td2Tr3);


let avg2 = Math.round(totalSalary2 / numberEmployees2)
if (isNaN(avg2)) {
  avg2 = 0;
}

let td3Tr3 = document.createElement('td');
td3Tr3.textContent = avg2;
tr3.appendChild(td3Tr3);

let td4Tr3 = document.createElement('td');
td4Tr3.textContent = Math.round(totalSalary2);
tr3.appendChild(td4Tr3);





let tr4 = document.createElement('tr');
tableEl.appendChild(tr4)

let td1Tr4 = document.createElement('td');
td1Tr4.textContent = "Development";
tr4.appendChild(td1Tr4);

let td2Tr4 = document.createElement('td');
td2Tr4.textContent = numberEmployees3;
tr4.appendChild(td2Tr4);

let avg3 = Math.round(totalSalary3 / numberEmployees3)
if (isNaN(avg3)) {
  avg3 = 0;
}
let td3Tr4 = document.createElement('td');
td3Tr4.textContent = avg3;
tr4.appendChild(td3Tr4);

let td4Tr4 = document.createElement('td');
td4Tr4.textContent = Math.round(totalSalary3);
tr4.appendChild(td4Tr4);



let tr5 = document.createElement('tr');
tableEl.appendChild(tr5)

let td1Tr5 = document.createElement('td');
td1Tr5.textContent = "Finance";
tr5.appendChild(td1Tr5);

let td2Tr5 = document.createElement('td');
td2Tr5.textContent = numberEmployees4;
tr5.appendChild(td2Tr5);


let avg4 = Math.round(totalSalary4 / numberEmployees4)
if (isNaN(avg4)) {
  avg4 = 0;
}

let td3Tr5 = document.createElement('td');
td3Tr5.textContent = avg4;
tr5.appendChild(td3Tr5);

let td4Tr5 = document.createElement('td');
td4Tr5.textContent = Math.round(totalSalary4);
tr5.appendChild(td4Tr5);



let tr6 = document.createElement('tr');
tableEl.appendChild(tr6)

let td1Tr6 = document.createElement('td');
td1Tr6.textContent = "Total";
tr6.appendChild(td1Tr6);

let td2Tr6 = document.createElement('td');
td2Tr6.textContent = numberEmployees1 + numberEmployees2 + numberEmployees3 + numberEmployees4;
tr6.appendChild(td2Tr6);



let td3Tr6 = document.createElement('td');
td3Tr6.textContent = Math.round((totalSalary1 + totalSalary2 + totalSalary3 +totalSalary4)/(numberEmployees1 + numberEmployees2 + numberEmployees3 + numberEmployees4));
tr6.appendChild(td3Tr6);

let td4Tr6 = document.createElement('td');
td4Tr6.textContent = Math.round(totalSalary1 + totalSalary2 + totalSalary3 +totalSalary4);
tr6.appendChild(td4Tr6);

