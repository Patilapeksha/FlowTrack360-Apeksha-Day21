import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [search, setSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Priya Sharma",
      department: "HR",
      attendance: "Present",
      leave: "Pending",
      date: "2026-07-16",
    },
    {
      id: 2,
      name: "Rahul Patil",
      department: "Developer",
      attendance: "Absent",
      leave: "Approved",
      date: "2026-07-15",
    },
    {
      id: 3,
      name: "Sneha Joshi",
      department: "Testing",
      attendance: "Present",
      leave: "Rejected",
      date: "2026-07-14",
    },
    {
      id: 4,
      name: "Amit Kumar",
      department: "Finance",
      attendance: "Present",
      leave: "Pending",
      date: "2026-07-16",
    },
  ]);

  const addEmployee = () => {
    const name = prompt("Enter employee name");

    if (!name) return;

    const department = prompt("Enter department");

    if (!department) return;

    const newEmployee = {
      id: Date.now(),
      name,
      department,
      attendance: "Present",
      leave: "Pending",
      date: new Date().toISOString().split("T")[0],
    };

    setEmployees([...employees, newEmployee]);
  };

  const editEmployee = (id) => {
    const employee = employees.find(
      (emp) => emp.id === id
    );

    const newName = prompt(
      "Edit employee name",
      employee.name
    );

    if (!newName) return;

    setEmployees(
      employees.map((emp) =>
        emp.id === id
          ? { ...emp, name: newName }
          : emp
      )
    );
  };

  const deleteEmployee = (id) => {
    const confirmDelete = window.confirm(
      "Delete employee?"
    );

    if (confirmDelete) {
      setEmployees(
        employees.filter(
          (emp) => emp.id !== id
        )
      );
    }
  };

  const markAttendance = (id) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === id
          ? {
              ...emp,
              attendance:
                emp.attendance ===
                "Present"
                  ? "Absent"
                  : "Present",
            }
          : emp
      )
    );
  };

  const applyLeave = (id) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === id
          ? {
              ...emp,
              leave: "Pending",
            }
          : emp
      )
    );
  };

  const approveLeave = (id) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === id
          ? {
              ...emp,
              leave: "Approved",
            }
          : emp
      )
    );
  };

  const rejectLeave = (id) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === id
          ? {
              ...emp,
              leave: "Rejected",
            }
          : emp
      )
    );
  };

  const downloadReport = () => {
    alert("Report Downloaded");
  };

  const exportData = () => {
    alert("Data Exported");
  };

  const filteredEmployees =
    employees.filter((employee) => {
      const matchesSearch =
        employee.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesDate =
        selectedDate === "" ||
        employee.date ===
          selectedDate;

      return (
        matchesSearch &&
        matchesDate
      );
    });

  const totalEmployees =
    employees.length;

  const totalDepartments =
    new Set(
      employees.map(
        (emp) => emp.department
      )
    ).size;

  const presentCount =
    employees.filter(
      (emp) =>
        emp.attendance ===
        "Present"
    ).length;

  return (
    <div className="dashboard">
      <div className="header">
        <h1>
          Employee Management Dashboard
        </h1>

        <button
          onClick={downloadReport}
        >
          Download Report
        </button>
      </div>

      <div className="cards">
        <div className="card">
          <h2>
            {totalEmployees}
          </h2>

          <p>
            Total Employees
          </p>
        </div>

        <div className="card">
          <h2>
            {totalDepartments}
          </h2>

          <p>
            Total Departments
          </p>
        </div>

        <div className="card">
          <h2>
            {presentCount}
          </h2>

          <p>
            Attendance Summary
          </p>
        </div>

        <div className="card">
          <h2>
            {
              filteredEmployees.length
            }
          </h2>

          <p>
            Recent Activities
          </p>
        </div>
      </div>

      <div className="toolbar">
        <input
          type="text"
          placeholder="Search Employee"
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

        <input
          type="date"
          value={selectedDate}
          onChange={(e) =>
            setSelectedDate(
              e.target.value
            )
          }
        />

        <button
          onClick={addEmployee}
        >
          Add Employee
        </button>

        <button
          onClick={exportData}
        >
          Export Data
        </button>
      </div>

      <div className="employee-list">
        {filteredEmployees.map(
          (employee) => (
            <div
              className="employee-card"
              key={employee.id}
            >
              <h3>
                {employee.name}
              </h3>

              <p>
                {
                  employee.department
                }
              </p>

              <span>
                Attendance:
                {" "}
                {
                  employee.attendance
                }
              </span>

              <span>
                Leave:
                {" "}
                {employee.leave}
              </span>

              <span>
                Date:
                {" "}
                {employee.date}
              </span>

              <div className="buttons">
                <button
                  onClick={() =>
                    editEmployee(
                      employee.id
                    )
                  }
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    deleteEmployee(
                      employee.id
                    )
                  }
                >
                  Delete
                </button>

                <button
                  onClick={() =>
                    markAttendance(
                      employee.id
                    )
                  }
                >
                  Attendance
                </button>

                <button
                  onClick={() =>
                    applyLeave(
                      employee.id
                    )
                  }
                >
                  Apply Leave
                </button>

                <button
                  onClick={() =>
                    approveLeave(
                      employee.id
                    )
                  }
                >
                  Approve
                </button>

                <button
                  onClick={() =>
                    rejectLeave(
                      employee.id
                    )
                  }
                >
                  Reject
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Dashboard;