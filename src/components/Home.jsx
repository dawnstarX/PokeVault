import React, { useContext } from "react";
import PokemonList from "./Pokemon/PokemonList";
import Navbar from "./Header/Navbar";
import { Collections } from "../utils/CollectionProvider";

const Home = () => {
  return (
    <>
      <Navbar />
      <PokemonList />
    </>
  );
};

export default Home;
