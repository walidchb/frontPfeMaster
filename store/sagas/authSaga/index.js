// store/authSaga.js
import { takeLatest, call, put } from "redux-saga/effects";
import { app, auth } from "../../../app/[locale]/firebase/config";

import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
} from "../../features/auth/authSlice";

function* handleLogin(action) {
  try {
    const userCredential = yield call(
      signInWithEmailAndPassword,
      auth,
      action.payload.email,
      action.payload.password
    );
    sessionStorage.setItem("user", true);
    localStorage.setItem("user", true);
    // console.log("userCredential");
    // console.log({
    //   displayName: userCredential.user.displayName,
    //   email: userCredential.user.email,
    //   uid: userCredential.user.uid,
    // });

    yield put(
      loginSuccess({
        userAuth: {
          displayName: userCredential.user.displayName,
          email: userCredential.user.email,
          uid: userCredential.user.uid,
        },
        user: {
          name: "not yet",
        },
      })
    );
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* handleLogout() {
  try {
    yield call(signOut, auth);
    yield put(logoutSuccess());
  } catch (error) {
    yield put(logoutFailure(error.message));
  }
}

function* authSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
  yield takeLatest(logoutRequest.type, handleLogout);
}

export default authSaga;

// function* handleLogin(action) {
//   try {
//     const userCredential = yield call(
//       signInWithEmailAndPassword,
//       auth,
//       action.payload.email,
//       action.payload.password
//     );
//     yield put(loginSuccess(userCredential.user));
//   } catch (error) {
//     yield put(loginFailure(error.message));
//   }
// }

// function* watchAuthState() {
//   yield call(() => {
//     return new Promise((resolve) => {
//       onAuthStateChanged(auth, (user) => {
//         if (user) {
//           put(loginSuccess(user));
//         }
//         resolve();
//       });
//     });
//   });
// }

// function* authSaga() {
//   yield takeLatest(loginRequest.type, handleLogin);
//   yield call(watchAuthState);
// }

// export default authSaga;
