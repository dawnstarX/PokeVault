import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/UserProvider";
import { updateUserData } from "../../utils/fireStore";
import { Collections } from "../../utils/CollectionProvider";

const SinglePokemon = ({ pokemon }) => {
  const user = useContext(UserContext);
  const { collectedPokemon } = useContext(Collections);
  console.log(collectedPokemon);
  const Uid = user.uid;
  const Pid = pokemon.id;
  const addPokemon = async () => {
    await updateUserData(Uid, Pid);
  };
  return (
    <>
      <Link to={`/${Pid}`}>
        <div>
          <p>ID: {pokemon.id}</p>
          <img src={pokemon.image} alt="Pokemon" />
        </div>
      </Link>
      {user && <button onClick={addPokemon}>Add to collection</button>}
    </>
  );
};

export default SinglePokemon;
