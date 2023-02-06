import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBFDVrw_v8pg9f2DOu2N0eewDxGFfqRrxg",
  authDomain: "crwn-clothing-v3-b22c9.firebaseapp.com",
  projectId: "crwn-clothing-v3-b22c9",
  storageBucket: "crwn-clothing-v3-b22c9.appspot.com",
  messagingSenderId: "990700567054",
  appId: "1:990700567054:web:3354b3e921eeed1962da5f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.getCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
