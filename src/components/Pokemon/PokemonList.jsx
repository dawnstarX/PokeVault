import { React, useEffect, useState } from "react";
import axios from "axios";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=21"
      );
      const data = response.data.results;
      const pokemonDetails = await Promise.all(
        data.map(async (pokemon) => {
          const pokemonResponse = await axios.get(pokemon.url);
          return pokemonResponse.data;
        })
      );
      setPokemonList(pokemonDetails);
    };
    fetchPokemon();
  }, []);

  return (
    <div>
      {pokemonList.map((pokemon) => (
        <div key={pokemon.name}>
          <p>{pokemon.name}</p>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
