import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import jwt_decode from 'jwt-decode';
import {logoutDispatch} from './actions/auth/AuthActions';

// Components
import AppHeader from './components/Common/AppHeader';
import {Home, About, Login, Register, Subscription, UserSettings} from './components/Views/Index';

// Styles
import './App.css';

// Port your redux store:
import store from './store';


  if(localStorage.token) {
    const decoded: any = jwt_decode(localStorage.token);
    if(!decoded) {
      console.log("Bad token");
    }
    else {
      console.log(decoded);
      if(decoded.exp < Date.now()){
        store.dispatch({
          type: "LOGOUT DISPATCH",
          payload: {}
        });
      }
      else {
        console.log("set the user");
      }
    }
  }
  else {
    console.log("ON LOAD TOKEN NOT EXISTS")
  }

class App extends Component {



  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            
            <header className="App-header">
              <AppHeader/>
            </header>
            <div className="pt-5">          
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/login" component={Login}/>
                  <Route exact path="/register" component={Register}/>
                  <Route exact path="/subscription" component={Subscription}/>
                  <Route exact path="/settings" component={UserSettings}/>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
