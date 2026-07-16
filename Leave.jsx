import React, { useState } from "react";
import "./Leave.css";

function Leave() {
  const [leaves, setLeaves] = useState([
    {
      id: 1,
      name: "Apeksha",
      employeeId: "1",
      reason: "High Fever",
      type: "Sick Leave",
      days: "3 Days",
      date: " 17-19 Jul",
      status: "Pending"
    },
    {
      id: 2,
      name: "Raj ",
      employeeId: "2",
      reason: "Personal Reason",
      type: "Casual Leave",
      days: "1 Day",
      date: "17 Jul",
      status: "Pending"
    },
    {
      id: 3,
      name: "Manisha ",
      employeeId: "3",
      reason: "Sister's Wedding",
      type: "Casual Leave",
      days: "5 Days",
      date: "22 Jul",
      status: "Approved"
    },
    {
      id: 4,
      name: "Rohan ",
      employeeId: "4",
      reason: "Medical Checkup",
      type: "Sick Leave",
      days: "2 Days",
      date: "22 Jul",
      status: "Rejected"
    }
  ]);

  const approveLeave = (id) => {
    setLeaves(
      leaves.map((leave) =>
        leave.id === id
          ? { ...leave, status: "Approved" }
          : leave
      )
    );
  };

  const denyLeave = (id) => {
    setLeaves(
      leaves.map((leave) =>
        leave.id === id
          ? { ...leave, status: "Rejected" }
          : leave
      )
    );
  };

  const showDetails = (leave) => {
    alert(
      `Employee: ${leave.name}
Reason: ${leave.reason}
Leave Type: ${leave.type}
Duration: ${leave.days}
Dates: ${leave.date}`
    );
  };

  const approved = leaves.filter(
    (leave) => leave.status === "Approved"
  ).length;

  const rejected = leaves.filter(
    (leave) => leave.status === "Rejected"
  ).length;

  const pending = leaves.filter(
    (leave) => leave.status === "Pending"
  ).length;

  return (
    <div className="leave-container">
      <h1>Leave Management</h1>
      <p className="date">16 July 2026</p>

      <div className="stats">

        <div className="stat-card purple">
          <h2>{leaves.length}</h2>
          <p>Total Request</p>
        </div>

        <div className="stat-card green">
          <h2>{approved}</h2>
          <p>Approved</p>
        </div>

        <div className="stat-card red">
          <h2>{rejected}</h2>
          <p>Rejected</p>
        </div>

        <div className="stat-card yellow">
          <h2>{pending}</h2>
          <p>Pending</p>
        </div>

      </div>

      <h2 className="heading">Leave Approval</h2>

      <div className="leave-grid">
        {leaves.map((leave) => (
          <div className="leave-card" key={leave.id}>

            <div className="top">

              <div className="avatar">
                {leave.name.charAt(0)}
              </div>

              <div>
                <h3>{leave.name}</h3>
                <p>{leave.employeeId}</p>
              </div>

            </div>

            <h4>{leave.reason}</h4>

            <div className="info">

              <span>{leave.type}</span>

              <span>{leave.days}</span>

            </div>

            <p className="leave-date">{leave.date}</p>

            <div
              className={`status ${leave.status.toLowerCase()}`}
            >
              {leave.status}
            </div>

            <div className="buttons">

              <button
                className="deny-btn"
                onClick={() => denyLeave(leave.id)}
              >
                Deny
              </button>

              <button
                className="approve-btn"
                onClick={() => approveLeave(leave.id)}
              >
                Approve
              </button>

              <button
                className="detail-btn"
                onClick={() => showDetails(leave)}
              >
                Details
              </button>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Leave;