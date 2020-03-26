import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

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
  // HANDLERS FOR USER PROFILE LOGIN / REGISTER OR NOTHING
  const [userCredentials, setUserCredentials] = useState({
    displayName: user ? user.displayName : '',
    email: user ? user.email : '',
    password: '',
    confirmPassword: ''
  });

  // USER HANDLERS
  const { displayName, email, password, confirmPassword } = userCredentials;
  const handleSubmit = async event => {
    event.preventDefault();
    signUpStart({ displayName, email, password });
  };

  const handleLogin = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  // ADDITIONAL ORDER INFO
  // doprava and platba has default state => radio buttons
  const [additionalInfo, setAdditionalInfo] = useState({
    city: user ? user.city : '',
    street: user ? user.street : '',
    telephone: user ? user.telephone : '',
    doprava: 'gls',
    platba: 'dobirka',
    message: ''
  });

  // addInfo handlers
  const handleInfoChange = event => {
    event.preventDefault();
    const { name, value } = event.target;

    setAdditionalInfo({ ...additionalInfo, [name]: value });
  };

  // checkoboxes hook
  const [legalCheck, setLegalCheck] = useState({
    legal: false,
    news: user ? user.news : false
  });

  // checkboxes handlers
  const handleChecks = event => {
    event.preventDefault();
    const { name } = event.target;
    const value = event.target.checked;

    setLegalCheck({ ...legalCheck, [name]: value });
  };

  // usetState & Router -> Redirect
  const [thankYouPage, setThankYouPage] = useState(false);
  const thankRef = useRef(thankYouPage);
  thankRef.current = thankYouPage;

  // usetState & Router -> Redirect
  const [isLoading, setIsLoading] = useState(false);
  const loadRef = useRef(isLoading);
  loadRef.current = isLoading;

  // CONVERTING TO USERREF
  // to be able to use timeout -> and variables from state -> we have to add userRef hooks
  const addRef = useRef(additionalInfo);
  addRef.current = additionalInfo;

  const checkRef = useRef(legalCheck);
  checkRef.current = legalCheck;

  // editUser have to come first -> then creating the order in DB
  const { city, street, telephone, doprava, platba, message } = addRef.current;
  const { legal, news } = checkRef.current;
  const handlePay = async event => {
    setTimeout(() => {
      createOrderInFirebase();
      setThankYouPage(true);
      clearCart();
      clearCartInFirebase();
    }, 2500);
    event.preventDefault();
    setIsLoading(true);
    editUser({
      city,
      street,
      telephone,
      doprava,
      platba,
      legal,
      news,
      message
    });
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
            value={displayName}
            onChange={handleChange}
            label={user ? "Damn that's cool name" : 'Full Name'}
            readOnly={user ? true : false}
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            label={user ? 'Even better' : 'email'}
            readOnly={user ? true : false}
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
            onChange={handleInfoChange}
            value={street}
            label="Ulice a Č.P."
            required
          />
          <FormInput
            type="tel"
            name="telephone"
            onChange={handleInfoChange}
            value={telephone}
            label="Tel. číslo"
            required
          />
          Dorpava
          <FormInput
            type="radio"
            name="doprava"
            onChange={handleInfoChange}
            value="gls"
            label="GLS"
            required
          />
          <FormInput
            type="radio"
            name="doprava"
            onChange={handleInfoChange}
            value="zásilkovna"
            label="Zásilkovna"
          />
          Platba
          <FormInput
            type="radio"
            name="platba"
            onChange={handleInfoChange}
            value="dobírka"
            label="Dobírka"
            required
          />
          <FormInput
            type="radio"
            name="platba"
            onChange={handleInfoChange}
            value="Bankovní převod"
            label="Bankovní převod"
          />
          <FormInput
            type="text"
            name="message"
            value={message}
            onChange={handleInfoChange}
            label="Přidat vzkaz k objednávce"
          />
          GDPR shit
          <FormInput
            type="checkbox"
            name="legal"
            onChange={handleChecks}
            label="Souhlasím se vším, shut up and take my money"
            required
          />
          {user ? (
            !user.news ? (
              <FormInput
                type="checkbox"
                name="news"
                onChange={handleChecks}
                label="Nechci nezasílát nenewslettery pokud nedám check!"
              />
            ) : null
          ) : (
            <FormInput
              type="checkbox"
              name="news"
              onChange={handleChecks}
              label="Nechci nezasílát nenewslettery pokud nedám check!"
            />
          )}
          <TotalContainer>TOTAL: ${total}</TotalContainer>
          {isLoading ? (
            <CustomButton>ZPRACOVÁVÁM...</CustomButton>
          ) : (
            <CustomButton type="submit">ODESLAT OBJEDNÁVKU</CustomButton>
          )}
          {thankYouPage ? <Redirect to="/thankyou" /> : null}
          {/* {thankYouPage === false && total === 0 ? <Redirect to="/" /> : null} */}
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
