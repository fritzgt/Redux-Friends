import React from "react";

import { Route, Redirect } from " react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route>
      {...rest}
      render=
      {() => {
        if (localStorage.getItem("token")) {
          return <Component />;
        } else {
          console.log("redirect to login");
          return <Redirect to="/login" />;
        }
      }}
    </Route>
  );
};

export default PrivateRoute;
