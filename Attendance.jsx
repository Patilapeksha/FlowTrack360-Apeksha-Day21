import React, { useState } from "react";
import "./Attendance.css";

function Attendance() {
  const [employees, setEmployees] = useState([
    {
      id: 101,
      name: "Apeksha",
      department: "Developer",
      status: "Present",
    },
    {
      id: 102,
      name: "Rahul ",
      department: "Development",
      status: "Absent",
    },
    {
      id: 103,
      name: "Sneha",
      department: "Testing",
      status: "Present",
    },
    {
      id: 104,
      name: "Arjun ",
      department: "Finance",
      status: "Present",
    },
    {
      id: 105,
      name: "Anjali ",
      department: "Design",
      status: "Absent",
    },
    {
      id: 106,
      name: "Rohan ",
      department: "Support",
      status: "Present",
    },
  ]);

  const [search, setSearch] = useState("");

  const toggleAttendance = (id) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === id
        ? {
            ...employee,
            status:
              employee.status === "Present" ? "Absent" : "Present",
          }
        : employee
    );

    setEmployees(updatedEmployees);
  };

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.department.toLowerCase().includes(search.toLowerCase())
  );

  const presentCount = employees.filter(
    (employee) => employee.status === "Present"
  ).length;

  const absentCount = employees.filter(
    (employee) => employee.status === "Absent"
  ).length;

  return (
    <div className="attendance-container">
      <div className="attendance-header">
        <h1>Attendance Management</h1>

        <input
          type="text"
          placeholder="Search employee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="stats-section">
        <div className="stat-card">
          <h2>{employees.length}</h2>
          <p>Total Employees</p>
        </div>

        <div className="stat-card">
          <h2>{presentCount}</h2>
          <p>Present</p>
        </div>

        <div className="stat-card">
          <h2>{absentCount}</h2>
          <p>Absent</p>
        </div>
      </div>

      <div className="employee-grid">
        {filteredEmployees.map((employee) => (
          <div className="employee-card" key={employee.id}>
            <div className="avatar">
              {employee.name.charAt(0)}
            </div>

            <h3>{employee.name}</h3>

            <p>ID: {employee.id}</p>

            <span className="department">
              {employee.department}
            </span>

            <div
              className={
                employee.status === "Present"
                  ? "status present"
                  : "status absent"
              }
            >
              {employee.status}
            </div>

            <button
              onClick={() => toggleAttendance(employee.id)}
            >
              Mark Attendance
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Attendance;