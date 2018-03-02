import React from 'react';
import * as firebase from 'firebase';
import Login from './Login/Login';
import Home from './Home/Home';
import Loading from './Loading/Loading';
import Landing from './Landing/Landing';

import {  BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// import { firebaseAuth } from './config/constants'


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBgcAPcCOAeYpQmC1HzSHfKl1skBJ9_RV0",
    authDomain: "atiname-fe6dc.firebaseapp.com",
    databaseURL: "https://atiname-fe6dc.firebaseio.com",
    projectId: "atiname-fe6dc",
    storageBucket: "atiname-fe6dc.appspot.com",
    messagingSenderId: "1072376659690"
  };
  firebase.initializeApp(config);

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/App' />}
    />
  )
}

class App extends React.Component {
  state = {
    authed: false,
    loading: true,
  }

  componentDidMount(){
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })

  }

  componentWillUnmount () {
    this.removeListener()
  }

  render() {
    return this.state.loading === true ? <Loading /> : (
      
      <Router>
        <Switch>
          
          
          <PrivateRoute authed={this.state.authed} path='/App' component={Home} />
          <PublicRoute authed={this.state.authed} path='/login' component={Login} />
          <Route path = "/" component = {Landing}/>
        </Switch>
      </Router>
    );
  }
}

export default App;

// <Route path = "/OrderTracker" component = {Tracker}/>