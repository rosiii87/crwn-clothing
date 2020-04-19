import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { firestore } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import Spinner from '../../components/spinner/spinner.component';

import {
  ThankYouContainer,
  SummaryContainer,
  ImagesContainer,
  ProductContainer,
  ImageItem,
  TextItem,
  BackLink,
} from './thankyou.styles';

function useOrderDetails(userId) {
  const [lastestOrderDetails, setLastestOrderDetails] = useState({
    userID: '',
    orderId: 0,
    createdAt: '',
    Name: '',
    Email: '',
    City: '',
    Street: '',
    Payment: '',
    Doprava: '',
    Status: '',
    legal: 'true',
    news: 'false',
    cartItems: [],
    total: 0,
    message: '',
    isLoading: true,
  });

  useEffect(() => {
    const unsubscribe = firestore
      .collection('orders')
      .where('userId', '==', userId)
      .where('createdAt', '>', '946684800')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        const newOrderDetails = snapshot.docs[0].data();
        setLastestOrderDetails(newOrderDetails);
      });
    return () => unsubscribe();
  }, [userId]);
  return lastestOrderDetails;
}

// this works great, but.. triggers useEffect 3times becouse of changin state -> IMPROVEMENT NEEDED
function ThankYouPage({ user }) {
  const userId = user.id;
  const orderDetails = useOrderDetails(userId);
  const cartItems = orderDetails.cartItems;

  console.log('useEffect counter :)');

  return (
    <div>
      {!orderDetails.Status ? (
        <Spinner />
      ) : (
        <ThankYouContainer>
          <h2>
            Vaše objednávka č.<strong>{orderDetails.orderId}</strong> byla
            úspěšně přijata!
          </h2>
          <span>
            V případě jakýchkoliv požadavků nás prosím kontaktuje na
            info@mywall.cz
          </span>
          <br />
          <SummaryContainer>
            <span>Stav:</span>
            <span>{orderDetails.Status}</span>
          </SummaryContainer>
          <SummaryContainer>
            <span>Jméno:</span>
            <span>{orderDetails.Name}</span>
          </SummaryContainer>
          <SummaryContainer>
            <span>Email:</span>
            <span>{orderDetails.Email}</span>
          </SummaryContainer>
          <SummaryContainer>
            <span>Adresa:</span>
            <span>
              {orderDetails.City}, {orderDetails.Street}
            </span>
          </SummaryContainer>
          <SummaryContainer>
            <span>Vytvořeno dne:</span>
            <span>{orderDetails.createdAt.split('G')[0]}</span>
          </SummaryContainer>
          <br />
          <h3>Způsob platby a doručení:</h3>
          <br />
          <SummaryContainer>
            <span>Celkem:</span>
            <span>{orderDetails.total} Kč</span>
          </SummaryContainer>
          <SummaryContainer>
            <span>Platba:</span>
            <span>{orderDetails.Payment}</span>
          </SummaryContainer>
          <SummaryContainer>
            <span>Doprava:</span>
            <span>{orderDetails.Doprava}</span>
          </SummaryContainer>
          <SummaryContainer>
            <span>Vaše zpráva:</span>
            <span>{orderDetails.message}</span>
          </SummaryContainer>

          {orderDetails.Payment === 'Bankovní převod' ? (
            <>
              <br />
              <h3>Údaje pro převod:</h3>
              <span>Objednávku odešleme ihned po obdržení Vaší platby</span>
              <br />
              <SummaryContainer>
                <span>Číslo účtu: </span>
                <span>1111111/1111</span>
              </SummaryContainer>
              <SummaryContainer>
                <span>Částka: </span>
                <span>{orderDetails.total} Kč</span>
              </SummaryContainer>
              <SummaryContainer>
                <span>Variabilní symbol: </span>
                <span>{orderDetails.orderId}</span>
              </SummaryContainer>
            </>
          ) : null}

          <br />
          <h3>Objednané položky:</h3>
          <br />
          <ImagesContainer>
            {cartItems.map((cartItem) => (
              <ProductContainer key={cartItem.id}>
                <ImageItem src={cartItem.imageUrl} alt={cartItem.name} />
                <TextItem>{cartItem.name}</TextItem>
                <TextItem>{cartItem.price} Kč</TextItem>
                <TextItem>{cartItem.quantity} ks</TextItem>
              </ProductContainer>
            ))}
          </ImagesContainer>
          <BackLink to={`profil/${user.displayName}`}>
            Přehled objednávek v účtu
          </BackLink>
          <br />
          <BackLink to="/">Zpět na E-shop</BackLink>
        </ThankYouContainer>
      )}
    </div>
    // some container from styles
  );
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default connect(mapStateToProps, null)(ThankYouPage);
