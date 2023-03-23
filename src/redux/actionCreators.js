import * as actionTypes from "./actionTypes";

export const detailView = (parentId, childId) => ({
  type: actionTypes.DETAIL_DATA,
  payload: {
    parentId: parentId,
    childId: childId,
  },
});
