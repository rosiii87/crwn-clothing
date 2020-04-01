const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

const sendWelcomeMail = require('./emails/welcome');
const sendOrderReceived = require('./emails/order.received');
const sendPaymentReceived = require('./emails/order.payment.received');
const sendOrderShipped = require('./emails/order.shipped');
// order canceled
// abandoned wish list / cart
// password reset -> firebase doc.

// welcome email execution - NOT ACTIVE RIGHT NOW
exports.welcomeMail = functions.firestore
  .document('users/{userID}')
  .onCreate((snapshot, context) => {
    const email = snapshot.data().email;
    const name = snapshot.data().displayName;
    return sendWelcomeMail.welcome(email, name);
  });

// order received
exports.orderReceivedMail = functions.firestore
  .document('orders/{orderID}')
  .onCreate((snapshot, context) => {
    const email = snapshot.data().Email;
    const name = snapshot.data().Name;
    const orderId = snapshot.data().orderId;
    const total = snapshot.data().total;
    const doprava = snapshot.data().Doprava;
    const payment = snapshot.data().Payment;
    const street = snapshot.data().Street;
    const city = snapshot.data().City;
    const status = snapshot.data().Status;
    const cartItems = snapshot.data().cartItems;
    return sendOrderReceived.received(
      email,
      name,
      orderId,
      total,
      doprava,
      payment,
      street,
      city,
      status,
      cartItems
    );
  });

// payment received
exports.paymentReceivedMail = functions.firestore
  .document('orders/{orderID}')
  .onUpdate((change, context) => {
    const newValue = change.after.data();
    const prevValue = change.before.data();
    if (newValue.Status == prevValue.Status) return null;
    if (newValue.Status != 'Platba přijata') return null;
    const email = newValue.Email;
    const name = newValue.Name;
    const orderId = newValue.orderId;
    const total = newValue.total;
    const doprava = newValue.Doprava;
    const street = newValue.Street;
    const city = newValue.City;
    return sendPaymentReceived.paymentReceived(
      email,
      name,
      orderId,
      total,
      doprava,
      street,
      city
    );
  });

// order shipped
exports.orderShippedMail = functions.firestore
  .document('orders/{orderID}')
  .onUpdate((change, context) => {
    const newValue = change.after.data();
    const prevValue = change.before.data();
    if (newValue.Status == prevValue.Status) return null;
    if (newValue.Status != 'Objednávka odeslána') return null;
    const email = newValue.Email;
    const name = newValue.Name;
    const orderId = newValue.orderId;
    const doprava = newValue.Doprava;
    const street = newValue.Street;
    const city = newValue.City;
    return sendOrderShipped.orderShipped(
      email,
      name,
      orderId,
      doprava,
      street,
      city
    );
  });

exports.updateRealStock = functions.firestore
  .document('orders/{orderID}')
  .onCreate((snapshot, context) => {
    const orderData = snapshot.data();
    if (orderData) {
      const { cartItems } = orderData;
      cartItems.forEach(async cartItem => {
        const postCollection = db.collection('stock');
        const postQuery = postCollection.where('id', '==', cartItem.id);

        const { quantity } = cartItem;
        const querySnapshot = await postQuery.get();
        if (querySnapshot.empty) {
          return null;
        } else {
          let batch = db.batch();
          querySnapshot.forEach(doc => {
            batch.update(doc.ref, {
              stock: admin.firestore.FieldValue.increment(-quantity)
            });
          });
          return batch.commit();
        }
      });
    } else {
      return null;
    }
  });

exports.updateCollectionFromStock = functions.firestore
  .document('stock/{productID}')
  .onUpdate(async (change, context) => {
    try {
      const newValue = change.after.data();
      const prevValue = change.before.data();
      if (newValue == prevValue) return null;

      const postCollection = db.collection('collections');
      let postQuery = postCollection.where(
        'items',
        'array-contains',
        prevValue
      );
      const querySnapshot = await postQuery.get();
      if (querySnapshot.empty) {
        return null;
      } else {
        let batch = db.batch();
        querySnapshot.forEach(doc => {
          batch.update(doc.ref, {
            items: admin.firestore.FieldValue.arrayRemove(prevValue)
          });
          batch.update(doc.ref, {
            items: admin.firestore.FieldValue.arrayUnion(newValue)
          });
        });
        return batch.commit();
      }
    } catch (error) {
      console.log(error);
    }
  });
