import {
  GET_PRODUCTS,
  GET_CATEGORIES,
  GET_PRODUCTS_BY_NAME,
  GET_PRODUCTS_BY_CATEGORY,
  GET_PRODUCTS_BY_PRICE,
  GET_PRODUCTS_BY_PRICE_AND_CATEGORY,
  GET_PRODUCTS_BY_PRICE_AND_NAME,
  GET_PRODUCTS_BY_CATEGORY_AND_NAME,
  GET_PRODUCTS_BY_PRICE_AND_CATEGORY_AND_NAME,
  GET_PRODUCTS_BY_PRICE_AND_CATEGORY_AND_NAME_AND_PRICE,
  GET_PRODUCTS_BY_PRICE_AND_CATEGORY_AND_NAME_AND_PRICE_AND_CATEGORY,
  POST_PRODUCTS,
  POST_USER,
  POST_LOGIN,
  POST_LOGOUT,
} from "../types/types";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  product: [],
  categories: [],
  user: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        product: action.payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_PRODUCTS_BY_NAME:
      return {
        ...state,
        product: action.payload,
      };
    case GET_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        product: action.payload,
      };

    case GET_PRODUCTS_BY_PRICE:
      return {
        ...state,
        products: action.payload,
      };
    case GET_PRODUCTS_BY_PRICE_AND_CATEGORY:
      return {
        ...state,
        products: action.payload,
      };
    case GET_PRODUCTS_BY_PRICE_AND_NAME:
      return {
        ...state,
        products: action.payload,
      };
    case GET_PRODUCTS_BY_CATEGORY_AND_NAME:
      return {
        ...state,
        products: action.payload,
      };
    case GET_PRODUCTS_BY_PRICE_AND_CATEGORY_AND_NAME:
      return {
        ...state,
        products: action.payload,
      };
    case GET_PRODUCTS_BY_PRICE_AND_CATEGORY_AND_NAME_AND_PRICE:
      return {
        ...state,
        products: action.payload,
      };
    case GET_PRODUCTS_BY_PRICE_AND_CATEGORY_AND_NAME_AND_PRICE_AND_CATEGORY:
      return {
        ...state,
        products: action.payload,
      };
    case POST_PRODUCTS:
      return {
        ...state,
        product: action.payload,
      };

    case POST_USER:
      return {
        ...state,
        user: action.payload,
      };
    case POST_LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case POST_LOGOUT:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
