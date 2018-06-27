/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst
} from 'react-native-router-flux';

import Start from './src/components/start/start';
import Detect from './src/components/detect/detect';
// import Start from './src/components/start/start';

export default class App extends Component<{}> {
  render() {
    return (
      <Router >
        <Scene key="root">
          <Scene initial key="start" hideNavBar component={Start}/>
          <Scene key="detect" hideNavBar component={Detect}/>
        </Scene>
      </Router>
    );
  }
}
