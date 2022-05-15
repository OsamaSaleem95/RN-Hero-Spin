/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import type { Node } from 'react';
import {
  StyleSheet,
  StatusBar
} from 'react-native';
import AppNavigator from './src/containers'
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore'

const App: () => Node = () => {

  const { store } = configureStore()
  console.disableYellowBox = true
  return (
    <Provider store={store}>
      <StatusBar barStyle='light-content' />
      <AppNavigator />
    </Provider>
  );
};

export default App;
