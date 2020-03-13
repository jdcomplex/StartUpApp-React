import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { RegisterUser } from "../../actions";
import { Form, Button, Spinner } from "react-bootstrap";
class Register extends Component {
  state = {
    name: "",
    surname: "",
    email: "",
    password: "",
    isLoading: false,
    message: ""
  };
  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ ...this.state, isLoading: true });
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
    this.setState({ ...this.state, isLoading: false, message: data.Message });
  };

  render() {
    const { isLoading, message } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>

        <Form.Group>
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First name"
            name="name"
            onChange={(e) => this.handleChange(e)}
            required
          />
        </Form.Group>

        <div className="form-group">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last name"
            name="surname"
            onChange={(e) => this.handleChange(e)}
            required
          />
        </div>

        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={(e) => this.handleChange(e)}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={(e) => this.handleChange(e)}
            required
          />
        </Form.Group>
        <Form.Group>
          {this.props.errorMessage && (
            <Form.Label className="text-danger small text-right">
              {this.props.errorMessage}
            </Form.Label>
          )}
          {isLoading && <Spinner animation="border" />}
        </Form.Group>
        {message && (
          <Form.Label className="text-danger small text-right">
            {message}
          </Form.Label>
        )}
        <Button variant="primary" type="submit" block>
          Register
        </Button>
        <p className="forgot-password text-right">
          Already registered <Link to="/Account/Login">login?</Link>
        </p>
      </Form>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, {
  RegisterUser
})(Register);
