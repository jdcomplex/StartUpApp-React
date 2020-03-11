import React from "react"
import { Link } from 'react-router-dom';
const MainLayout = props => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>StartUpApp</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/Account/Login"} >Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Account/Register"}>Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {props.children}
    </div>
  )

  export default MainLayout