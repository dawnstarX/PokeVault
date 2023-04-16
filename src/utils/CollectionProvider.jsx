import React, { createContext, useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { fetchOrCreateUserData } from "./fireStore";

export const Collections = createContext();

const CollectionProvider = ({ children }) => {
  const [user] = useAuthState(auth);
  const [collectedPokemon, setCollectedPokemon] = useState([]);
  useEffect(() => {
    if (user) {
      const fetchUserData = async () => {
        const result = await fetchOrCreateUserData(user.uid);

        setCollectedPokemon(result.caught);
      };
      fetchUserData();
    }
  }, [user]);

  return (
    <Collections.Provider value={{ collectedPokemon }}>
      {console.log(collectedPokemon)}
      {children}
    </Collections.Provider>
  );
};

export default CollectionProvider;
