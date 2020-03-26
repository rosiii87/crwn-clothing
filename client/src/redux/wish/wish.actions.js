import WishActionTypes from './wish.types';

export const addWishItem = item => ({
  type: WishActionTypes.ADD_WISH_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: WishActionTypes.REMOVE_WISH_ITEM,
  payload: item
});

export const clearItemFromWish = item => ({
  type: WishActionTypes.CLEAR_ITEM_FROM_WISH,
  payload: item
});

export const clearWish = () => ({
  type: WishActionTypes.CLEAR_WISH
});

export const updateWishInFirebase = () => ({
  type: WishActionTypes.UPDATE_WISH_IN_FIREBASE
});

export const setWishFromFirebase = wishItems => ({
  type: WishActionTypes.SET_WISH_FROM_FIREBASE,
  payload: wishItems
});

// export const clearWishInFirebase = () => ({
//   type: WishActionTypes.CLEAR_CART_IN_FIREBASE
// });
