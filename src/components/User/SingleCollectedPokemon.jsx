import React from "react";
import { Link } from "react-router-dom";

const SingleCollectedPokemon = ({ pokemon }) => {
  const Pid = pokemon.id;
  const deletePokemon = async () => {};
  return (
    <>
      <Link to={`/${Pid}`}>
        <div>
          <p>ID: {pokemon.id}</p>
          <img src={pokemon.image} alt="Pokemon" />
        </div>
      </Link>
      <button onClick={deletePokemon}>Remove from collection</button>
    </>
  );
};

export default SingleCollectedPokemon;
