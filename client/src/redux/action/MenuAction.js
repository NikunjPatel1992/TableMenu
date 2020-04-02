import axios from 'axios';
import {
  FETCH_MENU_DETAILS_BEGIN,
  FETCH_MENU_DETAILS_SUCCESS,
  FETCH_MENU_DETAILS_ERROR,
} from '../constants/action-types';

export const fetchMenu = () => {
  const url = '/api/menu'

  return (dispatch) => {
    dispatch({type: FETCH_MENU_DETAILS_BEGIN});
    return axios.get(url)
    .then((res) => {
      dispatch({ type: FETCH_MENU_DETAILS_SUCCESS, payload: res });
    })
    .catch(() => {
      dispatch({ type: FETCH_MENU_DETAILS_ERROR });
    });
  }
}