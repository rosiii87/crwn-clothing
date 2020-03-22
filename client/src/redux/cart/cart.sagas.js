import { all, call, takeLatest, put, select } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import { getUserCartRef, createNewOrder } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../user/user.selectors';
import { clearCart, setCartFromFirebase } from './cart.actions';
import { selectCartItems } from './cart.selectors';
import CartActionTypes from './cart.types';

// innital gen. f.
export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* updateCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* clearCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      yield cartRef.update({ cartItems: [] });
    } catch (error) {
      console.log(error);
    }
  }
}

// NEW ORDER FOR REGISTERED
export function* createNewOrderInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const cartItems = yield select(selectCartItems);
      const orderRef = yield createNewOrder(currentUser, cartItems);
      yield orderRef;
    } catch (error) {
      console.log(error);
    }
  }
}

export function* checkCartFromFirebase({ payload: user }) {
  const cartRef = yield getUserCartRef(user.id);
  const cartSnapshot = yield cartRef.get();
  yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
}

// export function* newOrderDetailsFromFirebase() {
//   const user = yield select(selectCurrentUser);
//   const orderRef = yield getUserOrderRef(user.id);
//   const orderSnapshot = yield orderRef.get();
//   yield put(newOrderDetails(orderSnapshot.data()));
// }

// final saga gen. F

//last one :)
// export function* onOrderSuccessfull() {
//   yield takeLatest(CartActionTypes.NEW_ORDER, newOrderDetailsFromFirebase);
// }

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onUserSignIn() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
}

export function* onCartChange() {
  yield takeLatest(
    [
      CartActionTypes.ADD_ITEM,
      CartActionTypes.REMOVE_ITEM,
      CartActionTypes.CLEAR_ITEM_FROM_CART
    ],
    updateCartInFirebase
  );
}

export function* onNewOrder() {
  yield takeLatest(
    CartActionTypes.CREATE_ORDER_IN_FIREBASE,
    createNewOrderInFirebase
  );
}

export function* onOrderSuccessful() {
  yield takeLatest(CartActionTypes.CLEAR_CART_IN_FIREBASE, clearCartInFirebase);
}

// connecting sagas -> root-saga -> store
export function* cartSagas() {
  yield all([
    call(onSignOutSuccess),
    call(onCartChange),
    call(onUserSignIn),
    call(onOrderSuccessful),
    call(onNewOrder)
    // call(onOrderSuccessfull)
  ]);
}
