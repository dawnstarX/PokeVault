import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/UserProvider";

const Batch = () => {
  const user = useContext(UserContext);
  return (
    <>
      <div>Home</div>
      <ul>
        {!user && <Link to={"/auth/login"}>join now</Link>}
        {user && (
          <>
            <Link to={"/user/dashboard"}>
              {console.log(user)}
              <img src={user.photoURL} alt={"user"} />
            </Link>
          </>
        )}
      </ul>
    </>
  );
};

export default Batch;
