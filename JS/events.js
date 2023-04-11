'use strict'





      const employeeForm = document.querySelector('#employee-form');
      const employeeCards1 = document.querySelector('#employee-cards1');
      const employeeCards2 = document.querySelector('#employee-cards2');
      const employeeCards3 = document.querySelector('#employee-cards3');
      const employeeCards4 = document.querySelector('#employee-cards4');

      employeeForm.addEventListener('submit', (e) => {
          e.preventDefault();

          const fullName = document.querySelector('#full-name').value;
          const department = document.querySelector('#department').value;
          const jobLevel = document.querySelector('#job-level').value;
          const image = document.querySelector('#image').value;

          const card = document.createElement('div');
          card.classList.add('card');
          

          const img = document.createElement('img');
          img.src = image;

          const h2 = document.createElement('h2');
          h2.textContent = `Name: ${fullName} -ID: ${generateEmployeeId()}`;

          const p1 = document.createElement('p');
          p1.textContent = `Department: ${department}`;

          const p2 = document.createElement('p');
          p2.textContent = `Level: ${jobLevel}`;

         
          
          card.appendChild(img);
          card.appendChild(h2);
          card.appendChild(p1);
          card.appendChild(p2);

          if (department === "Administration") {

            employeeCards1.appendChild(card);
          } else if (department === "Marketing") {

            employeeCards2.appendChild(card);

          } else if (department === "Development") {
            employeeCards3.appendChild(card);

          } else if (department === "Finance") {
            employeeCards4.appendChild(card);
          }

         
      });

      function generateEmployeeId() {
        let id = Math.floor(Math.random() * 9000) + 1000;
        return id;
      }