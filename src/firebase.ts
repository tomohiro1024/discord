import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { GoogleAuthProvider, getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDyIU5qRmWIw4L4NtDsOUKzBqzgVnjBjgg",
  authDomain: "slack-clone-baebf.firebaseapp.com",
  projectId: "slack-clone-baebf",
  storageBucket: "slack-clone-baebf.appspot.com",
  messagingSenderId: "270936405716",
  appId: "1:270936405716:web:61057edc8e70cfee2f2d41"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };