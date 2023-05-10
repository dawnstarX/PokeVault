import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { removeCollectedPokemon } from "../../utils/fireStore";
import { UserContext } from "../../utils/UserProvider";
import { Collections } from "../../utils/CollectionProvider";

const SingleCollectedPokemon = ({ pokemon }) => {
  const user = useContext(UserContext);
  const { collectedPokemon, setCollectedPokemon } = useContext(Collections);
  const Uid = user ? user.uid : null;
  const Pid = pokemon.id;
  const deletePokemon = async () => {
    try {
      await removeCollectedPokemon(Uid, pokemon);
      const newCollectedPokemon = collectedPokemon.filter((e) => e !== pokemon);
      setCollectedPokemon(newCollectedPokemon);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Link to={`/${Pid}`}>
        <div>
          <p>ID: {pokemon.id}</p>
          <p>{pokemon.name}</p>
          <img src={pokemon.image} alt="Pokemon" />
        </div>
      </Link>
      <button onClick={deletePokemon}>Remove from collection</button>
    </>
  );
};

export default SingleCollectedPokemon;
