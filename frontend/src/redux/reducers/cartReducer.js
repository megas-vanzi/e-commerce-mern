import {
  CART_ACTION,
  CART_ACTION_SUCCESS,
  CART_ACTION_ERROR,
} from "../actions/cartActions";

const initialState = {
  cart: {},
  error: null,
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CART_ACTION:
      return {
        ...state,
      };
    case CART_ACTION_SUCCESS:
      return {
        ...state,
        cart: action.payload,
      };
    case CART_ACTION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default cartReducer;
