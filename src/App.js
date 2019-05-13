import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Secret from './components/Secret';
import Error from './components/Error';
import Callback from './components/Callback';
import Auth from './Auth';
import { HashRouter, Route, Switch } from 'react-router-dom';

const auth = new Auth();
let username = auth.getProfile().given_name || "User";

class App extends Component {

  state = {
    auth: auth,
    name: username
  };
  
  render() {
    return (
      <div className="App">
        <HashRouter basename="/">
          <Switch>
            <Route path="/secret" render={()=> this.state.auth.isAuthenticated() ? <Secret auth={this.state.auth} name={this.state.name} /> : <Error/>} />
            <Route path="/" render={() => <Main auth={this.state.auth} name={this.state.name} />} exact />
            <Route path="/callback" component={Callback} />
            <Route component={Error} default />  
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
