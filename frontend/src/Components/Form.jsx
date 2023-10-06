import React from "react";
import Select from "react-select";

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

    const isEmailValid = this.validateEmail(email);

    if (!isEmailValid) {
      this.setState({ emailError: "Invalid email address" });
      return;
    }

    this.setState({ emailError: "" });
    const isPhoneValid = this.validatePhone(phone);

    if (!isPhoneValid) {
      this.setState({ phoneError: "Invalid phone number" });
      return;
    } else {
      this.setState({ phoneError: "" });
    }
    console.log(name, phone, email, language, date, location);
    alert("Successfully submitted your response");
    window.location.href = "/";
    const requestBody = JSON.stringify({
      name,
      phone,
      email,
      language,
      date,
      location,
    });

    fetch(
      "https://us-central1-classmateindia-56f85.cloudfunctions.net/app/register",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: requestBody,
      }
    )
      .then((res) => res.text())
      .then((data) => {
        console.log(data, "userRegistered");
      });
  }

  render() {
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
                    You can enter your details here ...
                    <br />
                    <span className="title-span">
                      (All fields are compulsory)
                    </span>
                  </span>

                  <div className="fields">
                    <div className="input-field">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
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
                        id="phone"
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
                        id="email"
                        placeholder="(eg. ram@yahoo.com)"
                        required
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                      />
                      <span style={{ color: "red" }}>
                        {this.state.emailError}
                      </span>
                    </div>
                    <div className="input-field">
                      <label htmlFor="language" className="input-field-label">
                        Spoken Languages
                      </label>

                      <Select
                        options={langoptions}
                        id="language"
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
                        id="date"
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
                        id="location"
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
