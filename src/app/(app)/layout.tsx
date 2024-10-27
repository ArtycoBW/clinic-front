'use client'
import React, { useState, useEffect } from 'react'
import Keycloak from 'keycloak-js'
import { ApolloClient, ApolloProvider, InMemoryCache, ApolloLink, HttpLink, ServerError } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { AppContext, UserInfo } from '@/components/AppContext'
import Sidebar from '@/components/sidebar'
import Info from '@/components/info'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [keycloak] = useState<Keycloak>(new Keycloak('/keycloak.json'))
  const [authenticated, setAuthenticated] = useState(false)
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>(undefined)
  const [apolloClient, setApolloClient] = useState<ApolloClient<any> | null>(null)

  useEffect(() => {
    const initializeKeycloak = async () => {
      const isAuthenticated = await keycloak.init({ onLoad: 'login-required' })
      setAuthenticated(isAuthenticated)

      if (isAuthenticated) {
        const errorLink = onError(({ graphQLErrors, networkError }) => {
          if (graphQLErrors) {
            graphQLErrors.forEach(({ message, locations, path }) =>
              console.error(`Ошибка GraphQL: ${message}`, { locations, path }),
            )
          }

          if (networkError) {
            console.error(`Сетевая ошибка: ${networkError}`)

            // Проверка типа для networkError
            if ('result' in networkError && (networkError as ServerError).result) {
              console.error('Ответ от сервера:', (networkError as ServerError).result)
            }
          }
        })

        const envVar = process.env.NEXT_PUBLIC_DS_ENDPOINT

        const httpLink = new HttpLink({
          uri: `https://cors-anywhere.herokuapp.com/${envVar}`,
          fetch: (uri, options) => {
            // Устанавливаем mode: 'no-cors' только временно для отладки CORS
            options = {
              ...options,
              // mode: 'no-cors',
              headers: {
                ...options?.headers,
                Authorization: `Bearer ${keycloak.token}`,
              },
            }
            return fetch(uri, options)
          },
        })

        const client = new ApolloClient({
          link: ApolloLink.from([errorLink, httpLink]),
          cache: new InMemoryCache(),
        })

        setApolloClient(client)

        const userInfoData = await keycloak.loadUserInfo()
        setUserInfo(userInfoData as UserInfo)
      }
    }

    initializeKeycloak()
  }, [keycloak])

  if (!authenticated || !apolloClient) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p>...Authentication process...</p>
      </div>
    )
  }

  return (
    <html lang="en">
      <body>
        <AppContext.Provider value={{ keycloak, userInfo }}>
          <ApolloProvider client={apolloClient}>
            <div className="flex h-full">
              <Sidebar />
              <div className="flex-auto p-4 w-full">{children}</div>
              <Info />
            </div>
          </ApolloProvider>
        </AppContext.Provider>
      </body>
    </html>
  )
}
