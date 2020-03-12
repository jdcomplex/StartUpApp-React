import React from "react";
import Header from "./Header";
const MainLayout = (props) => (
  <div>
    <Header />
    {props.children}
  </div>
);

export default MainLayout;
