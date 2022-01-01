import {
  DASHBOARD_ACTION,
  DASHBOARD_ACTION_SUCCESS,
  DASHBOARD_ACTION_ERROR,
} from "../actions/dashboardActions";

const initialState = {
  dashboard: {},
  error: null,
};

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case DASHBOARD_ACTION:
      return {
        ...state,
      };
    case DASHBOARD_ACTION_SUCCESS:
      return {
        ...state,
        dashboard: action.payload,
      };
    case DASHBOARD_ACTION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default dashboardReducer;
