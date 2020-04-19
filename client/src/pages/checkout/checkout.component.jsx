import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';

// import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import CustomButton from '../../components/custom-button/custom-button.component';

import {
  SignUpContainer,
  SignUpTitle,
} from '../../components/sign-up/sign-up.styles';

import {
  FormTextFullLabel,
  FormTextFullText,
  FormTextFullInput,
  FormMain,
  FormRadioHalf,
  FormRadioContainer,
  FormRadioLabel,
  FormCustomRadio,
  FormCheckLabel,
  FormCheckHalf,
  FormCustomCheck,
} from '../../components/newsletter/forms.styles';

import {
  clearCart,
  clearCartInFirebase,
  createOrderInFirebase,
} from '../../redux/cart/cart.actions';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

import {
  CheckoutPageContainer,
  // CheckoutHeaderContainer,
  TotalContainer,
  InformativeText,
  SemiTotalContainer,
} from './checkout.styles';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import {
  signUpStart,
  emailSignInStart,
  googleSignInStart,
  editUser,
} from '../../redux/user/user.actions';

const CheckoutPage = ({
  cartItems,
  total,
  user,
  clearCart,
  clearCartInFirebase,
  createOrderInFirebase,
  signUpStart,
  emailSignInStart,
  googleSignInStart,
  editUser,
}) => {
  // HANDLERS FOR USER PROFILE LOGIN / REGISTER OR NOTHING
  const [userCredentials, setUserCredentials] = useState({
    displayName: user ? user.displayName : '',
    email: user ? user.email : '',
    password: '',
    confirmPassword: '',
  });

  // USER HANDLERS
  const { displayName, email, password, confirmPassword } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();
    signUpStart({ displayName, email, password });
  };

  const handleLogin = async (event) => {
    setTimeout(() => {
      window.location.reload();
      return false;
    }, 3500);
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
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
    message: '',
  });

  // addInfo handlers
  const handleInfoChange = (event) => {
    const { name, value } = event.target;

    setAdditionalInfo({ ...additionalInfo, [name]: value });
  };

  // checkoboxes hook
  const [legalCheck, setLegalCheck] = useState({
    legal: false,
    news: user ? user.news : false,
  });

  // checkboxes handlers
  const handleChecks = (event) => {
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
  const handlePay = async (event) => {
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
      message,
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
      {/* <CheckoutHeaderContainer></CheckoutHeaderContainer> */}
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <SemiTotalContainer>Zboží celkem: {total} Kč</SemiTotalContainer>
      <SemiTotalContainer>Doprava: 90 Kč</SemiTotalContainer>
      <TotalContainer>Celkem: {total + 90} Kč</TotalContainer>

      <SignUpContainer>
        <SignUpTitle>DOKONČIT OBJEDNÁVKU</SignUpTitle>
        <FormMain className="sign-up-form" onSubmit={handlePay}>
          <InformativeText>Kontaktní údaje</InformativeText>
          <FormTextFullLabel>
            <FormTextFullInput
              type="text"
              name="displayName"
              placeholder=" "
              value={displayName}
              onChange={handleChange}
              label={user ? 'Hustý jméno' : 'Jméno a příjmení'}
            />
            <FormTextFullText>Jméno a příjmení *</FormTextFullText>
          </FormTextFullLabel>
          <FormTextFullLabel>
            <FormTextFullInput
              type="email"
              name="email"
              placeholder=" "
              value={email}
              onChange={handleChange}
              label={user ? 'Ještě hustější' : 'email'}
              readOnly={user ? true : false}
            />
            <FormTextFullText>Email *</FormTextFullText>
          </FormTextFullLabel>
          {!user ? (
            <FormTextFullLabel>
              <FormTextFullInput
                type="password"
                name="password"
                placeholder=" "
                value={password}
                onChange={handleChange}
                label="Heslo"
                required
              />
              <FormTextFullText>Heslo *</FormTextFullText>
            </FormTextFullLabel>
          ) : null}
          {!user ? (
            <CustomButton type="button" onClick={handleLogin}>
              Přihlásit
            </CustomButton>
          ) : null}
          {!user ? (
            <CustomButton
              type="button" // not to trigger submit
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              Přihlásit s Googlem
            </CustomButton>
          ) : null}
          {!user ? (
            <InformativeText>Pokud nakupujete poprvé</InformativeText>
          ) : null}
          {!user ? (
            <FormTextFullLabel>
              <FormTextFullInput
                type="password"
                name="confirmPassword"
                placeholder=" "
                value={confirmPassword}
                onChange={handleChange}
                label="Confirm Password"
              />
              <FormTextFullText>Potvrzení hesla *</FormTextFullText>
            </FormTextFullLabel>
          ) : null}
          {!user ? (
            <CustomButton type="button" onClick={handleSubmit}>
              REGISTROVAT
            </CustomButton>
          ) : null}
          <FormTextFullLabel>
            <FormTextFullInput
              type="city"
              name="city"
              placeholder=" "
              onChange={handleInfoChange}
              value={city}
              label="Město"
              required
            />
            <FormTextFullText>Město *</FormTextFullText>
          </FormTextFullLabel>
          <FormTextFullLabel>
            <FormTextFullInput
              type="street"
              name="street"
              placeholder=" "
              onChange={handleInfoChange}
              value={street}
              label="Ulice a Č.P."
              required
            />
            <FormTextFullText>Ulice a Č.P. *</FormTextFullText>
          </FormTextFullLabel>
          <FormTextFullLabel>
            <FormTextFullInput
              type="tel"
              name="telephone"
              placeholder=" "
              onChange={handleInfoChange}
              value={telephone}
              label="Tel. číslo"
              required
            />
            <FormTextFullText>Tel. číslo *</FormTextFullText>
          </FormTextFullLabel>
          <InformativeText>Doprava *</InformativeText>
          <FormRadioContainer>
            <FormRadioLabel>
              <FormRadioHalf
                type="radio"
                name="doprava"
                onChange={handleInfoChange}
                value="gls"
                label="GLS"
                required
              />{' '}
              GLS
              <FormCustomRadio />
            </FormRadioLabel>
            <FormRadioLabel>
              <FormRadioHalf
                type="radio"
                name="doprava"
                onChange={handleInfoChange}
                value="zásilkovna"
                label="Zásilkovna"
              />{' '}
              Zásilkovna
              <FormCustomRadio />
            </FormRadioLabel>
          </FormRadioContainer>
          <InformativeText>Platba *</InformativeText>
          <FormRadioContainer>
            <FormRadioLabel>
              <FormRadioHalf
                type="radio"
                name="platba"
                onChange={handleInfoChange}
                value="dobírka"
                label="Dobírka"
                required
              />{' '}
              Dobírka
              <FormCustomRadio />
            </FormRadioLabel>
            <FormRadioLabel>
              <FormRadioHalf
                type="radio"
                name="platba"
                onChange={handleInfoChange}
                value="Bankovní převod"
                label="Bankovní převod"
              />{' '}
              Bankovní převod
              <FormCustomRadio />
            </FormRadioLabel>
          </FormRadioContainer>
          <FormTextFullLabel>
            <FormTextFullInput
              style={{ height: '10rem' }}
              type="text"
              name="message"
              placeholder=" "
              value={message}
              onChange={handleInfoChange}
              label="Přidat vzkaz k objednávce"
            />
            <FormTextFullText>Přidat vzkaz k objednávce</FormTextFullText>
          </FormTextFullLabel>
          <InformativeText>Obchodní podmínky</InformativeText>
          <FormRadioContainer>
            <FormCheckLabel style={{ width: '100%' }}>
              <FormCheckHalf
                type="checkbox"
                name="legal"
                onChange={handleChecks}
                label="Souhlasím se vším, shut up and take my money"
                required
              />{' '}
              Souhlasím s obchodními podmínkami.*
              <FormCustomCheck />
            </FormCheckLabel>
          </FormRadioContainer>
          {user ? (
            !user.news ? (
              <FormRadioContainer>
                <FormCheckLabel style={{ width: '100%' }}>
                  <FormCheckHalf
                    type="checkbox"
                    name="news"
                    onChange={handleChecks}
                    label="Přeji si odebírat Newsletter s novinkami a slevami"
                  />{' '}
                  Přeji si odebírat Newsletter s novinkami a slevami.
                  <FormCustomCheck />
                </FormCheckLabel>
              </FormRadioContainer>
            ) : null
          ) : (
            <FormRadioContainer>
              <FormCheckLabel style={{ width: '100%' }}>
                <FormCheckHalf
                  type="checkbox"
                  name="news"
                  onChange={handleChecks}
                  label="Přeji si odebírat Newsletter s novinkami a slevami"
                />{' '}
                Přeji si odebírat Newsletter s novinkami a slevami.
                <FormCustomCheck />
              </FormCheckLabel>
            </FormRadioContainer>
          )}
          {isLoading ? (
            <CustomButton>ZPRACOVÁVÁM...</CustomButton>
          ) : (
            <CustomButton type="submit">
              ODESLAT OBJEDNÁVKU ZA {total + 90} Kč
            </CustomButton>
          )}
          {thankYouPage ? <Redirect to="/thankyou" /> : null}
          {/* {thankYouPage === false && total === 0 ? <Redirect to="/" /> : null} */}
        </FormMain>
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
  user: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
  clearCartInFirebase: () => dispatch(clearCartInFirebase()),
  createOrderInFirebase: () => dispatch(createOrderInFirebase()),
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
  editUser: (additionalData) => dispatch(editUser({ additionalData })),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
