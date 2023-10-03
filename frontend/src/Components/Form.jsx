import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      language: "",
      date: "",
      location: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
const 
  handleSubmit(e) {
    e.preventDefault();

    const { name, email, phone, language, date, location } = this.state;
    console.log(name, phone, email, language, date, location);
    fetch("https://us-central1-classmateindia-56f85.cloudfunctions.net/app/register", {
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        name,
        phone,
        email,
        language,
        date,
        location
      }),
    }).then((res) => res.json())
    .then((data) => {
      console.log(data, "userRegistered");
    });
  }

  render() {
    


  return (
    <>
      <div className="body">
        <div className="container">
          <header>Registration htmlFor Volunteers</header>
          <form onSubmit={this.handleSubmit} action="#">
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
                      onChange={(e) => this.setState({ name: e.target.value})}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="phone">Contact Number</label>
                    <input
                      type="number"
                      name="contactNumber"
                      placeholder="+91"
                      required
                      onChange={(e) => this.setState({ phone: e.target.value})}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="email">email-id</label>
                    <input
                      type="text"
                      placeholder="Enter your email-id"
                      required
                      name="email"
                      onChange={(e) => this.setState({ email: e.target.value})}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="language">Spoken Languages</label>
                    <select
                      className="select-field"
                      name="language"
                      required
                      onChange={(e) => this.setState({ language: e.target.value})}
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
                      onChange={(e) => this.setState({ date: e.target.value})}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="location">Location</label>
                    <select
                      id="location"
                      name="location"
                      required
                      onChange={(e) => this.setState({ location: e.target.value})}
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
}


export default Form;
