import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';

 class Header extends Component {
     
    render() {
        const {userData,isLoggedIn}   =   this.props;
        return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>StartUpApp</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/Account/Login"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Account/Register"}>Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        )
    }
}

const mapStateToProps =state=>{
    return {
            userData:state.authenticationReducer.user,
            isLoggedIn:state.authenticationReducer.isLoggedIn
    }
}

export default connect(mapStateToProps) (Header);
