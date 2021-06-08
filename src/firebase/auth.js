import { firebase } from "./config";

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.addScope("profile");
googleAuthProvider.addScope("email");

export const googleAuthPopup = () => {
  return firebase.auth().signInWithPopup(googleAuthProvider);
};

export const logout = ()=>{
    return firebase.auth().signOut()
}

export const {onAuthStateChanged} = firebase.auth()
