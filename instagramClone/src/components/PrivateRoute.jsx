import React from "react";
import { Navigate, useLocation } from "react-router";

function PrivateRoute({ children }) {
  const user = false;

  if (!user) {
    return (
      <Navigate
        to="/auth/login"
        replace={true}
        state={{
          return_url: location.pathname,
        }}
      />
    );
  }
  return children;
}

export default PrivateRoute;
