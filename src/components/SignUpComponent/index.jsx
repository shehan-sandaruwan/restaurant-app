import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onSuccess, setUser } from "stores/slicer/authSlice";

import { googleLogout } from "@react-oauth/google";
import GoogleSignUp from "./GoogleSignUp";
import MainLayout from "layouts/MainLayout";
import { ReactComponent as Email } from "assets/img/envelope.svg";
import "./signup.css";
import FacebookSignUp from "./FacebookSignUp";
import { ReactComponent as ArrowLeft } from "assets/img/arrow-left.svg";
import { Link } from "react-router-dom";

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
          <div className="back-to-home">
            <span>
              <ArrowLeft color="#00a396" />
              <Link to={"/"}>Back to home</Link>
            </span>
            <button onClick={logOut}>Log out</button>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default SignUpComponent;
