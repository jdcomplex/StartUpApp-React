import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { BaseUrl } from "../../constants/apiRoutes";
import { LogOut } from "../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import {
  faUser,
  faUserCog,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    this.props.LogOut();
  };
  render() {
    const { userData } = this.props;

    let navLink;
    if (userData) {
      const { FullName, RoleName, ImageUrl } = userData;
      const fullImageUrl = BaseUrl + "UserImage/" + ImageUrl;
      let profileLink = (
        <React.Fragment>
          <span
            id="userFullName"
            className="mr-2 d-none d-lg-inline text-gray-600 small font-weight-bolder"
          >
            Welcome,{FullName}
          </span>
          <img
            className="img-profile rounded-circle"
            style={{ width: "40px" }}
            src={fullImageUrl}
          />
        </React.Fragment>
      );
      navLink = (
        <React.Fragment>
          <NavDropdown title={profileLink} alignRight>
            {RoleName === "Admin" ? (
              <NavDropdown.Item as={Link} to={"/Dashboard"}>
                <FontAwesomeIcon
                  className="fa-sm fa-fw mr-2 text-gray-400"
                  icon={faUserCog}
                />
                Dashboard
              </NavDropdown.Item>
            ) : (
              <NavDropdown.Item as={Link} to={"/Account"}>
                <FontAwesomeIcon
                  className="fa-sm fa-fw mr-2 text-gray-400"
                  icon={faUser}
                />
                My Account
              </NavDropdown.Item>
            )}
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={this.handleLogout}>
              <FontAwesomeIcon
                className="fa-sm fa-fw mr-2 text-gray-400"
                icon={faSignOutAlt}
              />
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </React.Fragment>
      );
    } else {
      navLink = (
        <React.Fragment>
          <Nav.Item>
            <Nav.Link as={Link} to={"/Account/Login"}>
              Login
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to={"/Account/Register"}>
              Register
            </Nav.Link>
          </Nav.Item>
        </React.Fragment>
      );
    }

    return (
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            StartUpApp
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">{navLink}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.authenticationReducer.user
  };
};

export default connect(mapStateToProps, { LogOut })(Header);
