import React, { useState } from "react";
import FacebookLogin from "@greatsumini/react-facebook-login";
import { useDispatch, useSelector } from "react-redux";
import { onError, onSuccess } from "stores/slicer/authSlice";

const FacebookSignUp = () => {
  const dispatch = useDispatch();

  const responseFacebook = (response) => {
    const newuser = {
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    };

    dispatch(onSuccess(newuser));
  };

  return (
    <div>
      <FacebookLogin
        appId="288316403617664"
        onSuccess={(response) => {
          responseFacebook(response);
        }}
        onFail={(error) => {
          dispatch(onError(error));
        }}
      />
    </div>
  );
};

export default FacebookSignUp;
