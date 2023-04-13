import React from "react";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import PokemonList from "../Pokemon/PokemonList";

const Home = () => {
  const [user, loading] = useAuthState(auth);
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div>Home</div>
      <ul>
        {!user && <Link to={"/auth/login"}>join now</Link>}
        {user && (
          <>
            <Link to={"/dashbord"}>
              {console.log(user)}
              <img src={user.photoURL} alt={"user"} />{" "}
            </Link>
            <button onClick={logOut}>Log out</button>
          </>
        )}
        <PokemonList />
      </ul>
    </>
  );
};

export default Home;
