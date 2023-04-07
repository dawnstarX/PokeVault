import React from "react";
import { auth } from "../utils/firebase";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const Home = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <>
      <div>Home</div>
      <ul>
        {!user && <Link to={"/auth/login"}>join now</Link>}
        {user && (
          <Link to={"/dashbord"}>
            {console.log(user)}
            <img src={user.photoURL} alt={"user"} />{" "}
          </Link>
        )}
      </ul>
    </>
  );
};

export default Home;
