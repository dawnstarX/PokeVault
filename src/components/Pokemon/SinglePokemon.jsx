import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/UserProvider";
import { addCollectedPokemon } from "../../utils/fireStore";
import { Collections } from "../../utils/CollectionProvider";

const SinglePokemon = ({ pokemon }) => {
  const user = useContext(UserContext);
  const { collectedPokemon, setCollectedPokemon } = useContext(Collections);
  const Uid = user ? user.uid : null;
  const Pid = pokemon.id;
  const addPokemon = async () => {
    try {
      await addCollectedPokemon(Uid, pokemon);
      const newCollectedPokemon = [...collectedPokemon, pokemon];
      setCollectedPokemon(newCollectedPokemon);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Link to={`/${Pid}`}>
        <div>
          {console.log(collectedPokemon)}
          <p>ID: {pokemon.id}</p>
          <p>{pokemon.name}</p>
          <img src={pokemon.image} alt="Pokemon" />
        </div>
      </Link>
      {user && (
        <button
          disabled={collectedPokemon.some((item) => item.id === pokemon.id)}
          onClick={addPokemon}
        >
          Add to collection
        </button>
      )}
    </>
  );
};

export default SinglePokemon;
