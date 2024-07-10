import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9pgkmlVmeYlqhghR1v1R5OHkE2-SxYtQ",
  authDomain: "pfe-master-c1682.firebaseapp.com",
  projectId: "pfe-master-c1682",
  storageBucket: "pfe-master-c1682.appspot.com",
  messagingSenderId: "651626107211",
  appId: "1:651626107211:web:f9bb141aec81910092d8ce",
  measurementId: "G-7DRQEZW9Y0"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);

export { app, auth };
