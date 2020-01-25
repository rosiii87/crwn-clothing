import { createSelector } from 'reselect';


const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
    // reduce starts from 0 and then accultaing base on + operator every another quaintity in cart
    // This is computing a new value based on state -> called a selector.. there is a issue with performace (if its placed in maptostate, its called everytime)
    // -> thats why we use memoization (special form of caching, returning value stored in cache) - wuth library 'Reselect'..and thats why we created this file
);