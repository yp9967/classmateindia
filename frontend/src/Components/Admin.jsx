import React, { useState, useEffect } from "react";

function Admin() {
  const [data, setData] = useState([]);

  function allocate() {
    fetch(
      "https://us-central1-classmateindia-56f85.cloudfunctions.net/app/allocateClassrooms",
      {
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then(() => {
        alert("Classrooms are successfully assigned.");
        window.location.reload();
      });
  }

  useEffect(() => {
    fetch(
      "https://us-central1-classmateindia-56f85.cloudfunctions.net/app/getAllUser",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setData(data.data);
      });
  }, []);

  return (
    <div className="admin-container">
      <div className="admin-head">
        <h1 className="admin-title">
          Details of Registered Volunteers ({data.length})
        </h1>
        {data.length >= 10 && (
          <button className="admin-assign-btn" onClick={allocate}>
            Assign Classroom
          </button>
        )}
      </div>
      <div className="admin-user-container">
        {data.length > 0 ? (
          data.map((i) => (
            <div className="admin-user-card" key={i.id}>
              <span className="admin-user-name">
                <b>
                  Classroom:{" "}
                  <span style={{ color: "green" }}>{i.classroomId}</span>
                </b>
              </span>
              <span className="admin-user-name">
                <b>Name: </b> {i.name}
              </span>
              <span className="admin-user-phone">
                <b>Phone:</b> {i.phone}
              </span>
              <span className="admin-user-email">
                <b>Email:</b> {i.email}
              </span>
              <span className="admin-user-language">
                <b>Languages: </b>
                {i.language.join(", ")}
              </span>
              <span className="admin-user-availability">
                <b>Availability: </b>
                {i.date.join(", ")}
              </span>
              <span className="admin-user-location">
                <b>Location: </b>
                {i.location}
              </span>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Admin;
