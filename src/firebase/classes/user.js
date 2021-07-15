import { firestore } from "../config";

export const tryCatchWrapped = (cb) => {
  try {
    cb();
  } catch (error) {
    return new Promise((resolve, reject) => {
      reject(error);
    });
  }
};

export class User {
  USERS_COLLECTION = "users";
  usersRef = firestore.collection(this.USERS_COLLECTION);

  static async createUser(uid, newUser) {
    try {
      await this.usersRef.doc(uid).set(newUser);
      return new Promise((resolve, reject) => {
        resolve("Success");
      });
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }

  async getAllUsers() {
    const snapshot = await firestore.collection(this.USERS_COLLECTION).get();
    const documents = snapshot.docs.map((doc) => doc.data());
    return new Promise((resolve, reject) => {
      resolve(documents);
    });
  }
}
