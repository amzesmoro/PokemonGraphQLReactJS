import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Home from './pages/home/index';
import Navbar from './pages/home/navbar';
import "./App.css";
import "./AppResponsive.css";

function App() {

  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app'
  });

  return (
    
    <ApolloProvider client={client}>
      <Navbar />
      <main>
        <Home />
      </main>
    </ApolloProvider>
  );
}

export default App;