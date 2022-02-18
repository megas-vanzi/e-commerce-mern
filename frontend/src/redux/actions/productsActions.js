import Axios from "axios";

export const PRODUCTS_ACTION = "PRODUCTS_ACTION";
export const PRODUCTS_ACTION_SUCCESS = "PRODUCTS_ACTION_SUCCESS";
export const PRODUCTS_ACTION_ERROR = "PRODUCTS_ACTION_ERROR";

//READ
export function dashboardAction(query) {
  return async (dispatch) => {
    dispatch(performProductsAction());

    try {
      const data = await Axios.get(`http://localhost:4000/api/${query}`);
      dispatch(performProductsActionSuccess(data));
    } catch (error) {
      dispatch(performProductsActionError(true));
    }
  };
}

const performProductsAction = () => ({
  type: PRODUCTS_ACTION,
});

const performProductsActionSuccess = (response) => ({
  type: PRODUCTS_ACTION_SUCCESS,
  payload: response,
});

const performProductsActionError = (errorState) => ({
  type: PRODUCTS_ACTION_ERROR,
  payload: errorState,
});
