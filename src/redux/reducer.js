import { combineReducers } from 'redux';

import GALLERYITEMS from '../data/GalleryItems';
import SERVICEDETAILSDATA from '../data/ServiceDetailsData';

import * as actionTypes from './actionTypes';



const galleryItemsReducer = (galleryItemsState = GALLERYITEMS, action) =>{
    return galleryItemsState;
}


const ServiceDetailsState = {
    ServiceDetailsDate: SERVICEDETAILSDATA,
}

const ServiceDetailsReducer = (serviceState = ServiceDetailsState, action) =>{
    switch (action.type){
        case actionTypes.DETAIL_DATA:
            const parentId = action.parentId;
            const childId = action.childId;
            const data = serviceState.ServiceDetailsDate.filter(i =>{
                return i.id === parentId;
            })[0].services.filter(j =>{
                return j.id === childId;
            })[0];


            localStorage.setItem("parentId", parentId);
            localStorage.setItem("childId", childId);

            // console.log("Reducer : ",data);

            return {
                ...serviceState
            };
            
        default:
            return serviceState;
    }
    
}



export const Reducer = combineReducers({
    galleryItems: galleryItemsReducer,
    serviceDetails: ServiceDetailsReducer
})