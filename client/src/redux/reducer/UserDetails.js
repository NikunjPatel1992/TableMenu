import {
    FETCH_USER_DETAILS_BEGIN,
    FETCH_USER_DETAILS_SUCCESS,
    FETCH_USER_DETAILS_ERROR,
  } from '../constants/action-types';
  
  export const initialState = {
    userInfo: undefined,
    status: null
  };
  
  // export default (state = initialState, action) => {
  //   switch (action.type) {
  //     case FETCH_USER_DETAILS_BEGIN: 
  //     return {
  //       ...state,
  //       booksInfo: [...state.booksInfo],
  //       status: 'pending'
  //     };
  //     case FETCH_USER_DETAILS_SUCCESS: 
  //     return {
  //       ...state,
  //       booksInfo: [action.payload],
  //       status: 'success'
  //     };
  //     case FETCH_USER_DETAILS_ERROR: 
  //     return {
  //       ...state, status: 'error'
  //     };
  //     default:
  //       return state;
  //   }
  // };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USER_DETAILS_BEGIN: {
        const newState = { ...state, status: 'pending', userInfo: [] };
  
        return newState;
      }
      case FETCH_USER_DETAILS_SUCCESS: {
        const newState = { ...state, userInfo: action.payload.data ,
          status: 'success' };
  
        return newState;
      }
      case FETCH_USER_DETAILS_ERROR: {
        const newState = { ...state, status: 'error' };
  
        return newState;
      }
      default:
        return state;
    }
  };