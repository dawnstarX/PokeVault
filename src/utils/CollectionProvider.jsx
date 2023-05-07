import React, { createContext, useState } from "react";

export const Collections = createContext();

const CollectionProvider = ({ children }) => {
  const [collectedPokemon, setCollectedPokemon] = useState([]);

  return (
    <Collections.Provider value={{ collectedPokemon, setCollectedPokemon }}>
      {children}
    </Collections.Provider>
  );
};

export default CollectionProvider;
