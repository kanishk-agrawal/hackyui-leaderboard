import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyCcrCJENHh_S24XIES3UYt38jq9Sha_u5w",
  authDomain: "hackyui-74a90.firebaseapp.com",
  projectId: "hackyui-74a90",
  storageBucket: "hackyui-74a90.appspot.com",
  messagingSenderId: "512907311827",
  appId: "1:512907311827:web:a7dae609fae0ae67dbf226"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
