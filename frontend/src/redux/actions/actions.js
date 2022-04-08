import axios from "axios";
import {
  GET_PRODUCTS,
  GET_CATEGORIES,
  GET_PRODUCTS_BY_NAME,
  GET_PRODUCTS_BY_CATEGORY,
  POST_USER,
  POST_LOGIN,
  POST_LOGOUT,
  GET_PRODUCTS_ID,
  /*  DELETE_PRODUCT, */
  /*  GET_PRODUCTS_BY_PRICE,
  GET_PRODUCTS_BY_PRICE_AND_CATEGORY,
  GET_PRODUCTS_BY_PRICE_AND_NAME,
  GET_PRODUCTS_BY_CATEGORY_AND_NAME,
  GET_PRODUCTS_BY_PRICE_AND_CATEGORY_AND_NAME,
  GET_PRODUCTS_BY_PRICE_AND_CATEGORY_AND_NAME_AND_PRICE,
  GET_PRODUCTS_BY_PRICE_AND_CATEGORY_AND_NAME_AND_PRICE_AND_CATEGORY, */
} from "../types/types";

export const getProducts = () => async (dispatch) => {
  const products = await axios.get(
    "https://e-commerce-g60.herokuapp.com/api/product/list"
  );
  dispatch({
    type: GET_PRODUCTS,
    payload: products.data,
  });
};

export const getCategories = () => async (dispatch) => {
  const categories = await axios.get(
    "https://e-commerce-g60.herokuapp.com/api/category/list"
  );
  dispatch({
    type: GET_CATEGORIES,
    payload: categories.data,
  });
};

export const getProductsById = (id) => async (dispatch) => {
  const products = await axios.get(
    `https://e-commerce-g60.herokuapp.com/api/product/query/${id}`
  );
  dispatch({
    type: GET_PRODUCTS_ID,
    payload: products.data,
  });
};

export const getProductsByName = (name) => async (dispatch) => {
  const products = await axios.get(
    `https://e-commerce-g60.herokuapp.com/api/product/query-name/${name}`
  );
  dispatch({
    type: GET_PRODUCTS_BY_NAME,
    payload: products.data,
  });
};

export const getProductsByCategory = (category) => async (dispatch) => {
  const products = await axios.get(
    `https://e-commerce-g60.herokuapp.com/api/category/query-name/${category}`
  );
  dispatch({
    type: GET_PRODUCTS_BY_CATEGORY,
    payload: products.data,
  });
};

export const postProducts = (product) => async (dispatch) => {
  const res = await axios.post(
    `https://e-commerce-g60.herokuapp.com/api/product/add`,
    product
  );
  dispatch({
    type: GET_PRODUCTS,
    payload: res.data,
  });
};

export const postUser = (user) => async (dispatch) => {
  const res = await axios.post(
    `https://e-commerce-g60.herokuapp.com/api/users`,
    user
  );
  localStorage.setItem("user", JSON.stringify(res.data));
  dispatch({
    type: POST_USER,
    payload: res.data,
  });
};

export const postLogin = (user) => async (dispatch) => {
  const res = await axios.post(
    `https://e-commerce-g60.herokuapp.com/api/auth/login`,
    user
  );
  localStorage.setItem("user", JSON.stringify(res.data));
  dispatch({
    type: POST_LOGIN,
    payload: res.data,
  });
};

export const postLogout = () => async (dispatch) => {
  const res = await axios.post(
    `https://e-commerce-g60.herokuapp.com/auth/logout`
  );
  dispatch({
    type: POST_LOGOUT,
    payload: res.data,
  });
};

/* export const deleteProduct = (id) => async dispatch => {
    const res = await axios.delete(
      `https://e-commerce-g60.herokuapp.com/api/product/delete/${id}`
    );
    dispatch({
        type: DELETE_PRODUCT,
        payload: res.data
    })
    
}
 */
