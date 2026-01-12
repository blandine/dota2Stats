import { ApolloProvider } from '@apollo/client/react';
import { client } from './lib/apollo-client';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
