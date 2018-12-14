import { combineReducers, createStore } from 'redux';


// Reducers
import auth from "./auth/reducer";

const rootReducer = combineReducers({
  auth
});

const store = createStore(
  rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
