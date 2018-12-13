import { handleActions } from "redux-actions";
import { signinReq, signoutReq, updateAuth } from "./actions";

const defaultState = {
  authenticated: false,
  username: null
};

const authReducer = handleActions({
  [signinReq]: (state, action) => {
    return {
      username: action.payload.username,
      authenticated: action.payload.authenticated,
    };
  },
  [signoutReq]: (state, action) => defaultState,
  [updateAuth]: (state, action) => action.payload
}, defaultState);

export default authReducer;
