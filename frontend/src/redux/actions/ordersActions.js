import Axios from "axios";

export const ORDERS_ACTION = "ORDERS_ACTION";
export const ORDERS_ACTION_SUCCESS = "ORDERS_ACTION_SUCCESS";
export const ORDERS_ACTION_ERROR = "ORDERS_ACTION_ERROR";

//READ
export function dashboardAction(query) {
  return async (dispatch) => {
    dispatch(performOrdersAction());

    try {
      const data = await Axios.get(`http://localhost:4000/api/${query}`);
      dispatch(performOrdersActionSuccess(data));
    } catch (error) {
      dispatch(performOrdersActionError(true));
    }
  };
}

const performOrdersAction = () => ({
  type: ORDERS_ACTION,
});

const performOrdersActionSuccess = (response) => ({
  type: ORDERS_ACTION_SUCCESS,
  payload: response,
});

const performOrdersActionError = (errorState) => ({
  type: ORDERS_ACTION_ERROR,
  payload: errorState,
});
