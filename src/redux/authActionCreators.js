import * as actionTypes from "./actionTypes";
import jwtDecode from "jwt-decode";
import axios from "axios";

const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: {
      token: token,
      userId: userId,
    },
  };
};

const extrackInfo = (token) => (dispatch) => {
  const decoded = jwtDecode(token);
  const expTime = decoded.exp;
  const user_id = decoded.user_id;
  console.log("expTime: ", new Date(expTime));
  const expirationTime = new Date(expTime * 1000);
  console.log("New Time: ", expirationTime);
  console.log("Date : ", new Date());

  localStorage.setItem("token", token);
  localStorage.setItem("userId", user_id);
  localStorage.setItem("expirationTime", expirationTime);

  dispatch(authSuccess(token, user_id));
};

export const signupUser = (signupData) => (dispatch) => {
  axios
    .post("http://127.0.0.1:8000/api/user/registration/", signupData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log("Signup Response: ", response);
      if (response.status === 200) {
        const token = response.data.token.access;
        dispatch(extrackInfo(token));
      }
    })
    .catch((err) => console.log(err));
};

export const signupVerification = (data, urlPath) => {
  axios
    .post(
      "http://127.0.0.1:8000/api/user/authenticate/" +
        urlPath[0] +
        "/" +
        urlPath[1] +
        "/" +
        urlPath[2] +
        "/",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
};

export const loginUser = (loginData) => (dispatch) => {
  axios
    .post("http://127.0.0.1:8000/api/user/login/", loginData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        const token = response.data.token.access;
        dispatch(extrackInfo(token));
      }
    })
    .catch((err) => console.log(err));
};

export const sendForgetPasswordEmail = (email) => {
  axios
    .post("http://127.0.0.1:8000/api/user/send-reset-password-email/", email, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (response.status === 200) {
        console.log("Send Forget Password - Response: ", response);
      }
    })
    .catch((err) => console.log("Send Forget Password - Error: ", err));
};

export const resetForgetPassword = (passResetData, urlPath) => {
  axios
    .post(
      "http://127.0.0.1:8000/api/user/reset/" +
        urlPath[0] +
        "/" +
        urlPath[1] +
        "/",
      passResetData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => console.log("Reset Forget Pass: ", response))
    .catch((err) => console.log("Reset Forget Pass Err: ", err));
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationTime");
  localStorage.removeItem("userId");
  return {
    type: actionTypes.LOGOUT_USER,
  };
};

export const changePassword = (passwords) => {
  const token = localStorage.getItem("token");
  axios
    .post("http://127.0.0.1:8000/api/user/changepassword/", passwords, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
};

export const authCheck = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) {
    // logout
    dispatch(logoutUser());
  } else {
    const expirationTime = new Date(localStorage.getItem("expirationTime"));
    if (expirationTime <= new Date()) {
      // logout
      dispatch(logoutUser());
    } else {
      // login
      const userId = localStorage.getItem("userId");
      dispatch(authSuccess(token, userId));
    }
  }
};
