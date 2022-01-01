import Axios from "axios";

export const DASHBOARD_ACTION = "DASHBOARD_ACTION";
export const DASHBOARD_ACTION_SUCCESS = "DASHBOARD_ACTION_SUCCESS";
export const DASHBOARD_ACTION_ERROR = "DASHBOARD_ACTION_ERROR";

//READ
export function dashboardAction(query) {
  return async (dispatch) => {
    dispatch(performDashboardAction());

    try {
      const data = await Axios.get(`http://localhost:4000/api/${query}`);
      dispatch(performDashboardActionSuccess(data));
    } catch (error) {
      dispatch(performDashboardActionError(true));
    }
  };
}

const performDashboardAction = () => ({
  type: DASHBOARD_ACTION,
});

const performDashboardActionSuccess = (response) => ({
  type: DASHBOARD_ACTION_SUCCESS,
  payload: response,
});

const performDashboardActionError = (errorState) => ({
  type: DASHBOARD_ACTION_ERROR,
  payload: errorState,
});
