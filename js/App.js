/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Home from './Home/';
import Details from './Details/';

class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" passProps>
          <Scene key="home" component={Home} initial />
          <Scene key="details" component={Details} />
        </Scene>
      </Router>
    );
  }
}

export default App;
