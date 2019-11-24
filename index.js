import './employee.js';

let employees = [];
let allEmployees = [];

window.addEventListener('load', () => {
  getEmployees();

  document.getElementById("search").addEventListener("keyup", function(event) {
    const searchTerm = event.target.value;
    if (searchTerm === "") {
      getEmployees();
    } else {
      const filteredData = allEmployees.filter(emp =>
        emp.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
        renderEmployees(filteredData);
    }
  });
});

async function getEmployees() {
  const response = await fetch('http://api.alperg.com/employees');
  employees = allEmployees = await response.json();
  renderEmployees(employees);
}

function renderEmployees(data) {
  const main = document.querySelector('ul');
  main.innerHTML = "";

  data.forEach(employee => {
    const el = document.createElement('custom-employee');
    el.detail = employee;
    main.appendChild(el);
  });
}