// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDhoAZVBWVYVAAEPbpSRe8wrESTK9xJruE",
  authDomain: "room-ease-e13cc.firebaseapp.com",
  projectId: "room-ease-e13cc",
  storageBucket: "room-ease-e13cc.appspot.com",
  messagingSenderId: "886514219454",
  appId: "1:886514219454:web:eab9a6af3668c11a3221ef",
  measurementId: "G-B6BPFZYWSK"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };