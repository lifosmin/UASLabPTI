import React from "react";
import { Route, Redirect } from "react-router-dom";
import { authCheckStatus } from "./utils/service";

const ProtectedRouter = (props, { ...options }) => {
  const status = authCheckStatus();

  if (status) {
    return <Route {...options}>{props.children}</Route>;
  } else {
    return <Redirect to="/Login" />;
  }
};

export default ProtectedRouter;
