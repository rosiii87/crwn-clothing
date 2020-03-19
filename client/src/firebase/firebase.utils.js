import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAGRUzY-KHyZsimSLHOCn9fYhge8FgN5qw',
  authDomain: 'crwn-db-e0911.firebaseapp.com',
  databaseURL: 'https://crwn-db-e0911.firebaseio.com',
  projectId: 'crwn-db-e0911',
  storageBucket: 'crwn-db-e0911.appspot.com',
  messagingSenderId: '143749898701',
  appId: '1:143749898701:web:160ace1d9ed359b4796484',
  measurementId: 'G-HNRMM23N93'
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // take a look to DB for that user
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // get a snapshot with user data
  const snapShot = await userRef.get();

  // if there is not such a user, create one
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  // news User returned as this var
  return userRef;
};

// get a data from cart collection based on UserId
export const getUserCartRef = async userId => {
  const cartsRef = firestore.collection('carts').where('userId', '==', userId);
  const snapShot = await cartsRef.get();

  if (snapShot.empty) {
    const cartDocRef = firestore.collection('carts').doc();
    await cartDocRef.set({ userId, cartItems: [] });
    return cartDocRef;
  } else {
    return snapShot.docs[0].ref;
  }
};

// create an order for registered
export const createNewOrder = async (currentUser, cartItems) => {
  const orderDocRef = firestore.collection('orders').doc();
  const createdAt = new Date();
  const total = cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  );
  return await orderDocRef.set({
    userId: currentUser.id,
    createdAt,
    Name: currentUser.displayName,
    Email: currentUser.email,
    Adress: 'Test adress', //var
    Payment: 'Platba kartou', //var
    Delivery: 'GLS', // var
    Status: 'Objednávka přijata', //conditioned var
    cartItems,
    total
  });
};

// // create an order for unregistered
// export const createNewOrderUnreg = async (email, cartItems) => {
//   const orderDocRef = firestore.collection('orders').doc();
//   const createdAt = new Date();
//   const total = cartItems.reduce(
//     (accumulatedQuantity, cartItem) =>
//       accumulatedQuantity + cartItem.quantity * cartItem.price,
//     0
//   );
//   return await orderDocRef.set({
//     createdAt,
//     // Name: displayName ? displayName : 'dummy',
//     // Email: email ? email : 'dummy',
//     Adress: 'Test adress', //var
//     Payment: 'Platba kartou', //var
//     Delivery: 'GLS', // var
//     Status: 'Objednávka přijata', //conditioned var
//     cartItems,
//     total
//   });
// };

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
