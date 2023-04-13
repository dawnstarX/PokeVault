import React from "react";
import { Link } from "react-router-dom";

const SinglePokemon = ({ pokemon }) => {
  return (
    <Link to={`/${pokemon.id}`}>
      <div>
        <p>ID: {pokemon.id}</p>
        <img src={pokemon.image} alt="Pokemon" />
      </div>
    </Link>
  );
};

export default SinglePokemon;
