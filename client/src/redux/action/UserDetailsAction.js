import axios from 'axios';
import {
  FETCH_USER_DETAILS_BEGIN,
  FETCH_USER_DETAILS_SUCCESS,
  FETCH_USER_DETAILS_ERROR,
} from '../constants/action-types';

export const fetchUserDetails = () => {
  const url = '/api/user'

  return (dispatch) => {
    dispatch({type: FETCH_USER_DETAILS_BEGIN});
    return axios.get(url)
    .then((res) => {
      dispatch({ type: FETCH_USER_DETAILS_SUCCESS, payload: res });
    })
    .catch(() => {
      dispatch({ type: FETCH_USER_DETAILS_ERROR });
    });
  }
}