const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   console.log('husty');

//   response.send('Hello from Firebase!');
// });

// exports.testFunction = functions.firestore
//   .document('orders/{orderID}')
//   .onCreate((snapshot, context) => {
//     const orderData = snapshot.data();
//     if (orderData) {
//       const total = orderData.total;
//       return snapshot.ref.set({ newTotal: total + 100 }, { merge: true });
//     } else {
//       return null;
//     }
//   });

// // after receiveing order -> update carts
// // not gonna use it, but its a good practice
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
      console.log(prevValue);
      console.log(prevValue.name);

      if (newValue.stock == prevValue.stock) return null;

      const postCollection = db.collection('collections');
      let postQuery = postCollection.where(
        'items',
        'array-contains',
        prevValue
      );
      console.log(postQuery);
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
