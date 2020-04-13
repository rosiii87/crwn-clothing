import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

import { removeItem } from '../../redux/cart/cart.actions';

import CartIcon from '../cart-icon/cart-icon.component';

import {
  NavigationMain,
  CheckboxMenu,
  NavigationLabel,
  NavigationBackground,
  NavigationNav,
  CartItemsContainer,
  CartItemContainer,
  CartItemImage,
  ItemText,
  ItemButton,
  TotalText,
  LowerContainer,
  LowerButton,
} from './stick-cart.styles';

const StickCart = ({ match, cartItems, history, total, removeItem }) => {
  const handleLink = (url) => {
    history.push(`/${url}`);
    const cb = document.getElementById('cart-toggle');
    return (cb.checked = false);
  };

  const handleBack = () => {
    const cb = document.getElementById('cart-toggle');
    return (cb.checked = false);
  };

  return (
    <NavigationMain>
      <CheckboxMenu type="checkbox" id="cart-toggle" />
      <NavigationLabel htmlFor="cart-toggle">
        <CartIcon />
      </NavigationLabel>
      <NavigationBackground>&nbsp;</NavigationBackground>
      <NavigationNav>
        <TotalText>Celkem: {total} Kč</TotalText>
        <CartItemsContainer>
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItemContainer key={cartItem.id}>
                <ItemButton
                  onClick={() => {
                    removeItem(cartItem);
                  }}
                >
                  odebrat 1ks
                </ItemButton>
                <CartItemImage src={cartItem.imageUrl} />
                <ItemText>{cartItem.quantity} ks</ItemText>
              </CartItemContainer>
            ))
          ) : (
            <ItemText>Váš košík zeje prázdnotou :(</ItemText>
          )}
        </CartItemsContainer>
        <LowerContainer>
          <LowerButton
            onClick={() => {
              handleBack();
            }}
          >
            Nakupovat
          </LowerButton>
          {cartItems.length ? (
            <LowerButton
              onClick={() => {
                handleLink('checkout');
              }}
            >
              Do košíku
            </LowerButton>
          ) : null}
        </LowerContainer>
      </NavigationNav>
    </NavigationMain>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StickCart)
);
