import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0e9oW1yVdKX9GcAG1TF5N8xvLCJ2Q5mg",
  authDomain: "thegymproject-c3063.firebaseapp.com",
  projectId: "thegymproject-c3063",
  storageBucket: "thegymproject-c3063.appspot.com",
  messagingSenderId: "607003619391",
  appId: "1:607003619391:web:72cb5abceb1ac12a19888a"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);