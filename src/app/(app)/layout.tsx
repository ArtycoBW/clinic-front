'use client'
import React, { useState, useEffect } from "react";
import Keycloak from "keycloak-js"; // теперь импортируем только Keycloak
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppContext, UserInfo } from "../../components/AppContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [keycloak, _] = useState<Keycloak>(new Keycloak("/keycloak.json"));
  const [authenticated, setAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>(undefined);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [apolloClient, setApolloClient] = useState<ApolloClient<any> | null>(null);

  useEffect(() => {
    const initializeKeycloak = async () => {
      const isAuthenticated = await keycloak.init({ onLoad: "login-required" });
      setAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const client = new ApolloClient({
          uri: process.env.NEXT_PUBLIC_DS_ENDPOINT,
          cache: new InMemoryCache(),
          headers: { Authorization: `Bearer ${keycloak.token}` },
        });
        setApolloClient(client);

        const userInfoData = await keycloak.loadUserInfo();
        setUserInfo(userInfoData as UserInfo);
      }
    };

    initializeKeycloak();
  }, [keycloak]);

  if (!authenticated || !apolloClient) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <p>...Authentication process...</p>
      </div>
    );
  }

  return (
    <html lang="en">
      <body>
        <AppContext.Provider value={{ keycloak, userInfo }}>
          <ApolloProvider client={apolloClient}>
            {children}
          </ApolloProvider>
        </AppContext.Provider>
      </body>
    </html>
  );
}
