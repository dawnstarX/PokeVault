import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const PrivateRoutes = () => {
  const [user] = useAuthState(auth);
  return user ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default PrivateRoutes;
