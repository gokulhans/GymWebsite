import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCrsCZe_X7nS9JduURjATCrzGWvZmtUD4E",
  authDomain: "codedrops-335d2.firebaseapp.com",
  projectId: "codedrops-335d2",
  storageBucket: "codedrops-335d2.appspot.com",
  messagingSenderId: "12480149097",
  appId: "1:12480149097:web:bc261be9cc2daab93cd4f8",
  measurementId: "G-WNVVMQJ8XP"
};

const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);