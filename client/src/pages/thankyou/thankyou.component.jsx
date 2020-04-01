import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { firestore } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import Spinner from '../../components/spinner/spinner.component';

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
    isLoading: true
  });

  useEffect(() => {
    const unsubscribe = firestore
      .collection('orders')
      .where('userId', '==', userId)
      .where('createdAt', '>', '946684800')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
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
        <div>
          <h2>
            Vaše objednávka č.<strong>{orderDetails.orderId}</strong> byla
            úspěšně přijata!
          </h2>
          <ul>
            <li>
              <span>Status: {orderDetails.Status}</span>
            </li>
            <li>
              <span>Jméno: {orderDetails.Name}</span>
            </li>
            <li>
              <span>Email: {orderDetails.Email}</span>
            </li>
            <li>
              <span>Adressa:{orderDetails.City}</span>
            </li>
          </ul>
          <h3>Způsob platby a doručení:</h3>
          <ul>
            <li>
              <span>Celkem: {orderDetails.total} Kč</span>
            </li>
            <li>
              <span>Platba: {orderDetails.Payment}</span>
            </li>
            <li>
              <span>Doprava: {orderDetails.Doprava}</span>
            </li>
            <li>
              <span>Vaše zpráva: {orderDetails.message}</span>
            </li>
          </ul>
          <h3>Objednané položky:</h3>
          {cartItems.map(cartItem => (
            <ul key={cartItem.id}>
              <li>{cartItem.name}</li>
              <li>{cartItem.imageUrl}</li>
              <li>{cartItem.price} Kč</li>
              <li>{cartItem.quantity} ks</li>
            </ul>
          ))}
          <Link to={`profil/${user.displayName}`}>
            Přehled objednávek v účtu
          </Link>
          <br></br>
          <Link to="/">Zpět na E-shop</Link>
        </div>
      )}
    </div>
    // some container from styles
  );
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser
});

export default connect(mapStateToProps, null)(ThankYouPage);
