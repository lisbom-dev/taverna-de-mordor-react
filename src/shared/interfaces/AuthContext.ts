import IUser from "./IUser";

export interface AuthContextData {
  signed: boolean;
  user?: IUser;
  register: (
    name: string,
    email: string,
    password: string,
    passwordConfirmation: string
  ) => Promise<void>;
  logout: () => Promise<void>;
  googleOauth: () => Promise<void>;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}
