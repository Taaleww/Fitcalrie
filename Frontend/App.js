import React from 'react';
import { AuthProvider } from './context/AuthContext';
import AppNav from './navigation/AppNav';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';


const App = () => {

  // Initialize Apollo Client
  // const client = new ApolloClient({
  //   uri: 'http://10.0.2.2:3000/graphql/',
  //   cache: new InMemoryCache()
  // });

  const client = new ApolloClient({
    uri: 'https://fitcalrie-backend-production.up.railway.app/graphql',
    Accept: "application/json",
    cache: new InMemoryCache(),
    onError: error => {
      console.error('Apollo Client error:', error);
    },
  });

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <AppNav style={{fontFamily: 'NotoSansThai-Regular'}} />
      </AuthProvider>
    </ApolloProvider>
  );
}
export default App;
