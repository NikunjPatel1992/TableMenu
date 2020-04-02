import { combineReducers } from 'redux';
import userDetails from './UserDetails';
import menu from './Menu';

const rootReducer = combineReducers({
    userDetails,
    menu
});

export default rootReducer;