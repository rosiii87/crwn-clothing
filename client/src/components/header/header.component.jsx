import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import WishIcon from '../wish-icon/wish-icon.component';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './header.styles';

import { WishContainer } from '../wish-icon/wish-icon.styles';

const Header = ({ currentUser, hidden, signOutStart }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    console.log('scroll triggered');
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 120;
      if (isTop !== true) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });

    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <HeaderContainer
      style={
        scrolled
          ? { position: 'fixed', backgroundColor: '#FFFFFF', zIndex: 100 }
          : null
      }
    >
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <WishContainer to="/wish-list">
          <WishIcon />
        </WishContainer>
        {currentUser ? (
          <OptionLink to={`/profil/${currentUser.displayName}`}>
            {currentUser.displayName}
          </OptionLink>
        ) : null}
        {currentUser ? (
          <OptionLink to="/" as="div" onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
