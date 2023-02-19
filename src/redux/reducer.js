import { combineReducers } from 'redux';

import GALLERYITEMS from '../data/GalleryItems';
import SERVICEDETAILSDATA from '../data/ServiceDetailsData';

import * as actionTypes from './actionTypes';



const galleryItemsReducer = (galleryItemsState = GALLERYITEMS, action) =>{
    return galleryItemsState;
}

const ServiceDetailsReducer = (ServiceDetailsState = {SERVICEDETAILSDATA, data:null}, action) =>{
    switch (action.type){
        case actionTypes.DETAIL_DATA:
            const parentId = action.parentId;
            const childId = action.childId;
            const data = ServiceDetailsState.SERVICEDETAILSDATA.filter(i =>{
                return i.id === parentId;
            })[0].services.filter(j =>{
                return j.id === childId;
            })[0].item;

            return{
                data: data,
            }
            
        default:
            return ServiceDetailsState;
    }
    
}



export const Reducer = combineReducers({
    galleryItems: galleryItemsReducer,
    serviceDetails: ServiceDetailsReducer
})