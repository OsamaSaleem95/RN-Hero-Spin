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

const App: () => Node = () => {

  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
