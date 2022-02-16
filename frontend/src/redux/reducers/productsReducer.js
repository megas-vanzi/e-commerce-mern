import {
  PRODUCTS_ACTION,
  PRODUCTS_ACTION_SUCCESS,
  PRODUCTS_ACTION_ERROR,
} from "../actions/productsActions";

const initialState = {
  products: {},
  error: null,
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCTS_ACTION:
      return {
        ...state,
      };
    case PRODUCTS_ACTION_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    case PRODUCTS_ACTION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default productsReducer;
