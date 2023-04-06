import React from "react";
import { auth } from "../utils/firebase";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <ul>
        <Link to={"/auth/login"}>join now</Link>
      </ul>
    </>
  );
};

export default Home;
