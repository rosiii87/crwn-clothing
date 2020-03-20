import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import { newOrderDetails } from '../../redux/cart/cart.actions';

import { getUserOrderRef } from '../../firebase/firebase.utils';

const ThankYouPage = () => {
  return (
    <div>Thanks</div> // some container from styles
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  newOrderDetails: orderDetails => dispatch(newOrderDetails(orderDetails))
});

export default connect(mapStateToProps, mapDispatchToProps)(ThankYouPage);
