import { combineReducers } from "redux";

import GALLERYITEMS from "../data/GalleryItems";
import * as actionTypes from "./actionTypes";

const galleryState = {
  serviceDetailsData: GALLERYITEMS,
};

// State for User Validation
const authState = {
  token: null,
  userId: null,
  signupLoading: false,
  // isSignupSuccess: false,
  isSignupSuccessMsg: null,
  isSignupVerificationLoding: false,
  // isSignupVerificationSuccess: false,
  isSignupVerificationMsg: null,
};

const galleryItemsReducer = (galleryItemsState = galleryState, action) => {
  switch (action.type) {
    case actionTypes.DETAIL_DATA:
      localStorage.setItem("parentId", action.payload.parentId);
      localStorage.setItem("childId", action.payload.childId);

      return {
        ...galleryItemsState,
      };

    default:
      return galleryItemsState;
  }
};

// Reducer for Authorization, Authentication, Change Password and Reset Password
const authReducer = (state = authState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
      };
    case actionTypes.SIGNUP_LOADING:
      return {
        ...state,
        signupLoading: true,
      };
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        signupLoading: false,
        // isSignupSuccess: true,
      };
    case actionTypes.SIGNUP_VERIFICATION_LOADING:
      return {
        ...state,
        isSignupVerificationLoding: true,
      };
    case actionTypes.SIGNUP_VERIFICATION_SUCCESS:
      return {
        ...state,
        isSignupVerificationLoding: false,
        token: action.payload.token,
        userId: action.payload.userId,
      };
    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        token: null,
        userId: null,
      };
    default:
      return state;
  }
};

// Combined Reducers
export const Reducer = combineReducers({
  galleryItems: galleryItemsReducer,
  authReducer: authReducer,
});
