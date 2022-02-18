import Axios from "axios";

export const USERS_ACTION = "USERS_ACTION";
export const USERS_ACTION_SUCCESS = "USERS_ACTION_SUCCESS";
export const USERS_ACTION_ERROR = "USERS_ACTION_ERROR";

//READ
export function dashboardAction(query) {
  return async (dispatch) => {
    dispatch(performUsersAction());

    try {
      const data = await Axios.get(`http://localhost:4000/api/${query}`);
      dispatch(performUsersActionSuccess(data));
    } catch (error) {
      dispatch(performUsersActionError(true));
    }
  };
}

const performUsersAction = () => ({
  type: USERS_ACTION,
});

const performUsersActionSuccess = (response) => ({
  type: USERS_ACTION_SUCCESS,
  payload: response,
});

const performUsersActionError = (errorState) => ({
  type: USERS_ACTION_ERROR,
  payload: errorState,
});
