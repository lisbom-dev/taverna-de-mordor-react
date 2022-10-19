import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import AuthRoutes from "./AuthRoutes";

const Routes: React.FC = () => (
  <BrowserRouter>
    <AuthProvider>
      <AuthRoutes />
    </AuthProvider>
  </BrowserRouter>
);

export default Routes;
