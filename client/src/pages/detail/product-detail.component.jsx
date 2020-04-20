import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { selectCollection } from '../../redux/shop/shop.selectors';
import { addItem } from '../../redux/cart/cart.actions';
import { addWishItem } from '../../redux/wish/wish.actions';

import { colors } from '../../components/styles/variables';

import Slide from 'react-reveal/Slide';

import slugify from 'slugify';

import {
  DetailPageContainer,
  BreadCrumbs,
  ProductImageContainer,
  HeroImage,
  ProductDetailContainer,
  ProductDetailsContainer,
  Text,
  ButtonsContainer,
  OtherProductsContainer,
  MoreDetailsContainer,
  MoreParametersContainer,
} from './product-detail.styles';

import { TopContainer } from '../account/account.styles';

import {
  ProductContainer,
  Button,
} from '../../components/productfeeds/latest.styles';

import ProductDetailCarousel from '../../components/carousel/product-detail-carousel.component';
import ProductsCarousel from '../../components/carousel/products-carousel.component';

import CustomButton from '../../components/custom-button/custom-button.component';

// import {
//   AddButton,
//   AddWishButton,
// } from '../../components/collection-item/collection-item.styles';

const ProductDetail = ({
  collection,
  productId,
  addItem,
  addWishItem,
  history,
}) => {
  const { title, items } = collection;
  const itemId = productId * 1; // productId returned as string

  const item = items.find(({ id }) => id === itemId);
  const { price, stock, name, imageUrl } = item;

  const [isActive, setActive] = useState(true);
  const toggleActiveBar = () => setActive(!isActive);

  return (
    <DetailPageContainer>
      <Helmet>
        <title>
          {name} - {title}
        </title>
        <meta name="description" content={name} />
      </Helmet>
      <BreadCrumbs>
        <Link to="/shop">shop</Link> /{' '}
        <Link to={`/shop/${title.toLowerCase()}`}>{title}</Link> / {name}
      </BreadCrumbs>
      <h1>{name}</h1>
      <br />
      <ProductDetailContainer>
        <ProductImageContainer>
          <ProductDetailCarousel>
            <HeroImage src={imageUrl} alt={name} />
            <HeroImage src={imageUrl} alt={name} />
          </ProductDetailCarousel>
        </ProductImageContainer>
        <ProductDetailsContainer>
          <h2>{price} Kč</h2>
          <Text>Rozměry: 90cm x 60cm | Skladem: {stock} ks</Text>

          <br />
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            modi libero suscipit soluta assumenda odio iure rem illum doloremque
            ex enim quibusdam, vero voluptate cum numquam placeat fugiat ad
            ratione.
          </Text>
          <ButtonsContainer>
            {stock > 0 ? (
              <CustomButton onClick={() => addItem(item)}>KOUPIT</CustomButton>
            ) : (
              <CustomButton onClick={() => alert('bohužel vyprodáno')}>
                Vyprodáno
              </CustomButton>
            )}
            <CustomButton onClick={() => addWishItem(item)} inverted>
              PŘIDAT NA WISHLIST
            </CustomButton>
          </ButtonsContainer>
        </ProductDetailsContainer>
      </ProductDetailContainer>
      <TopContainer style={{ width: '100%' }}>
        <button
          onClick={toggleActiveBar}
          style={
            isActive
              ? { backgroundColor: `${colors.almostBlack}`, color: '#FFF' }
              : null
          }
        >
          Detaily produktu
        </button>
        <button
          onClick={toggleActiveBar}
          style={
            !isActive
              ? { backgroundColor: `${colors.almostBlack}`, color: '#FFF' }
              : null
          }
        >
          Vlastnosti
        </button>
      </TopContainer>
      {isActive ? (
        <MoreDetailsContainer>
          <Slide right>
            <h1>{item.name}</h1>
            <Text>90cm x 60cm</Text>
            <br />
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              sunt vero perspiciatis excepturi architecto praesentium, suscipit
              quam perferendis ut aspernatur possimus doloremque accusantium
              consequuntur dolorem esse hic nostrum quibusdam autem.
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              sunt vero perspiciatis excepturi architecto praesentium, suscipit
              quam perferendis ut aspernatur possimus doloremque accusantium
              consequuntur dolorem esse hic nostrum quibusdam autem.Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Quis sunt vero
              perspiciatis excepturi architecto praesentium, suscipit quam
              perferendis ut aspernatur possimus doloremque accusantium
              consequuntur dolorem esse hic nostrum quibusdam autem.
            </Text>
          </Slide>
        </MoreDetailsContainer>
      ) : (
        <MoreParametersContainer>
          <Slide left>
            <h1>{item.name}</h1>
            <Text>90cm x 60cm</Text>
            <br />
            <Text>
              - Lorem, ipsum dolor sit am
              <br /> - Lorem, ipsum dolor sit amads
              <br /> - Lorem, ipsum dolor sit amLorem, ipsum dolor sit am
              <br /> - Lorem, ipsum dolor
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
              totam praesentium ipsam perspiciatis consequatur molestiae harum
              minima, modi magni nisi quae dolorum consectetur qui, voluptates
              temporibus quidem distinctio atque autem.
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              sunt
            </Text>
          </Slide>
        </MoreParametersContainer>
      )}
      <br />
      <h3>DALŠÍ PRODUKTY Z KATEGORIE {title.toUpperCase()}</h3>
      <br />
      <OtherProductsContainer>
        <ProductsCarousel>
          {items.map((item, idx) => (
            <ProductContainer key={idx}>
              <img
                src={item.imageUrl}
                alt={item.name}
                style={{ border: '1px solid #111517 ' }}
              />
              <Button
                onClick={() => {
                  history.push(
                    `/shop/${item.collection.toLowerCase()}/${slugify(
                      item.name
                    ).toLowerCase()}/${item.id}`
                  );
                }}
              >
                Zobrazit
              </Button>
              <span>{item.name}</span>
            </ProductContainer>
          ))}
        </ProductsCarousel>
      </OtherProductsContainer>
    </DetailPageContainer>
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
