import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  firestore,
  convertCollectionsSnapshotToMap,
  convertStockSnapshotToMap,
} from '../../firebase/firebase.utils';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
  fetchStockSuccess,
  fetchStockFailure,
} from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollectionAsync() {
  yield console.log('I am Fired');
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

// new
export function* fetchStockAsync() {
  yield console.log('I am Stock');
  try {
    const collectionRef = firestore.collection('stock');
    const snapshot = yield collectionRef.get();
    const stockMap = yield call(convertStockSnapshotToMap, snapshot);
    yield put(fetchStockSuccess(stockMap));
  } catch (error) {
    yield put(fetchStockFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}

export function* fetchStockStart() {
  yield takeLatest(ShopActionTypes.FETCH_STOCK_START, fetchStockAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart), call(fetchStockStart)]);
}
