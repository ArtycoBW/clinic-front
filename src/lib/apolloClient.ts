// lib/apolloClient.ts
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Keycloak from 'keycloak-js';

const keycloak = new Keycloak('/keycloak.json');

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, 
});

const authLink = setContext(async (_, { headers }) => {
  if (!keycloak.authenticated) {
    await keycloak.init({ onLoad: 'login-required' });
  }

  const token = keycloak.token;
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
