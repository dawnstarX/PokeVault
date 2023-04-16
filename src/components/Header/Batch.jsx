import React, { useContext } from "react";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/UserProvider";

const Batch = () => {
  const user = useContext(UserContext);
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
      </ul>
    </>
  );
};

export default Batch;
