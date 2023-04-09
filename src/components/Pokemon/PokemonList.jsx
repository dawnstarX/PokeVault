import { React, useEffect, useState } from "react";
import { fetchPokemonList, fetchSearchedPokemon } from "../../utils/PokemonAPI";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const fetching = async () => {
      const pokemons = await fetchSearchedPokemon(searchQuery);
      console.log(pokemons);
      setPokemonList(pokemons);
    };
    fetching();
  }, [searchQuery]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Search Pokemon" onChange={handleSearch} />
    </div>
  );
};

export default PokemonList;
