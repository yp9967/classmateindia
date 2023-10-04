import React, { useState, useEffect } from "react";

function AdminPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://us-central1-classmateindia-56f85.cloudfunctions.net/app/getAllUser", {
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
        <h1 className="admin-title">Details of Registered Voulenters ({data.length})</h1>
        {data.length >= 20 && (
          <button className="admin-assign-btn">Assign Classroom</button>
        )}
      </div>
      <div className="admin-user-container">
        {data.map((i) => {
          return (
            <div className="admin-user-card">
              <span className="admin-user-name"><b>Classroom: </b> {i.class}</span>
              <span className="admin-user-name"><b>Name: </b> {i.name}</span>
              <span className="admin-user-phone">Phone: {i.phone}</span>
              <span className="admin-user-email">Email: {i.email}</span>
              <span className="admin-user-language">
                Languages: {i.language.join(', ')}
              </span>
              <span className="admin-user-availability">
                Availability: {i.date.join(', ')}
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
