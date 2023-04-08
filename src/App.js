import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoutes from "./utils/PublicRoutes";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route element={<PublicRoutes />}>
            <Route exact path="/auth/signup" element={<Signup />} />
            <Route exact path="/auth/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
