import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { Helmet } from 'react-helmet';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer
  // WarningContainer
} from '../checkout/checkout.styles';

import WishItem from '../../components/wish-item/wish-item.component';

// import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectWishItems } from '../../redux/wish/wish.selectors';

const WishList = ({ wishItems }) => {
  return (
    <CheckoutPageContainer>
      <Helmet>
        <title>Whish-List</title>
        <meta
          name="description"
          content="Přidejte si své zamilované produkty do košíku"
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
      {wishItems.map(wishItem => (
        <WishItem key={wishItem.id} wishItem={wishItem} />
      ))}
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  //   user: selectCurrentUser,
  wishItems: selectWishItems
});

export default connect(mapStateToProps)(WishList);
