import React from "react";
import User from "./User";
import CollectedPokemon from "./CollectedPokemon";

const Dashboard = () => {
  return (
    <div>
      <User />
      <CollectedPokemon />
    </div>
  );
};

export default Dashboard;
