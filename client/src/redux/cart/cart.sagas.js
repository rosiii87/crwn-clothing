import { all, call, takeLatest, put } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import { clearCart } from '../cart/cart.actions';

// innital gen. f.
export function* clearCartOnSignOut() {
  yield put(clearCart());
}

// final saga gen. F
export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

// connecting sagas -> root-saga -> store
export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
