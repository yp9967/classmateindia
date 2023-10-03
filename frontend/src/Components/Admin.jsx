import React, { useState, useEffect } from "react";

function AdminPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getAllUser", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setData(data.data);
      });
  }, []);

  return (
    <div className="admin-container">
      <div className="admin-head">
        <h1 className="admin-title">Details of Registered Voulenters</h1>
        <button className="admin-assign-btn">Assign Classroom</button>
      </div>
      <div className="admin-user-container">
        {data.map((i) => {
          return (
            <div className="admin-user-card">
              <span className="admin-user-name">Name: {i.name}</span>
              <span className="admin-user-phone">Phone: {i.phone}</span>
              <span className="admin-user-email">Email: {i.email}</span>
              <span className="admin-user-language">
                Languages: {i.language}
              </span>
              <span className="admin-user-availability">
                Availability: {i.date}
              </span>
              <span className="admin-user-location">
                Location: {i.location}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AdminPage;
