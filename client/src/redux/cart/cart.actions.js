import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART
});

export const updateCartInFirebase = () => ({
  type: CartActionTypes.UPDATE_CART_IN_FIREBASE
});

export const setCartFromFirebase = cartItems => ({
  type: CartActionTypes.SET_CART_FROM_FIREBASE,
  payload: cartItems
});

export const newOrderDetails = orderDetails => ({
  type: CartActionTypes.NEW_ORDER,
  payload: orderDetails
});

export const clearCartInFirebase = () => ({
  type: CartActionTypes.CLEAR_CART_IN_FIREBASE
});

export const createOrderInFirebase = cartItems => ({
  type: CartActionTypes.CREATE_ORDER_IN_FIREBASE,
  payload: cartItems
});
