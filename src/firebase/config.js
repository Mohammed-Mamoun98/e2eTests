import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"
import "firebase/database"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBsGLfNzJLvGHERyhUKWy52mi9YNWEgO9M",
    authDomain: "expense-app-89ca0.firebaseapp.com",
    projectId: "expense-app-89ca0",
    storageBucket: "expense-app-89ca0.appspot.com",
    messagingSenderId: "29625466823",
    appId: "1:29625466823:web:6e7c85dde6f63a09c663e2"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage()
  const auth = firebase.auth()
  const firestore = firebase.firestore()

  export {
      storage,
      auth,
      firebase,
      firestore
  } 