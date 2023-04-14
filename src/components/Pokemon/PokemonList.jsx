import { React, useEffect, useState, useRef } from "react";
import { fetchPokemonList, fetchSearchedPokemon } from "../../utils/PokemonAPI";
import SinglePokemon from "./SinglePokemon";
import InfiniteScroll from "react-infinite-scroll-component";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const searchTermRef = useRef("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetching = async () => {
      let pokemons;
      if (searchQuery) {
        pokemons = await fetchSearchedPokemon(searchQuery);
      } else {
        pokemons = await fetchPokemonList(0);
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
  const fetchMoreData = async () => {
    try {
      const result = await fetchPokemonList(page);
      const newPokemonList = [...pokemonList, ...result];
      setPokemonList(newPokemonList);
      const newPage = page + 1;
      setPage(newPage);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div>
        <input type="text" placeholder="Search Pokemon" ref={searchTermRef} />
        <button onClick={handleSearch}>Search</button>
        <button onClick={clearSearch}>Clear Search</button>
      </div>
      {searchQuery ? (
        <div>
          {pokemonList.map((pokemon) => {
            return <SinglePokemon pokemon={pokemon} key={pokemon.id} />;
          })}
        </div>
      ) : (
        <InfiniteScroll
          dataLength={pokemonList.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <div>
            {pokemonList.map((pokemon) => {
              return <SinglePokemon pokemon={pokemon} key={pokemon.id} />;
            })}
          </div>
        </InfiniteScroll>
      )}
    </>
  );
};

export default PokemonList;
