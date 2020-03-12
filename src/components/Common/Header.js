import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { BaseUrl } from "../../constants/apiRoutes";
import { LogOut } from "../../actions";

class Header extends Component {
  state = {
    isOpen: false
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  handleLogout = (e) => {
    e.preventDefault();
    this.props.LogOut();
  };
  render() {
    const menuClass = `dropdown-menu dropdown-menu-right shadow animated--grow-in${
      this.state.isOpen ? " show" : ""
    }`;
    const { userData } = this.props;

    let navLink;
    if (userData) {
      const { FullName, RoleName, ImageUrl } = userData;
      const fullImageUrl = BaseUrl + "UserImage/" + ImageUrl;
      navLink = (
        <React.Fragment>
          <li className="nav-item dropdown no-arrow">
            <Link
              className="nav-link dropdown-toggle"
              onClick={this.toggleOpen}
            >
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
            </Link>
            <div className={menuClass}>
              {RoleName === "Admin" ? (
                <Link
                  className="dropdown-item"
                  to={"/Dashboard"}
                  onClick={this.toggleOpen}
                >
                  <i className="fas fa-user-cog fa-sm fa-fw mr-2 text-gray-400"></i>
                  Dashboard
                </Link>
              ) : (
                <Link
                  className="dropdown-item"
                  to={"/Account"}
                  onClick={this.toggleOpen}
                >
                  <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  My Account
                </Link>
              )}
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" onClick={this.handleLogout}>
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
              </Link>
            </div>
          </li>
        </React.Fragment>
      );
    } else {
      navLink = (
        <React.Fragment>
          <li className="nav-item">
            <Link className="nav-link" to={"/Account/Login"}>
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/Account/Register"}>
              Register
            </Link>
          </li>
        </React.Fragment>
      );
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            StartUpApp
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">{navLink}</ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.authenticationReducer.user
  };
};

export default connect(mapStateToProps, { LogOut })(Header);
