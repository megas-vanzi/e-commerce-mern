import {
  USERS_ACTION,
  USERS_ACTION_SUCCESS,
  USERS_ACTION_ERROR,
} from "../actions/usersActions";

const initialState = {
  users: {},
  error: null,
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case USERS_ACTION:
      return {
        ...state,
      };
    case USERS_ACTION_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case USERS_ACTION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default usersReducer;
