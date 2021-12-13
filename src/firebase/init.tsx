// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLYZzaNgVof7uhzKsYmp9EfwvI0Rqx_o8",
    authDomain: "chukwudi-23345.firebaseapp.com",
    projectId: "chukwudi-23345",
    storageBucket: "chukwudi-23345.appspot.com",
    messagingSenderId: "104891590942",
    appId: "1:104891590942:web:f70b40e10900216171c10f",
    measurementId: "G-YH7JWL8TH2"
};

// Initialize Firebase -- idapp project-104891590942
// Initialize Firebase


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const providerGoogle = new firebase.auth.GoogleAuthProvider();
providerGoogle.setCustomParameters({prompt: 'select_account', auth_type: 'reauthenticate',});
export const signInWithGoogle = () => auth.signInWithPopup(providerGoogle);


const providerTw = new firebase.auth.TwitterAuthProvider();
providerTw.setCustomParameters({auth_type: 'reauthenticate',});
export const signInWithTwitter = () => auth.signInWithPopup(providerTw);


const providerFacebook = new firebase.auth.TwitterAuthProvider();
providerTw.setCustomParameters({auth_type: 'reauthenticate',});
export const signInWithFacebook = () => auth.signInWithPopup(providerFacebook);

export default firebase;