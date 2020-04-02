import { createStore, compose, applyMiddleware } from 'redux';
import combineReducers from './redux/reducer/index';
import thunk from 'redux-thunk';
const middleware = [thunk];

export const store = createStore(
    combineReducers,  
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
      )
  );