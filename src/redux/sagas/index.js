import { all, fork } from "redux-saga/effects";

import members from "./members";
import businessReport from "./business-report";

export default function* rootSaga() {
  yield all([fork(members)]);
  yield all([fork(businessReport)]);
}
