import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Authentication } from "../../actions";
import { isLoggedIn } from "../../helpers/authhelper";
import { Form, Button, Spinner } from "react-bootstrap";

class Login extends Component {
  state = {
    email: "",
    password: "",
    isLoading: false
  };
  componentWillMount() {
    if (isLoggedIn()) {
      this.props.history.push("/");
    }
  }
  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  handleSubmit = (event) => {
    this.setState({ ...this.state, isLoading: true });
    event.preventDefault();
    let { email, password } = this.state;
    this.props.Authentication(email, password, this.props.history);
    this.setState({ ...this.state, isLoading: false });
  };
  render() {
    const { isLoading } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>

        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={this.state.email}
            onChange={(e) => this.handleChange(e)}
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={this.state.password}
            onChange={(e) => this.handleChange(e)}
            type="password"
            name="password"
            placeholder="Enter password"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Check type="checkbox" label=" Remember me" name="IsRemember" />
          {this.props.errorMessage && (
            <Form.Label className="text-danger small text-right">
              {this.props.errorMessage}
            </Form.Label>
          )}
          {isLoading && <Spinner animation="border" />}
        </Form.Group>

        <Button variant="primary" type="submit" block>
          Login
        </Button>
        <p className="forgot-password text-right">
          Forgot <Link to="/Account/ForgotPassword">password?</Link>
        </p>
      </Form>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    errorMessage: state.authenticationReducer.errorMessage
  };
};

export default connect(mapStateToProps, {
  Authentication
})(Login);
