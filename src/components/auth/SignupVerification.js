import React, { useEffect, useState } from "react";
import axios from "axios";

import { Alert } from "reactstrap";
import "./auth.css";

import { signupVerification } from "../../redux/authActionCreators";
import { useDispatch } from "react-redux";

const SignupVerification = (props) => {
  const urlPath = window.location.pathname.split("authenticate/")[1].split("/");
  const data = {
    is_verified: true,
  };
  //   const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(signupVerification(data, urlPath));
    signupVerification(data, urlPath);
    // document.body.style.paddingRight = "0";
  }, []);

  return <div></div>;
};

export default SignupVerification;
