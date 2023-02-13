import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import React, { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithEmailAndPasswordFirebase,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import "./sign-in-form.styles.scss";
const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInWithEmailAndPasswordFirebase(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      console.log(error);
    }
    // if (password !== confirmPassword) {
    //     alert("password and confirm password not match");
    //     return;
    // }
    //
    // try {
    //     const { user } = await createAuthUserWithEmailAndPassword(
    //         email,
    //         password
    //     );
    //
    //     await createUserDocumentFromAuth(user, { displayName });
    //     resetFormFields();
    // } catch (error) {
    //     if (error.code === "auth/email-already-in-use") {
    //         alert("Cannot create user, email already in use");
    //     } else {
    //         console.log("user creation encountered an error", error);
    //     }
    // }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const logGooglePopup = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <Button type="submit">Sign In</Button>
        <Button buttonType="google" onClick={logGooglePopup}>
          Sign In With Google
        </Button>
      </form>
    </div>
  );
};

export default SignInForm;
