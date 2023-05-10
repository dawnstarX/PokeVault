import axios from "axios";
export const fetchPokemonList = async (page) => {
  let offset = page * 21;
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=21&offset=${offset}`
    );
    const data = response.data.results;
    const pokemonDetails = await Promise.all(
      data.map(async (pokemon) => {
        const pokemonResponse = await axios.get(pokemon.url);
        const pokemonId = pokemonResponse.data.id;
        const pokemonImage = pokemonResponse.data.sprites.front_default;
        const pokemonName = pokemonResponse.data.name;
        return { id: pokemonId, image: pokemonImage, name: pokemonName };
      })
    );
    return pokemonDetails;
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    throw new Error("Failed to fetch Pokemon data");
  }
};

export const fetchSearchedPokemon = async (name) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();

    const pokemonId = data.id;
    const pokemonImage = data.sprites.front_default;

    return [{ id: pokemonId, image: pokemonImage }];
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    throw new Error("Failed to fetch Pokemon data");
  }
};

export const fetchPokemonDetails = async (id) => {
  try {
    // Fetch Pokemon data from the API
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = response.data;

    // Extract necessary data from the response
    const { name, height, weight, abilities, types, sprites } = data;

    // Fetch species data from the species API
    const speciesResponse = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${id}`
    );
    const speciesData = speciesResponse.data;
    const { evolves_from_species, evolves_to_species, evolution_chain } =
      speciesData;

    // Extract necessary evolution data from the species response
    const evolvesFromData = evolves_from_species
      ? {
          evolvesFrom: evolves_from_species.name,
          evolvesFromUrl: evolves_from_species.url,
        }
      : null;

    const evolvesToData =
      evolves_to_species && evolves_to_species.length > 0
        ? evolves_to_species.map((evolution) => {
            return {
              evolvesTo: evolution.name,
              evolvesToUrl: evolution.url,
              evolvesToId: evolution.url.split("/").slice(-2, -1)[0],
            };
          })
        : null;

    // Fetch the complete evolution chain data
    const evolutionChainResponse = await axios.get(evolution_chain.url);
    const evolutionChainData = evolutionChainResponse.data;

    // Extract the complete evolution chain from the response
    const evolvesFromChain = evolutionChainData.chain.evolves_from_species
      ? {
          evolvesFrom: evolutionChainData.chain.evolves_from_species.name,
          evolvesFromUrl: evolutionChainData.chain.evolves_from_species.url,
        }
      : null;

    const evolvesToChain = [];

    const traverseEvolutionChain = (chain) => {
      if (chain && chain.species) {
        evolvesToChain.push({
          evolvesTo: chain.species.name,
          evolvesToUrl: chain.species.url,
          evolvesToId: chain.species.url.split("/").slice(-2, -1)[0],
        });
        if (chain.evolves_to && chain.evolves_to.length > 0) {
          chain.evolves_to.forEach((evolution) => {
            traverseEvolutionChain(evolution);
          });
        }
      }
    };

    traverseEvolutionChain(evolutionChainData.chain);

    // Create an object with the necessary data, including evolution data
    const pokemonData = {
      id,
      name,
      height,
      weight,
      abilities,
      types,
      sprites,
      evolvesFrom: evolvesFromData,
      evolvesTo: evolvesToData,
      evolvesFromChain,
      evolvesToChain,
    };

    // Return the object with the necessary data, including evolution data
    return pokemonData;
  } catch (error) {
    // Handle any errors that may occur during the API request
    console.error("Error fetching Pokemon data:", error);
    throw new Error("Failed to fetch Pokemon data");
  }
};
