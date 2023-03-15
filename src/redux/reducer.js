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
};

const galleryItemsReducer = (galleryItemsState = galleryState, action) => {
  switch (action.type) {
    case actionTypes.DETAIL_DATA:
      localStorage.setItem("parentId", action.parentId);
      localStorage.setItem("childId", action.childId);

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
