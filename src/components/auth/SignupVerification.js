import React, { useEffect, useState } from "react";

import Spinner from "../specialComponents/Spinner";
import { Alert } from "reactstrap";
import "../header/Header.css";

import { signupVerification } from "../../redux/authActionCreators";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const SignupVerification = (props) => {
  const state = useSelector((state) => state.authReducer);
  const isSignupVerificationLoding = state.isSignupVerificationLoding;
  //   const token = state.token;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const urlPath = window.location.pathname
      .split("authenticate/")[1]
      .split("/");
    const data = {
      is_verified: true,
    };
    dispatch(signupVerification(data, urlPath));
    // signupVerification(data, urlPath);
    // document.body.style.paddingRight = "0";
  }, []);

  const height = window.screen.availHeight;

  if (isSignupVerificationLoding) {
    return (
      <div style={{ height: `${height}px`, width: "100%", paddingTop: "5%" }}>
        <Spinner />
      </div>
    );
  } else {
    navigate("/");
  }
};

export default SignupVerification;
