import ShopActionTypes from './shop.types';
// import SHOP_DATA from './shop.data';
// import STOCK_DATA from './stock.data';

const INITIAL_STATE = {
  collections: null,
  // collections: SHOP_DATA,
  // stockLoading: STOCK_DATA,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
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
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    // case ShopActionTypes.FILTER_BY_VALUE:
    //   return {
    //     ...state,
    //     collections: action.payload,
    //   };
    default:
      return state;
  }
};

export default shopReducer;
