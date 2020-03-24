import { takeLatest, call, put, all, select } from 'redux-saga/effects';

import OrdersActionTypes from './orders.types';
import { fetchOrdersSuccess, fetchOrdersFailure } from './orders.actions';

import {
  firestore,
  convertOrdersSnapshotToMap
} from '../../firebase/firebase.utils';

import { selectCurrentUser } from '../user/user.selectors';

export function* fetchOrdersAsync() {
  yield console.log('Orders fetching fired!');
  try {
    const userRef = yield select(selectCurrentUser);
    const ordersRef = firestore
      .collection('orders')
      .where('userId', '==', userRef.id)
      .where('createdAt', '>', '946684800')
      .orderBy('createdAt', 'desc');
    const snapshot = yield ordersRef.get();
    const ordersMap = yield call(convertOrdersSnapshotToMap, snapshot);
    yield put(fetchOrdersSuccess(ordersMap));
  } catch (error) {
    yield put(fetchOrdersFailure(error.message));
  }
}

export function* fetchOrdersStart() {
  yield takeLatest(OrdersActionTypes.FETCH_ORDERS_START, fetchOrdersAsync);
}

export function* ordersSagas() {
  yield all([call(fetchOrdersStart)]);
}
