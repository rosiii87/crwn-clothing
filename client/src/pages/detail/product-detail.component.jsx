import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { selectCollection } from '../../redux/shop/shop.selectors';
import { addItem } from '../../redux/cart/cart.actions';
import { addWishItem } from '../../redux/wish/wish.actions';

// import {
//   AddButton,
//   AddWishButton,
// } from '../../components/collection-item/collection-item.styles';

const ProductDetail = ({ collection, productId, addItem, addWishItem }) => {
  const { title, items } = collection;
  const itemId = productId * 1; // productId returned as string

  const item = items.find(({ id }) => id === itemId);
  const { price, stock, name, imageUrl } = item;

  return (
    <>
      <Helmet>
        <title>
          {name} - {title}
        </title>
        <meta name="description" content={name} />
      </Helmet>
      <div>
        <Link to="/shop">shop</Link> /{' '}
        <Link to={`/shop/${title.toLowerCase()}`}>{title}</Link> / {name}
      </div>
      <h1>{name}</h1>
      <img src={imageUrl} alt={name}></img>
      <h2>{price} Kč</h2>
      <p>Skladem: {stock} ks</p>
      <button onClick={() => addWishItem(item)}>Add to wishList</button>
      {stock > 0 ? (
        <button onClick={() => addItem(item)}>Add to cart</button>
      ) : (
        <button onClick={() => alert('bohužel vyprodáno')}>Vyprodáno</button>
      )}
      <h3>Other items from {title}'s category</h3>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <ul key={item.id}>
            <li>{item.imageUrl}</li>
            <li>{item.name}</li>
            <li>{item.price} Kč</li>
          </ul>
        ))}
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  productId: ownProps.match.params.productId,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  addWishItem: (item) => dispatch(addWishItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
