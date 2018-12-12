import { handleActions } from "redux-actions";
import { signin, signout } from "./actions";

const defaultState = {
  authenticated: false,
  token: "",
  user: null
};

const authReducer = handleActions({
  [signin]: (state, action) => {
    return {
      user: action.payload.user,
      authenticated: true,
      token: action.payload.token
    };
  },
  [signout]: (state, action) => defaultState
}, defaultState);

export default authReducer;
