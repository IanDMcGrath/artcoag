import * as SessionApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

// regular action creators

const receiveCurrentUser = currentUser => {
  return {
  type: RECEIVE_CURRENT_USER,
  currentUser
  }
};

const logoutCurrentUser = () => {
  // console.log("logged out!")
  return {
  type: LOGOUT_CURRENT_USER
  }
};

const receiveErrors = errors => {
  return {
  type: RECEIVE_SESSION_ERRORS,
  errors
  }
};

// thunk action creators

export const login = user => dispatch => (
  SessionApiUtil.login(user).then(user => dispatch(receiveCurrentUser(user)),
  errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const logout = () => dispatch => (
  SessionApiUtil.logout().then(() => dispatch(logoutCurrentUser()),
  errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const signup = user => dispatch => (
  SessionApiUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)),
  errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const clearSessionErrors = () => dispatch => (
  dispatch({type: CLEAR_ERRORS})
);