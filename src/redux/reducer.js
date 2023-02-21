import { combineReducers } from 'redux';

import GALLERYITEMS from '../data/GalleryItems';
import SERVICEDETAILSDATA from '../data/ServiceDetailsData';

import * as actionTypes from './actionTypes';



const galleryItemsReducer = (galleryItemsState = GALLERYITEMS, action) =>{
    return galleryItemsState;
}

const ServiceDetailsReducer = (serviceDetailsState = SERVICEDETAILSDATA, action) =>{
    switch (action.type){
        case actionTypes.DETAIL_DATA:
            const parentId = action.parentId;
            const childId = action.childId;
            const data = serviceDetailsState.filter(i =>{
                return i.id === parentId;
            })[0].services.filter(j =>{
                return j.id === childId;
            })[0];


            localStorage.setItem("item",data.item);

            // console.log(data);

            return serviceDetailsState
            
        default:
            return serviceDetailsState;
    }
    
}



export const Reducer = combineReducers({
    galleryItems: galleryItemsReducer,
    serviceDetails: ServiceDetailsReducer
})