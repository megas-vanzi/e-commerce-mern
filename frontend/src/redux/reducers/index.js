import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import categoriesReducer from "./categoriesReducer";
import ordersReducer from "./ordersReducer";
import productsReducer from "./productsReducer";
import reviewsReducer from "./reviewsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  cart: cartReducer,
  orders: ordersReducer,
  products: productsReducer,
  categories: categoriesReducer,
  reviews: reviewsReducer,
  users: usersReducer,
});
