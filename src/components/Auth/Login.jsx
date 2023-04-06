import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../utils/firebase";

const Login = () => {
  //signing in with google
  const GoogleProvider = new GoogleAuthProvider();
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, GoogleProvider);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div>
        <h1> LOGIN</h1>
      </div>
      <div>
        <h1>Don't have an account</h1>
        <button>create new account</button>
        <button onClick={googleLogin}>Sign In with google</button>
      </div>
    </>
  );
};

export default Login;
