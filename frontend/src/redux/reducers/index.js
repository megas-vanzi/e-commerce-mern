import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import dashboardReducer from "./dashboardReducer";

export default combineReducers({
  data: dataReducer,
  dashboard: dashboardReducer,
});
