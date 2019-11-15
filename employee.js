class Employee extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'closed' });
  }

  set detail(employee) {
    this.root.innerHTML = `
      <style>
        li {
          list-style: none;
          border-bottom: 1px solid #ececec;
        }
        span { display: inline-block; padding-bottom: 10px; }
        .avatar { width: 90px; }
        .name { width: 250px; }
        .email { width: 230px; }
        .gender { width: 100px; }
        .department { width: 240px; }
        .date { width: 200px; }
      </style>
      <li>
        <span class="avatar"><img src="${employee.avatar}"></span>
        <span class="name">${employee.firstName} ${employee.lastName}</span>
        <span class="email">${employee.email}</span>
        <span class="gender">${employee.gender}</span>
        <span class="department">${employee.department}</span>
        <span class="date">${employee.date}</span>
      </li>
    `;
  }
}

customElements.define('custom-employee', Employee);
