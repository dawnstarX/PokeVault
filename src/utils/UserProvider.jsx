import React, { createContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
// Create a new context for the user object
export const UserContext = createContext(null);

// Create a UserProvider component that wraps around its children and provides the user object
const UserProvider = ({ children }) => {
  const [user, loading, error] = useAuthState(auth); // Update the auth object based on your Firebase setup

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Render the children with the user object as the value of the context
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
