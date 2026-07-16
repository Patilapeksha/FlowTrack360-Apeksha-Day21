import React, { useState } from "react";
import "./Navigation.css";

function Navigation() {
  const [role, setRole] = useState("Admin");
  const [page, setPage] = useState("Dashboard");

  const menuItems = {
    Admin: [
      "Dashboard",
      "Employees",
      "Attendance",
      "Leave",
      "Reports",
      "Settings",
    ],

    HR: [
      "Employees",
      "Attendance",
      "Leave",
      "Recruitment",
      "Payroll",
    ],

    Employee: [
      "Profile",
      "Attendance",
      "Leave Status",
      "Tasks",
      "Payslip",
    ],
  };

  const stats = {
    Admin: {
      users: 250,
      departments: 8,
      requests: 35,
    },

    HR: {
      users: 120,
      departments: 5,
      requests: 18,
    },

    Employee: {
      users: 1,
      departments: 1,
      requests: 4,
    },
  };

  const handleLogout = () => {
    alert("Logged out successfully!");
  };

  return (
    <div className="container">
      <div className="dashboard">

        <div className="header">
          <div>
            <h1>Role-Based Navigation</h1>
            <p>
              Manage access according to user roles
            </p>
          </div>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

        <div className="welcome-card">
          <div>
            <h2>Welcome Back 👋</h2>

            <p>
              Access modules based on your role
            </p>
          </div>

          <span className="role-badge">
            {role}
          </span>
        </div>

        <div className="select-box">
          <label>Select User Role</label>

          <select
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
              setPage(
                menuItems[e.target.value][0]
              );
            }}
          >
            <option value="Admin">
              Admin
            </option>

            <option value="HR">
              HR
            </option>

            <option value="Employee">
              Employee
            </option>
          </select>
        </div>

        <div className="stats">

          <div className="stat-card">
            <h2>{stats[role].users}</h2>
            <p>Total Users</p>
          </div>

          <div className="stat-card">
            <h2>
              {stats[role].departments}
            </h2>
            <p>Departments</p>
          </div>

          <div className="stat-card">
            <h2>
              {stats[role].requests}
            </h2>
            <p>Requests</p>
          </div>

        </div>

        <h3 className="menu-title">
          Navigation Menu
        </h3>

        <div className="menu-list">

          {menuItems[role].map(
            (item, index) => (
              <div
                className={`menu-card ${
                  page === item
                    ? "active"
                    : ""
                }`}
                key={index}
                onClick={() =>
                  setPage(item)
                }
              >
                {item}
              </div>
            )
          )}

        </div>

        <div className="page-content">
          <h2>{page}</h2>

          <p>
            Welcome to the{" "}
            <strong>{page}</strong> page.
          </p>

          {page === "Dashboard" && (
            <p>
              View company overview and
              analytics.
            </p>
          )}

          {page === "Employees" && (
            <p>
              Manage employee records and
              profiles.
            </p>
          )}

          {page === "Attendance" && (
            <p>
              Track employee attendance.
            </p>
          )}

          {page === "Leave" && (
            <p>
              Approve and reject leave
              requests.
            </p>
          )}

          {page === "Reports" && (
            <p>
              Generate reports and
              statistics.
            </p>
          )}

          {page === "Settings" && (
            <p>
              Change system settings.
            </p>
          )}

          {page === "Recruitment" && (
            <p>
              Manage hiring process.
            </p>
          )}

          {page === "Payroll" && (
            <p>
              View salary details.
            </p>
          )}

          {page === "Profile" && (
            <p>
              View employee profile.
            </p>
          )}

          {page === "Leave Status" && (
            <p>
              Check leave status.
            </p>
          )}

          {page === "Tasks" && (
            <p>
              View assigned tasks.
            </p>
          )}

          {page === "Payslip" && (
            <p>
              Download monthly payslip.
            </p>
          )}
        </div>

      </div>
    </div>
  );
}

export default Navigation;