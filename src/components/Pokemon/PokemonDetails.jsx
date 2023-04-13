import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonDetails } from "../../utils/PokemonAPI";

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState({});
  useEffect(() => {
    const fetchDetails = async () => {
      const result = await fetchPokemonDetails(id);
      setPokemonDetails(result);
    };
    fetchDetails();
  }, [id]);

  return <div>{console.log(pokemonDetails)}</div>;
};

export default PokemonDetails;
