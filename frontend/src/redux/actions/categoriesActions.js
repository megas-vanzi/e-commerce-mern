import Axios from "axios";

export const CATEGORIES_ACTION = "CATEGORIES_ACTION";
export const CATEGORIES_ACTION_SUCCESS = "CATEGORIES_ACTION_SUCCESS";
export const CATEGORIES_ACTION_ERROR = "CATEGORIES_ACTION_ERROR";

//READ
export function dashboardAction(query) {
  return async (dispatch) => {
    dispatch(performCategoriesAction());

    try {
      const data = await Axios.get(`http://localhost:4000/api/${query}`);
      dispatch(performCategoriesActionSuccess(data));
    } catch (error) {
      dispatch(performCategoriesActionError(true));
    }
  };
}

const performCategoriesAction = () => ({
  type: CATEGORIES_ACTION,
});

const performCategoriesActionSuccess = (response) => ({
  type: CATEGORIES_ACTION_SUCCESS,
  payload: response,
});

const performCategoriesActionError = (errorState) => ({
  type: CATEGORIES_ACTION_ERROR,
  payload: errorState,
});
