import ShopActionTypes from './shop.types';
// import SHOP_DATA from './shop.data';
// import STOCK_DATA from './stock.data.js';

const INITIAL_STATE = {
  collections: null,
  stock: null,
  // collections: SHOP_DATA,
  // stockLoading: STOCK_DATA,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
    case ShopActionTypes.FETCH_STOCK_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case ShopActionTypes.FETCH_STOCK_SUCCESS:
      return {
        ...state,
        isFetching: false,
        stock: action.payload,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
    case ShopActionTypes.FETCH_STOCK_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
