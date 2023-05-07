import React, { useContext } from "react";
import { UserContext } from "../../utils/UserProvider";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";

const User = () => {
  const user = useContext(UserContext);
  const displayName = user.displayName;
  const ImageUrl = user.photoURL;

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div>
        <img src={ImageUrl} alt={"user"} />
      </div>
      <p>{displayName}</p>
      <button onClick={logOut}>Log out</button>
    </>
  );
};

export default User;
