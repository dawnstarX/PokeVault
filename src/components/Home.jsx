import React, { useEffect } from "react";
import PokemonList from "./Pokemon/PokemonList";
import Navbar from "./Header/Navbar";
import { auth } from "../utils/firebase";
import { fetchOrCreateUserData, updateUserData } from "../utils/fireStore";
import { useAuthState } from "react-firebase-hooks/auth";

const Home = () => {
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      const fetchUserData = async () => {
        console.log(user.uid);
        await fetchOrCreateUserData(user.uid);
      };
      fetchUserData();
    }
  }, [user]);

  const addNumber = async () => {
    const newData = 420;
    await updateUserData(user.uid, newData);
  };
  return (
    <>
      <Navbar user={user} />
      <button onClick={addNumber}>update</button>
      <PokemonList />
    </>
  );
};

export default Home;
