import React from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  OAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
import { auth } from "../../utils/firebase";

const Login = () => {
  //logging  in with google
  const GoogleProvider = new GoogleAuthProvider();
  //logging in with facebook
  const FacebookProvider = new FacebookAuthProvider();
  //logging in with yahoo
  const YahooProvider = new OAuthProvider("yahoo.com");
  //loggin in with twitter
  const TwitterProvider = new TwitterAuthProvider();

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, GoogleProvider);
      console.log(result.user);
    } catch (err) {
      console.error(err);
    }
  };

  const facebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, FacebookProvider);
      console.log(result.user);
    } catch (err) {
      console.error(err);
    }
  };

  const YahooLogin = async () => {
    try {
      const result = await signInWithPopup(auth, YahooProvider);
      console.log(result.user);
    } catch (err) {
      console.error(err);
    }
  };

  const TwitterLogin = async () => {
    try {
      const result = await signInWithPopup(auth, TwitterProvider);
      console.log(result.user);
    } catch (err) {
      console.error(err.message);
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
        <br />
        <button onClick={googleLogin}>Log In with google</button>
        <br />
        <button onClick={facebookLogin}>Log In with facebook</button>
        <br />
        <button onClick={YahooLogin}>Log In with yahoo</button>
        <br />
        <button onClick={TwitterLogin}>Log In with twitter</button>
        <br />
      </div>
    </>
  );
};

export default Login;
