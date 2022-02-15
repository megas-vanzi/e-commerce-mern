import {
  ORDERS_ACTION,
  ORDERS_ACTION_SUCCESS,
  ORDERS_ACTION_ERROR,
} from "../actions/ordersActions";

const initialState = {
  orders: {},
  error: null,
};

function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case ORDERS_ACTION:
      return {
        ...state,
      };
    case ORDERS_ACTION_SUCCESS:
      return {
        ...state,
        orders: action.payload,
      };
    case ORDERS_ACTION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default ordersReducer;
