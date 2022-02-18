import Axios from "axios";

export const CART_ACTION = "CART_ACTION";
export const CART_ACTION_SUCCESS = "CART_ACTION_SUCCESS";
export const CART_ACTION_ERROR = "CART_ACTION_ERROR";

//READ
export function dashboardAction(query) {
  return async (dispatch) => {
    dispatch(performCartAction());

    try {
      const data = await Axios.get(`http://localhost:4000/api/${query}`);
      dispatch(performCartActionSuccess(data));
    } catch (error) {
      dispatch(performCartActionError(true));
    }
  };
}

const performCartAction = () => ({
  type: CART_ACTION,
});

const performCartActionSuccess = (response) => ({
  type: CART_ACTION_SUCCESS,
  payload: response,
});

const performCartActionError = (errorState) => ({
  type: CART_ACTION_ERROR,
  payload: errorState,
});
