import React from "react";
import { Route, Redirect } from "react-router-dom";
import { authCheckStatus } from "./utils/service";

const ProtectedRouter = (props, { ...options }) => {
  const authStatus = authCheckStatus();

  if (authStatus.status) {
    return <Route {...options}>{props.children}</Route>;
  } else {
    return (
      <Redirect
        to={{
          pathname: "/Login",
          state: {
            status: "error",
            message: authStatus.message,
          },
        }}
      />
    );
  }
};

export default ProtectedRouter;
