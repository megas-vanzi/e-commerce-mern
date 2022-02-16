import {
  REVIEWS_ACTION,
  REVIEWS_ACTION_SUCCESS,
  REVIEWS_ACTION_ERROR,
} from "../actions/reviewsActions";

const initialState = {
  reviews: {},
  error: null,
};

function reviewsReducer(state = initialState, action) {
  switch (action.type) {
    case REVIEWS_ACTION:
      return {
        ...state,
      };
    case REVIEWS_ACTION_SUCCESS:
      return {
        ...state,
        reviews: action.payload,
      };
    case REVIEWS_ACTION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default reviewsReducer;
