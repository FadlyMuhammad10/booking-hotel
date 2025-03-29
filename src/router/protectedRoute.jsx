import { AuthContext } from "@/context/AuthContext";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { login } = useContext(AuthContext);

  if (!login) {
    // Redirect ke home jika belum login
    return <Navigate to="/" replace />;
  }

  // Jika sudah login, tampilkan halaman
  return children;
};

export default ProtectedRoute;
