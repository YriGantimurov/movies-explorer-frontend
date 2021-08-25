import React from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "./UserContext";

const ProtectedRoute = ({ component: Component, ...props }) => {

  const user = React.useContext(UserContext);
  return (
    <Route>
      {() =>
        props.loggedIn ? <Component {...props} user={user}/> : <Redirect to="./" />
      }
    </Route>
  );
};

export default ProtectedRoute; 