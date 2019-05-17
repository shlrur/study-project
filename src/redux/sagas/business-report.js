import { all, takeEvery, put, call } from "redux-saga/effects";

import {
  types,
  getBusinessReportListSuccess,
  getBusinessReportListFailure
} from "../actions/business-report";

import { getReportList } from "../../mock-data/api";

function* getBusinessReportListSaga({ team, person, dateRange }) {
  try {
    let reportList = [];

    console.log("date range at saga", dateRange);

    reportList = yield call(getReportList, team.id, person.id, dateRange);

    yield put(getBusinessReportListSuccess(reportList));
  } catch (err) {
    console.log(err);
    yield put(getBusinessReportListFailure(err));
  }
}

export default function* businessReportRootSaga() {
  yield all([
    takeEvery(types.GET_BUSINESS_REPORT_LIST.REQUEST, getBusinessReportListSaga)
  ]);
}
