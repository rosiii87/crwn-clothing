import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  orderDetails: null,
  isFetching: false
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
    case CartActionTypes.CLEAR_CART:
    case CartActionTypes.CLEAR_CART_IN_FIREBASE:
      return {
        ...state,
        cartItems: []
      };
    case CartActionTypes.SET_CART_FROM_FIREBASE:
      return {
        ...state,
        cartItems: !state.cartItems[0] ? action.payload : state.cartItems
      };
    case CartActionTypes.CREATE_ORDER_IN_FIREBASE:
      return {
        ...state,
        cartItems: state.cartItems
      };
    case CartActionTypes.FETCH_NEW_ORDER_START:
      return {
        ...state,
        isFetching: true
      };
    default:
      return state;
  }
};

export default cartReducer;
