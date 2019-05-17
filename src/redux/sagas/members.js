import { all, takeEvery, put, call } from "redux-saga/effects";

import {
  types,
  getLabMemberInfoSuccess,
  getLabMemberInfoFailure
} from "../actions/members";

import { getTeamList, getPeopleList } from "../../mock-data/api";

function* getLabMemberInfoSaga() {
  try {
    let teamList = [],
      peopleList = [];

    teamList = yield call(getTeamList);
    peopleList = yield call(getPeopleList);

    yield put(getLabMemberInfoSuccess(teamList, peopleList));
  } catch (err) {
    console.log(err);
    yield put(getLabMemberInfoFailure(err));
  }
}

export default function* membersRootSaga() {
  yield all([
    takeEvery(types.GET_LAB_MEMBER_INFO.REQUEST, getLabMemberInfoSaga)
  ]);
}
