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
  SafeAreaView,
  StyleSheet,

} from 'react-native';
import AppNavigator from './src/containers'
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore'

const App: () => Node = () => {

  const { store } = configureStore()
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <AppNavigator />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
