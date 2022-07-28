import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDpK2OhU8pf7NKSGzNK62cU_PxEdcaX63E",

  authDomain: "wherewaldo-9d009.firebaseapp.com",

  projectId: "wherewaldo-9d009",

  storageBucket: "wherewaldo-9d009.appspot.com",

  messagingSenderId: "815714163149",

  appId: "1:815714163149:web:0c5a103cdc4da7bb6b8c84",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
