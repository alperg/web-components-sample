import './employee.js';

window.addEventListener('load', () => {
  getEmployees();
});

async function getEmployees() {
  const response = await fetch('http://api.alperg.com/employee');
  const json = await response.json();
  const main = document.querySelector('ul');

  json.forEach(employee => {
    const el = document.createElement('custom-employee');
    el.detail = employee;
    main.appendChild(el);
  });
}