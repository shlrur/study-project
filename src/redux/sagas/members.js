import { all, takeEvery, put } from "redux-saga/effects";

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

        yield put(getLabMemberInfoSuccess(teamList, peopleList));
    } catch (err) {
        console.err(err);
        yield put(getLabMemberInfoFailure(err));
    }
}

export default function* membersRootSaga() {
    yield all([
        takeEvery(types.GET_LAB_MEMBER_INFO.REQUEST, getLabMemberInfoSaga)
    ]);
}
