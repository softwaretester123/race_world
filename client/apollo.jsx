import {ApolloClient, InMemoryCache} from '@apollo/client';

const URI = 'http://10.0.2.2:4000';

const client = new ApolloClient({
  uri: URI,
  cache: new InMemoryCache()
});

export {client};