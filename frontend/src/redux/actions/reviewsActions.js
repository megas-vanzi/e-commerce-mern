import Axios from "axios";

export const REVIEWS_ACTION = "REVIEWS_ACTION";
export const REVIEWS_ACTION_SUCCESS = "REVIEWS_ACTION_SUCCESS";
export const REVIEWS_ACTION_ERROR = "REVIEWS_ACTION_ERROR";

//READ
export function dashboardAction(query) {
  return async (dispatch) => {
    dispatch(performReviewsAction());

    try {
      const data = await Axios.get(`http://localhost:4000/api/${query}`);
      dispatch(performReviewsActionSuccess(data));
    } catch (error) {
      dispatch(performReviewsActionError(true));
    }
  };
}

const performReviewsAction = () => ({
  type: REVIEWS_ACTION,
});

const performReviewsActionSuccess = (response) => ({
  type: REVIEWS_ACTION_SUCCESS,
  payload: response,
});

const performReviewsActionError = (errorState) => ({
  type: REVIEWS_ACTION_ERROR,
  payload: errorState,
});
