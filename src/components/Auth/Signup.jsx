import { useState, React } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import ProviderLogin from "./ProviderLogin";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signinWithEmail = async () => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(result);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
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
        <button onClick={signinWithEmail}>Sign Up</button>
        <ProviderLogin method={"Sign up"} />
      </div>
    </>
  );
};

export default Signup;
