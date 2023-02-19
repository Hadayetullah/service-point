import * as actionTypes from './actionTypes';


export const detailView = (parentId, childId) =>({
    type: actionTypes.DETAIL_DATA,
    parentId: parentId,
    childId: childId
})