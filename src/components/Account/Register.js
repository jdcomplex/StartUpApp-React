import React, { Component } from "react";
import { connect } from "react-redux";
import { RegisterUser } from "../../actions";
class Register extends Component {
  state = {
    name: "",
    surname: "",
    email: "",
    password: ""
  };
  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let { name, surname, email, password } = this.state;
    let postData = {
      Name: name,
      Surname: surname,
      Email: email,
      Password: password
    };
    this.props.RegisterUser(postData, (data) => this.RegisterResponse(data));
  };

  RegisterResponse = (data) => {
    console.log(data);
    if (data.Success) {
      console.log(data);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            name="name"
            onChange={(e) => this.handleChange(e)}
            required
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            name="surname"
            onChange={(e) => this.handleChange(e)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            onChange={(e) => this.handleChange(e)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            onChange={(e) => this.handleChange(e)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="/Account/Login">login?</a>
        </p>
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, {
  RegisterUser
})(Register);
