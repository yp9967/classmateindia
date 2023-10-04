import React from "react";
import Select from "react-select";
// import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

// const history = useHistory();

// const navigate = useNavigate();

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      language: [],
      date: [],
      location: "",
      emailError: "",
      phoneError: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  }
  validatePhone(phone) {
    const re = /^\+91[0-9]{10}$/;
    return re.test(phone);
  }
 
  const;
  
  handleSubmit(e) {
    e.preventDefault();

    const { name, email, phone, language, date, location } = this.state;
    
    // Email validation
    const isEmailValid = this.validateEmail(email);

    if (!isEmailValid) {
      this.setState({ emailError: "Invalid email address" });
      return;
    }

    // If email is valid, continue with form submission
    this.setState({ emailError: "" });
    const isPhoneValid = this.validatePhone(phone);

    if (!isPhoneValid) {
      this.setState({ phoneError: "Invalid phone number" });
      return;
    } else {
      this.setState({ phoneError: "" }); // Clear the phone error when phone number is valid
    }
    console.log(name, phone, email, language, date, location);
    alert("Successfully submitted your response");
    window.location.href ="/"
   
    fetch(
      "https://us-central1-classmateindia-56f85.cloudfunctions.net/app/register",
      {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          language,
          date,
          location,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegistered");
      });
  }

  render() {
    // const navigate = useNavigate();
    const langoptions = [
      { value: "English", label: "English" },
      { value: "Hindi", label: "Hindi" },
      { value: "Gujrati", label: "Gujrati" },
      { value: "Tamil", label: "Tamil" },
    ];

    const daysoptions = [
      { value: "Monday", label: "Monday" },
      { value: "Tuesday", label: "Tuesday" },
      { value: "Wednesday", label: "Wednesday" },
      { value: "Thursday", label: "Thursday" },
      { value: "Friday", label: "Friday" },
      { value: "Saturday", label: "Saturday" },
      { value: "Sunday", label: "Sunday" },
    ];

    const locoptions = [
      { value: "Bengaluru", label: "Bengaluru" },
      { value: "Ahmedabad", label: "Ahmedabad" },
      { value: "Chennai", label: "Chennai" },
    ];

    return (
      <>
        <div className="body">
          <div className="container">
            <header>Registration For Volunteers</header>
            <form onSubmit={this.handleSubmit} action="/">
              <div className="form first">
                <div className="details personal">
                  <span className="title">
                    You can enter your details here ...<br/>
                    <span className="title-span">(All fields are compulsory)</span>
                  </span>

                  <div className="fields">
                    <div className="input-field">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Enter your name"
                        required
                        onChange={(e) =>
                          this.setState({ name: e.target.value })
                        }
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="phone">Contact Number</label>
                      <input
                        type="text"
                        name="contactNumber"
                        placeholder="(eg. +918292324252)"
                        required
                        onChange={(e) =>
                          this.setState({ phone: e.target.value })
                        }
                      />
                      <span style={{ color: "red" }}>
                        {this.state.phoneError}
                      </span>
                    </div>
                    <div className="input-field">
                      <label htmlFor="email">email-id</label>
                      <input
                        type="text"
                        placeholder="(eg. ram@yahoo.com)"
                        required
                        name="email"
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                      />
                       <span style={{ color: "red" }}>
                        {this.state.emailError}
                      </span>
                    </div>
                    <div className="input-field">
                      <label htmlFor="language" className="input-field-label">Spoken Languages</label>

                      <Select
                        options={langoptions}
                        className="input-field-select"
                        isMulti
                        onChange={(e) =>
                          this.setState({
                            language: Array.from(e, (option) => option.value),
                          })
                        }
                        required
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="date">Availability</label>
                      <Select
                      className="input-field-select"
                        options={daysoptions}
                        isMulti
                        onChange={(e) =>
                          this.setState({
                            date: Array.from(e, (option) => option.value),
                          })
                        }
                        required
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="location">Location</label>

                      <Select
                      className="input-field-select"
                        options={locoptions}
                        onChange={(e) => this.setState({ location: e.value })}
                        required
                      />
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
