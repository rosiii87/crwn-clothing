import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import { connect } from 'react-redux';

import {
  clearCart,
  clearCartInFirebase,
  createOrderInFirebase
} from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({
  price,
  clearCart,
  clearCartInFirebase,
  createOrderInFirebase
}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_mErchO2RdaBWBhZOjympPwgY00JK4g9ogP';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert('succesful payment');
        createOrderInFirebase();
        clearCart();
        clearCartInFirebase();
        // here should RENDER a THANK YOU PAGE with summary
      })
      .catch(error => {
        console.log('Payment Error: ', error);
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay with card"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay with card"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart()),
  clearCartInFirebase: () => dispatch(clearCartInFirebase()),
  createOrderInFirebase: () => dispatch(createOrderInFirebase())
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);

// export default StripeCheckoutButton;
