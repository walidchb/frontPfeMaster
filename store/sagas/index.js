import { all } from "redux-saga/effects";

import mainSaga from "./mainSaga/index.js";
import authSaga from "./authSaga/index.js";

// import your sagas here

export default function* rootSaga() {
  yield all([mainSaga(), authSaga()]);
}
