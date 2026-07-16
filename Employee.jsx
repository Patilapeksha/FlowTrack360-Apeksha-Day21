import React, { useState } from "react";
import "./Employee.css";

function Employee() {
  const [search, setSearch] = useState("");

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Apeksha Patil",
      email: "apeksha@company.com",
      department: "Frontend",
      status: "Active",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      email: "rahul@company.com",
      department: "Backend",
      status: "On Leave",
    },
    {
      id: 3,
      name: "Priya Verma",
      email: "priya@company.com",
      department: "HR",
      status: "Active",
    },
    {
      id: 4,
      name: "Arjun Kumar",
      email: "arjun@company.com",
      department: "Testing",
      status: "Inactive",
    },
    {
      id: 5,
      name: "Sneha Joshi",
      email: "sneha@company.com",
      department: "UI/UX",
      status: "Active",
    },
    {
      id: 6,
      name: "Rohit Patil",
      email: "rohit@company.com",
      department: "Support",
      status: "Active",
    },
  ]);

  const addEmployee = () => {
    const newEmployee = {
      id: employees.length + 1,
      name: `Employee ${employees.length + 1}`,
      email: `employee${employees.length + 1}@company.com`,
      department: "Frontend",
      status: "Active",
    };

    setEmployees([...employees, newEmployee]);
  };

  const deleteEmployee = (id) => {
    setEmployees(
      employees.filter((employee) => employee.id !== id)
    );
  };

  const editEmployee = (id) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === id
          ? {
              ...employee,
              status:
                employee.status === "Active"
                  ? "On Leave"
                  : "Active",
            }
          : employee
      )
    );
  };

  const viewEmployee = (employee) => {
    alert(
      `Name: ${employee.name}
Email: ${employee.email}
Department: ${employee.department}
Status: ${employee.status}`
    );
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="employee-container">
      <div className="employee-header">
        <div>
          <h1>Employee Management</h1>
          <p>Manage company employees</p>
        </div>

        <button className="add-btn" onClick={addEmployee}>
          + Add Employee
        </button>
      </div>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search employee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="employee-grid">
        {filteredEmployees.map((employee) => (
          <div className="employee-card" key={employee.id}>
            <div className="avatar">
              {employee.name.charAt(0)}
            </div>

            <h3>{employee.name}</h3>

            <p>{employee.email}</p>

            <div className="employee-info">
              <span className="department">
                {employee.department}
              </span>

              <span
                className={`status ${employee.status
                  .replace(" ", "-")
                  .toLowerCase()}`}
              >
                {employee.status}
              </span>
            </div>

            <div className="button-group">
              <button
                className="view-btn"
                onClick={() =>
                  viewEmployee(employee)
                }
              >
                View
              </button>

              <button
                className="edit-btn"
                onClick={() =>
                  editEmployee(employee.id)
                }
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteEmployee(employee.id)
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Employee;