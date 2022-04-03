import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAWM7ixq_bmua0MTFs8pRLxTQrCyROoaOs",
  authDomain: "facebook-clone-59bf8.firebaseapp.com",
  projectId: "facebook-clone-59bf8",
  storageBucket: "facebook-clone-59bf8.appspot.com",
  messagingSenderId: "544647293262",
  appId: "1:544647293262:web:d0f60bb809ce0056d7961f",
  measurementId: "G-2YVG6QBY78"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, db, provider };
export default db;