import React, { useContext } from "react";
import { Collections } from "../../utils/CollectionProvider";
import SingleCollectedPokemon from "./SingleCollectedPokemon";

const CollectedPokemon = () => {
  const { collectedPokemon } = useContext(Collections);
  return (
    <>
      <h1>Collected Pokemons</h1>
      <div>
        {collectedPokemon.map((pokemon) => {
          return <SingleCollectedPokemon pokemon={pokemon} key={pokemon.id} />;
        })}
      </div>
    </>
  );
};

export default CollectedPokemon;
