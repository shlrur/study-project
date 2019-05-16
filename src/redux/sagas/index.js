import { all, fork } from "redux-saga/effects";

import members from "./members";

export default function* rootSaga() {
    yield all([fork(members)]);
}
