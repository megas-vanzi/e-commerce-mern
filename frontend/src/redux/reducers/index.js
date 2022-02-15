import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import ordersReducer from "./ordersReducer";
import productsReducer from "./productsReducer";

export default combineReducers({
  cart: cartReducer,
  orders: ordersReducer,
  products: productsReducer,
});
