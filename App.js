/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {AppContainer} from './navigation/StackNavigator';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <AppContainer />
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default App;
