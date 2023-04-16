import React from "react";
import Batch from "./Batch";

const Navbar = ({ user }) => {
  return (
    <div>
      <Batch user={user} />
    </div>
  );
};

export default Navbar;
