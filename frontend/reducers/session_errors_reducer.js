import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from "../actions/session_actions";
import { TOGGLE_SIGNIN } from "../util/ui_api_util";

const _nullErrors = [];

const sessionErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_CURRENT_USER: case CLEAR_ERRORS: case TOGGLE_SIGNIN:
      return _nullErrors;

    case RECEIVE_SESSION_ERRORS:
      return action.errors;

    default:
      return _nullErrors;
  }
}

export default sessionErrorsReducer;

