import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onSuccess, onError, setUser } from "stores/slicer/authSlice";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const GoogleSignUp = () => {
  const user = useSelector((state) => state.authData.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          dispatch(onSuccess(res.data));
        })
        .catch((err) => dispatch(onError(err)));
    }
  }, [user]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => dispatch(setUser(codeResponse)),
    onError: (error) => dispatch(onError(error)),
  });

  // log out function to log the user out of google and set the profile array to null

  return (
    <div>
      <button onClick={() => login()}>Sign in with Google 🚀 </button>
    </div>
  );
};

export default GoogleSignUp;
