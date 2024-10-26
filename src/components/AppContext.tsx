// components/AppContext.tsx
import { createContext, useContext } from "react";
import Keycloak from "keycloak-js";

export interface AppUserInfo {
  id: string;
  name: string;
}

export interface UserInfo {
  sub: string;
  name: string;
  preferred_username: string;
  given_name: string;
  family_name: string;
  email: string;
  app?: AppUserInfo;
  roles: Array<string>;
}

export interface AppContextStruct {
  keycloak: Keycloak;
  userInfo?: UserInfo;
}

export const AppContext = createContext<Partial<AppContextStruct>>({});

export const useAppContext = () => useContext(AppContext);
