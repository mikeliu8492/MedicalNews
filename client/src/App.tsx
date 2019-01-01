import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Components
import AppHeader from './components/Common/AppHeader';
import {Home, About, Login, Register, Subscription} from './components/Views/Index';


// Styles
import './App.css';

class App extends Component {
  render() {
    return (
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
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
