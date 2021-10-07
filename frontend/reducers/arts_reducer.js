import { RECEIVE_ARTS, RECEIVE_ART } from "../actions/art_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";

const artsReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState = {};
  switch (action.type) {
    case RECEIVE_ARTS:

      return action.arts;

    case RECEIVE_ART:
      nextState = Object.assign({}, state);
      nextState[Object.values(action.art)[0].id] = Object.values(action.art)[0];
      return nextState;
      // return action.art;

    case RECEIVE_LIKE:
      if (action.like.likeableType === "Art") {
        nextState = Object.assign({}, state, {[action.like.likeableId]: {likes: (action.like.likeableId.likes + 1)}});
        return nextState;
      }
      return state;

    case REMOVE_LIKE:
      if (action.likeableType === "Art") {
        nextState = Object.assign({}, state, {[action.like.likeableId]: {likes: (action.like.likeableId.likes - 1)}});
        return nextState;
      }
      return state;

    default: return state;
  }
}

export default artsReducer;