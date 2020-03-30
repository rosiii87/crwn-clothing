import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromWish,
  addWishItem,
  removeItem
} from '../../redux/wish/wish.actions';

import { addItem } from '../../redux/cart/cart.actions';

import {
  WhishListItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './wish-item.styles';

const WishItem = ({
  addItem,
  wishItem,
  addWishItem,
  clearItem,
  removeItem
}) => {
  const { name, imageUrl, price, quantity } = wishItem;
  return (
    <WhishListItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(wishItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addWishItem(wishItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      {wishItem.stock > 0 ? (
        <TextContainer onClick={() => addItem(wishItem)}>buy</TextContainer>
      ) : (
        <TextContainer>Sold Out</TextContainer>
      )}

      <RemoveButtonContainer onClick={() => clearItem(wishItem)}>
        &#10005;
      </RemoveButtonContainer>
    </WhishListItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromWish(item)),
  addWishItem: item => dispatch(addWishItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(WishItem);
