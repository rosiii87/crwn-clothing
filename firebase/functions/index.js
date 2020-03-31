const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  console.log('husty');

  response.send('Hello from Firebase!');
});

exports.testFunction = functions.firestore
  .document('orders/{orderID}')
  .onCreate((snapshot, context) => {
    const orderData = snapshot.data();
    if (orderData) {
      const total = orderData.total;
      return snapshot.ref.set({ newTotal: total + 100 }, { merge: true });
    } else {
      return null;
    }
  });

// after receiveing order -> update stock
exports.updateStock = functions.firestore
  .document('orders/{orderID}')
  .onCreate((snapshot, context) => {
    const orderData = snapshot.data();
    if (orderData) {
      const { cartItems } = orderData;
      cartItems.forEach(async cartItem => {
        const postCollection = db.collection('collections');
        const postQuery = postCollection.where('items', 'array-contains', {
          id: cartItem.id,
          imageUrl: cartItem.imageUrl,
          name: cartItem.name,
          price: cartItem.price,
          stock: cartItem.stock
        });

        const querySnapshot = await postQuery.get();
        if (querySnapshot.empty) {
          return null;
        } else {
          let batch = db.batch();
          querySnapshot.forEach(doc => {
            batch.update(doc.ref, {
              items: admin.firestore.FieldValue.arrayRemove({
                id: cartItem.id,
                imageUrl: cartItem.imageUrl,
                name: cartItem.name,
                price: cartItem.price,
                stock: cartItem.stock
              })
            });
            batch.update(doc.ref, {
              items: admin.firestore.FieldValue.arrayUnion({
                id: cartItem.id,
                imageUrl: cartItem.imageUrl,
                name: cartItem.name,
                price: cartItem.price,
                stock: cartItem.stock - cartItem.quantity
              })
            });
          });
          return batch.commit();
        }
      });
    } else {
      return null;
    }
  });

// after receiveing order -> update carts
exports.updateCartsStock = functions.firestore
  .document('orders/{orderID}')
  .onCreate((snapshot, context) => {
    const orderData = snapshot.data();
    if (orderData) {
      const { cartItems } = orderData;
      cartItems.forEach(async cartItem => {
        const postCollection = db.collectionGroup('cartItems');
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

// after receiveing order -> update carts
exports.updateWishStock = functions.firestore
  .document('orders/{orderID}')
  .onCreate((snapshot, context) => {
    const orderData = snapshot.data();
    if (orderData) {
      const { cartItems } = orderData;
      cartItems.forEach(async cartItem => {
        const postCollection = db.collectionGroup('wishItems');
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
