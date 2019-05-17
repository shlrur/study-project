import { combineReducers } from "redux";

import members from "./members";
import businessReport from "./business-report";

export default combineReducers({ members, businessReport });
