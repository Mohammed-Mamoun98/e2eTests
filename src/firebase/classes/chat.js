import { firestore } from "../config";
import { tryCatchWrapped } from './user';
const CHATS_COLLECTION = "chats";

export class Chat {
  static  async getAllChats() {
    try {
      const snapshot = await firestore.collection(CHATS_COLLECTION).get();
      const documents = snapshot.docs.map((doc) => doc.data());
      return new Promise((resolve, reject) => {
        resolve(documents);
      });
    } catch (error) {
        debugger
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }

  static onChatsCahnged(cb){
    firestore.collection(CHATS_COLLECTION).onSnapshot((snapshot)=>{
      const documents = snapshot.docs.map((doc) => doc.data());
        cb(documents)
    })

  }
}
