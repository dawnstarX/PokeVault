import { React, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  OAuthProvider,
  TwitterAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../utils/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //logging  in with google
  const GoogleProvider = new GoogleAuthProvider();
  //logging in with facebook
  const FacebookProvider = new FacebookAuthProvider();
  //logging in with yahoo
  const YahooProvider = new OAuthProvider("yahoo.com");
  //loggin in with twitter
  const TwitterProvider = new TwitterAuthProvider();

  const Login = async (Provider) => {
    try {
      const result = await signInWithPopup(auth, Provider);
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

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

  const EmailLogin = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result);
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
        <input
          placeholder="Email..."
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password..."
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={EmailLogin}>Log In</button>
      </div>
      <div>
        <h1>Don't have an account</h1>
        <button>create new account</button>
        <br />
        <button
          onClick={() => {
            Login(GoogleProvider);
          }}
        >
          Log In with google
        </button>
        <br />
        <button
          onClick={() => {
            Login(FacebookProvider);
          }}
        >
          Log In with facebook
        </button>
        <br />
        <button
          onClick={() => {
            Login(YahooProvider);
          }}
        >
          Log In with yahoo
        </button>
        <br />
        <button
          onClick={() => {
            Login(TwitterProvider);
          }}
        >
          Log In with twitter
        </button>
        <br />
      </div>
    </>
  );
};

export default Login;
