import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import API from './Api';

export function* loginAction(action) {
  try {
     const user = yield call(API.loginUser, action);
     yield put({type: "LOGIN_FETCH_SUCCEEDED"});
  } catch (e) {
     yield put({type: "LOGIN_FETCH_FAILED", message: e.message});
  }
}
export function* loginSaga() {
  yield takeEvery("LOGIN_FETCH_REQUESTED", loginAction);
}