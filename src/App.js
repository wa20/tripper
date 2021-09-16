import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
// import 'semantic-ui-css/semantic.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/homePage/homePage';




// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    // <ApolloProvider client={client}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home">
              <Redirect to="/"></Redirect>
            </Route>
          </Switch>
        </div>
      </Router>
    // </ApolloProvider>
  );
}

export default App;
