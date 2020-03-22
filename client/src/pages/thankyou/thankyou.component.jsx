import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { firestore } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';

// quering items from order separately -> RFI - find how to map through cartItems [{}] to DRY
function useOrderDetails(userId) {
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection('orders')
      .where('userId', '==', userId)
      .where('createdAt', '>', '946684800')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const newOrderDetails = snapshot.docs[0].data();
        setOrderDetails(newOrderDetails);
      });
    return () => unsubscribe();
  }, [userId]);

  return orderDetails;
}

function useCartItemsDetails(userId) {
  const [cartItemsDetails, setCartItemsDetails] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection('orders')
      .where('userId', '==', userId)
      .where('createdAt', '>', '946684800')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const newCartItemsDetails = snapshot.docs[0].data().cartItems;
        setCartItemsDetails(newCartItemsDetails);
      });
    return () => unsubscribe();
  }, [userId]);

  return cartItemsDetails;
}

function ThankYouPage({ user }) {
  const userId = user.id;
  const orderDetails = useOrderDetails(userId);
  const allItemsDetails = useCartItemsDetails(userId);

  return (
    <div>
      <h2>Vaše objednávka byla úspěšně přijata!</h2>
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
      {Object.entries(allItemsDetails).map(([key, value], i) => {
        return (
          <ul key={key}>
            <li>Produkt: {value.name}</li>
            <li>img: {value.imageUrl}</li>
            <li>cena za kus {value.price} Kč</li>
            <li>počet kusů: {value.quantity}</li>
          </ul>
        );
      })}
      <Link to="/">Zpět na E-shop</Link>
    </div>
    // some container from styles
  );
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser
});

export default connect(mapStateToProps, null)(ThankYouPage);
