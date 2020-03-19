import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';

// import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import {
  SignUpContainer,
  SignUpTitle
} from '../../components/sign-up/sign-up.styles';

import {
  clearCart,
  clearCartInFirebase,
  createOrderInFirebase
} from '../../redux/cart/cart.actions';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer
  // WarningContainer
} from './checkout.styles';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import {
  signUpStart,
  emailSignInStart,
  googleSignInStart,
  editUser
} from '../../redux/user/user.actions';

const CheckoutPage = ({
  cartItems,
  total,
  user,
  clearCart,
  createOrderInFirebase,
  signUpStart,
  emailSignInStart,
  googleSignInStart,
  editUser
}) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;
  const handleSubmit = async event => {
    event.preventDefault();
    signUpStart({ displayName, email, password });
  };

  const handleLogin = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handlePay = async event => {
    event.preventDefault();
    createOrderInFirebase();
    clearCart();
    clearCartInFirebase();
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const [additionalInfo, setAdditionalInfo] = useState({
    city: '',
    street: ''
    // telephone: '',
    // gls: true,
    // zas: false,
    // dobirka: true,
    // prevod: false,
    // legal: false,
    // news: false
  });

  const handleInfoChange = event => {
    const { name, value } = event.target;

    setAdditionalInfo({ ...additionalInfo, [name]: value });
  };

  const { city } = additionalInfo;
  const handleOrderInfo = async event => {
    event.preventDefault();
    editUser({ city });
  };

  return (
    <CheckoutPageContainer>
      <Helmet>
        <title>Košík</title>
        <meta
          name="description"
          content="Košík - už jen pár kroků k dokončení vaší objednávky na CRWN clothing"
        />
      </Helmet>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>TOTAL: ${total}</TotalContainer>

      <SignUpContainer>
        <SignUpTitle>Finish your order</SignUpTitle>
        <span>Contact info</span>
        <form className="sign-up-form" onSubmit={handlePay}>
          <FormInput
            type="text"
            name="displayName"
            value={user ? user.displayName : displayName}
            onChange={handleChange}
            label={user ? "Damn that's cool name" : 'Full Name'}
          />
          <FormInput
            type="email"
            name="email"
            value={user ? user.email : email}
            onChange={handleChange}
            label={user ? 'Even better' : 'email'}
            required
          />
          {!user ? (
            <FormInput
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              label="Password"
              required
            />
          ) : null}
          {!user ? (
            <CustomButton type="button" onClick={handleLogin}>
              Login
            </CustomButton>
          ) : null}
          {!user ? (
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              label="Confirm Password"
            />
          ) : null}
          {!user ? (
            <CustomButton type="button" onClick={handleSubmit}>
              REGISTROVAT
            </CustomButton>
          ) : null}
          {!user ? (
            <CustomButton
              type="button" // not to trigger submit
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          ) : null}
          <FormInput
            type="city"
            name="city"
            onChange={handleInfoChange}
            value={city}
            label="Město"
            required
          />
          <FormInput
            type="street"
            name="street"
            // onChange={handleInfoChange}
            // value={street}
            label="Ulice a Č.P."
            required
          />
          <FormInput
            type="tel"
            name="telephone"
            // onChange={handleInfoChange}
            // value={telephone}
            label="Tel. číslo"
            required
          />
          Dorpava
          <FormInput
            type="radio"
            name="doprava"
            // onChange={handleInfoChange}
            // value={gls}
            label="GLS"
            // checked
          />
          <FormInput
            type="radio"
            name="doprava"
            // onChange={handleChange}
            // value={zas}
            label="Zásilkovna"
          />
          Platba
          <FormInput
            type="radio"
            name="platba"
            // onChange={handleChange}
            // value={dobirka}
            label="Dobírka"
            // checked
          />
          <FormInput
            type="radio"
            name="platba"
            // onChange={handleChange}
            // value={prevod}
            label="Bankovní převod"
          />
          GDPR shit
          <FormInput
            type="checkbox"
            required
            name="legal"
            // onChange={handleChange}
            // value={legal}
            label="Souhlasím se vším, shut up and take my money"
          />
          <FormInput
            type="checkbox"
            name="newsletter"
            // value={news}
            // onChange={handleChange}
            label="Nechci nezasílát nenewslettery pokud nedám check!"
          />
          <TotalContainer>TOTAL: ${total}</TotalContainer>
          <CustomButton type="button" onClick={handleOrderInfo}>
            Odeslat údaje
          </CustomButton>
          <CustomButton type="submit">ODESLAT OBJEDNÁVKU</CustomButton>
        </form>
      </SignUpContainer>

      {/* <WarningContainer>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </WarningContainer> */}

      {/* <StripeCheckoutButton price={total} /> */}
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart()),
  clearCartInFirebase: () => dispatch(clearCartInFirebase()),
  createOrderInFirebase: () => dispatch(createOrderInFirebase()),
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials)),
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
  editUser: additionalData => dispatch(editUser({ additionalData }))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
