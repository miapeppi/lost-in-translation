import { LoginAPI } from "../../components/Login/LoginAPI";
import {
  ACTION_LOGIN_ATTEMPTING,
  ACTION_LOGIN_SUCCESS,
  loginErrorAction,
  loginSuccessAction,
} from "../actions/loginActions";
import { sessionSetAction } from "../actions/sessionActions";

export const loginMiddleware =({ dispatch }) => (next) => (action) => {
  next(action);

  // If attempting login, fetch user information from the API
  if (action.type === ACTION_LOGIN_ATTEMPTING) {
    LoginAPI.login(action.payload)
    .then((profile) => {
      dispatch(loginSuccessAction(profile));
    })
    .catch((error) => {
      dispatch(loginErrorAction(error.message));
    });
  }

  // If login success, set the user information
  if (action.type === ACTION_LOGIN_SUCCESS) {
    dispatch(sessionSetAction(action.payload[0]));
  }
};
