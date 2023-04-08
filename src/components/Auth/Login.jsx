import { React, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import ProviderLogin from "./ProviderLogin";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  //function to login with email and password
  const EmailLogin = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result);
      navigate("/");
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
        <h1>Don't have an account</h1>
        <Link to={"/auth/signup"}>
          <button>create new account</button>
        </Link>
        <br />
        <ProviderLogin method={"Log in"} />
      </div>
    </>
  );
};

export default Login;
