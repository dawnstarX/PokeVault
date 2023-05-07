import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/UserProvider";
import { updateUserData } from "../../utils/fireStore";
import { Collections } from "../../utils/CollectionProvider";

const SinglePokemon = ({ pokemon }) => {
  const user = useContext(UserContext);
  const { collectedPokemon, setCollectedPokemon } = useContext(Collections);
  const Uid = user ? user.uid : null;
  const Pid = pokemon.id;
  const addPokemon = async () => {
    try {
      await updateUserData(Uid, Pid);
      const newCollectedPokemon = [...collectedPokemon, Pid];
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
          <img src={pokemon.image} alt="Pokemon" />
        </div>
      </Link>
      {user && (
        <button disabled={collectedPokemon.includes(Pid)} onClick={addPokemon}>
          Add to collection
        </button>
      )}
    </>
  );
};

export default SinglePokemon;
