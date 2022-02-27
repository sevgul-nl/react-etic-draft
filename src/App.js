import React, { Component } from 'react';
import { DataStore } from './data/data.store';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Connector } from './book/connector';
export default class App extends Component {
  render() {
    return (
      <Provider store={DataStore}>
        <Router>
          <Switch>
            <Route path="/" component={Connector} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
