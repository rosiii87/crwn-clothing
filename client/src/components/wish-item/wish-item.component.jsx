import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromWish,
  addWishItem,
  removeItem
} from '../../redux/wish/wish.actions';

import {
  WhishListItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './wish-item.styles';

const WishItem = ({ wishItem, addWishItem, clearItem, removeItem }) => {
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
      <RemoveButtonContainer onClick={() => clearItem(wishItem)}>
        &#10005;
      </RemoveButtonContainer>
    </WhishListItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromWish(item)),
  addWishItem: item => dispatch(addWishItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(WishItem);
