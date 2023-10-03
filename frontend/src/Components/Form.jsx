import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    language: "",
    date: "",
    location: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Destructure values from formData
    const { name, email, phone, language, date, location } = formData;

    // Display an alert message
    alert("Successfully submitted your response");

    // Redirect to the home page or any other desired route
    navigate("/");

    // Prepare data for the fetch request
    const postData = {
      name,
      email,
      phone,
      language,
      date,
      location,
    };

    // Make a POST request to your API endpoint
    fetch("https://us-central1-classmateindia-56f85.cloudfunctions.net/app/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(postData),
    })
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
                    <label htmlFor="language">Spoken Languages</label>
                    <select
                      className="select-field"
                      name="language"
                      required
                      onChange={handleChange}
                    >
                      <option value="">Select a language</option>
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                    </select>
                  </div>
                  <div className="input-field">
                    <label htmlFor="date">Availability</label>
                    <input
                      type="date"
                      placeholder=""
                      name="availability"
                      required
                      onChange={handleChange}
                    />
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
