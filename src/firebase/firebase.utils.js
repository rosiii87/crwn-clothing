import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';
// those two are automatically attached to firebase var (so we just selecting what we need -> auth & storage)

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

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
      console.log('error creating a user', error.message);
    }
  }

  return userRef; // we might need to use it later
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
