// import base keyword for the library
import firebase from 'firebase/app';

// import for the database
import 'firebase/firestore';

// import for the auth
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBj8_DYSzmvxR2xaSYL5KFj8cn5F30xrsA',
	authDomain: 'tandem-auto-creations.firebaseapp.com',
	databaseURL: 'https://tandem-auto-creations.firebaseio.com',
	projectId: 'tandem-auto-creations',
	storageBucket: 'tandem-auto-creations.appspot.com',
	messagingSenderId: '290926673327',
	appId: '1:290926673327:web:1f5e2f893c97782174835a',
	measurementId: 'G-70Z5V10863'
};

// call firebase initialize method with config
firebase.initializeApp(config);

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
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
