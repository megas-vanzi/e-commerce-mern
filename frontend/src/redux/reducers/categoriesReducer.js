import {
  CATEGORIES_ACTION,
  CATEGORIES_ACTION_SUCCESS,
  CATEGORIES_ACTION_ERROR,
} from "../actions/categoriesActions";

const initialState = {
  categories: {},
  error: null,
};

function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORIES_ACTION:
      return {
        ...state,
      };
    case CATEGORIES_ACTION_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };
    case CATEGORIES_ACTION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default categoriesReducer;
