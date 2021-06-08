import { firestore } from "./config";
import {v4 as uuid} from 'uuid'

const USERS_COLLECTION = "users";

const isNotEmptyObject = (obj = {}) => {
  return Object.keys(obj).length > 0;
};

export const usersRef = firestore.collection(USERS_COLLECTION);

const getDocRef = (collection, docId) => {
  return firestore.collection(collection).doc(docId);
};

export const getDocData = (collection, docId) => {
  return getDocRef(collection, docId).get();
};
export const updateDocData = (collection, docId, newData) => {
  return getDocRef(collection, docId).update(newData);
};

export const updateUser = (docId, newData) => {
  return updateDocData(USERS_COLLECTION, docId, newData).then((ref) => {
    //    ref
    console.log('updated successfully!');
    return getDocData(USERS_COLLECTION,docId)
  });
};

export const createUser = (uid,newUser)=>{
  debugger
    usersRef.doc(uid).set(newUser).then(()=>{
        console.log('added succesfully!');
    })
}

export const isUserExists = (uid) => {
    console.log({uid});
  return getDocData(USERS_COLLECTION, uid).then((ref) => {
    const docData = ref.data();
    const isEmptyDoc = isNotEmptyObject(docData);
    return new Promise((res) => res(isEmptyDoc));
  });
};
