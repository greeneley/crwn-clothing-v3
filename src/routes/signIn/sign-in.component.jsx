import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const signIn = () => {
  const logGooglePopup = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGooglePopup}>Sign In with Google</button>
    </div>
  );
};

export default signIn;
