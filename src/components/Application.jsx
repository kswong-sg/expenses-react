import React, { useContext } from "react";
import { Router } from "@reach/router";
import Login from "./users/Login";
import Register from "./users/Register";
import ProfilePage from "./users/ProfilePage";
import PasswordReset from "./users/PasswordReset";
import { UserContext } from "./Providers/UserProvider";

function Application() {
  const user = useContext(UserContext);
  return (
        user ?
        <ProfilePage />
      :
        <Router>
          <Login path="login" />
          <Register path="/" />
          <PasswordReset path = "passwordReset" />
        </Router>

  );
}
export default Application;
