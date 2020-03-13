import React from "react";
import { Route, Switch } from "react-router-dom";

const EmptyLayout = (props) => (
  <div className="auth-wrapper container">
    <div className="auth-inner">{props.children}</div>
  </div>
);

export default EmptyLayout;
