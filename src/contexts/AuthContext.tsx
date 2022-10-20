/* eslint-disable prettier/prettier */
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import MySwal from "../services/swal";
import {
  AuthContextData,
  AuthProviderProps,
} from "../shared/interfaces/AuthContext";
import IUser from "../shared/interfaces/IUser";

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  //* hooks
  const navigate = useNavigate();

  //* states
  const [user, setUser] = useState<IUser>();
  const [token, setToken] = useState<string>();

  //* constants
  const signed = useMemo(() => !!user, [user]);

  //* effects
  useEffect(() => {
    handleRehydrateUserData();
  }, []);

  useEffect(() => {
    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  }, [token]);

  //* handlers
  const handleLogin = useCallback(
    (data: any) => {
      localStorage.setItem("auth:user", JSON.stringify(data.user));
      localStorage.setItem("auth:token", data.token.token);

      setUser(data.user);
      setToken(data.token.token);

      MySwal.fire("Logado", "Seja Bem-vindo(a)", "success");
    },
    [user, token],
  );

  const handleRehydrateUserData = () => {
    const storageUser = localStorage.getItem("auth:user");
    const storageToken = localStorage.getItem("auth:token");

    if (storageUser) {
      setUser(JSON.parse(storageUser));
    }
    if (storageToken) {
      setToken(storageToken);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const { data } = await api.post("/login", {
        email,
        password,
      });

      handleLogin(data);
    } catch (err) {
      MySwal.fire("Erro", `Preencha as credenciais corretas!`, "error");
    }
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    passwordConfirmation: string,
  ) => {
    try {
      await api.post("/users", {
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
      });

      MySwal.fire(
        "Usuário Registrado com Sucesso",
        `Seja bem-vindo ${name}`,
        "success",
      );
    } catch (err) {
      MySwal.fire("Erro", `err: ${err}`, "error");
    }
  };

  const logout = useCallback(async () => {
    try {
      await api.post("/logout");
      localStorage.removeItem("auth:user");
      localStorage.removeItem("auth:token");
      navigate("/");
      window.location.reload();
    } catch (err) {
      localStorage.removeItem("auth:user");
      localStorage.removeItem("auth:token");
      navigate("/");
      window.location.reload();
    }
  }, []);

  const googleOauth = async () => {
    const url = new URL(import.meta.env.VITE_DEV_GOOGLE_CALLBACK);
    url.search = window.location.search;

    const { data } = await api.get(url.toString());

    handleLogin(data);
  };

  //* render
  const value = useMemo(
    () => ({ signed, login, register, logout, user, googleOauth }),
    [signed, login, register, logout, user, googleOauth],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
