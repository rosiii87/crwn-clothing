import ShopActionTypes from './shop.types';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchStockStart = () => ({
  type: ShopActionTypes.FETCH_STOCK_START,
});

export const fetchStockSuccess = (stockMap) => ({
  type: ShopActionTypes.FETCH_STOCK_SUCCESS,
  payload: stockMap,
});

export const fetchStockFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_STOCK_FAILURE,
  payload: errorMessage,
});

// export const filterByValue = (collections) => ({
//   type: ShopActionTypes.FILTER_BY_VALUE,
//   payload: collections,
// });

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
