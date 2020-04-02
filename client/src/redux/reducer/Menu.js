import {
    FETCH_MENU_DETAILS_BEGIN,
    FETCH_MENU_DETAILS_SUCCESS,
    FETCH_MENU_DETAILS_ERROR,
  } from '../constants/action-types';
  
  export const initialState = {
    menuInfo: undefined,
    status: null
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MENU_DETAILS_BEGIN: {
        const newState = { ...state, status: 'pending', menuInfo: [] };
  
        return newState;
      }
      case FETCH_MENU_DETAILS_SUCCESS: {
        const newState = { ...state, menuInfo: action.payload.data ,
          status: 'success' };
  
        return newState;
      }
      case FETCH_MENU_DETAILS_ERROR: {
        const newState = { ...state, status: 'error' };
  
        return newState;
      }
      default:
        return state;
    }
  };