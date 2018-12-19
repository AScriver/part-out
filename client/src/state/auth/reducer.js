import { handleActions } from "redux-actions";
import { signinReq, signoutReq, updateAuth } from "./actions";

const defaultState = {
  authenticated: false,
  email: null,
  username: null,
  profileImg: null,
  id: null,
  createdAt: null,
  updatedAt: null
};

const authReducer = handleActions({
  [signinReq]: (state, action) => {
    return {
      username: action.payload.username,
      authenticated: action.payload.authenticated,
      email: action.payload.email,
      profileImg: action.payload.profileImg,
      id: action.payload.id,
      createdAt: action.payload.createdAt,
      updatedAt: action.payload.updatedAt
    };
  },
  [signoutReq]: (state, action) => defaultState,
  [updateAuth]: (state, action) => action.payload
}, defaultState);

export default authReducer;
