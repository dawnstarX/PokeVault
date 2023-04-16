import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoutes from "./utils/PublicRoutes";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Home from "./components/Home";
import PokemonDetails from "./components/Pokemon/PokemonDetails";
import UserProvider from "./utils/UserProvider";
import CollectionProvider from "./utils/CollectionProvider";

function App() {
  return (
    <CollectionProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route element={<PublicRoutes />}>
              <Route exact path="/auth/signup" element={<Signup />} />
              <Route exact path="/auth/login" element={<Login />} />
            </Route>
            <Route exact path="/:id" element={<PokemonDetails />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </CollectionProvider>
  );
}

export default App;
