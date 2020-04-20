import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import slugify from 'slugify';

import { LatestContainer, ProductContainer, Button } from './latest.styles';
import { firestore } from '../../firebase/firebase.utils';

import Fade from 'react-reveal/Fade';

import ProductsCarousel from '../carousel/products-carousel.component';
import Spinner from '../spinner/spinner.component';

const HpBestSellers = ({ history }) => {
  const [items, setItems] = useState([{}]);

  useEffect(() => {
    const result = [];
    const queryToState = firestore
      .collection('bestsellers')
      .orderBy('createdAt', 'desc')
      .limit(10)
      .onSnapshot((snapshot) => {
        const latestItems = snapshot.docs;
        latestItems.forEach((item) => {
          const latest = item.data();
          result.push(latest);
        });
        setItems(result);
      });
    return () => queryToState();
  }, []);

  return (
    <LatestContainer>
      <Fade bottom>
        <h1>BESTSELLERY</h1>
        <span>Právě zakoupené produkty</span>
        <br />
      </Fade>

      {items.length > 3 ? (
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
      ) : (
        <Spinner />
      )}
    </LatestContainer>
  );
};

export default withRouter(HpBestSellers);
