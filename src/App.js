import { ApolloClient, InMemoryCache, ApolloProvider, httpLink } from '@apollo/client';
import './App.css';

// COMPONENTS
import Home from './Pages/Home';


function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql-weather-api.herokuapp.com/"
  })

  return (
    <ApolloProvider client={client}>
      <Home/>
    </ApolloProvider>
  );
}

export default App;
