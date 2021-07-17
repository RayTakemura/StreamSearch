// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

import Login from './pages/Login';
import Signup from './pages/Signup';

// apollo provider to make every request work with server
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  }
});

function App() {
  return (
    <ApolloProvider client={client}>
        <Router>
          <>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/profile/:username?" component={Profile}/>
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
          </>
          <Footer/>
        </Router> 
    </ApolloProvider>
  );
}

export default App;
