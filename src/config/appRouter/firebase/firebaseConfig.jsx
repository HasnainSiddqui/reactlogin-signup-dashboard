// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeVGvar71qroMo2gZILabFUy48zvPIwXU",
  authDomain: "reactloginandsignup.firebaseapp.com",
  projectId: "reactloginandsignup",
  storageBucket: "reactloginandsignup.firebasestorage.app",
  messagingSenderId: "968874931970",
  appId: "1:968874931970:web:8f2fbcb5ba5d96cd49741b",
  measurementId: "G-ZJBGB83PGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;