import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const PublicRoutes = () => {
  const [user] = useAuthState(auth);
  return user ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoutes;
