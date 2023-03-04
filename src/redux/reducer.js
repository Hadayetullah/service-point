import { combineReducers } from "redux";

import GALLERYITEMS from "../data/GalleryItems";
import * as actionTypes from "./actionTypes";

const galleryState = {
  serviceDetailsData: GALLERYITEMS,
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

export const Reducer = combineReducers({
  galleryItems: galleryItemsReducer,
});
