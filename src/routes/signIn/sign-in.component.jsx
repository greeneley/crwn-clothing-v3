import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import SignUp from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGooglePopup = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGooglePopup}>Sign In with Google</button>
      <SignUp />
    </div>
  );
};

export default SignIn;
