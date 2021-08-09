import React from "react";
// import "../../index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
const MainLayout = (props) => (
  <React.Fragment>
    <Header />
    <div className="auth-wrapper container">
      <div className="auth-inner">{props.children}</div>
    </div>
  </React.Fragment>
);

export default MainLayout;
