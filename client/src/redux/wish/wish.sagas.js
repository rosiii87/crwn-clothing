import { all, call, takeLatest, put, select } from 'redux-saga/effects';
import WishActionTypes from './wish.types';
import UserActionTypes from '../user/user.types';

import { getUserWishRef } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../user/user.selectors';

import { clearWish, setWishFromFirebase } from './wish.actions';
import { selectWishItems } from './wish.selectors';

export function* clearWishOnSignOut() {
  yield put(clearWish());
}

export function* updateWishInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const wishRef = yield getUserWishRef(currentUser.id);
      const wishItems = yield select(selectWishItems);
      yield wishRef.update({ wishItems });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* clearWishInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const wishRef = yield getUserWishRef(currentUser.id);
      yield wishRef.update({ wishItems: [] });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* checkWishFromFirebase({ payload: user }) {
  const wishRef = yield getUserWishRef(user.id);
  const wishSnapshot = yield wishRef.get();
  yield put(setWishFromFirebase(wishSnapshot.data().wishItems));
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearWishOnSignOut);
}

export function* onUserSignIn() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkWishFromFirebase);
}

export function* onWishChange() {
  yield takeLatest(
    [
      WishActionTypes.ADD_WISH_ITEM,
      WishActionTypes.REMOVE_WISH_ITEM,
      WishActionTypes.CLEAR_ITEM_FROM_WISH
    ],
    updateWishInFirebase
  );
}

export function* wishSagas() {
  yield all([call(onWishChange), call(onSignOutSuccess), call(onUserSignIn)]);
}
