import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onSuccess, setUser } from "stores/slicer/authSlice";

import { googleLogout } from "@react-oauth/google";
import GoogleSignUp from "./GoogleSignUp";
import MainLayout from "layouts/MainLayout";
import { ReactComponent as Email } from "assets/img/envelope.svg";
import "./signup.css";
import FacebookSignUp from "./FacebookSignUp";

const SignUpComponent = () => {
  const profile = useSelector((state) => state.authData.profile);
  const dispatch = useDispatch();

  const logOut = () => {
    googleLogout();
    dispatch(onSuccess({ name: "", email: "", picture: "" }));
    dispatch(setUser(null));
  };

  return (
    <MainLayout page="signup">
      <div className="signup-wrapper">
        <h1>{profile.email ? "Log out" : "Sign up or log in"}</h1>

        {!profile.email ? (
          <React.Fragment>
            <GoogleSignUp />
            <FacebookSignUp />
            <button style={{ opacity: 0.5 }}>
              {" "}
              <span>
                <Email color="#fff" />
              </span>
              Sign up with email
            </button>
          </React.Fragment>
        ) : (
          <button onClick={logOut}>Log out</button>
        )}
      </div>
    </MainLayout>
  );
};

export default SignUpComponent;
