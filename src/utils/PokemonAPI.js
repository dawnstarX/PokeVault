import axios from "axios";
export const fetchPokemonList = async () => {
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
  return pokemonDetails;
};

export const fetchSearchedPokemon = async (name) => {
  const url = "https://graphql-pokeapi.graphcdn.app/";
  const query = `
      query {
        pokemon(name: "${name}") {
          id
          name
          sprites {
            front_default
          }
        }
      }
    `;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const response = await fetch(url, options);
    const { data } = await response.json();
    const pokemon = {
      id: data.pokemon.id,
      name: data.pokemon.name,
      image: data.pokemon.sprites.front_default,
    };
    return pokemon;
  } catch (error) {
    console.error(error);
  }
};
