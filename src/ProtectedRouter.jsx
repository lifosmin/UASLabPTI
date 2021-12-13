import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRouter = (props, { options }) => {
  const status = localStorage.getItem("logged");

  if (status) {
    return <Route {...options}>{props.children}</Route>;
  } else {
    return <Redirect to="/Login" />;
  }
};

export default ProtectedRouter;
