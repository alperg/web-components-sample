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
        .id { width: 5%; }
        .avatar { width: 7%; }
        .name { width: 26%; }
        .email { width: 22%; }
        .gender { width: 7%; }
        .department { width: 24%; }
        .date { width: 7%; }
      </style>
      <li>
        <span class="id">${employee.id}</span>
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
