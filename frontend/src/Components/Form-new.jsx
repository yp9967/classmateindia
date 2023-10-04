import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    language: [],
    date: "",
    location: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, language, date, location } = formData;
    console.log(name, email, phone, language, date, location);

    alert("Successfully submitted your response");
    navigate("/");

    const postData = {
      name,
      email,
      phone,
      language,
      date,
      location,
    };

    fetch(
      "https://us-central1-classmateindia-56f85.cloudfunctions.net/app/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(postData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegistered");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="body">
        <div className="container">
          <header>Registration htmlFor Volunteers</header>
          <form onSubmit={handleSubmit} action="#">
            <div className="form first">
              <div className="details personal">
                <span className="title">
                  You can enter your details here ...
                </span>

                <div className="fields">
                  <div className="input-field">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter your name"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="phone">Contact Number</label>
                    <input
                      type="number"
                      name="contactNumber"
                      placeholder="+91"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="email">email-id</label>
                    <input
                      type="text"
                      placeholder="Enter your email-id"
                      required
                      name="email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="languages">Spoken Languages</label>
                    <select
                      className="select-field"
                      name="languages"
                      onChange={handleChange}
                      required
                     multiple={true}
                    >
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Spanish">Spanish</option>
                    </select>
                  </div>
                  <div className="input-field">
                    <label htmlFor="dayOfWeek">Availability</label>
                    <select
                      id="dayOfWeek"
                      name="availability"
                      required
                      onChange={handleChange}
                    >
                      <option value="">Select a day</option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                      <option value="Saturday">Saturday</option>
                      <option value="Sunday">Sunday</option>
                    </select>
                  </div>
                  <div className="input-field">
                    <label htmlFor="location">Location</label>
                    <select
                      id="location"
                      name="location"
                      required
                      onChange={handleChange}
                    >
                      <option value="">Select a location</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Delhi">Delhi</option>
                    </select>
                  </div>
                </div>
                <div className="">
                  <button className="Navbar-btn">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
