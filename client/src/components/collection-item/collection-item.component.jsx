import React from 'react';
import { connect } from 'react-redux';
// import { Route } from 'react-router-dom';
import slugify from 'slugify';

import { addItem } from '../../redux/cart/cart.actions';
import { addWishItem } from '../../redux/wish/wish.actions';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  AddWishButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
  BackgroundLink,
} from './collection-item.styles';

const CollectionItem = ({ routeName, item, addItem, addWishItem }) => {
  const { id, name, price, stock, imageUrl } = item;
  const slug = slugify(name).toLowerCase();

  return (
    <CollectionItemContainer>
      <BackgroundLink to={`/shop/${routeName}/${slug}/${id}`}>
        <BackgroundImage className="image" imageUrl={imageUrl} />
      </BackgroundLink>

      <CollectionFooterContainer>
        <NameContainer>
          {name} | {price} Kč{' '}
        </NameContainer>
        <PriceContainer>{stock} ks</PriceContainer>
      </CollectionFooterContainer>
      <AddWishButton onClick={() => addWishItem(item)} inverted>
        Add to wishList
      </AddWishButton>
      {item.stock > 0 ? (
        <AddButton onClick={() => addItem(item)} inverted>
          Add to cart
        </AddButton>
      ) : (
        <AddButton onClick={() => alert('bohužel vyprodáno')} inverted>
          Vyprodáno
        </AddButton>
      )}
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  addWishItem: (item) => dispatch(addWishItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
