import React from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  OAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";

const ProviderLogin = ({ method }) => {
  //for successful login navigate
  const navigate = useNavigate();

  //logging  in with google
  const GoogleProvider = new GoogleAuthProvider();
  //logging in with facebook
  const FacebookProvider = new FacebookAuthProvider();
  //logging in with yahoo
  const YahooProvider = new OAuthProvider("yahoo.com");
  //loggin in with twitter
  const TwitterProvider = new TwitterAuthProvider();

  //function to login with third party provider
  const Login = async (Provider) => {
    try {
      const result = await signInWithPopup(auth, Provider);
      console.log(result);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          Login(GoogleProvider);
        }}
      >
        {`${method} with Google`}
      </button>
      <br />
      <button
        onClick={() => {
          Login(FacebookProvider);
        }}
      >
        {`${method} with Facebook`}
      </button>
      <br />
      <button
        onClick={() => {
          Login(YahooProvider);
        }}
      >
        {`${method} with Yahoo`}
      </button>
      <br />
      <button
        onClick={() => {
          Login(TwitterProvider);
        }}
      >
        {`${method} with Twitter`}
      </button>
      <br />
    </div>
  );
};

export default ProviderLogin;
