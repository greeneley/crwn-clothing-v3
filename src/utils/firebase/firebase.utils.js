import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

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

const googleProvider = new GoogleAuthProvider();

googleProvider.getCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "user", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const creatAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        creatAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};
