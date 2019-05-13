import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Secret from './components/Secret';
import Error from './components/Error';
import Callback from './components/Callback';
import Auth from './Auth';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const auth = new Auth();

class App extends Component {

  state = {
    auth: auth
  };
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/secret" render={()=> this.state.auth.isAuthenticated() ? <Secret auth={this.state.auth} /> : <Error/>} />
            <Route path="/" render={() => <Main auth={this.state.auth} />} exact />
            <Route path="/callback" component={Callback} />
            <Route component={Error} default />  
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
