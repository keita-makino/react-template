import React from 'react';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
} from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';
import Index from './pages/Index';
import { hot } from 'react-hot-loader';

const cache = new InMemoryCache({
  resultCaching: true,
});
const link = new HttpLink({
  uri: 'https://ecs272-2020-f.herokuapp.com/',
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  resolvers: {},
  link,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Index />
    </ApolloProvider>
  );
};

export default hot(module)(App);
