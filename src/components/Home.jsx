import React, { useContext, useEffect } from "react";
import PokemonList from "./Pokemon/PokemonList";
import Navbar from "./Header/Navbar";
import { Collections } from "../utils/CollectionProvider";
import { UserContext } from "../utils/UserProvider";
import { fetchOrCreateUserData } from "../utils/fireStore";

const Home = () => {
  const user = useContext(UserContext);
  const { setCollectedPokemon } = useContext(Collections);
  useEffect(() => {
    if (user) {
      const fetchUserData = async () => {
        const result = await fetchOrCreateUserData(user.uid);
        console.log(result.caught);
        setCollectedPokemon(result.caught);
      };
      fetchUserData();
    }
  }, [user, setCollectedPokemon]);
  return (
    <>
      <Navbar />
      <PokemonList />
    </>
  );
};

export default Home;
