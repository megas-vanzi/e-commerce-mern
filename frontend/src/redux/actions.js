import Axios from "axios";

export const ACTION = "ACTION";
export const ACTION_SUCCESS = "ACTION_SUCCESS";
export const ACTION_ERROR = "ACTION_ERROR";

//READ
export function goAction(query) {
  return async (dispatch) => {
    dispatch(performAction());

    try {
      const data = await Axios.get(`http://localhost:4000/api/${query}`);
      dispatch(performActionSuccess(data));
    } catch (error) {
      dispatch(performActionError(true));
    }
  };
}

const performAction = () => ({
  type: ACTION,
});

const performActionSuccess = (response) => ({
  type: ACTION_SUCCESS,
  payload: response,
});

const performActionError = (errorState) => ({
  type: ACTION_ERROR,
  payload: errorState,
});
