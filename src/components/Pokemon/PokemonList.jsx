import { React, useEffect, useState, useRef } from "react";
import { fetchPokemonList, fetchSearchedPokemon } from "../../utils/PokemonAPI";
import SinglePokemon from "./SinglePokemon";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const searchTermRef = useRef("");
  useEffect(() => {
    const fetching = async () => {
      let pokemons;
      if (searchQuery) {
        pokemons = await fetchSearchedPokemon(searchQuery);
      } else {
        pokemons = await fetchPokemonList(searchQuery);
      }

      setPokemonList(pokemons);
    };
    fetching();
  }, [searchQuery]);

  const handleSearch = () => {
    setSearchQuery(searchTermRef.current.value);
  };
  const clearSearch = () => {
    searchTermRef.current.value = "";
    setSearchQuery("");
  };

  return (
    <>
      <div>
        <input type="text" placeholder="Search Pokemon" ref={searchTermRef} />
        <button onClick={handleSearch}>Search</button>
        <button onClick={clearSearch}>Clear Search</button>
      </div>
      <div>
        {pokemonList.map((pokemon) => {
          return <SinglePokemon pokemon={pokemon} key={pokemon.id} />;
        })}
      </div>
    </>
  );
};

export default PokemonList;
