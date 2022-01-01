import { ACTION, ACTION_SUCCESS, ACTION_ERROR } from "../actions/dataActions";

const initialState = {
  data: {},
  error: null,
};

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION:
      return {
        ...state,
      };
    case ACTION_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case ACTION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default dataReducer;
