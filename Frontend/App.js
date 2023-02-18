import React from 'react';
import { AuthProvider } from './context/AuthContext';
import AppNav from './navigation/AppNav';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const App = () => {

  // Initialize Apollo Client
  const client = new ApolloClient({
    uri: 'http://10.0.2.2:3000/graphql/',
    cache: new InMemoryCache()
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
