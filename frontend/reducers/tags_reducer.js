import { RECEIVE_ART, RECEIVE_ARTS } from "../actions/art_actions";
import { RECEIVE_TAGS } from "../actions/tag_actions";

const tagsReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState = {};
  switch (action.type) {
    case RECEIVE_TAGS:
      return action.tags;

    case RECEIVE_ARTS:
      // nextState = Object.assign({}, state, )
      // console.log(action.art.tags);
      return action.tags;

    case RECEIVE_ART:
      if (!action.art.tags) {return state;}
      nextState = Object.assign({}, state, action.art.tags);
      if (!nextState.mediums) {nextState.mediums = {}}
      if (!nextState.subjectMatters) {nextState.subjectMatters = {}}
      return nextState;

    default: return state;
  }
};

export default tagsReducer;