import WishActionTypes from './wish.types';
import { addItemToWish, removeItemFromWish } from './wish.utils';

const INITAL_STATE = {
  wishItems: []
};

const wishReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case WishActionTypes.ADD_WISH_ITEM:
      return {
        ...state,
        wishItems: addItemToWish(state.wishItems, action.payload)
      };
    case WishActionTypes.REMOVE_WISH_ITEM:
      return {
        ...state,
        wishItems: removeItemFromWish(state.wishItems, action.payload)
      };
    case WishActionTypes.CLEAR_ITEM_FROM_WISH:
      return {
        ...state,
        wishItems: state.wishItems.filter(
          wishItem => wishItem.id !== action.payload.id
        )
      };
    case WishActionTypes.CLEAR_WISH:
      return {
        ...state,
        wishItems: []
      };
    case WishActionTypes.SET_WISH_FROM_FIREBASE:
      return {
        ...state,
        wishItems: action.payload
      };
    default:
      return state;
  }
};

export default wishReducer;
